// Zod schemas for the write endpoints that accept the most free-form input
// (surveys, areas, users). Mirrors the client's field constraints
// (client/src/pages/SurveyForm.jsx FIELD_KINDS) and the actual column types
// in prisma/schema.prisma, so a request that bypasses the client UI (a
// direct API call) still can't write an out-of-range age, a non-numeric
// phone number, or a value too long for its column.
import { z } from 'zod';

const optionalText = (max) => z.string().trim().max(max).nullable().optional();

// z.coerce.number() turns '' into 0 (Number('') === 0), which would
// silently misread "field left blank" as a real value of zero instead of
// "not provided". Treating '' the same as undefined here means a cleared
// field is always omitted, never coerced into a false zero.
const blankToUndefined = (schema) => z.preprocess((v) => (v === '' ? undefined : v), schema);

const amount = (max = 99999999) =>
  blankToUndefined(z.coerce.number().min(0, 'Must be 0 or more').max(max, `Must be ${max} or less`).optional());

const age = blankToUndefined(
  z.coerce.number().int('Must be a whole number').min(0, 'Cannot be negative').max(120, 'Must be 120 or less').nullable().optional()
);

const phone = blankToUndefined(
  z.string().trim().regex(/^\d{10}$/, 'Phone must be exactly 10 digits').nullable().optional()
);

const latitude = blankToUndefined(z.coerce.number().min(-90).max(90).nullable().optional());
const longitude = blankToUndefined(z.coerce.number().min(-180).max(180).nullable().optional());

const dependantSchema = z.object({
  name: z.string().trim().min(1, 'Family member name is required').max(120),
  age,
  relationship: optionalText(40),
  gender: optionalText(30),
  member_type: z.enum(['STUDENT', 'WORKING', 'DEPENDANT']).optional(),
  education: optionalText(100),
  institution: optionalText(150),
  part_time_job: z.boolean().optional(),
  scholarship_availed: optionalText(150),
  occupation: optionalText(100),
  skill: optionalText(150),
  namaz: optionalText(30),
  income: amount(),
  disability_or_health_need: optionalText(200),
});

// Every field optional at this layer — both create and update send a
// partial document (pickSurveyData only picks keys that are actually
// present), so "required for a real survey" (head_name, address, consent)
// is enforced separately, only on create.
export const surveyBaseSchema = z.object({
  area_id: blankToUndefined(z.coerce.number().int().positive().optional()),
  status: z.enum(['DRAFT', 'SUBMITTED', 'VERIFIED']).optional(),
  consent_given: z.boolean().optional(),

  head_name: z.string().trim().min(1).max(120).optional(),
  head_age: age,
  head_gender: optionalText(30),
  head_marital_status: optionalText(30),
  head_education: optionalText(80),
  head_occupation: optionalText(100),
  head_skill: optionalText(150),
  head_namaz: optionalText(30),
  head_income: amount(),

  address: z.string().trim().min(1).max(2000).optional(),
  phone,
  latitude,
  longitude,

  spouse_name: optionalText(120),
  spouse_age: age,
  spouse_education: optionalText(80),
  spouse_occupation: optionalText(100),
  spouse_skill: optionalText(150),
  spouse_namaz: optionalText(30),
  spouse_income: amount(),

  house_tenure: optionalText(40),
  house_condition: optionalText(50),
  rooms: blankToUndefined(z.coerce.number().int().min(0).max(50).nullable().optional()),
  toilet_access: optionalText(40),
  drinking_water: optionalText(50),
  electricity_access: optionalText(30),

  loan_types: z.array(z.string()).optional(),
  loan_amount: amount(),
  govt_scheme_availed: z.boolean().optional(),
  govt_scheme_names: optionalText(1000),
  govt_scheme_amount: amount(),
  bedridden: z.boolean().optional(),
  bedridden_monthly_expense: amount(),

  ration_card: z.boolean().optional(),
  aadhaar_status: optionalText(30),
  health_card: z.boolean().optional(),
  bank_account: z.boolean().optional(),
  voter_id_status: optionalText(40),

  vehicles: z.array(z.string()).optional(),
  fridge: z.boolean().optional(),
  television: z.boolean().optional(),
  tv_connection: optionalText(30),
  tv_type: optionalText(30),
  washing_machine: z.boolean().optional(),
  smartphone_access: optionalText(50),
  internet_access: optionalText(30),

  monthly_household_income: amount(),
  monthly_household_expense: amount(),
  food_security: optionalText(40),
  vulnerable_category: z.array(z.string()).optional(),

  notes: optionalText(5000),

  dependants: z.array(dependantSchema).optional(),
}).passthrough(); // unknown keys are dropped later by pickSurveyData, not here

// Create requires the fields an actual survey can't exist without.
export const surveyCreateSchema = surveyBaseSchema.extend({
  area_id: z.coerce.number().int().positive('Area / Ward is required'),
  head_name: z.string().trim().min(1, 'Head of family name is required').max(120),
  address: z.string().trim().min(1, 'Address is required').max(2000),
  consent_given: z.boolean().refine((v) => v === true, { message: 'Household consent is required' }),
});

export const areaSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(120),
  ward_code: z.string().trim().min(1, 'Ward code is required').max(50),
  target_households: blankToUndefined(z.coerce.number().int().min(0).max(999999).optional()),
});

export const userCreateSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(120),
  email: z.string().trim().email('Must be a valid email').max(180),
  password: z.string().min(8, 'Password must be at least 8 characters').max(72),
  role: z.enum(['ADMIN', 'SUPERVISOR', 'SURVEYOR']),
  area_id: blankToUndefined(z.coerce.number().int().positive().nullable().optional()),
});

/** Parses `body` against `schema`; returns { data } or { error: message }. */
export function safeValidate(schema, body) {
  const result = schema.safeParse(body);
  if (result.success) return { data: result.data };
  const message = result.error.issues.map((i) => i.message).join('; ');
  return { error: message };
}
