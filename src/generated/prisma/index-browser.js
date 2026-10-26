
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AreaScalarFieldEnum = {
  id: 'id',
  name: 'name',
  ward_code: 'ward_code',
  target_households: 'target_households',
  active: 'active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password_hash: 'password_hash',
  role: 'role',
  area_id: 'area_id',
  active: 'active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SurveyScalarFieldEnum = {
  id: 'id',
  survey_code: 'survey_code',
  area_id: 'area_id',
  surveyor_id: 'surveyor_id',
  status: 'status',
  consent_given: 'consent_given',
  head_name: 'head_name',
  head_age: 'head_age',
  head_gender: 'head_gender',
  head_marital_status: 'head_marital_status',
  head_education: 'head_education',
  head_occupation: 'head_occupation',
  head_skill: 'head_skill',
  head_namaz: 'head_namaz',
  head_income: 'head_income',
  address: 'address',
  phone: 'phone',
  latitude: 'latitude',
  longitude: 'longitude',
  spouse_name: 'spouse_name',
  spouse_age: 'spouse_age',
  spouse_education: 'spouse_education',
  spouse_occupation: 'spouse_occupation',
  spouse_skill: 'spouse_skill',
  spouse_namaz: 'spouse_namaz',
  spouse_income: 'spouse_income',
  house_tenure: 'house_tenure',
  house_condition: 'house_condition',
  rooms: 'rooms',
  toilet_access: 'toilet_access',
  drinking_water: 'drinking_water',
  electricity_access: 'electricity_access',
  loan_types: 'loan_types',
  loan_amount: 'loan_amount',
  govt_scheme_availed: 'govt_scheme_availed',
  govt_scheme_names: 'govt_scheme_names',
  govt_scheme_amount: 'govt_scheme_amount',
  bedridden: 'bedridden',
  bedridden_monthly_expense: 'bedridden_monthly_expense',
  ration_card: 'ration_card',
  aadhaar_status: 'aadhaar_status',
  health_card: 'health_card',
  bank_account: 'bank_account',
  voter_id_status: 'voter_id_status',
  vehicles: 'vehicles',
  fridge: 'fridge',
  television: 'television',
  tv_connection: 'tv_connection',
  tv_type: 'tv_type',
  washing_machine: 'washing_machine',
  smartphone_access: 'smartphone_access',
  internet_access: 'internet_access',
  monthly_household_income: 'monthly_household_income',
  monthly_household_expense: 'monthly_household_expense',
  food_security: 'food_security',
  vulnerable_category: 'vulnerable_category',
  notes: 'notes',
  surveyed_at: 'surveyed_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.DependantScalarFieldEnum = {
  id: 'id',
  survey_id: 'survey_id',
  name: 'name',
  age: 'age',
  relationship: 'relationship',
  gender: 'gender',
  member_type: 'member_type',
  education: 'education',
  institution: 'institution',
  part_time_job: 'part_time_job',
  scholarship_availed: 'scholarship_availed',
  occupation: 'occupation',
  skill: 'skill',
  namaz: 'namaz',
  income: 'income',
  disability_or_health_need: 'disability_or_health_need',
  created_at: 'created_at'
};

exports.Prisma.ChartConfigScalarFieldEnum = {
  id: 'id',
  title: 'title',
  metric_key: 'metric_key',
  chart_type: 'chart_type',
  enabled: 'enabled',
  display_order: 'display_order',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  SUPERVISOR: 'SUPERVISOR',
  SURVEYOR: 'SURVEYOR'
};

exports.SurveyStatus = exports.$Enums.SurveyStatus = {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  VERIFIED: 'VERIFIED',
  RETURNED: 'RETURNED'
};

exports.MemberType = exports.$Enums.MemberType = {
  STUDENT: 'STUDENT',
  WORKING: 'WORKING',
  DEPENDANT: 'DEPENDANT'
};

exports.ChartType = exports.$Enums.ChartType = {
  bar: 'bar',
  pie: 'pie',
  line: 'line'
};

exports.Prisma.ModelName = {
  Area: 'Area',
  User: 'User',
  Survey: 'Survey',
  Dependant: 'Dependant',
  ChartConfig: 'ChartConfig'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
