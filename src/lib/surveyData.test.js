import { describe, it, expect } from 'vitest';
import { pickSurveyData, toDependantCreate } from './surveyData.js';

describe('pickSurveyData', () => {
  it('drops fields that are not on the whitelist', () => {
    const data = pickSurveyData({ head_name: 'Asha', id: 999, surveyor_id: 1, area_id: 2 });
    expect(data).toEqual({ head_name: 'Asha', area_id: 2 });
    expect(data).not.toHaveProperty('id');
    expect(data).not.toHaveProperty('surveyor_id');
  });

  it('omits fields that were not present in the body at all', () => {
    const data = pickSurveyData({ head_name: 'Asha' });
    expect(Object.keys(data)).toEqual(['head_name']);
  });

  it('keeps an explicit null for a non-JSON field', () => {
    const data = pickSurveyData({ phone: null });
    expect(data.phone).toBeNull();
  });

  it('defaults falsy JSON array fields to an empty array', () => {
    const data = pickSurveyData({ loan_types: null, vehicles: undefined, vulnerable_category: 0 });
    expect(data.loan_types).toEqual([]);
    expect(data).not.toHaveProperty('vehicles'); // undefined -> not present, same as other fields
    expect(data.vulnerable_category).toEqual([]);
  });

  it('passes through a populated JSON array field untouched', () => {
    const data = pickSurveyData({ loan_types: ['Bank', 'EMI'] });
    expect(data.loan_types).toEqual(['Bank', 'EMI']);
  });
});

describe('toDependantCreate', () => {
  it('fills in defaults for an otherwise-empty dependant', () => {
    expect(toDependantCreate({ name: 'Minor Child' })).toEqual({
      name: 'Minor Child',
      age: null,
      relationship: null,
      gender: null,
      member_type: 'DEPENDANT',
      education: null,
      institution: null,
      part_time_job: false,
      scholarship_availed: null,
      occupation: null,
      skill: null,
      namaz: null,
      income: 0,
      disability_or_health_need: null,
    });
  });

  it('coerces part_time_job to a real boolean', () => {
    expect(toDependantCreate({ name: 'X', part_time_job: 1 }).part_time_job).toBe(true);
    expect(toDependantCreate({ name: 'X', part_time_job: 0 }).part_time_job).toBe(false);
  });
});
