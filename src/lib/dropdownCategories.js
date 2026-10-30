// The fixed set of dropdown categories the survey form knows how to render,
// each with its seed values (what the form used to hardcode as plain JS
// arrays before this became admin-manageable — see prisma/seed.js, which
// loads these once, and src/lib/validation.js, which uses CATEGORIES to
// validate a category key on write). The category keys themselves are NOT
// admin-editable, only the values within each one are (adding a category
// would need matching UI in SurveyForm.jsx to actually use it).
//
// `gender` and `namaz` are shared across the head, spouse, and dependant
// fields (and `education`/`occupation` across all three too) rather than
// having a near-duplicate per person — one list is easier for an admin to
// keep current than several that drift apart.
export const DROPDOWN_SEED = {
  gender: ['Male', 'Female', 'Other', 'Prefer not to say'],
  marital_status: ['Married', 'Unmarried', 'Widowed', 'Separated/Divorced'],
  education: [
    'No formal education', 'Primary', 'Middle school', '10th', '12th', 'ITI/Diploma',
    'Graduate', 'Postgraduate', 'Madrasa education', 'Other',
  ],
  occupation: [
    'Government job', 'Tannery worker', 'Leather cutting/stitching', 'Construction labour',
    'Daily wage worker', 'Domestic worker', 'Street vendor', 'Auto driver', 'Driver', 'Mechanic',
    'Electrician', 'Plumber', 'Carpenter', 'Tailor', 'Shop worker', 'Security guard',
    'Sanitation worker', 'Waste picker', 'Home-based worker', 'IT professional', 'Teacher',
    'Clerk', 'Medical staff', 'Engineer', 'Unemployed', 'Retired', 'Other',
  ],
  namaz: ['Regular 5 times', 'Often', 'Occasionally', 'Friday only', 'Not currently', 'Not applicable / prefer not to say'],
  house_tenure: ['Own', 'Rented', 'Leased', 'Shared', 'Poromboke / unapproved occupancy'],
  house_condition: [
    'Pucca / concrete', 'Semi-pucca', 'Kutcha / mud', 'Tin or asbestos sheet',
    'Temporary shelter', 'Dilapidated / unsafe', 'Homeless',
  ],
  toilet_access: ['Private household toilet', 'Shared toilet', 'Community toilet', 'No toilet / open defecation'],
  drinking_water: ['Piped at home', 'Public tap', 'Borewell', 'Tanker', 'Purchased can', 'Other'],
  electricity_access: ['Regular connection', 'Shared connection', 'Irregular / disconnected', 'No electricity'],
  loan_type: ['Bank', 'Money lender', 'EMI', 'Credit card', 'Family hand loan', 'Self-help group', 'Employer advance'],
  aadhaar_status: ['All members', 'Some members', 'No member'],
  voter_id_status: ['Yes for all eligible', 'Some have, some do not', 'None'],
  vehicle: ['Car', 'Bike', 'Cycle', 'Passenger auto', 'Load auto', 'None'],
  tv_connection: ['Cable', 'DTH', 'Internet only', 'No connection'],
  tv_type: ['CRT TV', 'LCD/LED', 'Smart TV'],
  smartphone_access: ['Everyone eligible has one', 'Some have, some do not', 'No smartphone'],
  internet_access: ['Home broadband', 'Mobile data', 'Occasional access', 'No access'],
  food_security: ['Secure throughout month', 'Occasional shortage', 'Frequent shortage', 'Severe shortage'],
  vulnerable_category: [
    'Widow-headed household', 'Single parent', 'Elderly living alone', 'Person with disability',
    'Orphan support needed', 'School dropout', 'Unemployed primary earner', 'Unsafe housing',
    'Chronic illness',
  ],
  dependant_relationship: ['Son', 'Daughter', 'Parent', 'Spouse', 'Other'],
};

export const DROPDOWN_CATEGORIES = Object.keys(DROPDOWN_SEED);
