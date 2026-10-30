// Pure data-shaping helpers for survey writes, split out of
// routes/surveys.routes.js so they can be unit tested without Express/Prisma.

// All the survey columns a client is allowed to write. Kept as a list (rather
// than trusting req.body wholesale) so a request can't inject columns like
// `id` or `surveyor_id` through the generic update path.
export const WRITABLE_FIELDS = [
  'area_id', 'status', 'consent_given',
  'head_name', 'head_age', 'head_gender', 'head_marital_status', 'head_education',
  'head_occupation', 'head_skill', 'head_namaz', 'head_income',
  'address', 'phone', 'latitude', 'longitude',
  'spouse_name', 'spouse_age', 'spouse_gender', 'spouse_marital_status', 'spouse_education',
  'spouse_occupation', 'spouse_skill', 'spouse_namaz', 'spouse_income',
  'house_tenure', 'house_condition', 'rooms', 'toilet_access', 'drinking_water', 'electricity_access',
  'loan_types', 'loan_amount', 'govt_scheme_availed', 'govt_scheme_names', 'govt_scheme_amount',
  'bedridden', 'bedridden_monthly_expense',
  'ration_card', 'aadhaar_status', 'health_card', 'bank_account', 'voter_id_status',
  'vehicles', 'fridge', 'television', 'tv_connection', 'tv_type', 'washing_machine',
  'smartphone_access', 'internet_access',
  'monthly_household_income', 'monthly_household_expense', 'food_security', 'vulnerable_category',
  'notes',
];

// These are JSON array columns — default a falsy value to [] instead of null,
// matching the shape the client always expects back (see SurveyForm.jsx `parse`).
export const JSON_ARRAY_FIELDS = new Set(['loan_types', 'vehicles', 'vulnerable_category']);

/** Picks only the whitelisted, present fields out of a request body. */
export function pickSurveyData(body) {
  const data = {};
  for (const field of WRITABLE_FIELDS) {
    if (body[field] === undefined) continue;
    data[field] = JSON_ARRAY_FIELDS.has(field) ? body[field] || [] : body[field];
  }
  return data;
}

/** Shapes one dependant row for Prisma's nested create. */
export function toDependantCreate(d) {
  return {
    name: d.name,
    age: d.age || null,
    relationship: d.relationship || null,
    gender: d.gender || null,
    member_type: d.member_type || 'DEPENDANT',
    education: d.education || null,
    institution: d.institution || null,
    part_time_job: !!d.part_time_job,
    scholarship_availed: d.scholarship_availed || null,
    occupation: d.occupation || null,
    skill: d.skill || null,
    namaz: d.namaz || null,
    income: d.income || 0,
    disability_or_health_need: d.disability_or_health_need || null,
  };
}
