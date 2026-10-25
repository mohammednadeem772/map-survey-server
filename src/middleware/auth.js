// JWT authentication and row-level access-control helpers.
//
// Every request to a protected route carries a bearer JWT (issued at login,
// see routes/auth.routes.js) containing { id, name, email, role, areaId }.
// `authenticate` verifies it and attaches the payload as req.user.
import jwt from 'jsonwebtoken';

/** Requires a valid bearer token; attaches the decoded payload to req.user. */
export function authenticate(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid or expired session' });
  }
}

/** Restricts a route to the given role(s), e.g. `allow('ADMIN')`. */
export function allow(...roles) {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) return next();
    return res.status(403).json({ message: 'Insufficient permission' });
  };
}

/**
 * Returns a Prisma `where` fragment that scopes survey rows to what the
 * current user is allowed to see:
 *   - ADMIN      -> no restriction (sees every survey)
 *   - SUPERVISOR -> only surveys in their assigned area
 *   - SURVEYOR   -> only surveys they personally collected
 *
 * Spread this into every survey query so access control lives in one place
 * instead of being re-implemented per route.
 */
export function scopeWhere(user) {
  if (user.role === 'ADMIN') return {};
  if (user.role === 'SUPERVISOR') return { area_id: user.areaId };
  return { surveyor_id: user.id };
}
