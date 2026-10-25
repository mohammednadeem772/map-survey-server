import { describe, it, expect } from 'vitest';
import { toCsv } from './csv.js';

describe('toCsv', () => {
  it('returns an empty string for no rows', () => {
    expect(toCsv([])).toBe('');
  });

  it('writes a header row followed by one row per record', () => {
    const csv = toCsv([{ a: 1, b: 'x' }, { a: 2, b: 'y' }]);
    expect(csv).toBe('a,b\n"1","x"\n"2","y"');
  });

  it('escapes embedded double quotes', () => {
    expect(toCsv([{ note: 'she said "ok"' }])).toBe('note\n"she said ""ok"""');
  });

  it('renders null/undefined values as an empty quoted field', () => {
    expect(toCsv([{ a: null, b: undefined }])).toBe('a,b\n"",""');
  });
});
