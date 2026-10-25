import { describe, it, expect } from 'vitest';
import { scopeWhere, allow } from './auth.js';

describe('scopeWhere', () => {
  it('gives ADMIN no restriction', () => {
    expect(scopeWhere({ role: 'ADMIN' })).toEqual({});
  });

  it('limits SUPERVISOR to their assigned area', () => {
    expect(scopeWhere({ role: 'SUPERVISOR', areaId: 7 })).toEqual({ area_id: 7 });
  });

  it('limits SURVEYOR to surveys they collected', () => {
    expect(scopeWhere({ role: 'SURVEYOR', id: 42, areaId: 7 })).toEqual({ surveyor_id: 42 });
  });
});

describe('allow', () => {
  function run(role, roles) {
    const req = { user: { role } };
    let called = false;
    let status;
    const res = { status: (s) => { status = s; return res; }, json: () => res };
    allow(...roles)(req, res, () => { called = true; });
    return { called, status };
  }

  it('calls next() when the role is permitted', () => {
    expect(run('ADMIN', ['ADMIN']).called).toBe(true);
  });

  it('responds 403 when the role is not permitted', () => {
    const result = run('SURVEYOR', ['ADMIN']);
    expect(result.called).toBe(false);
    expect(result.status).toBe(403);
  });
});
