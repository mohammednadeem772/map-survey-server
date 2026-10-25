# MAP Survey — Server

Express REST API for the **MAP Socio-Economic Survey Application**, built for the Mohalla Adoption Program (MAP) run by Zakat Center India, Vaniyambadi Unit, in collaboration with The Vaniyambadi Muslim Educational Society (VMES).

Provides authentication, role-scoped survey CRUD, dashboard aggregates, and admin management (areas, users, chart configs) over a MySQL database. Pairs with the [map-survey-client](https://github.com/mohammednadeem772/map-survey-client) frontend, but is a standalone HTTP API that can be consumed by any client.

## Tech stack
- Node.js 20 + Express
- MySQL 8 (via `mysql2/promise`, connection pool, parameterized queries throughout)
- JWT (`jsonwebtoken`) for stateless auth
- `bcrypt` for password hashing
- `helmet` + `cors` for baseline HTTP hardening
- `zod` (declared as a dependency for request validation; see Development notes)

## Project structure
```text
server/
  src/
    index.js      App entry point — all routes are defined here (see API reference below)
    auth.js       JWT verification middleware, role guard (allow), row-level scopeSql helper
    db.js         Shared MySQL connection pool
  Dockerfile      Node 20 Alpine image, npm ci (prod deps only), runs `npm start`
  .env.example
```

## Authentication & authorization model
- `POST /api/auth/login` verifies the password with bcrypt and returns a JWT (8h expiry) containing `{ id, name, email, role, areaId }`.
- `authenticate` middleware (`auth.js`) verifies the bearer token and attaches `req.user`.
- `allow(...roles)` middleware restricts a route to specific roles (e.g. `allow('ADMIN')`).
- `scopeSql(user)` returns an extra `WHERE` clause + params so list/detail queries are automatically scoped:
  - `ADMIN` — sees everything.
  - `SUPERVISOR` — limited to their assigned `area_id`.
  - `SURVEYOR` — limited to surveys where they are `surveyor_id`.

This row-scoping is applied inside the SQL itself (not filtered after the fact), so a supervisor or surveyor can never read rows outside their scope regardless of what they request.

## API reference
| Method | Path | Access | Description |
|---|---|---|---|
| GET | `/api/health` | Public | DB connectivity check |
| POST | `/api/auth/login` | Public | Returns `{ token, user }` |
| GET | `/api/auth/me` | Authenticated | Returns the decoded JWT user |
| GET | `/api/areas` | Authenticated | List active areas (scoped for non-admins) |
| POST | `/api/areas` | Admin | Create an area/ward |
| GET | `/api/users` | Admin | List users with their area |
| POST | `/api/users` | Admin | Create a user |
| GET | `/api/surveys` | Authenticated | List surveys (role-scoped) |
| GET | `/api/surveys/:id` | Authenticated | Survey detail + dependants (role-scoped) |
| POST | `/api/surveys` | Authenticated | Create a survey + dependants (transactional) |
| PUT | `/api/surveys/:id` | Authenticated | Update a survey + replace dependants (role-scoped) |
| GET | `/api/dashboard/summary` | Authenticated | KPIs + chart-ready aggregates (role-scoped) |
| GET | `/api/dashboard/export.csv` | Admin, Supervisor | CSV export of surveys (role-scoped) |
| GET | `/api/chart-configs` | Admin | List dashboard chart configuration |
| POST | `/api/chart-configs` | Admin | Create a chart configuration entry |

Survey writes run inside a MySQL transaction: the survey row and its `dependants` rows are inserted/replaced together, with rollback on any failure.

## Getting started

### Prerequisites
- Node.js 20+
- MySQL 8.0+
- The schema/seed scripts from the parent project's `database/` folder (`01-schema.sql`, `02-seed.sql`)

### Database setup
```sql
CREATE DATABASE map_survey CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'map_user'@'%' IDENTIFIED BY 'replace-strong-password';
GRANT ALL PRIVILEGES ON map_survey.* TO 'map_user'@'%';
FLUSH PRIVILEGES;
```
```bash
mysql -u map_user -p map_survey < path/to/database/01-schema.sql
mysql -u map_user -p map_survey < path/to/database/02-seed.sql
```

### Configure environment
```bash
npm install
cp .env.example .env
```

| Variable | Purpose |
|---|---|
| `PORT` | API port (default `4000`) |
| `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` | MySQL connection |
| `JWT_SECRET` | Signing secret for auth tokens — **must** be a long random value in any non-local environment |
| `CLIENT_ORIGIN` | Comma-separated list of allowed CORS origins |
| `SEED_DEMO_USERS` | When `true`, resets the three demo accounts' passwords to the documented defaults on every startup. Set to `false` after first deploy, otherwise password changes get reset on restart. |

### Run in development
```bash
npm run dev
```
Uses `node --watch` for auto-restart on file changes. Default port `4000`; health check at `GET /api/health`.

### Run in production
```bash
npm ci --omit=dev
npm start
```

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
- All SQL uses parameterized queries (`?` placeholders) — never interpolate user input into a query string.
- Never add an endpoint that reads/writes `surveys` or `dependants` without going through `scopeSql(req.user)`; this is what enforces row-level access control.
- Don't log request bodies, passwords, or tokens.
- This API handles sensitive household and socio-economic data. Before any non-local deployment, review the security/privacy checklist in the parent project (HTTPS, managed MySQL, encrypted backups, audit logging, and compliance with India's Digital Personal Data Protection Act, 2023).

## Development notes / known gaps
- `zod` is a declared dependency but request bodies in `src/index.js` are not yet validated against schemas — contributions adding `zod` validation on the write endpoints (`/api/surveys`, `/api/users`, `/api/areas`, `/api/chart-configs`) are welcome.
- There are no automated tests yet; please add coverage for new endpoints or auth-scoping changes alongside the code.
