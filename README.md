# MAP Survey — Server

Express REST API for the **MAP Socio-Economic Survey Application**, built for the Mohalla Adoption Program (MAP) run by Zakat Center India, Vaniyambadi Unit, in collaboration with The Vaniyambadi Muslim Educational Society (VMES).

Provides authentication, role-scoped survey CRUD, dashboard aggregates, and admin management (areas, users, chart configs) over a MySQL database. Pairs with the [map-survey-client](https://github.com/mohammednadeem772/map-survey-client) frontend, but is a standalone HTTP API that can be consumed by any client.

## Tech stack
- Node.js 20 + Express (ESM — `"type": "module"`)
- MySQL 8, accessed through **Prisma** (`@prisma/client`) — no raw SQL in application code
- JWT (`jsonwebtoken`) for stateless auth
- `bcrypt` for password hashing
- `helmet` + `cors` for baseline HTTP hardening
- `zod` (declared as a dependency for request validation; see Development notes)

## Project structure
```text
server/
  prisma/
    schema.prisma     Source of truth for the DB schema (see note below)
    migrations/        Created by `prisma migrate dev` — not committed until it exists
  src/
    index.js           Entry point — loads env, optional demo-user seed, starts the HTTP server
    app.js              Express app: middleware, route mounting, error handler
    lib/
      prisma.js          Shared PrismaClient singleton
    middleware/
      auth.js            JWT verification (`authenticate`), role guard (`allow`),
                          row-scope helper (`scopeWhere`)
    routes/
      auth.routes.js      POST /login, GET /me
      areas.routes.js      GET/POST /areas
      users.routes.js      GET/POST /users
      surveys.routes.js    GET/POST/PUT /surveys (the core CRUD + transactional writes)
      dashboard.routes.js  GET /dashboard/summary, GET /dashboard/export.csv
      chartConfigs.routes.js  GET/POST /chart-configs
  Dockerfile           Node 20 Alpine image — installs deps, runs `prisma generate`, `npm start`
  .env.example
```

### Why Prisma field names are snake_case
`prisma/schema.prisma` deliberately uses the existing MySQL column names (`head_name`, `area_id`, `survey_code`, ...) as the Prisma field names, instead of the usual Prisma camelCase convention. The API's JSON contract was already snake_case before this migration, and the React client reads those exact keys — keeping the schema's field names identical to the JSON keys means Prisma Client's results can be sent straight to `res.json()` with no translation layer (except for the two relation lookups — `area_name` / `surveyor_name` / `area.name` on users — which are flattened in the route handlers).

`database/01-schema.sql` is kept for historical reference; `prisma/schema.prisma` is the schema source of truth going forward. Create/apply migrations with `npx prisma migrate dev` (local) or `npx prisma migrate deploy` (staging/production), not by hand-editing SQL.

## Authentication & authorization model
- `POST /api/auth/login` verifies the password with bcrypt and returns a JWT (8h expiry) containing `{ id, name, email, role, areaId }`.
- `authenticate` middleware (`src/middleware/auth.js`) verifies the bearer token and attaches `req.user`.
- `allow(...roles)` middleware restricts a route to specific roles (e.g. `allow('ADMIN')`).
- `scopeWhere(user)` returns a Prisma `where` fragment so list/detail survey queries are automatically scoped:
  - `ADMIN` — sees everything.
  - `SUPERVISOR` — limited to their assigned `area_id`.
  - `SURVEYOR` — limited to surveys where they are `surveyor_id`.

This scoping happens inside the Prisma query itself (not filtered after the fact), so a supervisor or surveyor can never read rows outside their scope regardless of what they request.

## API reference
| Method | Path | Access | Description |
|---|---|---|---|
| GET | `/api/health` | Public | DB connectivity check (`SELECT 1` via Prisma) |
| POST | `/api/auth/login` | Public | Returns `{ token, user }` |
| GET | `/api/auth/me` | Authenticated | Returns the decoded JWT user |
| GET | `/api/areas` | Authenticated | List active areas (scoped for non-admins) |
| POST | `/api/areas` | Admin | Create an area/ward |
| GET | `/api/users` | Admin | List users with their area |
| POST | `/api/users` | Admin | Create a user |
| GET | `/api/surveys` | Authenticated | List surveys (role-scoped) |
| GET | `/api/surveys/:id` | Authenticated | Survey detail + dependants (role-scoped) |
| POST | `/api/surveys` | Authenticated | Create a survey + dependants (one Prisma nested write) |
| PUT | `/api/surveys/:id` | Authenticated | Update a survey + replace dependants (role-scoped) |
| GET | `/api/dashboard/summary` | Authenticated | KPIs + chart-ready aggregates (role-scoped) |
| GET | `/api/dashboard/export.csv` | Admin, Supervisor | CSV export of surveys (role-scoped) |
| GET | `/api/chart-configs` | Admin | List dashboard chart configuration |
| POST | `/api/chart-configs` | Admin | Create a chart configuration entry |

Survey creates/updates use Prisma's nested writes (`dependants: { create / deleteMany }`), which Prisma executes atomically — the survey row and its dependant rows are written or rolled back together.

## Getting started

### Prerequisites
- Node.js 20+
- MySQL 8.0+ (local, or a cPanel-hosted MySQL database — see note below)

### Configure environment
```bash
npm install
cp .env.example .env
```
Set `DATABASE_URL` in `.env` (Prisma's connection string format):
```
DATABASE_URL="mysql://map_user:MapPassword123!@localhost:3306/map_survey"
```
For a cPanel-hosted database, the user/db names are usually prefixed with your cPanel account name
(e.g. `cpaneluser_dbuser` / `cpaneluser_map_survey`), and **Remote MySQL** must be enabled for the
connecting host/IP under cPanel → Remote MySQL, or the connection will be refused regardless of a
correct connection string.

### Apply the schema
```bash
npx prisma migrate dev --name init   # first run: creates prisma/migrations + the tables
npx prisma generate                  # regenerates the client after any schema change (also runs on `npm install` via postinstall)
```

### Run in development
```bash
npm run dev
```
Uses `node --watch` for auto-restart on file changes. Default port `4000`; health check at `GET /api/health`.

### Run in production
```bash
npm ci --omit=dev
npx prisma migrate deploy
npm start
```

### Inspect data
```bash
npx prisma studio
```

### Deploying on cPanel without Terminal/SSH access
Many shared-hosting cPanel plans only expose **File Manager** and **Setup Node.js App**, with no
shell — so `npx prisma migrate deploy` can't be run by hand. Instead:

1. In cPanel, use **Git Version Control** to clone this repo directly into the app's folder (it has
   its own "Pull or Deploy" button, no shell needed), or upload the files via File Manager.
2. In **Setup Node.js App**: create an application pointing at that folder, Node.js 20.x, startup
   file `src/index.js`.
3. Add environment variables (from the app's "Environment variables" section): `DATABASE_URL`
   (`mysql://user:pass@localhost:3306/dbname` — same-account MySQL is reached via `localhost`, which
   sidesteps any external Remote MySQL firewall restriction), `JWT_SECRET`, `CLIENT_ORIGIN`,
   `SEED_DEMO_USERS=false`, and — **for the first boot only** — `RUN_MIGRATIONS_ON_BOOT=true` and
   `RUN_SEED_ON_BOOT=true`.
4. Click **Run NPM Install** in the UI (this also runs `prisma generate` via the `postinstall` script).
5. Click **Restart**. On this boot, the app applies any pending Prisma migrations and runs
   `prisma/seed.js` (see `src/index.js`) before it starts listening — both are safe to run more than
   once, so a failed/retried restart won't corrupt anything.
6. Once confirmed working (`GET /api/health` returns `{"status":"ok"}`), set
   `RUN_MIGRATIONS_ON_BOOT`/`RUN_SEED_ON_BOOT` back to `false` and restart again — not required, but
   avoids that extra startup work on every future restart.
7. Change the demo account passwords, then leave `SEED_DEMO_USERS=false`.

### Docker
```bash
docker build -t map-survey-server .
docker run -p 4000:4000 --env-file .env map-survey-server
```

## Demo accounts
With `SEED_DEMO_USERS=true`:

| Role | Email | Password |
|---|---|---|
| Admin | admin@map.local | Admin@123 |
| Supervisor | supervisor@map.local | Supervisor@123 |
| Surveyor | surveyor@map.local | Surveyor@123 |

Change these immediately in any non-local deployment, then set `SEED_DEMO_USERS=false`.

## Security notes for contributors
- All DB access goes through Prisma Client — never add a raw SQL string or a second ORM.
- Never add an endpoint that reads/writes `surveys` or `dependants` without going through
  `scopeWhere(req.user)`; this is what enforces row-level access control.
- Don't log request bodies, passwords, or tokens.
- This API handles sensitive household and socio-economic data. Before any non-local deployment, review the security/privacy checklist in the parent project (HTTPS, managed MySQL, encrypted backups, audit logging, and compliance with India's Digital Personal Data Protection Act, 2023).

## Development notes / known gaps
- `zod` is a declared dependency but request bodies are not yet validated against schemas —
  contributions adding `zod` validation on the write endpoints (`/api/surveys`, `/api/users`,
  `/api/areas`, `/api/chart-configs`) are welcome.
- There are no automated tests yet; please add coverage for new endpoints or auth-scoping changes
  alongside the code.
- `prisma/migrations/` doesn't exist until the first `prisma migrate dev` is run against a real
  database — that's expected to happen as part of environment setup, not something to fake locally.
