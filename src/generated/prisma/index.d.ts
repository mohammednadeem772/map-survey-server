
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Area
 * A mohalla / ward. Surveys and users (supervisors, surveyors) belong to one.
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>
/**
 * Model User
 * Admins see everything, supervisors are scoped to their area, surveyors to
 * their own records — see src/middleware/auth.js `scopeWhere()`.
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Survey
 * One household survey. Written together with its Dependant rows inside a
 * single Prisma transaction — see src/routes/surveys.routes.js.
 */
export type Survey = $Result.DefaultSelection<Prisma.$SurveyPayload>
/**
 * Model Dependant
 * A household member other than the head/spouse, captured alongside a survey.
 */
export type Dependant = $Result.DefaultSelection<Prisma.$DependantPayload>
/**
 * Model ChartConfig
 * Admin-configurable list of charts shown on the dashboard.
 */
export type ChartConfig = $Result.DefaultSelection<Prisma.$ChartConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  SUPERVISOR: 'SUPERVISOR',
  SURVEYOR: 'SURVEYOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SurveyStatus: {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  VERIFIED: 'VERIFIED',
  RETURNED: 'RETURNED'
};

export type SurveyStatus = (typeof SurveyStatus)[keyof typeof SurveyStatus]


export const MemberType: {
  STUDENT: 'STUDENT',
  WORKING: 'WORKING',
  DEPENDANT: 'DEPENDANT'
};

export type MemberType = (typeof MemberType)[keyof typeof MemberType]


export const ChartType: {
  bar: 'bar',
  pie: 'pie',
  line: 'line'
};

export type ChartType = (typeof ChartType)[keyof typeof ChartType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SurveyStatus = $Enums.SurveyStatus

export const SurveyStatus: typeof $Enums.SurveyStatus

export type MemberType = $Enums.MemberType

export const MemberType: typeof $Enums.MemberType

export type ChartType = $Enums.ChartType

export const ChartType: typeof $Enums.ChartType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Areas
 * const areas = await prisma.area.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Areas
   * const areas = await prisma.area.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.survey`: Exposes CRUD operations for the **Survey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surveys
    * const surveys = await prisma.survey.findMany()
    * ```
    */
  get survey(): Prisma.SurveyDelegate<ExtArgs>;

  /**
   * `prisma.dependant`: Exposes CRUD operations for the **Dependant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dependants
    * const dependants = await prisma.dependant.findMany()
    * ```
    */
  get dependant(): Prisma.DependantDelegate<ExtArgs>;

  /**
   * `prisma.chartConfig`: Exposes CRUD operations for the **ChartConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChartConfigs
    * const chartConfigs = await prisma.chartConfig.findMany()
    * ```
    */
  get chartConfig(): Prisma.ChartConfigDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Area: 'Area',
    User: 'User',
    Survey: 'Survey',
    Dependant: 'Dependant',
    ChartConfig: 'ChartConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "area" | "user" | "survey" | "dependant" | "chartConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Survey: {
        payload: Prisma.$SurveyPayload<ExtArgs>
        fields: Prisma.SurveyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurveyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurveyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          findFirst: {
            args: Prisma.SurveyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurveyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          findMany: {
            args: Prisma.SurveyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>[]
          }
          create: {
            args: Prisma.SurveyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          createMany: {
            args: Prisma.SurveyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SurveyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          update: {
            args: Prisma.SurveyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          deleteMany: {
            args: Prisma.SurveyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurveyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SurveyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          aggregate: {
            args: Prisma.SurveyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurvey>
          }
          groupBy: {
            args: Prisma.SurveyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurveyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SurveyCountArgs<ExtArgs>
            result: $Utils.Optional<SurveyCountAggregateOutputType> | number
          }
        }
      }
      Dependant: {
        payload: Prisma.$DependantPayload<ExtArgs>
        fields: Prisma.DependantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DependantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DependantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependantPayload>
          }
          findFirst: {
            args: Prisma.DependantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DependantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependantPayload>
          }
          findMany: {
            args: Prisma.DependantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependantPayload>[]
          }
          create: {
            args: Prisma.DependantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependantPayload>
          }
          createMany: {
            args: Prisma.DependantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DependantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependantPayload>
          }
          update: {
            args: Prisma.DependantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependantPayload>
          }
          deleteMany: {
            args: Prisma.DependantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DependantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DependantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependantPayload>
          }
          aggregate: {
            args: Prisma.DependantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDependant>
          }
          groupBy: {
            args: Prisma.DependantGroupByArgs<ExtArgs>
            result: $Utils.Optional<DependantGroupByOutputType>[]
          }
          count: {
            args: Prisma.DependantCountArgs<ExtArgs>
            result: $Utils.Optional<DependantCountAggregateOutputType> | number
          }
        }
      }
      ChartConfig: {
        payload: Prisma.$ChartConfigPayload<ExtArgs>
        fields: Prisma.ChartConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChartConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChartConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartConfigPayload>
          }
          findFirst: {
            args: Prisma.ChartConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChartConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartConfigPayload>
          }
          findMany: {
            args: Prisma.ChartConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartConfigPayload>[]
          }
          create: {
            args: Prisma.ChartConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartConfigPayload>
          }
          createMany: {
            args: Prisma.ChartConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChartConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartConfigPayload>
          }
          update: {
            args: Prisma.ChartConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartConfigPayload>
          }
          deleteMany: {
            args: Prisma.ChartConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChartConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChartConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartConfigPayload>
          }
          aggregate: {
            args: Prisma.ChartConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChartConfig>
          }
          groupBy: {
            args: Prisma.ChartConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChartConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChartConfigCountArgs<ExtArgs>
            result: $Utils.Optional<ChartConfigCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    users: number
    surveys: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AreaCountOutputTypeCountUsersArgs
    surveys?: boolean | AreaCountOutputTypeCountSurveysArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountSurveysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    surveys_taken: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surveys_taken?: boolean | UserCountOutputTypeCountSurveys_takenArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSurveys_takenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyWhereInput
  }


  /**
   * Count Type SurveyCountOutputType
   */

  export type SurveyCountOutputType = {
    dependants: number
  }

  export type SurveyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dependants?: boolean | SurveyCountOutputTypeCountDependantsArgs
  }

  // Custom InputTypes
  /**
   * SurveyCountOutputType without action
   */
  export type SurveyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyCountOutputType
     */
    select?: SurveyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SurveyCountOutputType without action
   */
  export type SurveyCountOutputTypeCountDependantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DependantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaAvgAggregateOutputType = {
    id: number | null
    target_households: number | null
  }

  export type AreaSumAggregateOutputType = {
    id: number | null
    target_households: number | null
  }

  export type AreaMinAggregateOutputType = {
    id: number | null
    name: string | null
    ward_code: string | null
    target_households: number | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AreaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    ward_code: string | null
    target_households: number | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    name: number
    ward_code: number
    target_households: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AreaAvgAggregateInputType = {
    id?: true
    target_households?: true
  }

  export type AreaSumAggregateInputType = {
    id?: true
    target_households?: true
  }

  export type AreaMinAggregateInputType = {
    id?: true
    name?: true
    ward_code?: true
    target_households?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
    name?: true
    ward_code?: true
    target_households?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    name?: true
    ward_code?: true
    target_households?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _avg?: AreaAvgAggregateInputType
    _sum?: AreaSumAggregateInputType
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: number
    name: string
    ward_code: string
    target_households: number
    active: boolean
    created_at: Date
    updated_at: Date
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ward_code?: boolean
    target_households?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | Area$usersArgs<ExtArgs>
    surveys?: boolean | Area$surveysArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>


  export type AreaSelectScalar = {
    id?: boolean
    name?: boolean
    ward_code?: boolean
    target_households?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Area$usersArgs<ExtArgs>
    surveys?: boolean | Area$surveysArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      surveys: Prisma.$SurveyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      ward_code: string
      target_households: number
      active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Area$usersArgs<ExtArgs> = {}>(args?: Subset<T, Area$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    surveys<T extends Area$surveysArgs<ExtArgs> = {}>(args?: Subset<T, Area$surveysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Area model
   */ 
  interface AreaFieldRefs {
    readonly id: FieldRef<"Area", 'Int'>
    readonly name: FieldRef<"Area", 'String'>
    readonly ward_code: FieldRef<"Area", 'String'>
    readonly target_households: FieldRef<"Area", 'Int'>
    readonly active: FieldRef<"Area", 'Boolean'>
    readonly created_at: FieldRef<"Area", 'DateTime'>
    readonly updated_at: FieldRef<"Area", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
  }

  /**
   * Area.users
   */
  export type Area$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Area.surveys
   */
  export type Area$surveysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    where?: SurveyWhereInput
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    cursor?: SurveyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    area_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    area_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.Role | null
    area_id: number | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.Role | null
    area_id: number | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    role: number
    area_id: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    area_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    area_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    area_id?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    area_id?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    area_id?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password_hash: string
    role: $Enums.Role
    area_id: number | null
    active: boolean
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    area_id?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    area?: boolean | User$areaArgs<ExtArgs>
    surveys_taken?: boolean | User$surveys_takenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    area_id?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | User$areaArgs<ExtArgs>
    surveys_taken?: boolean | User$surveys_takenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      area: Prisma.$AreaPayload<ExtArgs> | null
      surveys_taken: Prisma.$SurveyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password_hash: string
      role: $Enums.Role
      area_id: number | null
      active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends User$areaArgs<ExtArgs> = {}>(args?: Subset<T, User$areaArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    surveys_taken<T extends User$surveys_takenArgs<ExtArgs> = {}>(args?: Subset<T, User$surveys_takenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly area_id: FieldRef<"User", 'Int'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.area
   */
  export type User$areaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
  }

  /**
   * User.surveys_taken
   */
  export type User$surveys_takenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    where?: SurveyWhereInput
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    cursor?: SurveyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Survey
   */

  export type AggregateSurvey = {
    _count: SurveyCountAggregateOutputType | null
    _avg: SurveyAvgAggregateOutputType | null
    _sum: SurveySumAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  export type SurveyAvgAggregateOutputType = {
    id: number | null
    area_id: number | null
    surveyor_id: number | null
    head_age: number | null
    head_income: Decimal | null
    latitude: Decimal | null
    longitude: Decimal | null
    spouse_age: number | null
    spouse_income: Decimal | null
    rooms: number | null
    loan_amount: Decimal | null
    govt_scheme_amount: Decimal | null
    bedridden_monthly_expense: Decimal | null
    monthly_household_income: Decimal | null
    monthly_household_expense: Decimal | null
  }

  export type SurveySumAggregateOutputType = {
    id: number | null
    area_id: number | null
    surveyor_id: number | null
    head_age: number | null
    head_income: Decimal | null
    latitude: Decimal | null
    longitude: Decimal | null
    spouse_age: number | null
    spouse_income: Decimal | null
    rooms: number | null
    loan_amount: Decimal | null
    govt_scheme_amount: Decimal | null
    bedridden_monthly_expense: Decimal | null
    monthly_household_income: Decimal | null
    monthly_household_expense: Decimal | null
  }

  export type SurveyMinAggregateOutputType = {
    id: number | null
    survey_code: string | null
    area_id: number | null
    surveyor_id: number | null
    status: $Enums.SurveyStatus | null
    consent_given: boolean | null
    head_name: string | null
    head_age: number | null
    head_gender: string | null
    head_marital_status: string | null
    head_education: string | null
    head_occupation: string | null
    head_skill: string | null
    head_namaz: string | null
    head_income: Decimal | null
    address: string | null
    phone: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    spouse_name: string | null
    spouse_age: number | null
    spouse_education: string | null
    spouse_occupation: string | null
    spouse_skill: string | null
    spouse_namaz: string | null
    spouse_income: Decimal | null
    house_tenure: string | null
    house_condition: string | null
    rooms: number | null
    toilet_access: string | null
    drinking_water: string | null
    electricity_access: string | null
    loan_amount: Decimal | null
    govt_scheme_availed: boolean | null
    govt_scheme_names: string | null
    govt_scheme_amount: Decimal | null
    bedridden: boolean | null
    bedridden_monthly_expense: Decimal | null
    ration_card: boolean | null
    aadhaar_status: string | null
    health_card: boolean | null
    bank_account: boolean | null
    voter_id_status: string | null
    fridge: boolean | null
    television: boolean | null
    tv_connection: string | null
    tv_type: string | null
    washing_machine: boolean | null
    smartphone_access: string | null
    internet_access: string | null
    monthly_household_income: Decimal | null
    monthly_household_expense: Decimal | null
    food_security: string | null
    notes: string | null
    surveyed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SurveyMaxAggregateOutputType = {
    id: number | null
    survey_code: string | null
    area_id: number | null
    surveyor_id: number | null
    status: $Enums.SurveyStatus | null
    consent_given: boolean | null
    head_name: string | null
    head_age: number | null
    head_gender: string | null
    head_marital_status: string | null
    head_education: string | null
    head_occupation: string | null
    head_skill: string | null
    head_namaz: string | null
    head_income: Decimal | null
    address: string | null
    phone: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    spouse_name: string | null
    spouse_age: number | null
    spouse_education: string | null
    spouse_occupation: string | null
    spouse_skill: string | null
    spouse_namaz: string | null
    spouse_income: Decimal | null
    house_tenure: string | null
    house_condition: string | null
    rooms: number | null
    toilet_access: string | null
    drinking_water: string | null
    electricity_access: string | null
    loan_amount: Decimal | null
    govt_scheme_availed: boolean | null
    govt_scheme_names: string | null
    govt_scheme_amount: Decimal | null
    bedridden: boolean | null
    bedridden_monthly_expense: Decimal | null
    ration_card: boolean | null
    aadhaar_status: string | null
    health_card: boolean | null
    bank_account: boolean | null
    voter_id_status: string | null
    fridge: boolean | null
    television: boolean | null
    tv_connection: string | null
    tv_type: string | null
    washing_machine: boolean | null
    smartphone_access: string | null
    internet_access: string | null
    monthly_household_income: Decimal | null
    monthly_household_expense: Decimal | null
    food_security: string | null
    notes: string | null
    surveyed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SurveyCountAggregateOutputType = {
    id: number
    survey_code: number
    area_id: number
    surveyor_id: number
    status: number
    consent_given: number
    head_name: number
    head_age: number
    head_gender: number
    head_marital_status: number
    head_education: number
    head_occupation: number
    head_skill: number
    head_namaz: number
    head_income: number
    address: number
    phone: number
    latitude: number
    longitude: number
    spouse_name: number
    spouse_age: number
    spouse_education: number
    spouse_occupation: number
    spouse_skill: number
    spouse_namaz: number
    spouse_income: number
    house_tenure: number
    house_condition: number
    rooms: number
    toilet_access: number
    drinking_water: number
    electricity_access: number
    loan_types: number
    loan_amount: number
    govt_scheme_availed: number
    govt_scheme_names: number
    govt_scheme_amount: number
    bedridden: number
    bedridden_monthly_expense: number
    ration_card: number
    aadhaar_status: number
    health_card: number
    bank_account: number
    voter_id_status: number
    vehicles: number
    fridge: number
    television: number
    tv_connection: number
    tv_type: number
    washing_machine: number
    smartphone_access: number
    internet_access: number
    monthly_household_income: number
    monthly_household_expense: number
    food_security: number
    vulnerable_category: number
    notes: number
    surveyed_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SurveyAvgAggregateInputType = {
    id?: true
    area_id?: true
    surveyor_id?: true
    head_age?: true
    head_income?: true
    latitude?: true
    longitude?: true
    spouse_age?: true
    spouse_income?: true
    rooms?: true
    loan_amount?: true
    govt_scheme_amount?: true
    bedridden_monthly_expense?: true
    monthly_household_income?: true
    monthly_household_expense?: true
  }

  export type SurveySumAggregateInputType = {
    id?: true
    area_id?: true
    surveyor_id?: true
    head_age?: true
    head_income?: true
    latitude?: true
    longitude?: true
    spouse_age?: true
    spouse_income?: true
    rooms?: true
    loan_amount?: true
    govt_scheme_amount?: true
    bedridden_monthly_expense?: true
    monthly_household_income?: true
    monthly_household_expense?: true
  }

  export type SurveyMinAggregateInputType = {
    id?: true
    survey_code?: true
    area_id?: true
    surveyor_id?: true
    status?: true
    consent_given?: true
    head_name?: true
    head_age?: true
    head_gender?: true
    head_marital_status?: true
    head_education?: true
    head_occupation?: true
    head_skill?: true
    head_namaz?: true
    head_income?: true
    address?: true
    phone?: true
    latitude?: true
    longitude?: true
    spouse_name?: true
    spouse_age?: true
    spouse_education?: true
    spouse_occupation?: true
    spouse_skill?: true
    spouse_namaz?: true
    spouse_income?: true
    house_tenure?: true
    house_condition?: true
    rooms?: true
    toilet_access?: true
    drinking_water?: true
    electricity_access?: true
    loan_amount?: true
    govt_scheme_availed?: true
    govt_scheme_names?: true
    govt_scheme_amount?: true
    bedridden?: true
    bedridden_monthly_expense?: true
    ration_card?: true
    aadhaar_status?: true
    health_card?: true
    bank_account?: true
    voter_id_status?: true
    fridge?: true
    television?: true
    tv_connection?: true
    tv_type?: true
    washing_machine?: true
    smartphone_access?: true
    internet_access?: true
    monthly_household_income?: true
    monthly_household_expense?: true
    food_security?: true
    notes?: true
    surveyed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type SurveyMaxAggregateInputType = {
    id?: true
    survey_code?: true
    area_id?: true
    surveyor_id?: true
    status?: true
    consent_given?: true
    head_name?: true
    head_age?: true
    head_gender?: true
    head_marital_status?: true
    head_education?: true
    head_occupation?: true
    head_skill?: true
    head_namaz?: true
    head_income?: true
    address?: true
    phone?: true
    latitude?: true
    longitude?: true
    spouse_name?: true
    spouse_age?: true
    spouse_education?: true
    spouse_occupation?: true
    spouse_skill?: true
    spouse_namaz?: true
    spouse_income?: true
    house_tenure?: true
    house_condition?: true
    rooms?: true
    toilet_access?: true
    drinking_water?: true
    electricity_access?: true
    loan_amount?: true
    govt_scheme_availed?: true
    govt_scheme_names?: true
    govt_scheme_amount?: true
    bedridden?: true
    bedridden_monthly_expense?: true
    ration_card?: true
    aadhaar_status?: true
    health_card?: true
    bank_account?: true
    voter_id_status?: true
    fridge?: true
    television?: true
    tv_connection?: true
    tv_type?: true
    washing_machine?: true
    smartphone_access?: true
    internet_access?: true
    monthly_household_income?: true
    monthly_household_expense?: true
    food_security?: true
    notes?: true
    surveyed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type SurveyCountAggregateInputType = {
    id?: true
    survey_code?: true
    area_id?: true
    surveyor_id?: true
    status?: true
    consent_given?: true
    head_name?: true
    head_age?: true
    head_gender?: true
    head_marital_status?: true
    head_education?: true
    head_occupation?: true
    head_skill?: true
    head_namaz?: true
    head_income?: true
    address?: true
    phone?: true
    latitude?: true
    longitude?: true
    spouse_name?: true
    spouse_age?: true
    spouse_education?: true
    spouse_occupation?: true
    spouse_skill?: true
    spouse_namaz?: true
    spouse_income?: true
    house_tenure?: true
    house_condition?: true
    rooms?: true
    toilet_access?: true
    drinking_water?: true
    electricity_access?: true
    loan_types?: true
    loan_amount?: true
    govt_scheme_availed?: true
    govt_scheme_names?: true
    govt_scheme_amount?: true
    bedridden?: true
    bedridden_monthly_expense?: true
    ration_card?: true
    aadhaar_status?: true
    health_card?: true
    bank_account?: true
    voter_id_status?: true
    vehicles?: true
    fridge?: true
    television?: true
    tv_connection?: true
    tv_type?: true
    washing_machine?: true
    smartphone_access?: true
    internet_access?: true
    monthly_household_income?: true
    monthly_household_expense?: true
    food_security?: true
    vulnerable_category?: true
    notes?: true
    surveyed_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SurveyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Survey to aggregate.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Surveys
    **/
    _count?: true | SurveyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurveyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurveySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyMaxAggregateInputType
  }

  export type GetSurveyAggregateType<T extends SurveyAggregateArgs> = {
        [P in keyof T & keyof AggregateSurvey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurvey[P]>
      : GetScalarType<T[P], AggregateSurvey[P]>
  }




  export type SurveyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyWhereInput
    orderBy?: SurveyOrderByWithAggregationInput | SurveyOrderByWithAggregationInput[]
    by: SurveyScalarFieldEnum[] | SurveyScalarFieldEnum
    having?: SurveyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyCountAggregateInputType | true
    _avg?: SurveyAvgAggregateInputType
    _sum?: SurveySumAggregateInputType
    _min?: SurveyMinAggregateInputType
    _max?: SurveyMaxAggregateInputType
  }

  export type SurveyGroupByOutputType = {
    id: number
    survey_code: string
    area_id: number
    surveyor_id: number
    status: $Enums.SurveyStatus
    consent_given: boolean
    head_name: string
    head_age: number | null
    head_gender: string | null
    head_marital_status: string | null
    head_education: string | null
    head_occupation: string | null
    head_skill: string | null
    head_namaz: string | null
    head_income: Decimal
    address: string
    phone: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    spouse_name: string | null
    spouse_age: number | null
    spouse_education: string | null
    spouse_occupation: string | null
    spouse_skill: string | null
    spouse_namaz: string | null
    spouse_income: Decimal
    house_tenure: string | null
    house_condition: string | null
    rooms: number | null
    toilet_access: string | null
    drinking_water: string | null
    electricity_access: string | null
    loan_types: JsonValue | null
    loan_amount: Decimal
    govt_scheme_availed: boolean
    govt_scheme_names: string | null
    govt_scheme_amount: Decimal
    bedridden: boolean
    bedridden_monthly_expense: Decimal
    ration_card: boolean
    aadhaar_status: string | null
    health_card: boolean
    bank_account: boolean
    voter_id_status: string | null
    vehicles: JsonValue | null
    fridge: boolean
    television: boolean
    tv_connection: string | null
    tv_type: string | null
    washing_machine: boolean
    smartphone_access: string | null
    internet_access: string | null
    monthly_household_income: Decimal
    monthly_household_expense: Decimal
    food_security: string | null
    vulnerable_category: JsonValue | null
    notes: string | null
    surveyed_at: Date
    created_at: Date
    updated_at: Date
    _count: SurveyCountAggregateOutputType | null
    _avg: SurveyAvgAggregateOutputType | null
    _sum: SurveySumAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  type GetSurveyGroupByPayload<T extends SurveyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurveyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyGroupByOutputType[P]>
        }
      >
    >


  export type SurveySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    survey_code?: boolean
    area_id?: boolean
    surveyor_id?: boolean
    status?: boolean
    consent_given?: boolean
    head_name?: boolean
    head_age?: boolean
    head_gender?: boolean
    head_marital_status?: boolean
    head_education?: boolean
    head_occupation?: boolean
    head_skill?: boolean
    head_namaz?: boolean
    head_income?: boolean
    address?: boolean
    phone?: boolean
    latitude?: boolean
    longitude?: boolean
    spouse_name?: boolean
    spouse_age?: boolean
    spouse_education?: boolean
    spouse_occupation?: boolean
    spouse_skill?: boolean
    spouse_namaz?: boolean
    spouse_income?: boolean
    house_tenure?: boolean
    house_condition?: boolean
    rooms?: boolean
    toilet_access?: boolean
    drinking_water?: boolean
    electricity_access?: boolean
    loan_types?: boolean
    loan_amount?: boolean
    govt_scheme_availed?: boolean
    govt_scheme_names?: boolean
    govt_scheme_amount?: boolean
    bedridden?: boolean
    bedridden_monthly_expense?: boolean
    ration_card?: boolean
    aadhaar_status?: boolean
    health_card?: boolean
    bank_account?: boolean
    voter_id_status?: boolean
    vehicles?: boolean
    fridge?: boolean
    television?: boolean
    tv_connection?: boolean
    tv_type?: boolean
    washing_machine?: boolean
    smartphone_access?: boolean
    internet_access?: boolean
    monthly_household_income?: boolean
    monthly_household_expense?: boolean
    food_security?: boolean
    vulnerable_category?: boolean
    notes?: boolean
    surveyed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
    surveyor?: boolean | UserDefaultArgs<ExtArgs>
    dependants?: boolean | Survey$dependantsArgs<ExtArgs>
    _count?: boolean | SurveyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survey"]>


  export type SurveySelectScalar = {
    id?: boolean
    survey_code?: boolean
    area_id?: boolean
    surveyor_id?: boolean
    status?: boolean
    consent_given?: boolean
    head_name?: boolean
    head_age?: boolean
    head_gender?: boolean
    head_marital_status?: boolean
    head_education?: boolean
    head_occupation?: boolean
    head_skill?: boolean
    head_namaz?: boolean
    head_income?: boolean
    address?: boolean
    phone?: boolean
    latitude?: boolean
    longitude?: boolean
    spouse_name?: boolean
    spouse_age?: boolean
    spouse_education?: boolean
    spouse_occupation?: boolean
    spouse_skill?: boolean
    spouse_namaz?: boolean
    spouse_income?: boolean
    house_tenure?: boolean
    house_condition?: boolean
    rooms?: boolean
    toilet_access?: boolean
    drinking_water?: boolean
    electricity_access?: boolean
    loan_types?: boolean
    loan_amount?: boolean
    govt_scheme_availed?: boolean
    govt_scheme_names?: boolean
    govt_scheme_amount?: boolean
    bedridden?: boolean
    bedridden_monthly_expense?: boolean
    ration_card?: boolean
    aadhaar_status?: boolean
    health_card?: boolean
    bank_account?: boolean
    voter_id_status?: boolean
    vehicles?: boolean
    fridge?: boolean
    television?: boolean
    tv_connection?: boolean
    tv_type?: boolean
    washing_machine?: boolean
    smartphone_access?: boolean
    internet_access?: boolean
    monthly_household_income?: boolean
    monthly_household_expense?: boolean
    food_security?: boolean
    vulnerable_category?: boolean
    notes?: boolean
    surveyed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SurveyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
    surveyor?: boolean | UserDefaultArgs<ExtArgs>
    dependants?: boolean | Survey$dependantsArgs<ExtArgs>
    _count?: boolean | SurveyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SurveyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Survey"
    objects: {
      area: Prisma.$AreaPayload<ExtArgs>
      surveyor: Prisma.$UserPayload<ExtArgs>
      dependants: Prisma.$DependantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      survey_code: string
      area_id: number
      surveyor_id: number
      status: $Enums.SurveyStatus
      consent_given: boolean
      head_name: string
      head_age: number | null
      head_gender: string | null
      head_marital_status: string | null
      head_education: string | null
      head_occupation: string | null
      head_skill: string | null
      head_namaz: string | null
      head_income: Prisma.Decimal
      address: string
      phone: string | null
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      spouse_name: string | null
      spouse_age: number | null
      spouse_education: string | null
      spouse_occupation: string | null
      spouse_skill: string | null
      spouse_namaz: string | null
      spouse_income: Prisma.Decimal
      house_tenure: string | null
      house_condition: string | null
      rooms: number | null
      toilet_access: string | null
      drinking_water: string | null
      electricity_access: string | null
      loan_types: Prisma.JsonValue | null
      loan_amount: Prisma.Decimal
      govt_scheme_availed: boolean
      govt_scheme_names: string | null
      govt_scheme_amount: Prisma.Decimal
      bedridden: boolean
      bedridden_monthly_expense: Prisma.Decimal
      ration_card: boolean
      aadhaar_status: string | null
      health_card: boolean
      bank_account: boolean
      voter_id_status: string | null
      vehicles: Prisma.JsonValue | null
      fridge: boolean
      television: boolean
      tv_connection: string | null
      tv_type: string | null
      washing_machine: boolean
      smartphone_access: string | null
      internet_access: string | null
      monthly_household_income: Prisma.Decimal
      monthly_household_expense: Prisma.Decimal
      food_security: string | null
      vulnerable_category: Prisma.JsonValue | null
      notes: string | null
      surveyed_at: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["survey"]>
    composites: {}
  }

  type SurveyGetPayload<S extends boolean | null | undefined | SurveyDefaultArgs> = $Result.GetResult<Prisma.$SurveyPayload, S>

  type SurveyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SurveyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SurveyCountAggregateInputType | true
    }

  export interface SurveyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Survey'], meta: { name: 'Survey' } }
    /**
     * Find zero or one Survey that matches the filter.
     * @param {SurveyFindUniqueArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurveyFindUniqueArgs>(args: SelectSubset<T, SurveyFindUniqueArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Survey that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SurveyFindUniqueOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurveyFindUniqueOrThrowArgs>(args: SelectSubset<T, SurveyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Survey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindFirstArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurveyFindFirstArgs>(args?: SelectSubset<T, SurveyFindFirstArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Survey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindFirstOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurveyFindFirstOrThrowArgs>(args?: SelectSubset<T, SurveyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Surveys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surveys
     * const surveys = await prisma.survey.findMany()
     * 
     * // Get first 10 Surveys
     * const surveys = await prisma.survey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveyWithIdOnly = await prisma.survey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurveyFindManyArgs>(args?: SelectSubset<T, SurveyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Survey.
     * @param {SurveyCreateArgs} args - Arguments to create a Survey.
     * @example
     * // Create one Survey
     * const Survey = await prisma.survey.create({
     *   data: {
     *     // ... data to create a Survey
     *   }
     * })
     * 
     */
    create<T extends SurveyCreateArgs>(args: SelectSubset<T, SurveyCreateArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Surveys.
     * @param {SurveyCreateManyArgs} args - Arguments to create many Surveys.
     * @example
     * // Create many Surveys
     * const survey = await prisma.survey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurveyCreateManyArgs>(args?: SelectSubset<T, SurveyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Survey.
     * @param {SurveyDeleteArgs} args - Arguments to delete one Survey.
     * @example
     * // Delete one Survey
     * const Survey = await prisma.survey.delete({
     *   where: {
     *     // ... filter to delete one Survey
     *   }
     * })
     * 
     */
    delete<T extends SurveyDeleteArgs>(args: SelectSubset<T, SurveyDeleteArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Survey.
     * @param {SurveyUpdateArgs} args - Arguments to update one Survey.
     * @example
     * // Update one Survey
     * const survey = await prisma.survey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurveyUpdateArgs>(args: SelectSubset<T, SurveyUpdateArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Surveys.
     * @param {SurveyDeleteManyArgs} args - Arguments to filter Surveys to delete.
     * @example
     * // Delete a few Surveys
     * const { count } = await prisma.survey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurveyDeleteManyArgs>(args?: SelectSubset<T, SurveyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surveys
     * const survey = await prisma.survey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurveyUpdateManyArgs>(args: SelectSubset<T, SurveyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Survey.
     * @param {SurveyUpsertArgs} args - Arguments to update or create a Survey.
     * @example
     * // Update or create a Survey
     * const survey = await prisma.survey.upsert({
     *   create: {
     *     // ... data to create a Survey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Survey we want to update
     *   }
     * })
     */
    upsert<T extends SurveyUpsertArgs>(args: SelectSubset<T, SurveyUpsertArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyCountArgs} args - Arguments to filter Surveys to count.
     * @example
     * // Count the number of Surveys
     * const count = await prisma.survey.count({
     *   where: {
     *     // ... the filter for the Surveys we want to count
     *   }
     * })
    **/
    count<T extends SurveyCountArgs>(
      args?: Subset<T, SurveyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurveyAggregateArgs>(args: Subset<T, SurveyAggregateArgs>): Prisma.PrismaPromise<GetSurveyAggregateType<T>>

    /**
     * Group by Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SurveyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveyGroupByArgs['orderBy'] }
        : { orderBy?: SurveyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SurveyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Survey model
   */
  readonly fields: SurveyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Survey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurveyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends AreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaDefaultArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    surveyor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    dependants<T extends Survey$dependantsArgs<ExtArgs> = {}>(args?: Subset<T, Survey$dependantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DependantPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Survey model
   */ 
  interface SurveyFieldRefs {
    readonly id: FieldRef<"Survey", 'Int'>
    readonly survey_code: FieldRef<"Survey", 'String'>
    readonly area_id: FieldRef<"Survey", 'Int'>
    readonly surveyor_id: FieldRef<"Survey", 'Int'>
    readonly status: FieldRef<"Survey", 'SurveyStatus'>
    readonly consent_given: FieldRef<"Survey", 'Boolean'>
    readonly head_name: FieldRef<"Survey", 'String'>
    readonly head_age: FieldRef<"Survey", 'Int'>
    readonly head_gender: FieldRef<"Survey", 'String'>
    readonly head_marital_status: FieldRef<"Survey", 'String'>
    readonly head_education: FieldRef<"Survey", 'String'>
    readonly head_occupation: FieldRef<"Survey", 'String'>
    readonly head_skill: FieldRef<"Survey", 'String'>
    readonly head_namaz: FieldRef<"Survey", 'String'>
    readonly head_income: FieldRef<"Survey", 'Decimal'>
    readonly address: FieldRef<"Survey", 'String'>
    readonly phone: FieldRef<"Survey", 'String'>
    readonly latitude: FieldRef<"Survey", 'Decimal'>
    readonly longitude: FieldRef<"Survey", 'Decimal'>
    readonly spouse_name: FieldRef<"Survey", 'String'>
    readonly spouse_age: FieldRef<"Survey", 'Int'>
    readonly spouse_education: FieldRef<"Survey", 'String'>
    readonly spouse_occupation: FieldRef<"Survey", 'String'>
    readonly spouse_skill: FieldRef<"Survey", 'String'>
    readonly spouse_namaz: FieldRef<"Survey", 'String'>
    readonly spouse_income: FieldRef<"Survey", 'Decimal'>
    readonly house_tenure: FieldRef<"Survey", 'String'>
    readonly house_condition: FieldRef<"Survey", 'String'>
    readonly rooms: FieldRef<"Survey", 'Int'>
    readonly toilet_access: FieldRef<"Survey", 'String'>
    readonly drinking_water: FieldRef<"Survey", 'String'>
    readonly electricity_access: FieldRef<"Survey", 'String'>
    readonly loan_types: FieldRef<"Survey", 'Json'>
    readonly loan_amount: FieldRef<"Survey", 'Decimal'>
    readonly govt_scheme_availed: FieldRef<"Survey", 'Boolean'>
    readonly govt_scheme_names: FieldRef<"Survey", 'String'>
    readonly govt_scheme_amount: FieldRef<"Survey", 'Decimal'>
    readonly bedridden: FieldRef<"Survey", 'Boolean'>
    readonly bedridden_monthly_expense: FieldRef<"Survey", 'Decimal'>
    readonly ration_card: FieldRef<"Survey", 'Boolean'>
    readonly aadhaar_status: FieldRef<"Survey", 'String'>
    readonly health_card: FieldRef<"Survey", 'Boolean'>
    readonly bank_account: FieldRef<"Survey", 'Boolean'>
    readonly voter_id_status: FieldRef<"Survey", 'String'>
    readonly vehicles: FieldRef<"Survey", 'Json'>
    readonly fridge: FieldRef<"Survey", 'Boolean'>
    readonly television: FieldRef<"Survey", 'Boolean'>
    readonly tv_connection: FieldRef<"Survey", 'String'>
    readonly tv_type: FieldRef<"Survey", 'String'>
    readonly washing_machine: FieldRef<"Survey", 'Boolean'>
    readonly smartphone_access: FieldRef<"Survey", 'String'>
    readonly internet_access: FieldRef<"Survey", 'String'>
    readonly monthly_household_income: FieldRef<"Survey", 'Decimal'>
    readonly monthly_household_expense: FieldRef<"Survey", 'Decimal'>
    readonly food_security: FieldRef<"Survey", 'String'>
    readonly vulnerable_category: FieldRef<"Survey", 'Json'>
    readonly notes: FieldRef<"Survey", 'String'>
    readonly surveyed_at: FieldRef<"Survey", 'DateTime'>
    readonly created_at: FieldRef<"Survey", 'DateTime'>
    readonly updated_at: FieldRef<"Survey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Survey findUnique
   */
  export type SurveyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey findUniqueOrThrow
   */
  export type SurveyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey findFirst
   */
  export type SurveyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surveys.
     */
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * Survey findFirstOrThrow
   */
  export type SurveyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surveys.
     */
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * Survey findMany
   */
  export type SurveyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Surveys to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * Survey create
   */
  export type SurveyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The data needed to create a Survey.
     */
    data: XOR<SurveyCreateInput, SurveyUncheckedCreateInput>
  }

  /**
   * Survey createMany
   */
  export type SurveyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Surveys.
     */
    data: SurveyCreateManyInput | SurveyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Survey update
   */
  export type SurveyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The data needed to update a Survey.
     */
    data: XOR<SurveyUpdateInput, SurveyUncheckedUpdateInput>
    /**
     * Choose, which Survey to update.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey updateMany
   */
  export type SurveyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Surveys.
     */
    data: XOR<SurveyUpdateManyMutationInput, SurveyUncheckedUpdateManyInput>
    /**
     * Filter which Surveys to update
     */
    where?: SurveyWhereInput
  }

  /**
   * Survey upsert
   */
  export type SurveyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The filter to search for the Survey to update in case it exists.
     */
    where: SurveyWhereUniqueInput
    /**
     * In case the Survey found by the `where` argument doesn't exist, create a new Survey with this data.
     */
    create: XOR<SurveyCreateInput, SurveyUncheckedCreateInput>
    /**
     * In case the Survey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurveyUpdateInput, SurveyUncheckedUpdateInput>
  }

  /**
   * Survey delete
   */
  export type SurveyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter which Survey to delete.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey deleteMany
   */
  export type SurveyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surveys to delete
     */
    where?: SurveyWhereInput
  }

  /**
   * Survey.dependants
   */
  export type Survey$dependantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependant
     */
    select?: DependantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependantInclude<ExtArgs> | null
    where?: DependantWhereInput
    orderBy?: DependantOrderByWithRelationInput | DependantOrderByWithRelationInput[]
    cursor?: DependantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DependantScalarFieldEnum | DependantScalarFieldEnum[]
  }

  /**
   * Survey without action
   */
  export type SurveyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
  }


  /**
   * Model Dependant
   */

  export type AggregateDependant = {
    _count: DependantCountAggregateOutputType | null
    _avg: DependantAvgAggregateOutputType | null
    _sum: DependantSumAggregateOutputType | null
    _min: DependantMinAggregateOutputType | null
    _max: DependantMaxAggregateOutputType | null
  }

  export type DependantAvgAggregateOutputType = {
    id: number | null
    survey_id: number | null
    age: number | null
    income: Decimal | null
  }

  export type DependantSumAggregateOutputType = {
    id: number | null
    survey_id: number | null
    age: number | null
    income: Decimal | null
  }

  export type DependantMinAggregateOutputType = {
    id: number | null
    survey_id: number | null
    name: string | null
    age: number | null
    relationship: string | null
    gender: string | null
    member_type: $Enums.MemberType | null
    education: string | null
    institution: string | null
    part_time_job: boolean | null
    scholarship_availed: string | null
    occupation: string | null
    skill: string | null
    namaz: string | null
    income: Decimal | null
    disability_or_health_need: string | null
    created_at: Date | null
  }

  export type DependantMaxAggregateOutputType = {
    id: number | null
    survey_id: number | null
    name: string | null
    age: number | null
    relationship: string | null
    gender: string | null
    member_type: $Enums.MemberType | null
    education: string | null
    institution: string | null
    part_time_job: boolean | null
    scholarship_availed: string | null
    occupation: string | null
    skill: string | null
    namaz: string | null
    income: Decimal | null
    disability_or_health_need: string | null
    created_at: Date | null
  }

  export type DependantCountAggregateOutputType = {
    id: number
    survey_id: number
    name: number
    age: number
    relationship: number
    gender: number
    member_type: number
    education: number
    institution: number
    part_time_job: number
    scholarship_availed: number
    occupation: number
    skill: number
    namaz: number
    income: number
    disability_or_health_need: number
    created_at: number
    _all: number
  }


  export type DependantAvgAggregateInputType = {
    id?: true
    survey_id?: true
    age?: true
    income?: true
  }

  export type DependantSumAggregateInputType = {
    id?: true
    survey_id?: true
    age?: true
    income?: true
  }

  export type DependantMinAggregateInputType = {
    id?: true
    survey_id?: true
    name?: true
    age?: true
    relationship?: true
    gender?: true
    member_type?: true
    education?: true
    institution?: true
    part_time_job?: true
    scholarship_availed?: true
    occupation?: true
    skill?: true
    namaz?: true
    income?: true
    disability_or_health_need?: true
    created_at?: true
  }

  export type DependantMaxAggregateInputType = {
    id?: true
    survey_id?: true
    name?: true
    age?: true
    relationship?: true
    gender?: true
    member_type?: true
    education?: true
    institution?: true
    part_time_job?: true
    scholarship_availed?: true
    occupation?: true
    skill?: true
    namaz?: true
    income?: true
    disability_or_health_need?: true
    created_at?: true
  }

  export type DependantCountAggregateInputType = {
    id?: true
    survey_id?: true
    name?: true
    age?: true
    relationship?: true
    gender?: true
    member_type?: true
    education?: true
    institution?: true
    part_time_job?: true
    scholarship_availed?: true
    occupation?: true
    skill?: true
    namaz?: true
    income?: true
    disability_or_health_need?: true
    created_at?: true
    _all?: true
  }

  export type DependantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dependant to aggregate.
     */
    where?: DependantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependants to fetch.
     */
    orderBy?: DependantOrderByWithRelationInput | DependantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DependantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dependants
    **/
    _count?: true | DependantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DependantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DependantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DependantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DependantMaxAggregateInputType
  }

  export type GetDependantAggregateType<T extends DependantAggregateArgs> = {
        [P in keyof T & keyof AggregateDependant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDependant[P]>
      : GetScalarType<T[P], AggregateDependant[P]>
  }




  export type DependantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DependantWhereInput
    orderBy?: DependantOrderByWithAggregationInput | DependantOrderByWithAggregationInput[]
    by: DependantScalarFieldEnum[] | DependantScalarFieldEnum
    having?: DependantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DependantCountAggregateInputType | true
    _avg?: DependantAvgAggregateInputType
    _sum?: DependantSumAggregateInputType
    _min?: DependantMinAggregateInputType
    _max?: DependantMaxAggregateInputType
  }

  export type DependantGroupByOutputType = {
    id: number
    survey_id: number
    name: string
    age: number | null
    relationship: string | null
    gender: string | null
    member_type: $Enums.MemberType
    education: string | null
    institution: string | null
    part_time_job: boolean
    scholarship_availed: string | null
    occupation: string | null
    skill: string | null
    namaz: string | null
    income: Decimal
    disability_or_health_need: string | null
    created_at: Date
    _count: DependantCountAggregateOutputType | null
    _avg: DependantAvgAggregateOutputType | null
    _sum: DependantSumAggregateOutputType | null
    _min: DependantMinAggregateOutputType | null
    _max: DependantMaxAggregateOutputType | null
  }

  type GetDependantGroupByPayload<T extends DependantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DependantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DependantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DependantGroupByOutputType[P]>
            : GetScalarType<T[P], DependantGroupByOutputType[P]>
        }
      >
    >


  export type DependantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    survey_id?: boolean
    name?: boolean
    age?: boolean
    relationship?: boolean
    gender?: boolean
    member_type?: boolean
    education?: boolean
    institution?: boolean
    part_time_job?: boolean
    scholarship_availed?: boolean
    occupation?: boolean
    skill?: boolean
    namaz?: boolean
    income?: boolean
    disability_or_health_need?: boolean
    created_at?: boolean
    survey?: boolean | SurveyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dependant"]>


  export type DependantSelectScalar = {
    id?: boolean
    survey_id?: boolean
    name?: boolean
    age?: boolean
    relationship?: boolean
    gender?: boolean
    member_type?: boolean
    education?: boolean
    institution?: boolean
    part_time_job?: boolean
    scholarship_availed?: boolean
    occupation?: boolean
    skill?: boolean
    namaz?: boolean
    income?: boolean
    disability_or_health_need?: boolean
    created_at?: boolean
  }

  export type DependantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    survey?: boolean | SurveyDefaultArgs<ExtArgs>
  }

  export type $DependantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dependant"
    objects: {
      survey: Prisma.$SurveyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      survey_id: number
      name: string
      age: number | null
      relationship: string | null
      gender: string | null
      member_type: $Enums.MemberType
      education: string | null
      institution: string | null
      part_time_job: boolean
      scholarship_availed: string | null
      occupation: string | null
      skill: string | null
      namaz: string | null
      income: Prisma.Decimal
      disability_or_health_need: string | null
      created_at: Date
    }, ExtArgs["result"]["dependant"]>
    composites: {}
  }

  type DependantGetPayload<S extends boolean | null | undefined | DependantDefaultArgs> = $Result.GetResult<Prisma.$DependantPayload, S>

  type DependantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DependantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DependantCountAggregateInputType | true
    }

  export interface DependantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dependant'], meta: { name: 'Dependant' } }
    /**
     * Find zero or one Dependant that matches the filter.
     * @param {DependantFindUniqueArgs} args - Arguments to find a Dependant
     * @example
     * // Get one Dependant
     * const dependant = await prisma.dependant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DependantFindUniqueArgs>(args: SelectSubset<T, DependantFindUniqueArgs<ExtArgs>>): Prisma__DependantClient<$Result.GetResult<Prisma.$DependantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Dependant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DependantFindUniqueOrThrowArgs} args - Arguments to find a Dependant
     * @example
     * // Get one Dependant
     * const dependant = await prisma.dependant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DependantFindUniqueOrThrowArgs>(args: SelectSubset<T, DependantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DependantClient<$Result.GetResult<Prisma.$DependantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Dependant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependantFindFirstArgs} args - Arguments to find a Dependant
     * @example
     * // Get one Dependant
     * const dependant = await prisma.dependant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DependantFindFirstArgs>(args?: SelectSubset<T, DependantFindFirstArgs<ExtArgs>>): Prisma__DependantClient<$Result.GetResult<Prisma.$DependantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Dependant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependantFindFirstOrThrowArgs} args - Arguments to find a Dependant
     * @example
     * // Get one Dependant
     * const dependant = await prisma.dependant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DependantFindFirstOrThrowArgs>(args?: SelectSubset<T, DependantFindFirstOrThrowArgs<ExtArgs>>): Prisma__DependantClient<$Result.GetResult<Prisma.$DependantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Dependants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dependants
     * const dependants = await prisma.dependant.findMany()
     * 
     * // Get first 10 Dependants
     * const dependants = await prisma.dependant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dependantWithIdOnly = await prisma.dependant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DependantFindManyArgs>(args?: SelectSubset<T, DependantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DependantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Dependant.
     * @param {DependantCreateArgs} args - Arguments to create a Dependant.
     * @example
     * // Create one Dependant
     * const Dependant = await prisma.dependant.create({
     *   data: {
     *     // ... data to create a Dependant
     *   }
     * })
     * 
     */
    create<T extends DependantCreateArgs>(args: SelectSubset<T, DependantCreateArgs<ExtArgs>>): Prisma__DependantClient<$Result.GetResult<Prisma.$DependantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Dependants.
     * @param {DependantCreateManyArgs} args - Arguments to create many Dependants.
     * @example
     * // Create many Dependants
     * const dependant = await prisma.dependant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DependantCreateManyArgs>(args?: SelectSubset<T, DependantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dependant.
     * @param {DependantDeleteArgs} args - Arguments to delete one Dependant.
     * @example
     * // Delete one Dependant
     * const Dependant = await prisma.dependant.delete({
     *   where: {
     *     // ... filter to delete one Dependant
     *   }
     * })
     * 
     */
    delete<T extends DependantDeleteArgs>(args: SelectSubset<T, DependantDeleteArgs<ExtArgs>>): Prisma__DependantClient<$Result.GetResult<Prisma.$DependantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Dependant.
     * @param {DependantUpdateArgs} args - Arguments to update one Dependant.
     * @example
     * // Update one Dependant
     * const dependant = await prisma.dependant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DependantUpdateArgs>(args: SelectSubset<T, DependantUpdateArgs<ExtArgs>>): Prisma__DependantClient<$Result.GetResult<Prisma.$DependantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Dependants.
     * @param {DependantDeleteManyArgs} args - Arguments to filter Dependants to delete.
     * @example
     * // Delete a few Dependants
     * const { count } = await prisma.dependant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DependantDeleteManyArgs>(args?: SelectSubset<T, DependantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dependants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dependants
     * const dependant = await prisma.dependant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DependantUpdateManyArgs>(args: SelectSubset<T, DependantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dependant.
     * @param {DependantUpsertArgs} args - Arguments to update or create a Dependant.
     * @example
     * // Update or create a Dependant
     * const dependant = await prisma.dependant.upsert({
     *   create: {
     *     // ... data to create a Dependant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dependant we want to update
     *   }
     * })
     */
    upsert<T extends DependantUpsertArgs>(args: SelectSubset<T, DependantUpsertArgs<ExtArgs>>): Prisma__DependantClient<$Result.GetResult<Prisma.$DependantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Dependants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependantCountArgs} args - Arguments to filter Dependants to count.
     * @example
     * // Count the number of Dependants
     * const count = await prisma.dependant.count({
     *   where: {
     *     // ... the filter for the Dependants we want to count
     *   }
     * })
    **/
    count<T extends DependantCountArgs>(
      args?: Subset<T, DependantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DependantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dependant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DependantAggregateArgs>(args: Subset<T, DependantAggregateArgs>): Prisma.PrismaPromise<GetDependantAggregateType<T>>

    /**
     * Group by Dependant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DependantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DependantGroupByArgs['orderBy'] }
        : { orderBy?: DependantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DependantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDependantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dependant model
   */
  readonly fields: DependantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dependant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DependantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    survey<T extends SurveyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SurveyDefaultArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dependant model
   */ 
  interface DependantFieldRefs {
    readonly id: FieldRef<"Dependant", 'Int'>
    readonly survey_id: FieldRef<"Dependant", 'Int'>
    readonly name: FieldRef<"Dependant", 'String'>
    readonly age: FieldRef<"Dependant", 'Int'>
    readonly relationship: FieldRef<"Dependant", 'String'>
    readonly gender: FieldRef<"Dependant", 'String'>
    readonly member_type: FieldRef<"Dependant", 'MemberType'>
    readonly education: FieldRef<"Dependant", 'String'>
    readonly institution: FieldRef<"Dependant", 'String'>
    readonly part_time_job: FieldRef<"Dependant", 'Boolean'>
    readonly scholarship_availed: FieldRef<"Dependant", 'String'>
    readonly occupation: FieldRef<"Dependant", 'String'>
    readonly skill: FieldRef<"Dependant", 'String'>
    readonly namaz: FieldRef<"Dependant", 'String'>
    readonly income: FieldRef<"Dependant", 'Decimal'>
    readonly disability_or_health_need: FieldRef<"Dependant", 'String'>
    readonly created_at: FieldRef<"Dependant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dependant findUnique
   */
  export type DependantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependant
     */
    select?: DependantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependantInclude<ExtArgs> | null
    /**
     * Filter, which Dependant to fetch.
     */
    where: DependantWhereUniqueInput
  }

  /**
   * Dependant findUniqueOrThrow
   */
  export type DependantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependant
     */
    select?: DependantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependantInclude<ExtArgs> | null
    /**
     * Filter, which Dependant to fetch.
     */
    where: DependantWhereUniqueInput
  }

  /**
   * Dependant findFirst
   */
  export type DependantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependant
     */
    select?: DependantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependantInclude<ExtArgs> | null
    /**
     * Filter, which Dependant to fetch.
     */
    where?: DependantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependants to fetch.
     */
    orderBy?: DependantOrderByWithRelationInput | DependantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dependants.
     */
    cursor?: DependantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dependants.
     */
    distinct?: DependantScalarFieldEnum | DependantScalarFieldEnum[]
  }

  /**
   * Dependant findFirstOrThrow
   */
  export type DependantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependant
     */
    select?: DependantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependantInclude<ExtArgs> | null
    /**
     * Filter, which Dependant to fetch.
     */
    where?: DependantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependants to fetch.
     */
    orderBy?: DependantOrderByWithRelationInput | DependantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dependants.
     */
    cursor?: DependantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dependants.
     */
    distinct?: DependantScalarFieldEnum | DependantScalarFieldEnum[]
  }

  /**
   * Dependant findMany
   */
  export type DependantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependant
     */
    select?: DependantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependantInclude<ExtArgs> | null
    /**
     * Filter, which Dependants to fetch.
     */
    where?: DependantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependants to fetch.
     */
    orderBy?: DependantOrderByWithRelationInput | DependantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dependants.
     */
    cursor?: DependantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependants.
     */
    skip?: number
    distinct?: DependantScalarFieldEnum | DependantScalarFieldEnum[]
  }

  /**
   * Dependant create
   */
  export type DependantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependant
     */
    select?: DependantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependantInclude<ExtArgs> | null
    /**
     * The data needed to create a Dependant.
     */
    data: XOR<DependantCreateInput, DependantUncheckedCreateInput>
  }

  /**
   * Dependant createMany
   */
  export type DependantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dependants.
     */
    data: DependantCreateManyInput | DependantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dependant update
   */
  export type DependantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependant
     */
    select?: DependantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependantInclude<ExtArgs> | null
    /**
     * The data needed to update a Dependant.
     */
    data: XOR<DependantUpdateInput, DependantUncheckedUpdateInput>
    /**
     * Choose, which Dependant to update.
     */
    where: DependantWhereUniqueInput
  }

  /**
   * Dependant updateMany
   */
  export type DependantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dependants.
     */
    data: XOR<DependantUpdateManyMutationInput, DependantUncheckedUpdateManyInput>
    /**
     * Filter which Dependants to update
     */
    where?: DependantWhereInput
  }

  /**
   * Dependant upsert
   */
  export type DependantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependant
     */
    select?: DependantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependantInclude<ExtArgs> | null
    /**
     * The filter to search for the Dependant to update in case it exists.
     */
    where: DependantWhereUniqueInput
    /**
     * In case the Dependant found by the `where` argument doesn't exist, create a new Dependant with this data.
     */
    create: XOR<DependantCreateInput, DependantUncheckedCreateInput>
    /**
     * In case the Dependant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DependantUpdateInput, DependantUncheckedUpdateInput>
  }

  /**
   * Dependant delete
   */
  export type DependantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependant
     */
    select?: DependantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependantInclude<ExtArgs> | null
    /**
     * Filter which Dependant to delete.
     */
    where: DependantWhereUniqueInput
  }

  /**
   * Dependant deleteMany
   */
  export type DependantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dependants to delete
     */
    where?: DependantWhereInput
  }

  /**
   * Dependant without action
   */
  export type DependantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependant
     */
    select?: DependantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependantInclude<ExtArgs> | null
  }


  /**
   * Model ChartConfig
   */

  export type AggregateChartConfig = {
    _count: ChartConfigCountAggregateOutputType | null
    _avg: ChartConfigAvgAggregateOutputType | null
    _sum: ChartConfigSumAggregateOutputType | null
    _min: ChartConfigMinAggregateOutputType | null
    _max: ChartConfigMaxAggregateOutputType | null
  }

  export type ChartConfigAvgAggregateOutputType = {
    id: number | null
    display_order: number | null
  }

  export type ChartConfigSumAggregateOutputType = {
    id: number | null
    display_order: number | null
  }

  export type ChartConfigMinAggregateOutputType = {
    id: number | null
    title: string | null
    metric_key: string | null
    chart_type: $Enums.ChartType | null
    enabled: boolean | null
    display_order: number | null
    created_at: Date | null
  }

  export type ChartConfigMaxAggregateOutputType = {
    id: number | null
    title: string | null
    metric_key: string | null
    chart_type: $Enums.ChartType | null
    enabled: boolean | null
    display_order: number | null
    created_at: Date | null
  }

  export type ChartConfigCountAggregateOutputType = {
    id: number
    title: number
    metric_key: number
    chart_type: number
    enabled: number
    display_order: number
    created_at: number
    _all: number
  }


  export type ChartConfigAvgAggregateInputType = {
    id?: true
    display_order?: true
  }

  export type ChartConfigSumAggregateInputType = {
    id?: true
    display_order?: true
  }

  export type ChartConfigMinAggregateInputType = {
    id?: true
    title?: true
    metric_key?: true
    chart_type?: true
    enabled?: true
    display_order?: true
    created_at?: true
  }

  export type ChartConfigMaxAggregateInputType = {
    id?: true
    title?: true
    metric_key?: true
    chart_type?: true
    enabled?: true
    display_order?: true
    created_at?: true
  }

  export type ChartConfigCountAggregateInputType = {
    id?: true
    title?: true
    metric_key?: true
    chart_type?: true
    enabled?: true
    display_order?: true
    created_at?: true
    _all?: true
  }

  export type ChartConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChartConfig to aggregate.
     */
    where?: ChartConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChartConfigs to fetch.
     */
    orderBy?: ChartConfigOrderByWithRelationInput | ChartConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChartConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChartConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChartConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChartConfigs
    **/
    _count?: true | ChartConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChartConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChartConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChartConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChartConfigMaxAggregateInputType
  }

  export type GetChartConfigAggregateType<T extends ChartConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateChartConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChartConfig[P]>
      : GetScalarType<T[P], AggregateChartConfig[P]>
  }




  export type ChartConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChartConfigWhereInput
    orderBy?: ChartConfigOrderByWithAggregationInput | ChartConfigOrderByWithAggregationInput[]
    by: ChartConfigScalarFieldEnum[] | ChartConfigScalarFieldEnum
    having?: ChartConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChartConfigCountAggregateInputType | true
    _avg?: ChartConfigAvgAggregateInputType
    _sum?: ChartConfigSumAggregateInputType
    _min?: ChartConfigMinAggregateInputType
    _max?: ChartConfigMaxAggregateInputType
  }

  export type ChartConfigGroupByOutputType = {
    id: number
    title: string
    metric_key: string
    chart_type: $Enums.ChartType
    enabled: boolean
    display_order: number
    created_at: Date
    _count: ChartConfigCountAggregateOutputType | null
    _avg: ChartConfigAvgAggregateOutputType | null
    _sum: ChartConfigSumAggregateOutputType | null
    _min: ChartConfigMinAggregateOutputType | null
    _max: ChartConfigMaxAggregateOutputType | null
  }

  type GetChartConfigGroupByPayload<T extends ChartConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChartConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChartConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChartConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ChartConfigGroupByOutputType[P]>
        }
      >
    >


  export type ChartConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    metric_key?: boolean
    chart_type?: boolean
    enabled?: boolean
    display_order?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["chartConfig"]>


  export type ChartConfigSelectScalar = {
    id?: boolean
    title?: boolean
    metric_key?: boolean
    chart_type?: boolean
    enabled?: boolean
    display_order?: boolean
    created_at?: boolean
  }


  export type $ChartConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChartConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      metric_key: string
      chart_type: $Enums.ChartType
      enabled: boolean
      display_order: number
      created_at: Date
    }, ExtArgs["result"]["chartConfig"]>
    composites: {}
  }

  type ChartConfigGetPayload<S extends boolean | null | undefined | ChartConfigDefaultArgs> = $Result.GetResult<Prisma.$ChartConfigPayload, S>

  type ChartConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChartConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChartConfigCountAggregateInputType | true
    }

  export interface ChartConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChartConfig'], meta: { name: 'ChartConfig' } }
    /**
     * Find zero or one ChartConfig that matches the filter.
     * @param {ChartConfigFindUniqueArgs} args - Arguments to find a ChartConfig
     * @example
     * // Get one ChartConfig
     * const chartConfig = await prisma.chartConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChartConfigFindUniqueArgs>(args: SelectSubset<T, ChartConfigFindUniqueArgs<ExtArgs>>): Prisma__ChartConfigClient<$Result.GetResult<Prisma.$ChartConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ChartConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChartConfigFindUniqueOrThrowArgs} args - Arguments to find a ChartConfig
     * @example
     * // Get one ChartConfig
     * const chartConfig = await prisma.chartConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChartConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, ChartConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChartConfigClient<$Result.GetResult<Prisma.$ChartConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ChartConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartConfigFindFirstArgs} args - Arguments to find a ChartConfig
     * @example
     * // Get one ChartConfig
     * const chartConfig = await prisma.chartConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChartConfigFindFirstArgs>(args?: SelectSubset<T, ChartConfigFindFirstArgs<ExtArgs>>): Prisma__ChartConfigClient<$Result.GetResult<Prisma.$ChartConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ChartConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartConfigFindFirstOrThrowArgs} args - Arguments to find a ChartConfig
     * @example
     * // Get one ChartConfig
     * const chartConfig = await prisma.chartConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChartConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, ChartConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChartConfigClient<$Result.GetResult<Prisma.$ChartConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ChartConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChartConfigs
     * const chartConfigs = await prisma.chartConfig.findMany()
     * 
     * // Get first 10 ChartConfigs
     * const chartConfigs = await prisma.chartConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chartConfigWithIdOnly = await prisma.chartConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChartConfigFindManyArgs>(args?: SelectSubset<T, ChartConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChartConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ChartConfig.
     * @param {ChartConfigCreateArgs} args - Arguments to create a ChartConfig.
     * @example
     * // Create one ChartConfig
     * const ChartConfig = await prisma.chartConfig.create({
     *   data: {
     *     // ... data to create a ChartConfig
     *   }
     * })
     * 
     */
    create<T extends ChartConfigCreateArgs>(args: SelectSubset<T, ChartConfigCreateArgs<ExtArgs>>): Prisma__ChartConfigClient<$Result.GetResult<Prisma.$ChartConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ChartConfigs.
     * @param {ChartConfigCreateManyArgs} args - Arguments to create many ChartConfigs.
     * @example
     * // Create many ChartConfigs
     * const chartConfig = await prisma.chartConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChartConfigCreateManyArgs>(args?: SelectSubset<T, ChartConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChartConfig.
     * @param {ChartConfigDeleteArgs} args - Arguments to delete one ChartConfig.
     * @example
     * // Delete one ChartConfig
     * const ChartConfig = await prisma.chartConfig.delete({
     *   where: {
     *     // ... filter to delete one ChartConfig
     *   }
     * })
     * 
     */
    delete<T extends ChartConfigDeleteArgs>(args: SelectSubset<T, ChartConfigDeleteArgs<ExtArgs>>): Prisma__ChartConfigClient<$Result.GetResult<Prisma.$ChartConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ChartConfig.
     * @param {ChartConfigUpdateArgs} args - Arguments to update one ChartConfig.
     * @example
     * // Update one ChartConfig
     * const chartConfig = await prisma.chartConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChartConfigUpdateArgs>(args: SelectSubset<T, ChartConfigUpdateArgs<ExtArgs>>): Prisma__ChartConfigClient<$Result.GetResult<Prisma.$ChartConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ChartConfigs.
     * @param {ChartConfigDeleteManyArgs} args - Arguments to filter ChartConfigs to delete.
     * @example
     * // Delete a few ChartConfigs
     * const { count } = await prisma.chartConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChartConfigDeleteManyArgs>(args?: SelectSubset<T, ChartConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChartConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChartConfigs
     * const chartConfig = await prisma.chartConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChartConfigUpdateManyArgs>(args: SelectSubset<T, ChartConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChartConfig.
     * @param {ChartConfigUpsertArgs} args - Arguments to update or create a ChartConfig.
     * @example
     * // Update or create a ChartConfig
     * const chartConfig = await prisma.chartConfig.upsert({
     *   create: {
     *     // ... data to create a ChartConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChartConfig we want to update
     *   }
     * })
     */
    upsert<T extends ChartConfigUpsertArgs>(args: SelectSubset<T, ChartConfigUpsertArgs<ExtArgs>>): Prisma__ChartConfigClient<$Result.GetResult<Prisma.$ChartConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ChartConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartConfigCountArgs} args - Arguments to filter ChartConfigs to count.
     * @example
     * // Count the number of ChartConfigs
     * const count = await prisma.chartConfig.count({
     *   where: {
     *     // ... the filter for the ChartConfigs we want to count
     *   }
     * })
    **/
    count<T extends ChartConfigCountArgs>(
      args?: Subset<T, ChartConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChartConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChartConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChartConfigAggregateArgs>(args: Subset<T, ChartConfigAggregateArgs>): Prisma.PrismaPromise<GetChartConfigAggregateType<T>>

    /**
     * Group by ChartConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChartConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChartConfigGroupByArgs['orderBy'] }
        : { orderBy?: ChartConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChartConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChartConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChartConfig model
   */
  readonly fields: ChartConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChartConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChartConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChartConfig model
   */ 
  interface ChartConfigFieldRefs {
    readonly id: FieldRef<"ChartConfig", 'Int'>
    readonly title: FieldRef<"ChartConfig", 'String'>
    readonly metric_key: FieldRef<"ChartConfig", 'String'>
    readonly chart_type: FieldRef<"ChartConfig", 'ChartType'>
    readonly enabled: FieldRef<"ChartConfig", 'Boolean'>
    readonly display_order: FieldRef<"ChartConfig", 'Int'>
    readonly created_at: FieldRef<"ChartConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChartConfig findUnique
   */
  export type ChartConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartConfig
     */
    select?: ChartConfigSelect<ExtArgs> | null
    /**
     * Filter, which ChartConfig to fetch.
     */
    where: ChartConfigWhereUniqueInput
  }

  /**
   * ChartConfig findUniqueOrThrow
   */
  export type ChartConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartConfig
     */
    select?: ChartConfigSelect<ExtArgs> | null
    /**
     * Filter, which ChartConfig to fetch.
     */
    where: ChartConfigWhereUniqueInput
  }

  /**
   * ChartConfig findFirst
   */
  export type ChartConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartConfig
     */
    select?: ChartConfigSelect<ExtArgs> | null
    /**
     * Filter, which ChartConfig to fetch.
     */
    where?: ChartConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChartConfigs to fetch.
     */
    orderBy?: ChartConfigOrderByWithRelationInput | ChartConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChartConfigs.
     */
    cursor?: ChartConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChartConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChartConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChartConfigs.
     */
    distinct?: ChartConfigScalarFieldEnum | ChartConfigScalarFieldEnum[]
  }

  /**
   * ChartConfig findFirstOrThrow
   */
  export type ChartConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartConfig
     */
    select?: ChartConfigSelect<ExtArgs> | null
    /**
     * Filter, which ChartConfig to fetch.
     */
    where?: ChartConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChartConfigs to fetch.
     */
    orderBy?: ChartConfigOrderByWithRelationInput | ChartConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChartConfigs.
     */
    cursor?: ChartConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChartConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChartConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChartConfigs.
     */
    distinct?: ChartConfigScalarFieldEnum | ChartConfigScalarFieldEnum[]
  }

  /**
   * ChartConfig findMany
   */
  export type ChartConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartConfig
     */
    select?: ChartConfigSelect<ExtArgs> | null
    /**
     * Filter, which ChartConfigs to fetch.
     */
    where?: ChartConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChartConfigs to fetch.
     */
    orderBy?: ChartConfigOrderByWithRelationInput | ChartConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChartConfigs.
     */
    cursor?: ChartConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChartConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChartConfigs.
     */
    skip?: number
    distinct?: ChartConfigScalarFieldEnum | ChartConfigScalarFieldEnum[]
  }

  /**
   * ChartConfig create
   */
  export type ChartConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartConfig
     */
    select?: ChartConfigSelect<ExtArgs> | null
    /**
     * The data needed to create a ChartConfig.
     */
    data: XOR<ChartConfigCreateInput, ChartConfigUncheckedCreateInput>
  }

  /**
   * ChartConfig createMany
   */
  export type ChartConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChartConfigs.
     */
    data: ChartConfigCreateManyInput | ChartConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChartConfig update
   */
  export type ChartConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartConfig
     */
    select?: ChartConfigSelect<ExtArgs> | null
    /**
     * The data needed to update a ChartConfig.
     */
    data: XOR<ChartConfigUpdateInput, ChartConfigUncheckedUpdateInput>
    /**
     * Choose, which ChartConfig to update.
     */
    where: ChartConfigWhereUniqueInput
  }

  /**
   * ChartConfig updateMany
   */
  export type ChartConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChartConfigs.
     */
    data: XOR<ChartConfigUpdateManyMutationInput, ChartConfigUncheckedUpdateManyInput>
    /**
     * Filter which ChartConfigs to update
     */
    where?: ChartConfigWhereInput
  }

  /**
   * ChartConfig upsert
   */
  export type ChartConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartConfig
     */
    select?: ChartConfigSelect<ExtArgs> | null
    /**
     * The filter to search for the ChartConfig to update in case it exists.
     */
    where: ChartConfigWhereUniqueInput
    /**
     * In case the ChartConfig found by the `where` argument doesn't exist, create a new ChartConfig with this data.
     */
    create: XOR<ChartConfigCreateInput, ChartConfigUncheckedCreateInput>
    /**
     * In case the ChartConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChartConfigUpdateInput, ChartConfigUncheckedUpdateInput>
  }

  /**
   * ChartConfig delete
   */
  export type ChartConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartConfig
     */
    select?: ChartConfigSelect<ExtArgs> | null
    /**
     * Filter which ChartConfig to delete.
     */
    where: ChartConfigWhereUniqueInput
  }

  /**
   * ChartConfig deleteMany
   */
  export type ChartConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChartConfigs to delete
     */
    where?: ChartConfigWhereInput
  }

  /**
   * ChartConfig without action
   */
  export type ChartConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartConfig
     */
    select?: ChartConfigSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AreaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ward_code: 'ward_code',
    target_households: 'target_households',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SurveyScalarFieldEnum: {
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

  export type SurveyScalarFieldEnum = (typeof SurveyScalarFieldEnum)[keyof typeof SurveyScalarFieldEnum]


  export const DependantScalarFieldEnum: {
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

  export type DependantScalarFieldEnum = (typeof DependantScalarFieldEnum)[keyof typeof DependantScalarFieldEnum]


  export const ChartConfigScalarFieldEnum: {
    id: 'id',
    title: 'title',
    metric_key: 'metric_key',
    chart_type: 'chart_type',
    enabled: 'enabled',
    display_order: 'display_order',
    created_at: 'created_at'
  };

  export type ChartConfigScalarFieldEnum = (typeof ChartConfigScalarFieldEnum)[keyof typeof ChartConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'SurveyStatus'
   */
  export type EnumSurveyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SurveyStatus'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'MemberType'
   */
  export type EnumMemberTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberType'>
    


  /**
   * Reference to a field of type 'ChartType'
   */
  export type EnumChartTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChartType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    id?: IntFilter<"Area"> | number
    name?: StringFilter<"Area"> | string
    ward_code?: StringFilter<"Area"> | string
    target_households?: IntFilter<"Area"> | number
    active?: BoolFilter<"Area"> | boolean
    created_at?: DateTimeFilter<"Area"> | Date | string
    updated_at?: DateTimeFilter<"Area"> | Date | string
    users?: UserListRelationFilter
    surveys?: SurveyListRelationFilter
  }

  export type AreaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ward_code?: SortOrder
    target_households?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: UserOrderByRelationAggregateInput
    surveys?: SurveyOrderByRelationAggregateInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ward_code?: string
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    name?: StringFilter<"Area"> | string
    target_households?: IntFilter<"Area"> | number
    active?: BoolFilter<"Area"> | boolean
    created_at?: DateTimeFilter<"Area"> | Date | string
    updated_at?: DateTimeFilter<"Area"> | Date | string
    users?: UserListRelationFilter
    surveys?: SurveyListRelationFilter
  }, "id" | "ward_code">

  export type AreaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ward_code?: SortOrder
    target_households?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AreaCountOrderByAggregateInput
    _avg?: AreaAvgOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
    _sum?: AreaSumOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Area"> | number
    name?: StringWithAggregatesFilter<"Area"> | string
    ward_code?: StringWithAggregatesFilter<"Area"> | string
    target_households?: IntWithAggregatesFilter<"Area"> | number
    active?: BoolWithAggregatesFilter<"Area"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Area"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Area"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    area_id?: IntNullableFilter<"User"> | number | null
    active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    area?: XOR<AreaNullableRelationFilter, AreaWhereInput> | null
    surveys_taken?: SurveyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    area_id?: SortOrderInput | SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    area?: AreaOrderByWithRelationInput
    surveys_taken?: SurveyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    area_id?: IntNullableFilter<"User"> | number | null
    active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    area?: XOR<AreaNullableRelationFilter, AreaWhereInput> | null
    surveys_taken?: SurveyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    area_id?: SortOrderInput | SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    area_id?: IntNullableWithAggregatesFilter<"User"> | number | null
    active?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SurveyWhereInput = {
    AND?: SurveyWhereInput | SurveyWhereInput[]
    OR?: SurveyWhereInput[]
    NOT?: SurveyWhereInput | SurveyWhereInput[]
    id?: IntFilter<"Survey"> | number
    survey_code?: StringFilter<"Survey"> | string
    area_id?: IntFilter<"Survey"> | number
    surveyor_id?: IntFilter<"Survey"> | number
    status?: EnumSurveyStatusFilter<"Survey"> | $Enums.SurveyStatus
    consent_given?: BoolFilter<"Survey"> | boolean
    head_name?: StringFilter<"Survey"> | string
    head_age?: IntNullableFilter<"Survey"> | number | null
    head_gender?: StringNullableFilter<"Survey"> | string | null
    head_marital_status?: StringNullableFilter<"Survey"> | string | null
    head_education?: StringNullableFilter<"Survey"> | string | null
    head_occupation?: StringNullableFilter<"Survey"> | string | null
    head_skill?: StringNullableFilter<"Survey"> | string | null
    head_namaz?: StringNullableFilter<"Survey"> | string | null
    head_income?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    address?: StringFilter<"Survey"> | string
    phone?: StringNullableFilter<"Survey"> | string | null
    latitude?: DecimalNullableFilter<"Survey"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Survey"> | Decimal | DecimalJsLike | number | string | null
    spouse_name?: StringNullableFilter<"Survey"> | string | null
    spouse_age?: IntNullableFilter<"Survey"> | number | null
    spouse_education?: StringNullableFilter<"Survey"> | string | null
    spouse_occupation?: StringNullableFilter<"Survey"> | string | null
    spouse_skill?: StringNullableFilter<"Survey"> | string | null
    spouse_namaz?: StringNullableFilter<"Survey"> | string | null
    spouse_income?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    house_tenure?: StringNullableFilter<"Survey"> | string | null
    house_condition?: StringNullableFilter<"Survey"> | string | null
    rooms?: IntNullableFilter<"Survey"> | number | null
    toilet_access?: StringNullableFilter<"Survey"> | string | null
    drinking_water?: StringNullableFilter<"Survey"> | string | null
    electricity_access?: StringNullableFilter<"Survey"> | string | null
    loan_types?: JsonNullableFilter<"Survey">
    loan_amount?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: BoolFilter<"Survey"> | boolean
    govt_scheme_names?: StringNullableFilter<"Survey"> | string | null
    govt_scheme_amount?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    bedridden?: BoolFilter<"Survey"> | boolean
    bedridden_monthly_expense?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    ration_card?: BoolFilter<"Survey"> | boolean
    aadhaar_status?: StringNullableFilter<"Survey"> | string | null
    health_card?: BoolFilter<"Survey"> | boolean
    bank_account?: BoolFilter<"Survey"> | boolean
    voter_id_status?: StringNullableFilter<"Survey"> | string | null
    vehicles?: JsonNullableFilter<"Survey">
    fridge?: BoolFilter<"Survey"> | boolean
    television?: BoolFilter<"Survey"> | boolean
    tv_connection?: StringNullableFilter<"Survey"> | string | null
    tv_type?: StringNullableFilter<"Survey"> | string | null
    washing_machine?: BoolFilter<"Survey"> | boolean
    smartphone_access?: StringNullableFilter<"Survey"> | string | null
    internet_access?: StringNullableFilter<"Survey"> | string | null
    monthly_household_income?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    monthly_household_expense?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    food_security?: StringNullableFilter<"Survey"> | string | null
    vulnerable_category?: JsonNullableFilter<"Survey">
    notes?: StringNullableFilter<"Survey"> | string | null
    surveyed_at?: DateTimeFilter<"Survey"> | Date | string
    created_at?: DateTimeFilter<"Survey"> | Date | string
    updated_at?: DateTimeFilter<"Survey"> | Date | string
    area?: XOR<AreaRelationFilter, AreaWhereInput>
    surveyor?: XOR<UserRelationFilter, UserWhereInput>
    dependants?: DependantListRelationFilter
  }

  export type SurveyOrderByWithRelationInput = {
    id?: SortOrder
    survey_code?: SortOrder
    area_id?: SortOrder
    surveyor_id?: SortOrder
    status?: SortOrder
    consent_given?: SortOrder
    head_name?: SortOrder
    head_age?: SortOrderInput | SortOrder
    head_gender?: SortOrderInput | SortOrder
    head_marital_status?: SortOrderInput | SortOrder
    head_education?: SortOrderInput | SortOrder
    head_occupation?: SortOrderInput | SortOrder
    head_skill?: SortOrderInput | SortOrder
    head_namaz?: SortOrderInput | SortOrder
    head_income?: SortOrder
    address?: SortOrder
    phone?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    spouse_name?: SortOrderInput | SortOrder
    spouse_age?: SortOrderInput | SortOrder
    spouse_education?: SortOrderInput | SortOrder
    spouse_occupation?: SortOrderInput | SortOrder
    spouse_skill?: SortOrderInput | SortOrder
    spouse_namaz?: SortOrderInput | SortOrder
    spouse_income?: SortOrder
    house_tenure?: SortOrderInput | SortOrder
    house_condition?: SortOrderInput | SortOrder
    rooms?: SortOrderInput | SortOrder
    toilet_access?: SortOrderInput | SortOrder
    drinking_water?: SortOrderInput | SortOrder
    electricity_access?: SortOrderInput | SortOrder
    loan_types?: SortOrderInput | SortOrder
    loan_amount?: SortOrder
    govt_scheme_availed?: SortOrder
    govt_scheme_names?: SortOrderInput | SortOrder
    govt_scheme_amount?: SortOrder
    bedridden?: SortOrder
    bedridden_monthly_expense?: SortOrder
    ration_card?: SortOrder
    aadhaar_status?: SortOrderInput | SortOrder
    health_card?: SortOrder
    bank_account?: SortOrder
    voter_id_status?: SortOrderInput | SortOrder
    vehicles?: SortOrderInput | SortOrder
    fridge?: SortOrder
    television?: SortOrder
    tv_connection?: SortOrderInput | SortOrder
    tv_type?: SortOrderInput | SortOrder
    washing_machine?: SortOrder
    smartphone_access?: SortOrderInput | SortOrder
    internet_access?: SortOrderInput | SortOrder
    monthly_household_income?: SortOrder
    monthly_household_expense?: SortOrder
    food_security?: SortOrderInput | SortOrder
    vulnerable_category?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    surveyed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    area?: AreaOrderByWithRelationInput
    surveyor?: UserOrderByWithRelationInput
    dependants?: DependantOrderByRelationAggregateInput
  }

  export type SurveyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    survey_code?: string
    AND?: SurveyWhereInput | SurveyWhereInput[]
    OR?: SurveyWhereInput[]
    NOT?: SurveyWhereInput | SurveyWhereInput[]
    area_id?: IntFilter<"Survey"> | number
    surveyor_id?: IntFilter<"Survey"> | number
    status?: EnumSurveyStatusFilter<"Survey"> | $Enums.SurveyStatus
    consent_given?: BoolFilter<"Survey"> | boolean
    head_name?: StringFilter<"Survey"> | string
    head_age?: IntNullableFilter<"Survey"> | number | null
    head_gender?: StringNullableFilter<"Survey"> | string | null
    head_marital_status?: StringNullableFilter<"Survey"> | string | null
    head_education?: StringNullableFilter<"Survey"> | string | null
    head_occupation?: StringNullableFilter<"Survey"> | string | null
    head_skill?: StringNullableFilter<"Survey"> | string | null
    head_namaz?: StringNullableFilter<"Survey"> | string | null
    head_income?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    address?: StringFilter<"Survey"> | string
    phone?: StringNullableFilter<"Survey"> | string | null
    latitude?: DecimalNullableFilter<"Survey"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Survey"> | Decimal | DecimalJsLike | number | string | null
    spouse_name?: StringNullableFilter<"Survey"> | string | null
    spouse_age?: IntNullableFilter<"Survey"> | number | null
    spouse_education?: StringNullableFilter<"Survey"> | string | null
    spouse_occupation?: StringNullableFilter<"Survey"> | string | null
    spouse_skill?: StringNullableFilter<"Survey"> | string | null
    spouse_namaz?: StringNullableFilter<"Survey"> | string | null
    spouse_income?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    house_tenure?: StringNullableFilter<"Survey"> | string | null
    house_condition?: StringNullableFilter<"Survey"> | string | null
    rooms?: IntNullableFilter<"Survey"> | number | null
    toilet_access?: StringNullableFilter<"Survey"> | string | null
    drinking_water?: StringNullableFilter<"Survey"> | string | null
    electricity_access?: StringNullableFilter<"Survey"> | string | null
    loan_types?: JsonNullableFilter<"Survey">
    loan_amount?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: BoolFilter<"Survey"> | boolean
    govt_scheme_names?: StringNullableFilter<"Survey"> | string | null
    govt_scheme_amount?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    bedridden?: BoolFilter<"Survey"> | boolean
    bedridden_monthly_expense?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    ration_card?: BoolFilter<"Survey"> | boolean
    aadhaar_status?: StringNullableFilter<"Survey"> | string | null
    health_card?: BoolFilter<"Survey"> | boolean
    bank_account?: BoolFilter<"Survey"> | boolean
    voter_id_status?: StringNullableFilter<"Survey"> | string | null
    vehicles?: JsonNullableFilter<"Survey">
    fridge?: BoolFilter<"Survey"> | boolean
    television?: BoolFilter<"Survey"> | boolean
    tv_connection?: StringNullableFilter<"Survey"> | string | null
    tv_type?: StringNullableFilter<"Survey"> | string | null
    washing_machine?: BoolFilter<"Survey"> | boolean
    smartphone_access?: StringNullableFilter<"Survey"> | string | null
    internet_access?: StringNullableFilter<"Survey"> | string | null
    monthly_household_income?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    monthly_household_expense?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    food_security?: StringNullableFilter<"Survey"> | string | null
    vulnerable_category?: JsonNullableFilter<"Survey">
    notes?: StringNullableFilter<"Survey"> | string | null
    surveyed_at?: DateTimeFilter<"Survey"> | Date | string
    created_at?: DateTimeFilter<"Survey"> | Date | string
    updated_at?: DateTimeFilter<"Survey"> | Date | string
    area?: XOR<AreaRelationFilter, AreaWhereInput>
    surveyor?: XOR<UserRelationFilter, UserWhereInput>
    dependants?: DependantListRelationFilter
  }, "id" | "survey_code">

  export type SurveyOrderByWithAggregationInput = {
    id?: SortOrder
    survey_code?: SortOrder
    area_id?: SortOrder
    surveyor_id?: SortOrder
    status?: SortOrder
    consent_given?: SortOrder
    head_name?: SortOrder
    head_age?: SortOrderInput | SortOrder
    head_gender?: SortOrderInput | SortOrder
    head_marital_status?: SortOrderInput | SortOrder
    head_education?: SortOrderInput | SortOrder
    head_occupation?: SortOrderInput | SortOrder
    head_skill?: SortOrderInput | SortOrder
    head_namaz?: SortOrderInput | SortOrder
    head_income?: SortOrder
    address?: SortOrder
    phone?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    spouse_name?: SortOrderInput | SortOrder
    spouse_age?: SortOrderInput | SortOrder
    spouse_education?: SortOrderInput | SortOrder
    spouse_occupation?: SortOrderInput | SortOrder
    spouse_skill?: SortOrderInput | SortOrder
    spouse_namaz?: SortOrderInput | SortOrder
    spouse_income?: SortOrder
    house_tenure?: SortOrderInput | SortOrder
    house_condition?: SortOrderInput | SortOrder
    rooms?: SortOrderInput | SortOrder
    toilet_access?: SortOrderInput | SortOrder
    drinking_water?: SortOrderInput | SortOrder
    electricity_access?: SortOrderInput | SortOrder
    loan_types?: SortOrderInput | SortOrder
    loan_amount?: SortOrder
    govt_scheme_availed?: SortOrder
    govt_scheme_names?: SortOrderInput | SortOrder
    govt_scheme_amount?: SortOrder
    bedridden?: SortOrder
    bedridden_monthly_expense?: SortOrder
    ration_card?: SortOrder
    aadhaar_status?: SortOrderInput | SortOrder
    health_card?: SortOrder
    bank_account?: SortOrder
    voter_id_status?: SortOrderInput | SortOrder
    vehicles?: SortOrderInput | SortOrder
    fridge?: SortOrder
    television?: SortOrder
    tv_connection?: SortOrderInput | SortOrder
    tv_type?: SortOrderInput | SortOrder
    washing_machine?: SortOrder
    smartphone_access?: SortOrderInput | SortOrder
    internet_access?: SortOrderInput | SortOrder
    monthly_household_income?: SortOrder
    monthly_household_expense?: SortOrder
    food_security?: SortOrderInput | SortOrder
    vulnerable_category?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    surveyed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SurveyCountOrderByAggregateInput
    _avg?: SurveyAvgOrderByAggregateInput
    _max?: SurveyMaxOrderByAggregateInput
    _min?: SurveyMinOrderByAggregateInput
    _sum?: SurveySumOrderByAggregateInput
  }

  export type SurveyScalarWhereWithAggregatesInput = {
    AND?: SurveyScalarWhereWithAggregatesInput | SurveyScalarWhereWithAggregatesInput[]
    OR?: SurveyScalarWhereWithAggregatesInput[]
    NOT?: SurveyScalarWhereWithAggregatesInput | SurveyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Survey"> | number
    survey_code?: StringWithAggregatesFilter<"Survey"> | string
    area_id?: IntWithAggregatesFilter<"Survey"> | number
    surveyor_id?: IntWithAggregatesFilter<"Survey"> | number
    status?: EnumSurveyStatusWithAggregatesFilter<"Survey"> | $Enums.SurveyStatus
    consent_given?: BoolWithAggregatesFilter<"Survey"> | boolean
    head_name?: StringWithAggregatesFilter<"Survey"> | string
    head_age?: IntNullableWithAggregatesFilter<"Survey"> | number | null
    head_gender?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    head_marital_status?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    head_education?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    head_occupation?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    head_skill?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    head_namaz?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    head_income?: DecimalWithAggregatesFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    address?: StringWithAggregatesFilter<"Survey"> | string
    phone?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    latitude?: DecimalNullableWithAggregatesFilter<"Survey"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"Survey"> | Decimal | DecimalJsLike | number | string | null
    spouse_name?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    spouse_age?: IntNullableWithAggregatesFilter<"Survey"> | number | null
    spouse_education?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    spouse_occupation?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    spouse_skill?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    spouse_namaz?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    spouse_income?: DecimalWithAggregatesFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    house_tenure?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    house_condition?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    rooms?: IntNullableWithAggregatesFilter<"Survey"> | number | null
    toilet_access?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    drinking_water?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    electricity_access?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    loan_types?: JsonNullableWithAggregatesFilter<"Survey">
    loan_amount?: DecimalWithAggregatesFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: BoolWithAggregatesFilter<"Survey"> | boolean
    govt_scheme_names?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    govt_scheme_amount?: DecimalWithAggregatesFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    bedridden?: BoolWithAggregatesFilter<"Survey"> | boolean
    bedridden_monthly_expense?: DecimalWithAggregatesFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    ration_card?: BoolWithAggregatesFilter<"Survey"> | boolean
    aadhaar_status?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    health_card?: BoolWithAggregatesFilter<"Survey"> | boolean
    bank_account?: BoolWithAggregatesFilter<"Survey"> | boolean
    voter_id_status?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    vehicles?: JsonNullableWithAggregatesFilter<"Survey">
    fridge?: BoolWithAggregatesFilter<"Survey"> | boolean
    television?: BoolWithAggregatesFilter<"Survey"> | boolean
    tv_connection?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    tv_type?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    washing_machine?: BoolWithAggregatesFilter<"Survey"> | boolean
    smartphone_access?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    internet_access?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    monthly_household_income?: DecimalWithAggregatesFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    monthly_household_expense?: DecimalWithAggregatesFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    food_security?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    vulnerable_category?: JsonNullableWithAggregatesFilter<"Survey">
    notes?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    surveyed_at?: DateTimeWithAggregatesFilter<"Survey"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Survey"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Survey"> | Date | string
  }

  export type DependantWhereInput = {
    AND?: DependantWhereInput | DependantWhereInput[]
    OR?: DependantWhereInput[]
    NOT?: DependantWhereInput | DependantWhereInput[]
    id?: IntFilter<"Dependant"> | number
    survey_id?: IntFilter<"Dependant"> | number
    name?: StringFilter<"Dependant"> | string
    age?: IntNullableFilter<"Dependant"> | number | null
    relationship?: StringNullableFilter<"Dependant"> | string | null
    gender?: StringNullableFilter<"Dependant"> | string | null
    member_type?: EnumMemberTypeFilter<"Dependant"> | $Enums.MemberType
    education?: StringNullableFilter<"Dependant"> | string | null
    institution?: StringNullableFilter<"Dependant"> | string | null
    part_time_job?: BoolFilter<"Dependant"> | boolean
    scholarship_availed?: StringNullableFilter<"Dependant"> | string | null
    occupation?: StringNullableFilter<"Dependant"> | string | null
    skill?: StringNullableFilter<"Dependant"> | string | null
    namaz?: StringNullableFilter<"Dependant"> | string | null
    income?: DecimalFilter<"Dependant"> | Decimal | DecimalJsLike | number | string
    disability_or_health_need?: StringNullableFilter<"Dependant"> | string | null
    created_at?: DateTimeFilter<"Dependant"> | Date | string
    survey?: XOR<SurveyRelationFilter, SurveyWhereInput>
  }

  export type DependantOrderByWithRelationInput = {
    id?: SortOrder
    survey_id?: SortOrder
    name?: SortOrder
    age?: SortOrderInput | SortOrder
    relationship?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    member_type?: SortOrder
    education?: SortOrderInput | SortOrder
    institution?: SortOrderInput | SortOrder
    part_time_job?: SortOrder
    scholarship_availed?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    skill?: SortOrderInput | SortOrder
    namaz?: SortOrderInput | SortOrder
    income?: SortOrder
    disability_or_health_need?: SortOrderInput | SortOrder
    created_at?: SortOrder
    survey?: SurveyOrderByWithRelationInput
  }

  export type DependantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DependantWhereInput | DependantWhereInput[]
    OR?: DependantWhereInput[]
    NOT?: DependantWhereInput | DependantWhereInput[]
    survey_id?: IntFilter<"Dependant"> | number
    name?: StringFilter<"Dependant"> | string
    age?: IntNullableFilter<"Dependant"> | number | null
    relationship?: StringNullableFilter<"Dependant"> | string | null
    gender?: StringNullableFilter<"Dependant"> | string | null
    member_type?: EnumMemberTypeFilter<"Dependant"> | $Enums.MemberType
    education?: StringNullableFilter<"Dependant"> | string | null
    institution?: StringNullableFilter<"Dependant"> | string | null
    part_time_job?: BoolFilter<"Dependant"> | boolean
    scholarship_availed?: StringNullableFilter<"Dependant"> | string | null
    occupation?: StringNullableFilter<"Dependant"> | string | null
    skill?: StringNullableFilter<"Dependant"> | string | null
    namaz?: StringNullableFilter<"Dependant"> | string | null
    income?: DecimalFilter<"Dependant"> | Decimal | DecimalJsLike | number | string
    disability_or_health_need?: StringNullableFilter<"Dependant"> | string | null
    created_at?: DateTimeFilter<"Dependant"> | Date | string
    survey?: XOR<SurveyRelationFilter, SurveyWhereInput>
  }, "id">

  export type DependantOrderByWithAggregationInput = {
    id?: SortOrder
    survey_id?: SortOrder
    name?: SortOrder
    age?: SortOrderInput | SortOrder
    relationship?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    member_type?: SortOrder
    education?: SortOrderInput | SortOrder
    institution?: SortOrderInput | SortOrder
    part_time_job?: SortOrder
    scholarship_availed?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    skill?: SortOrderInput | SortOrder
    namaz?: SortOrderInput | SortOrder
    income?: SortOrder
    disability_or_health_need?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: DependantCountOrderByAggregateInput
    _avg?: DependantAvgOrderByAggregateInput
    _max?: DependantMaxOrderByAggregateInput
    _min?: DependantMinOrderByAggregateInput
    _sum?: DependantSumOrderByAggregateInput
  }

  export type DependantScalarWhereWithAggregatesInput = {
    AND?: DependantScalarWhereWithAggregatesInput | DependantScalarWhereWithAggregatesInput[]
    OR?: DependantScalarWhereWithAggregatesInput[]
    NOT?: DependantScalarWhereWithAggregatesInput | DependantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dependant"> | number
    survey_id?: IntWithAggregatesFilter<"Dependant"> | number
    name?: StringWithAggregatesFilter<"Dependant"> | string
    age?: IntNullableWithAggregatesFilter<"Dependant"> | number | null
    relationship?: StringNullableWithAggregatesFilter<"Dependant"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Dependant"> | string | null
    member_type?: EnumMemberTypeWithAggregatesFilter<"Dependant"> | $Enums.MemberType
    education?: StringNullableWithAggregatesFilter<"Dependant"> | string | null
    institution?: StringNullableWithAggregatesFilter<"Dependant"> | string | null
    part_time_job?: BoolWithAggregatesFilter<"Dependant"> | boolean
    scholarship_availed?: StringNullableWithAggregatesFilter<"Dependant"> | string | null
    occupation?: StringNullableWithAggregatesFilter<"Dependant"> | string | null
    skill?: StringNullableWithAggregatesFilter<"Dependant"> | string | null
    namaz?: StringNullableWithAggregatesFilter<"Dependant"> | string | null
    income?: DecimalWithAggregatesFilter<"Dependant"> | Decimal | DecimalJsLike | number | string
    disability_or_health_need?: StringNullableWithAggregatesFilter<"Dependant"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Dependant"> | Date | string
  }

  export type ChartConfigWhereInput = {
    AND?: ChartConfigWhereInput | ChartConfigWhereInput[]
    OR?: ChartConfigWhereInput[]
    NOT?: ChartConfigWhereInput | ChartConfigWhereInput[]
    id?: IntFilter<"ChartConfig"> | number
    title?: StringFilter<"ChartConfig"> | string
    metric_key?: StringFilter<"ChartConfig"> | string
    chart_type?: EnumChartTypeFilter<"ChartConfig"> | $Enums.ChartType
    enabled?: BoolFilter<"ChartConfig"> | boolean
    display_order?: IntFilter<"ChartConfig"> | number
    created_at?: DateTimeFilter<"ChartConfig"> | Date | string
  }

  export type ChartConfigOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    metric_key?: SortOrder
    chart_type?: SortOrder
    enabled?: SortOrder
    display_order?: SortOrder
    created_at?: SortOrder
  }

  export type ChartConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChartConfigWhereInput | ChartConfigWhereInput[]
    OR?: ChartConfigWhereInput[]
    NOT?: ChartConfigWhereInput | ChartConfigWhereInput[]
    title?: StringFilter<"ChartConfig"> | string
    metric_key?: StringFilter<"ChartConfig"> | string
    chart_type?: EnumChartTypeFilter<"ChartConfig"> | $Enums.ChartType
    enabled?: BoolFilter<"ChartConfig"> | boolean
    display_order?: IntFilter<"ChartConfig"> | number
    created_at?: DateTimeFilter<"ChartConfig"> | Date | string
  }, "id">

  export type ChartConfigOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    metric_key?: SortOrder
    chart_type?: SortOrder
    enabled?: SortOrder
    display_order?: SortOrder
    created_at?: SortOrder
    _count?: ChartConfigCountOrderByAggregateInput
    _avg?: ChartConfigAvgOrderByAggregateInput
    _max?: ChartConfigMaxOrderByAggregateInput
    _min?: ChartConfigMinOrderByAggregateInput
    _sum?: ChartConfigSumOrderByAggregateInput
  }

  export type ChartConfigScalarWhereWithAggregatesInput = {
    AND?: ChartConfigScalarWhereWithAggregatesInput | ChartConfigScalarWhereWithAggregatesInput[]
    OR?: ChartConfigScalarWhereWithAggregatesInput[]
    NOT?: ChartConfigScalarWhereWithAggregatesInput | ChartConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChartConfig"> | number
    title?: StringWithAggregatesFilter<"ChartConfig"> | string
    metric_key?: StringWithAggregatesFilter<"ChartConfig"> | string
    chart_type?: EnumChartTypeWithAggregatesFilter<"ChartConfig"> | $Enums.ChartType
    enabled?: BoolWithAggregatesFilter<"ChartConfig"> | boolean
    display_order?: IntWithAggregatesFilter<"ChartConfig"> | number
    created_at?: DateTimeWithAggregatesFilter<"ChartConfig"> | Date | string
  }

  export type AreaCreateInput = {
    name: string
    ward_code: string
    target_households?: number
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserCreateNestedManyWithoutAreaInput
    surveys?: SurveyCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateInput = {
    id?: number
    name: string
    ward_code: string
    target_households?: number
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutAreaInput
    surveys?: SurveyUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    ward_code?: StringFieldUpdateOperationsInput | string
    target_households?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutAreaNestedInput
    surveys?: SurveyUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ward_code?: StringFieldUpdateOperationsInput | string
    target_households?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutAreaNestedInput
    surveys?: SurveyUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCreateManyInput = {
    id?: number
    name: string
    ward_code: string
    target_households?: number
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AreaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    ward_code?: StringFieldUpdateOperationsInput | string
    target_households?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ward_code?: StringFieldUpdateOperationsInput | string
    target_households?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password_hash: string
    role: $Enums.Role
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    area?: AreaCreateNestedOneWithoutUsersInput
    surveys_taken?: SurveyCreateNestedManyWithoutSurveyorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    role: $Enums.Role
    area_id?: number | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    surveys_taken?: SurveyUncheckedCreateNestedManyWithoutSurveyorInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutUsersNestedInput
    surveys_taken?: SurveyUpdateManyWithoutSurveyorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    area_id?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surveys_taken?: SurveyUncheckedUpdateManyWithoutSurveyorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    role: $Enums.Role
    area_id?: number | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    area_id?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyCreateInput = {
    survey_code: string
    status?: $Enums.SurveyStatus
    consent_given?: boolean
    head_name: string
    head_age?: number | null
    head_gender?: string | null
    head_marital_status?: string | null
    head_education?: string | null
    head_occupation?: string | null
    head_skill?: string | null
    head_namaz?: string | null
    head_income?: Decimal | DecimalJsLike | number | string
    address: string
    phone?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    spouse_name?: string | null
    spouse_age?: number | null
    spouse_education?: string | null
    spouse_occupation?: string | null
    spouse_skill?: string | null
    spouse_namaz?: string | null
    spouse_income?: Decimal | DecimalJsLike | number | string
    house_tenure?: string | null
    house_condition?: string | null
    rooms?: number | null
    toilet_access?: string | null
    drinking_water?: string | null
    electricity_access?: string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: boolean
    govt_scheme_names?: string | null
    govt_scheme_amount?: Decimal | DecimalJsLike | number | string
    bedridden?: boolean
    bedridden_monthly_expense?: Decimal | DecimalJsLike | number | string
    ration_card?: boolean
    aadhaar_status?: string | null
    health_card?: boolean
    bank_account?: boolean
    voter_id_status?: string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: boolean
    television?: boolean
    tv_connection?: string | null
    tv_type?: string | null
    washing_machine?: boolean
    smartphone_access?: string | null
    internet_access?: string | null
    monthly_household_income?: Decimal | DecimalJsLike | number | string
    monthly_household_expense?: Decimal | DecimalJsLike | number | string
    food_security?: string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    surveyed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    area: AreaCreateNestedOneWithoutSurveysInput
    surveyor: UserCreateNestedOneWithoutSurveys_takenInput
    dependants?: DependantCreateNestedManyWithoutSurveyInput
  }

  export type SurveyUncheckedCreateInput = {
    id?: number
    survey_code: string
    area_id: number
    surveyor_id: number
    status?: $Enums.SurveyStatus
    consent_given?: boolean
    head_name: string
    head_age?: number | null
    head_gender?: string | null
    head_marital_status?: string | null
    head_education?: string | null
    head_occupation?: string | null
    head_skill?: string | null
    head_namaz?: string | null
    head_income?: Decimal | DecimalJsLike | number | string
    address: string
    phone?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    spouse_name?: string | null
    spouse_age?: number | null
    spouse_education?: string | null
    spouse_occupation?: string | null
    spouse_skill?: string | null
    spouse_namaz?: string | null
    spouse_income?: Decimal | DecimalJsLike | number | string
    house_tenure?: string | null
    house_condition?: string | null
    rooms?: number | null
    toilet_access?: string | null
    drinking_water?: string | null
    electricity_access?: string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: boolean
    govt_scheme_names?: string | null
    govt_scheme_amount?: Decimal | DecimalJsLike | number | string
    bedridden?: boolean
    bedridden_monthly_expense?: Decimal | DecimalJsLike | number | string
    ration_card?: boolean
    aadhaar_status?: string | null
    health_card?: boolean
    bank_account?: boolean
    voter_id_status?: string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: boolean
    television?: boolean
    tv_connection?: string | null
    tv_type?: string | null
    washing_machine?: boolean
    smartphone_access?: string | null
    internet_access?: string | null
    monthly_household_income?: Decimal | DecimalJsLike | number | string
    monthly_household_expense?: Decimal | DecimalJsLike | number | string
    food_security?: string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    surveyed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    dependants?: DependantUncheckedCreateNestedManyWithoutSurveyInput
  }

  export type SurveyUpdateInput = {
    survey_code?: StringFieldUpdateOperationsInput | string
    status?: EnumSurveyStatusFieldUpdateOperationsInput | $Enums.SurveyStatus
    consent_given?: BoolFieldUpdateOperationsInput | boolean
    head_name?: StringFieldUpdateOperationsInput | string
    head_age?: NullableIntFieldUpdateOperationsInput | number | null
    head_gender?: NullableStringFieldUpdateOperationsInput | string | null
    head_marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    head_education?: NullableStringFieldUpdateOperationsInput | string | null
    head_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    head_skill?: NullableStringFieldUpdateOperationsInput | string | null
    head_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    head_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spouse_name?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_age?: NullableIntFieldUpdateOperationsInput | number | null
    spouse_education?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_skill?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    house_tenure?: NullableStringFieldUpdateOperationsInput | string | null
    house_condition?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    toilet_access?: NullableStringFieldUpdateOperationsInput | string | null
    drinking_water?: NullableStringFieldUpdateOperationsInput | string | null
    electricity_access?: NullableStringFieldUpdateOperationsInput | string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: BoolFieldUpdateOperationsInput | boolean
    govt_scheme_names?: NullableStringFieldUpdateOperationsInput | string | null
    govt_scheme_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bedridden?: BoolFieldUpdateOperationsInput | boolean
    bedridden_monthly_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ration_card?: BoolFieldUpdateOperationsInput | boolean
    aadhaar_status?: NullableStringFieldUpdateOperationsInput | string | null
    health_card?: BoolFieldUpdateOperationsInput | boolean
    bank_account?: BoolFieldUpdateOperationsInput | boolean
    voter_id_status?: NullableStringFieldUpdateOperationsInput | string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    tv_connection?: NullableStringFieldUpdateOperationsInput | string | null
    tv_type?: NullableStringFieldUpdateOperationsInput | string | null
    washing_machine?: BoolFieldUpdateOperationsInput | boolean
    smartphone_access?: NullableStringFieldUpdateOperationsInput | string | null
    internet_access?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_household_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_household_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    food_security?: NullableStringFieldUpdateOperationsInput | string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    surveyed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneRequiredWithoutSurveysNestedInput
    surveyor?: UserUpdateOneRequiredWithoutSurveys_takenNestedInput
    dependants?: DependantUpdateManyWithoutSurveyNestedInput
  }

  export type SurveyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    survey_code?: StringFieldUpdateOperationsInput | string
    area_id?: IntFieldUpdateOperationsInput | number
    surveyor_id?: IntFieldUpdateOperationsInput | number
    status?: EnumSurveyStatusFieldUpdateOperationsInput | $Enums.SurveyStatus
    consent_given?: BoolFieldUpdateOperationsInput | boolean
    head_name?: StringFieldUpdateOperationsInput | string
    head_age?: NullableIntFieldUpdateOperationsInput | number | null
    head_gender?: NullableStringFieldUpdateOperationsInput | string | null
    head_marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    head_education?: NullableStringFieldUpdateOperationsInput | string | null
    head_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    head_skill?: NullableStringFieldUpdateOperationsInput | string | null
    head_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    head_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spouse_name?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_age?: NullableIntFieldUpdateOperationsInput | number | null
    spouse_education?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_skill?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    house_tenure?: NullableStringFieldUpdateOperationsInput | string | null
    house_condition?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    toilet_access?: NullableStringFieldUpdateOperationsInput | string | null
    drinking_water?: NullableStringFieldUpdateOperationsInput | string | null
    electricity_access?: NullableStringFieldUpdateOperationsInput | string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: BoolFieldUpdateOperationsInput | boolean
    govt_scheme_names?: NullableStringFieldUpdateOperationsInput | string | null
    govt_scheme_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bedridden?: BoolFieldUpdateOperationsInput | boolean
    bedridden_monthly_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ration_card?: BoolFieldUpdateOperationsInput | boolean
    aadhaar_status?: NullableStringFieldUpdateOperationsInput | string | null
    health_card?: BoolFieldUpdateOperationsInput | boolean
    bank_account?: BoolFieldUpdateOperationsInput | boolean
    voter_id_status?: NullableStringFieldUpdateOperationsInput | string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    tv_connection?: NullableStringFieldUpdateOperationsInput | string | null
    tv_type?: NullableStringFieldUpdateOperationsInput | string | null
    washing_machine?: BoolFieldUpdateOperationsInput | boolean
    smartphone_access?: NullableStringFieldUpdateOperationsInput | string | null
    internet_access?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_household_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_household_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    food_security?: NullableStringFieldUpdateOperationsInput | string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    surveyed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dependants?: DependantUncheckedUpdateManyWithoutSurveyNestedInput
  }

  export type SurveyCreateManyInput = {
    id?: number
    survey_code: string
    area_id: number
    surveyor_id: number
    status?: $Enums.SurveyStatus
    consent_given?: boolean
    head_name: string
    head_age?: number | null
    head_gender?: string | null
    head_marital_status?: string | null
    head_education?: string | null
    head_occupation?: string | null
    head_skill?: string | null
    head_namaz?: string | null
    head_income?: Decimal | DecimalJsLike | number | string
    address: string
    phone?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    spouse_name?: string | null
    spouse_age?: number | null
    spouse_education?: string | null
    spouse_occupation?: string | null
    spouse_skill?: string | null
    spouse_namaz?: string | null
    spouse_income?: Decimal | DecimalJsLike | number | string
    house_tenure?: string | null
    house_condition?: string | null
    rooms?: number | null
    toilet_access?: string | null
    drinking_water?: string | null
    electricity_access?: string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: boolean
    govt_scheme_names?: string | null
    govt_scheme_amount?: Decimal | DecimalJsLike | number | string
    bedridden?: boolean
    bedridden_monthly_expense?: Decimal | DecimalJsLike | number | string
    ration_card?: boolean
    aadhaar_status?: string | null
    health_card?: boolean
    bank_account?: boolean
    voter_id_status?: string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: boolean
    television?: boolean
    tv_connection?: string | null
    tv_type?: string | null
    washing_machine?: boolean
    smartphone_access?: string | null
    internet_access?: string | null
    monthly_household_income?: Decimal | DecimalJsLike | number | string
    monthly_household_expense?: Decimal | DecimalJsLike | number | string
    food_security?: string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    surveyed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SurveyUpdateManyMutationInput = {
    survey_code?: StringFieldUpdateOperationsInput | string
    status?: EnumSurveyStatusFieldUpdateOperationsInput | $Enums.SurveyStatus
    consent_given?: BoolFieldUpdateOperationsInput | boolean
    head_name?: StringFieldUpdateOperationsInput | string
    head_age?: NullableIntFieldUpdateOperationsInput | number | null
    head_gender?: NullableStringFieldUpdateOperationsInput | string | null
    head_marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    head_education?: NullableStringFieldUpdateOperationsInput | string | null
    head_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    head_skill?: NullableStringFieldUpdateOperationsInput | string | null
    head_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    head_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spouse_name?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_age?: NullableIntFieldUpdateOperationsInput | number | null
    spouse_education?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_skill?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    house_tenure?: NullableStringFieldUpdateOperationsInput | string | null
    house_condition?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    toilet_access?: NullableStringFieldUpdateOperationsInput | string | null
    drinking_water?: NullableStringFieldUpdateOperationsInput | string | null
    electricity_access?: NullableStringFieldUpdateOperationsInput | string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: BoolFieldUpdateOperationsInput | boolean
    govt_scheme_names?: NullableStringFieldUpdateOperationsInput | string | null
    govt_scheme_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bedridden?: BoolFieldUpdateOperationsInput | boolean
    bedridden_monthly_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ration_card?: BoolFieldUpdateOperationsInput | boolean
    aadhaar_status?: NullableStringFieldUpdateOperationsInput | string | null
    health_card?: BoolFieldUpdateOperationsInput | boolean
    bank_account?: BoolFieldUpdateOperationsInput | boolean
    voter_id_status?: NullableStringFieldUpdateOperationsInput | string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    tv_connection?: NullableStringFieldUpdateOperationsInput | string | null
    tv_type?: NullableStringFieldUpdateOperationsInput | string | null
    washing_machine?: BoolFieldUpdateOperationsInput | boolean
    smartphone_access?: NullableStringFieldUpdateOperationsInput | string | null
    internet_access?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_household_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_household_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    food_security?: NullableStringFieldUpdateOperationsInput | string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    surveyed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    survey_code?: StringFieldUpdateOperationsInput | string
    area_id?: IntFieldUpdateOperationsInput | number
    surveyor_id?: IntFieldUpdateOperationsInput | number
    status?: EnumSurveyStatusFieldUpdateOperationsInput | $Enums.SurveyStatus
    consent_given?: BoolFieldUpdateOperationsInput | boolean
    head_name?: StringFieldUpdateOperationsInput | string
    head_age?: NullableIntFieldUpdateOperationsInput | number | null
    head_gender?: NullableStringFieldUpdateOperationsInput | string | null
    head_marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    head_education?: NullableStringFieldUpdateOperationsInput | string | null
    head_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    head_skill?: NullableStringFieldUpdateOperationsInput | string | null
    head_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    head_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spouse_name?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_age?: NullableIntFieldUpdateOperationsInput | number | null
    spouse_education?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_skill?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    house_tenure?: NullableStringFieldUpdateOperationsInput | string | null
    house_condition?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    toilet_access?: NullableStringFieldUpdateOperationsInput | string | null
    drinking_water?: NullableStringFieldUpdateOperationsInput | string | null
    electricity_access?: NullableStringFieldUpdateOperationsInput | string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: BoolFieldUpdateOperationsInput | boolean
    govt_scheme_names?: NullableStringFieldUpdateOperationsInput | string | null
    govt_scheme_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bedridden?: BoolFieldUpdateOperationsInput | boolean
    bedridden_monthly_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ration_card?: BoolFieldUpdateOperationsInput | boolean
    aadhaar_status?: NullableStringFieldUpdateOperationsInput | string | null
    health_card?: BoolFieldUpdateOperationsInput | boolean
    bank_account?: BoolFieldUpdateOperationsInput | boolean
    voter_id_status?: NullableStringFieldUpdateOperationsInput | string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    tv_connection?: NullableStringFieldUpdateOperationsInput | string | null
    tv_type?: NullableStringFieldUpdateOperationsInput | string | null
    washing_machine?: BoolFieldUpdateOperationsInput | boolean
    smartphone_access?: NullableStringFieldUpdateOperationsInput | string | null
    internet_access?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_household_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_household_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    food_security?: NullableStringFieldUpdateOperationsInput | string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    surveyed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependantCreateInput = {
    name: string
    age?: number | null
    relationship?: string | null
    gender?: string | null
    member_type: $Enums.MemberType
    education?: string | null
    institution?: string | null
    part_time_job?: boolean
    scholarship_availed?: string | null
    occupation?: string | null
    skill?: string | null
    namaz?: string | null
    income?: Decimal | DecimalJsLike | number | string
    disability_or_health_need?: string | null
    created_at?: Date | string
    survey: SurveyCreateNestedOneWithoutDependantsInput
  }

  export type DependantUncheckedCreateInput = {
    id?: number
    survey_id: number
    name: string
    age?: number | null
    relationship?: string | null
    gender?: string | null
    member_type: $Enums.MemberType
    education?: string | null
    institution?: string | null
    part_time_job?: boolean
    scholarship_availed?: string | null
    occupation?: string | null
    skill?: string | null
    namaz?: string | null
    income?: Decimal | DecimalJsLike | number | string
    disability_or_health_need?: string | null
    created_at?: Date | string
  }

  export type DependantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    education?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    part_time_job?: BoolFieldUpdateOperationsInput | boolean
    scholarship_availed?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: NullableStringFieldUpdateOperationsInput | string | null
    namaz?: NullableStringFieldUpdateOperationsInput | string | null
    income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    disability_or_health_need?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    survey?: SurveyUpdateOneRequiredWithoutDependantsNestedInput
  }

  export type DependantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    survey_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    education?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    part_time_job?: BoolFieldUpdateOperationsInput | boolean
    scholarship_availed?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: NullableStringFieldUpdateOperationsInput | string | null
    namaz?: NullableStringFieldUpdateOperationsInput | string | null
    income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    disability_or_health_need?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependantCreateManyInput = {
    id?: number
    survey_id: number
    name: string
    age?: number | null
    relationship?: string | null
    gender?: string | null
    member_type: $Enums.MemberType
    education?: string | null
    institution?: string | null
    part_time_job?: boolean
    scholarship_availed?: string | null
    occupation?: string | null
    skill?: string | null
    namaz?: string | null
    income?: Decimal | DecimalJsLike | number | string
    disability_or_health_need?: string | null
    created_at?: Date | string
  }

  export type DependantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    education?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    part_time_job?: BoolFieldUpdateOperationsInput | boolean
    scholarship_availed?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: NullableStringFieldUpdateOperationsInput | string | null
    namaz?: NullableStringFieldUpdateOperationsInput | string | null
    income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    disability_or_health_need?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    survey_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    education?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    part_time_job?: BoolFieldUpdateOperationsInput | boolean
    scholarship_availed?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: NullableStringFieldUpdateOperationsInput | string | null
    namaz?: NullableStringFieldUpdateOperationsInput | string | null
    income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    disability_or_health_need?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChartConfigCreateInput = {
    title: string
    metric_key: string
    chart_type?: $Enums.ChartType
    enabled?: boolean
    display_order?: number
    created_at?: Date | string
  }

  export type ChartConfigUncheckedCreateInput = {
    id?: number
    title: string
    metric_key: string
    chart_type?: $Enums.ChartType
    enabled?: boolean
    display_order?: number
    created_at?: Date | string
  }

  export type ChartConfigUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    metric_key?: StringFieldUpdateOperationsInput | string
    chart_type?: EnumChartTypeFieldUpdateOperationsInput | $Enums.ChartType
    enabled?: BoolFieldUpdateOperationsInput | boolean
    display_order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChartConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    metric_key?: StringFieldUpdateOperationsInput | string
    chart_type?: EnumChartTypeFieldUpdateOperationsInput | $Enums.ChartType
    enabled?: BoolFieldUpdateOperationsInput | boolean
    display_order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChartConfigCreateManyInput = {
    id?: number
    title: string
    metric_key: string
    chart_type?: $Enums.ChartType
    enabled?: boolean
    display_order?: number
    created_at?: Date | string
  }

  export type ChartConfigUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    metric_key?: StringFieldUpdateOperationsInput | string
    chart_type?: EnumChartTypeFieldUpdateOperationsInput | $Enums.ChartType
    enabled?: BoolFieldUpdateOperationsInput | boolean
    display_order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChartConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    metric_key?: StringFieldUpdateOperationsInput | string
    chart_type?: EnumChartTypeFieldUpdateOperationsInput | $Enums.ChartType
    enabled?: BoolFieldUpdateOperationsInput | boolean
    display_order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SurveyListRelationFilter = {
    every?: SurveyWhereInput
    some?: SurveyWhereInput
    none?: SurveyWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurveyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ward_code?: SortOrder
    target_households?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AreaAvgOrderByAggregateInput = {
    id?: SortOrder
    target_households?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ward_code?: SortOrder
    target_households?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ward_code?: SortOrder
    target_households?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AreaSumOrderByAggregateInput = {
    id?: SortOrder
    target_households?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AreaNullableRelationFilter = {
    is?: AreaWhereInput | null
    isNot?: AreaWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    area_id?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    area_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    area_id?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    area_id?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    area_id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSurveyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SurveyStatus | EnumSurveyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SurveyStatus[]
    notIn?: $Enums.SurveyStatus[]
    not?: NestedEnumSurveyStatusFilter<$PrismaModel> | $Enums.SurveyStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AreaRelationFilter = {
    is?: AreaWhereInput
    isNot?: AreaWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DependantListRelationFilter = {
    every?: DependantWhereInput
    some?: DependantWhereInput
    none?: DependantWhereInput
  }

  export type DependantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurveyCountOrderByAggregateInput = {
    id?: SortOrder
    survey_code?: SortOrder
    area_id?: SortOrder
    surveyor_id?: SortOrder
    status?: SortOrder
    consent_given?: SortOrder
    head_name?: SortOrder
    head_age?: SortOrder
    head_gender?: SortOrder
    head_marital_status?: SortOrder
    head_education?: SortOrder
    head_occupation?: SortOrder
    head_skill?: SortOrder
    head_namaz?: SortOrder
    head_income?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    spouse_name?: SortOrder
    spouse_age?: SortOrder
    spouse_education?: SortOrder
    spouse_occupation?: SortOrder
    spouse_skill?: SortOrder
    spouse_namaz?: SortOrder
    spouse_income?: SortOrder
    house_tenure?: SortOrder
    house_condition?: SortOrder
    rooms?: SortOrder
    toilet_access?: SortOrder
    drinking_water?: SortOrder
    electricity_access?: SortOrder
    loan_types?: SortOrder
    loan_amount?: SortOrder
    govt_scheme_availed?: SortOrder
    govt_scheme_names?: SortOrder
    govt_scheme_amount?: SortOrder
    bedridden?: SortOrder
    bedridden_monthly_expense?: SortOrder
    ration_card?: SortOrder
    aadhaar_status?: SortOrder
    health_card?: SortOrder
    bank_account?: SortOrder
    voter_id_status?: SortOrder
    vehicles?: SortOrder
    fridge?: SortOrder
    television?: SortOrder
    tv_connection?: SortOrder
    tv_type?: SortOrder
    washing_machine?: SortOrder
    smartphone_access?: SortOrder
    internet_access?: SortOrder
    monthly_household_income?: SortOrder
    monthly_household_expense?: SortOrder
    food_security?: SortOrder
    vulnerable_category?: SortOrder
    notes?: SortOrder
    surveyed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SurveyAvgOrderByAggregateInput = {
    id?: SortOrder
    area_id?: SortOrder
    surveyor_id?: SortOrder
    head_age?: SortOrder
    head_income?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    spouse_age?: SortOrder
    spouse_income?: SortOrder
    rooms?: SortOrder
    loan_amount?: SortOrder
    govt_scheme_amount?: SortOrder
    bedridden_monthly_expense?: SortOrder
    monthly_household_income?: SortOrder
    monthly_household_expense?: SortOrder
  }

  export type SurveyMaxOrderByAggregateInput = {
    id?: SortOrder
    survey_code?: SortOrder
    area_id?: SortOrder
    surveyor_id?: SortOrder
    status?: SortOrder
    consent_given?: SortOrder
    head_name?: SortOrder
    head_age?: SortOrder
    head_gender?: SortOrder
    head_marital_status?: SortOrder
    head_education?: SortOrder
    head_occupation?: SortOrder
    head_skill?: SortOrder
    head_namaz?: SortOrder
    head_income?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    spouse_name?: SortOrder
    spouse_age?: SortOrder
    spouse_education?: SortOrder
    spouse_occupation?: SortOrder
    spouse_skill?: SortOrder
    spouse_namaz?: SortOrder
    spouse_income?: SortOrder
    house_tenure?: SortOrder
    house_condition?: SortOrder
    rooms?: SortOrder
    toilet_access?: SortOrder
    drinking_water?: SortOrder
    electricity_access?: SortOrder
    loan_amount?: SortOrder
    govt_scheme_availed?: SortOrder
    govt_scheme_names?: SortOrder
    govt_scheme_amount?: SortOrder
    bedridden?: SortOrder
    bedridden_monthly_expense?: SortOrder
    ration_card?: SortOrder
    aadhaar_status?: SortOrder
    health_card?: SortOrder
    bank_account?: SortOrder
    voter_id_status?: SortOrder
    fridge?: SortOrder
    television?: SortOrder
    tv_connection?: SortOrder
    tv_type?: SortOrder
    washing_machine?: SortOrder
    smartphone_access?: SortOrder
    internet_access?: SortOrder
    monthly_household_income?: SortOrder
    monthly_household_expense?: SortOrder
    food_security?: SortOrder
    notes?: SortOrder
    surveyed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SurveyMinOrderByAggregateInput = {
    id?: SortOrder
    survey_code?: SortOrder
    area_id?: SortOrder
    surveyor_id?: SortOrder
    status?: SortOrder
    consent_given?: SortOrder
    head_name?: SortOrder
    head_age?: SortOrder
    head_gender?: SortOrder
    head_marital_status?: SortOrder
    head_education?: SortOrder
    head_occupation?: SortOrder
    head_skill?: SortOrder
    head_namaz?: SortOrder
    head_income?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    spouse_name?: SortOrder
    spouse_age?: SortOrder
    spouse_education?: SortOrder
    spouse_occupation?: SortOrder
    spouse_skill?: SortOrder
    spouse_namaz?: SortOrder
    spouse_income?: SortOrder
    house_tenure?: SortOrder
    house_condition?: SortOrder
    rooms?: SortOrder
    toilet_access?: SortOrder
    drinking_water?: SortOrder
    electricity_access?: SortOrder
    loan_amount?: SortOrder
    govt_scheme_availed?: SortOrder
    govt_scheme_names?: SortOrder
    govt_scheme_amount?: SortOrder
    bedridden?: SortOrder
    bedridden_monthly_expense?: SortOrder
    ration_card?: SortOrder
    aadhaar_status?: SortOrder
    health_card?: SortOrder
    bank_account?: SortOrder
    voter_id_status?: SortOrder
    fridge?: SortOrder
    television?: SortOrder
    tv_connection?: SortOrder
    tv_type?: SortOrder
    washing_machine?: SortOrder
    smartphone_access?: SortOrder
    internet_access?: SortOrder
    monthly_household_income?: SortOrder
    monthly_household_expense?: SortOrder
    food_security?: SortOrder
    notes?: SortOrder
    surveyed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SurveySumOrderByAggregateInput = {
    id?: SortOrder
    area_id?: SortOrder
    surveyor_id?: SortOrder
    head_age?: SortOrder
    head_income?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    spouse_age?: SortOrder
    spouse_income?: SortOrder
    rooms?: SortOrder
    loan_amount?: SortOrder
    govt_scheme_amount?: SortOrder
    bedridden_monthly_expense?: SortOrder
    monthly_household_income?: SortOrder
    monthly_household_expense?: SortOrder
  }

  export type EnumSurveyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SurveyStatus | EnumSurveyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SurveyStatus[]
    notIn?: $Enums.SurveyStatus[]
    not?: NestedEnumSurveyStatusWithAggregatesFilter<$PrismaModel> | $Enums.SurveyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSurveyStatusFilter<$PrismaModel>
    _max?: NestedEnumSurveyStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumMemberTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberType | EnumMemberTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemberType[]
    notIn?: $Enums.MemberType[]
    not?: NestedEnumMemberTypeFilter<$PrismaModel> | $Enums.MemberType
  }

  export type SurveyRelationFilter = {
    is?: SurveyWhereInput
    isNot?: SurveyWhereInput
  }

  export type DependantCountOrderByAggregateInput = {
    id?: SortOrder
    survey_id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    relationship?: SortOrder
    gender?: SortOrder
    member_type?: SortOrder
    education?: SortOrder
    institution?: SortOrder
    part_time_job?: SortOrder
    scholarship_availed?: SortOrder
    occupation?: SortOrder
    skill?: SortOrder
    namaz?: SortOrder
    income?: SortOrder
    disability_or_health_need?: SortOrder
    created_at?: SortOrder
  }

  export type DependantAvgOrderByAggregateInput = {
    id?: SortOrder
    survey_id?: SortOrder
    age?: SortOrder
    income?: SortOrder
  }

  export type DependantMaxOrderByAggregateInput = {
    id?: SortOrder
    survey_id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    relationship?: SortOrder
    gender?: SortOrder
    member_type?: SortOrder
    education?: SortOrder
    institution?: SortOrder
    part_time_job?: SortOrder
    scholarship_availed?: SortOrder
    occupation?: SortOrder
    skill?: SortOrder
    namaz?: SortOrder
    income?: SortOrder
    disability_or_health_need?: SortOrder
    created_at?: SortOrder
  }

  export type DependantMinOrderByAggregateInput = {
    id?: SortOrder
    survey_id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    relationship?: SortOrder
    gender?: SortOrder
    member_type?: SortOrder
    education?: SortOrder
    institution?: SortOrder
    part_time_job?: SortOrder
    scholarship_availed?: SortOrder
    occupation?: SortOrder
    skill?: SortOrder
    namaz?: SortOrder
    income?: SortOrder
    disability_or_health_need?: SortOrder
    created_at?: SortOrder
  }

  export type DependantSumOrderByAggregateInput = {
    id?: SortOrder
    survey_id?: SortOrder
    age?: SortOrder
    income?: SortOrder
  }

  export type EnumMemberTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberType | EnumMemberTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemberType[]
    notIn?: $Enums.MemberType[]
    not?: NestedEnumMemberTypeWithAggregatesFilter<$PrismaModel> | $Enums.MemberType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberTypeFilter<$PrismaModel>
    _max?: NestedEnumMemberTypeFilter<$PrismaModel>
  }

  export type EnumChartTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChartType | EnumChartTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChartType[]
    notIn?: $Enums.ChartType[]
    not?: NestedEnumChartTypeFilter<$PrismaModel> | $Enums.ChartType
  }

  export type ChartConfigCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    metric_key?: SortOrder
    chart_type?: SortOrder
    enabled?: SortOrder
    display_order?: SortOrder
    created_at?: SortOrder
  }

  export type ChartConfigAvgOrderByAggregateInput = {
    id?: SortOrder
    display_order?: SortOrder
  }

  export type ChartConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    metric_key?: SortOrder
    chart_type?: SortOrder
    enabled?: SortOrder
    display_order?: SortOrder
    created_at?: SortOrder
  }

  export type ChartConfigMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    metric_key?: SortOrder
    chart_type?: SortOrder
    enabled?: SortOrder
    display_order?: SortOrder
    created_at?: SortOrder
  }

  export type ChartConfigSumOrderByAggregateInput = {
    id?: SortOrder
    display_order?: SortOrder
  }

  export type EnumChartTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChartType | EnumChartTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChartType[]
    notIn?: $Enums.ChartType[]
    not?: NestedEnumChartTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChartType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChartTypeFilter<$PrismaModel>
    _max?: NestedEnumChartTypeFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutAreaInput = {
    create?: XOR<UserCreateWithoutAreaInput, UserUncheckedCreateWithoutAreaInput> | UserCreateWithoutAreaInput[] | UserUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAreaInput | UserCreateOrConnectWithoutAreaInput[]
    createMany?: UserCreateManyAreaInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SurveyCreateNestedManyWithoutAreaInput = {
    create?: XOR<SurveyCreateWithoutAreaInput, SurveyUncheckedCreateWithoutAreaInput> | SurveyCreateWithoutAreaInput[] | SurveyUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: SurveyCreateOrConnectWithoutAreaInput | SurveyCreateOrConnectWithoutAreaInput[]
    createMany?: SurveyCreateManyAreaInputEnvelope
    connect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<UserCreateWithoutAreaInput, UserUncheckedCreateWithoutAreaInput> | UserCreateWithoutAreaInput[] | UserUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAreaInput | UserCreateOrConnectWithoutAreaInput[]
    createMany?: UserCreateManyAreaInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SurveyUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<SurveyCreateWithoutAreaInput, SurveyUncheckedCreateWithoutAreaInput> | SurveyCreateWithoutAreaInput[] | SurveyUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: SurveyCreateOrConnectWithoutAreaInput | SurveyCreateOrConnectWithoutAreaInput[]
    createMany?: SurveyCreateManyAreaInputEnvelope
    connect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutAreaNestedInput = {
    create?: XOR<UserCreateWithoutAreaInput, UserUncheckedCreateWithoutAreaInput> | UserCreateWithoutAreaInput[] | UserUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAreaInput | UserCreateOrConnectWithoutAreaInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAreaInput | UserUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: UserCreateManyAreaInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAreaInput | UserUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAreaInput | UserUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SurveyUpdateManyWithoutAreaNestedInput = {
    create?: XOR<SurveyCreateWithoutAreaInput, SurveyUncheckedCreateWithoutAreaInput> | SurveyCreateWithoutAreaInput[] | SurveyUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: SurveyCreateOrConnectWithoutAreaInput | SurveyCreateOrConnectWithoutAreaInput[]
    upsert?: SurveyUpsertWithWhereUniqueWithoutAreaInput | SurveyUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: SurveyCreateManyAreaInputEnvelope
    set?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    disconnect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    delete?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    connect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    update?: SurveyUpdateWithWhereUniqueWithoutAreaInput | SurveyUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: SurveyUpdateManyWithWhereWithoutAreaInput | SurveyUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: SurveyScalarWhereInput | SurveyScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<UserCreateWithoutAreaInput, UserUncheckedCreateWithoutAreaInput> | UserCreateWithoutAreaInput[] | UserUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAreaInput | UserCreateOrConnectWithoutAreaInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAreaInput | UserUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: UserCreateManyAreaInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAreaInput | UserUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAreaInput | UserUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SurveyUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<SurveyCreateWithoutAreaInput, SurveyUncheckedCreateWithoutAreaInput> | SurveyCreateWithoutAreaInput[] | SurveyUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: SurveyCreateOrConnectWithoutAreaInput | SurveyCreateOrConnectWithoutAreaInput[]
    upsert?: SurveyUpsertWithWhereUniqueWithoutAreaInput | SurveyUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: SurveyCreateManyAreaInputEnvelope
    set?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    disconnect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    delete?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    connect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    update?: SurveyUpdateWithWhereUniqueWithoutAreaInput | SurveyUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: SurveyUpdateManyWithWhereWithoutAreaInput | SurveyUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: SurveyScalarWhereInput | SurveyScalarWhereInput[]
  }

  export type AreaCreateNestedOneWithoutUsersInput = {
    create?: XOR<AreaCreateWithoutUsersInput, AreaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AreaCreateOrConnectWithoutUsersInput
    connect?: AreaWhereUniqueInput
  }

  export type SurveyCreateNestedManyWithoutSurveyorInput = {
    create?: XOR<SurveyCreateWithoutSurveyorInput, SurveyUncheckedCreateWithoutSurveyorInput> | SurveyCreateWithoutSurveyorInput[] | SurveyUncheckedCreateWithoutSurveyorInput[]
    connectOrCreate?: SurveyCreateOrConnectWithoutSurveyorInput | SurveyCreateOrConnectWithoutSurveyorInput[]
    createMany?: SurveyCreateManySurveyorInputEnvelope
    connect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
  }

  export type SurveyUncheckedCreateNestedManyWithoutSurveyorInput = {
    create?: XOR<SurveyCreateWithoutSurveyorInput, SurveyUncheckedCreateWithoutSurveyorInput> | SurveyCreateWithoutSurveyorInput[] | SurveyUncheckedCreateWithoutSurveyorInput[]
    connectOrCreate?: SurveyCreateOrConnectWithoutSurveyorInput | SurveyCreateOrConnectWithoutSurveyorInput[]
    createMany?: SurveyCreateManySurveyorInputEnvelope
    connect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type AreaUpdateOneWithoutUsersNestedInput = {
    create?: XOR<AreaCreateWithoutUsersInput, AreaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AreaCreateOrConnectWithoutUsersInput
    upsert?: AreaUpsertWithoutUsersInput
    disconnect?: AreaWhereInput | boolean
    delete?: AreaWhereInput | boolean
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutUsersInput, AreaUpdateWithoutUsersInput>, AreaUncheckedUpdateWithoutUsersInput>
  }

  export type SurveyUpdateManyWithoutSurveyorNestedInput = {
    create?: XOR<SurveyCreateWithoutSurveyorInput, SurveyUncheckedCreateWithoutSurveyorInput> | SurveyCreateWithoutSurveyorInput[] | SurveyUncheckedCreateWithoutSurveyorInput[]
    connectOrCreate?: SurveyCreateOrConnectWithoutSurveyorInput | SurveyCreateOrConnectWithoutSurveyorInput[]
    upsert?: SurveyUpsertWithWhereUniqueWithoutSurveyorInput | SurveyUpsertWithWhereUniqueWithoutSurveyorInput[]
    createMany?: SurveyCreateManySurveyorInputEnvelope
    set?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    disconnect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    delete?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    connect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    update?: SurveyUpdateWithWhereUniqueWithoutSurveyorInput | SurveyUpdateWithWhereUniqueWithoutSurveyorInput[]
    updateMany?: SurveyUpdateManyWithWhereWithoutSurveyorInput | SurveyUpdateManyWithWhereWithoutSurveyorInput[]
    deleteMany?: SurveyScalarWhereInput | SurveyScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SurveyUncheckedUpdateManyWithoutSurveyorNestedInput = {
    create?: XOR<SurveyCreateWithoutSurveyorInput, SurveyUncheckedCreateWithoutSurveyorInput> | SurveyCreateWithoutSurveyorInput[] | SurveyUncheckedCreateWithoutSurveyorInput[]
    connectOrCreate?: SurveyCreateOrConnectWithoutSurveyorInput | SurveyCreateOrConnectWithoutSurveyorInput[]
    upsert?: SurveyUpsertWithWhereUniqueWithoutSurveyorInput | SurveyUpsertWithWhereUniqueWithoutSurveyorInput[]
    createMany?: SurveyCreateManySurveyorInputEnvelope
    set?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    disconnect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    delete?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    connect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    update?: SurveyUpdateWithWhereUniqueWithoutSurveyorInput | SurveyUpdateWithWhereUniqueWithoutSurveyorInput[]
    updateMany?: SurveyUpdateManyWithWhereWithoutSurveyorInput | SurveyUpdateManyWithWhereWithoutSurveyorInput[]
    deleteMany?: SurveyScalarWhereInput | SurveyScalarWhereInput[]
  }

  export type AreaCreateNestedOneWithoutSurveysInput = {
    create?: XOR<AreaCreateWithoutSurveysInput, AreaUncheckedCreateWithoutSurveysInput>
    connectOrCreate?: AreaCreateOrConnectWithoutSurveysInput
    connect?: AreaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSurveys_takenInput = {
    create?: XOR<UserCreateWithoutSurveys_takenInput, UserUncheckedCreateWithoutSurveys_takenInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurveys_takenInput
    connect?: UserWhereUniqueInput
  }

  export type DependantCreateNestedManyWithoutSurveyInput = {
    create?: XOR<DependantCreateWithoutSurveyInput, DependantUncheckedCreateWithoutSurveyInput> | DependantCreateWithoutSurveyInput[] | DependantUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: DependantCreateOrConnectWithoutSurveyInput | DependantCreateOrConnectWithoutSurveyInput[]
    createMany?: DependantCreateManySurveyInputEnvelope
    connect?: DependantWhereUniqueInput | DependantWhereUniqueInput[]
  }

  export type DependantUncheckedCreateNestedManyWithoutSurveyInput = {
    create?: XOR<DependantCreateWithoutSurveyInput, DependantUncheckedCreateWithoutSurveyInput> | DependantCreateWithoutSurveyInput[] | DependantUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: DependantCreateOrConnectWithoutSurveyInput | DependantCreateOrConnectWithoutSurveyInput[]
    createMany?: DependantCreateManySurveyInputEnvelope
    connect?: DependantWhereUniqueInput | DependantWhereUniqueInput[]
  }

  export type EnumSurveyStatusFieldUpdateOperationsInput = {
    set?: $Enums.SurveyStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AreaUpdateOneRequiredWithoutSurveysNestedInput = {
    create?: XOR<AreaCreateWithoutSurveysInput, AreaUncheckedCreateWithoutSurveysInput>
    connectOrCreate?: AreaCreateOrConnectWithoutSurveysInput
    upsert?: AreaUpsertWithoutSurveysInput
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutSurveysInput, AreaUpdateWithoutSurveysInput>, AreaUncheckedUpdateWithoutSurveysInput>
  }

  export type UserUpdateOneRequiredWithoutSurveys_takenNestedInput = {
    create?: XOR<UserCreateWithoutSurveys_takenInput, UserUncheckedCreateWithoutSurveys_takenInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurveys_takenInput
    upsert?: UserUpsertWithoutSurveys_takenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSurveys_takenInput, UserUpdateWithoutSurveys_takenInput>, UserUncheckedUpdateWithoutSurveys_takenInput>
  }

  export type DependantUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<DependantCreateWithoutSurveyInput, DependantUncheckedCreateWithoutSurveyInput> | DependantCreateWithoutSurveyInput[] | DependantUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: DependantCreateOrConnectWithoutSurveyInput | DependantCreateOrConnectWithoutSurveyInput[]
    upsert?: DependantUpsertWithWhereUniqueWithoutSurveyInput | DependantUpsertWithWhereUniqueWithoutSurveyInput[]
    createMany?: DependantCreateManySurveyInputEnvelope
    set?: DependantWhereUniqueInput | DependantWhereUniqueInput[]
    disconnect?: DependantWhereUniqueInput | DependantWhereUniqueInput[]
    delete?: DependantWhereUniqueInput | DependantWhereUniqueInput[]
    connect?: DependantWhereUniqueInput | DependantWhereUniqueInput[]
    update?: DependantUpdateWithWhereUniqueWithoutSurveyInput | DependantUpdateWithWhereUniqueWithoutSurveyInput[]
    updateMany?: DependantUpdateManyWithWhereWithoutSurveyInput | DependantUpdateManyWithWhereWithoutSurveyInput[]
    deleteMany?: DependantScalarWhereInput | DependantScalarWhereInput[]
  }

  export type DependantUncheckedUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<DependantCreateWithoutSurveyInput, DependantUncheckedCreateWithoutSurveyInput> | DependantCreateWithoutSurveyInput[] | DependantUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: DependantCreateOrConnectWithoutSurveyInput | DependantCreateOrConnectWithoutSurveyInput[]
    upsert?: DependantUpsertWithWhereUniqueWithoutSurveyInput | DependantUpsertWithWhereUniqueWithoutSurveyInput[]
    createMany?: DependantCreateManySurveyInputEnvelope
    set?: DependantWhereUniqueInput | DependantWhereUniqueInput[]
    disconnect?: DependantWhereUniqueInput | DependantWhereUniqueInput[]
    delete?: DependantWhereUniqueInput | DependantWhereUniqueInput[]
    connect?: DependantWhereUniqueInput | DependantWhereUniqueInput[]
    update?: DependantUpdateWithWhereUniqueWithoutSurveyInput | DependantUpdateWithWhereUniqueWithoutSurveyInput[]
    updateMany?: DependantUpdateManyWithWhereWithoutSurveyInput | DependantUpdateManyWithWhereWithoutSurveyInput[]
    deleteMany?: DependantScalarWhereInput | DependantScalarWhereInput[]
  }

  export type SurveyCreateNestedOneWithoutDependantsInput = {
    create?: XOR<SurveyCreateWithoutDependantsInput, SurveyUncheckedCreateWithoutDependantsInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutDependantsInput
    connect?: SurveyWhereUniqueInput
  }

  export type EnumMemberTypeFieldUpdateOperationsInput = {
    set?: $Enums.MemberType
  }

  export type SurveyUpdateOneRequiredWithoutDependantsNestedInput = {
    create?: XOR<SurveyCreateWithoutDependantsInput, SurveyUncheckedCreateWithoutDependantsInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutDependantsInput
    upsert?: SurveyUpsertWithoutDependantsInput
    connect?: SurveyWhereUniqueInput
    update?: XOR<XOR<SurveyUpdateToOneWithWhereWithoutDependantsInput, SurveyUpdateWithoutDependantsInput>, SurveyUncheckedUpdateWithoutDependantsInput>
  }

  export type EnumChartTypeFieldUpdateOperationsInput = {
    set?: $Enums.ChartType
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSurveyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SurveyStatus | EnumSurveyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SurveyStatus[]
    notIn?: $Enums.SurveyStatus[]
    not?: NestedEnumSurveyStatusFilter<$PrismaModel> | $Enums.SurveyStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumSurveyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SurveyStatus | EnumSurveyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SurveyStatus[]
    notIn?: $Enums.SurveyStatus[]
    not?: NestedEnumSurveyStatusWithAggregatesFilter<$PrismaModel> | $Enums.SurveyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSurveyStatusFilter<$PrismaModel>
    _max?: NestedEnumSurveyStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumMemberTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberType | EnumMemberTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemberType[]
    notIn?: $Enums.MemberType[]
    not?: NestedEnumMemberTypeFilter<$PrismaModel> | $Enums.MemberType
  }

  export type NestedEnumMemberTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberType | EnumMemberTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemberType[]
    notIn?: $Enums.MemberType[]
    not?: NestedEnumMemberTypeWithAggregatesFilter<$PrismaModel> | $Enums.MemberType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberTypeFilter<$PrismaModel>
    _max?: NestedEnumMemberTypeFilter<$PrismaModel>
  }

  export type NestedEnumChartTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChartType | EnumChartTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChartType[]
    notIn?: $Enums.ChartType[]
    not?: NestedEnumChartTypeFilter<$PrismaModel> | $Enums.ChartType
  }

  export type NestedEnumChartTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChartType | EnumChartTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChartType[]
    notIn?: $Enums.ChartType[]
    not?: NestedEnumChartTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChartType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChartTypeFilter<$PrismaModel>
    _max?: NestedEnumChartTypeFilter<$PrismaModel>
  }

  export type UserCreateWithoutAreaInput = {
    name: string
    email: string
    password_hash: string
    role: $Enums.Role
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    surveys_taken?: SurveyCreateNestedManyWithoutSurveyorInput
  }

  export type UserUncheckedCreateWithoutAreaInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    role: $Enums.Role
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    surveys_taken?: SurveyUncheckedCreateNestedManyWithoutSurveyorInput
  }

  export type UserCreateOrConnectWithoutAreaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAreaInput, UserUncheckedCreateWithoutAreaInput>
  }

  export type UserCreateManyAreaInputEnvelope = {
    data: UserCreateManyAreaInput | UserCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type SurveyCreateWithoutAreaInput = {
    survey_code: string
    status?: $Enums.SurveyStatus
    consent_given?: boolean
    head_name: string
    head_age?: number | null
    head_gender?: string | null
    head_marital_status?: string | null
    head_education?: string | null
    head_occupation?: string | null
    head_skill?: string | null
    head_namaz?: string | null
    head_income?: Decimal | DecimalJsLike | number | string
    address: string
    phone?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    spouse_name?: string | null
    spouse_age?: number | null
    spouse_education?: string | null
    spouse_occupation?: string | null
    spouse_skill?: string | null
    spouse_namaz?: string | null
    spouse_income?: Decimal | DecimalJsLike | number | string
    house_tenure?: string | null
    house_condition?: string | null
    rooms?: number | null
    toilet_access?: string | null
    drinking_water?: string | null
    electricity_access?: string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: boolean
    govt_scheme_names?: string | null
    govt_scheme_amount?: Decimal | DecimalJsLike | number | string
    bedridden?: boolean
    bedridden_monthly_expense?: Decimal | DecimalJsLike | number | string
    ration_card?: boolean
    aadhaar_status?: string | null
    health_card?: boolean
    bank_account?: boolean
    voter_id_status?: string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: boolean
    television?: boolean
    tv_connection?: string | null
    tv_type?: string | null
    washing_machine?: boolean
    smartphone_access?: string | null
    internet_access?: string | null
    monthly_household_income?: Decimal | DecimalJsLike | number | string
    monthly_household_expense?: Decimal | DecimalJsLike | number | string
    food_security?: string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    surveyed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    surveyor: UserCreateNestedOneWithoutSurveys_takenInput
    dependants?: DependantCreateNestedManyWithoutSurveyInput
  }

  export type SurveyUncheckedCreateWithoutAreaInput = {
    id?: number
    survey_code: string
    surveyor_id: number
    status?: $Enums.SurveyStatus
    consent_given?: boolean
    head_name: string
    head_age?: number | null
    head_gender?: string | null
    head_marital_status?: string | null
    head_education?: string | null
    head_occupation?: string | null
    head_skill?: string | null
    head_namaz?: string | null
    head_income?: Decimal | DecimalJsLike | number | string
    address: string
    phone?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    spouse_name?: string | null
    spouse_age?: number | null
    spouse_education?: string | null
    spouse_occupation?: string | null
    spouse_skill?: string | null
    spouse_namaz?: string | null
    spouse_income?: Decimal | DecimalJsLike | number | string
    house_tenure?: string | null
    house_condition?: string | null
    rooms?: number | null
    toilet_access?: string | null
    drinking_water?: string | null
    electricity_access?: string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: boolean
    govt_scheme_names?: string | null
    govt_scheme_amount?: Decimal | DecimalJsLike | number | string
    bedridden?: boolean
    bedridden_monthly_expense?: Decimal | DecimalJsLike | number | string
    ration_card?: boolean
    aadhaar_status?: string | null
    health_card?: boolean
    bank_account?: boolean
    voter_id_status?: string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: boolean
    television?: boolean
    tv_connection?: string | null
    tv_type?: string | null
    washing_machine?: boolean
    smartphone_access?: string | null
    internet_access?: string | null
    monthly_household_income?: Decimal | DecimalJsLike | number | string
    monthly_household_expense?: Decimal | DecimalJsLike | number | string
    food_security?: string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    surveyed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    dependants?: DependantUncheckedCreateNestedManyWithoutSurveyInput
  }

  export type SurveyCreateOrConnectWithoutAreaInput = {
    where: SurveyWhereUniqueInput
    create: XOR<SurveyCreateWithoutAreaInput, SurveyUncheckedCreateWithoutAreaInput>
  }

  export type SurveyCreateManyAreaInputEnvelope = {
    data: SurveyCreateManyAreaInput | SurveyCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutAreaInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAreaInput, UserUncheckedUpdateWithoutAreaInput>
    create: XOR<UserCreateWithoutAreaInput, UserUncheckedCreateWithoutAreaInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAreaInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAreaInput, UserUncheckedUpdateWithoutAreaInput>
  }

  export type UserUpdateManyWithWhereWithoutAreaInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAreaInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    area_id?: IntNullableFilter<"User"> | number | null
    active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }

  export type SurveyUpsertWithWhereUniqueWithoutAreaInput = {
    where: SurveyWhereUniqueInput
    update: XOR<SurveyUpdateWithoutAreaInput, SurveyUncheckedUpdateWithoutAreaInput>
    create: XOR<SurveyCreateWithoutAreaInput, SurveyUncheckedCreateWithoutAreaInput>
  }

  export type SurveyUpdateWithWhereUniqueWithoutAreaInput = {
    where: SurveyWhereUniqueInput
    data: XOR<SurveyUpdateWithoutAreaInput, SurveyUncheckedUpdateWithoutAreaInput>
  }

  export type SurveyUpdateManyWithWhereWithoutAreaInput = {
    where: SurveyScalarWhereInput
    data: XOR<SurveyUpdateManyMutationInput, SurveyUncheckedUpdateManyWithoutAreaInput>
  }

  export type SurveyScalarWhereInput = {
    AND?: SurveyScalarWhereInput | SurveyScalarWhereInput[]
    OR?: SurveyScalarWhereInput[]
    NOT?: SurveyScalarWhereInput | SurveyScalarWhereInput[]
    id?: IntFilter<"Survey"> | number
    survey_code?: StringFilter<"Survey"> | string
    area_id?: IntFilter<"Survey"> | number
    surveyor_id?: IntFilter<"Survey"> | number
    status?: EnumSurveyStatusFilter<"Survey"> | $Enums.SurveyStatus
    consent_given?: BoolFilter<"Survey"> | boolean
    head_name?: StringFilter<"Survey"> | string
    head_age?: IntNullableFilter<"Survey"> | number | null
    head_gender?: StringNullableFilter<"Survey"> | string | null
    head_marital_status?: StringNullableFilter<"Survey"> | string | null
    head_education?: StringNullableFilter<"Survey"> | string | null
    head_occupation?: StringNullableFilter<"Survey"> | string | null
    head_skill?: StringNullableFilter<"Survey"> | string | null
    head_namaz?: StringNullableFilter<"Survey"> | string | null
    head_income?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    address?: StringFilter<"Survey"> | string
    phone?: StringNullableFilter<"Survey"> | string | null
    latitude?: DecimalNullableFilter<"Survey"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Survey"> | Decimal | DecimalJsLike | number | string | null
    spouse_name?: StringNullableFilter<"Survey"> | string | null
    spouse_age?: IntNullableFilter<"Survey"> | number | null
    spouse_education?: StringNullableFilter<"Survey"> | string | null
    spouse_occupation?: StringNullableFilter<"Survey"> | string | null
    spouse_skill?: StringNullableFilter<"Survey"> | string | null
    spouse_namaz?: StringNullableFilter<"Survey"> | string | null
    spouse_income?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    house_tenure?: StringNullableFilter<"Survey"> | string | null
    house_condition?: StringNullableFilter<"Survey"> | string | null
    rooms?: IntNullableFilter<"Survey"> | number | null
    toilet_access?: StringNullableFilter<"Survey"> | string | null
    drinking_water?: StringNullableFilter<"Survey"> | string | null
    electricity_access?: StringNullableFilter<"Survey"> | string | null
    loan_types?: JsonNullableFilter<"Survey">
    loan_amount?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: BoolFilter<"Survey"> | boolean
    govt_scheme_names?: StringNullableFilter<"Survey"> | string | null
    govt_scheme_amount?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    bedridden?: BoolFilter<"Survey"> | boolean
    bedridden_monthly_expense?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    ration_card?: BoolFilter<"Survey"> | boolean
    aadhaar_status?: StringNullableFilter<"Survey"> | string | null
    health_card?: BoolFilter<"Survey"> | boolean
    bank_account?: BoolFilter<"Survey"> | boolean
    voter_id_status?: StringNullableFilter<"Survey"> | string | null
    vehicles?: JsonNullableFilter<"Survey">
    fridge?: BoolFilter<"Survey"> | boolean
    television?: BoolFilter<"Survey"> | boolean
    tv_connection?: StringNullableFilter<"Survey"> | string | null
    tv_type?: StringNullableFilter<"Survey"> | string | null
    washing_machine?: BoolFilter<"Survey"> | boolean
    smartphone_access?: StringNullableFilter<"Survey"> | string | null
    internet_access?: StringNullableFilter<"Survey"> | string | null
    monthly_household_income?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    monthly_household_expense?: DecimalFilter<"Survey"> | Decimal | DecimalJsLike | number | string
    food_security?: StringNullableFilter<"Survey"> | string | null
    vulnerable_category?: JsonNullableFilter<"Survey">
    notes?: StringNullableFilter<"Survey"> | string | null
    surveyed_at?: DateTimeFilter<"Survey"> | Date | string
    created_at?: DateTimeFilter<"Survey"> | Date | string
    updated_at?: DateTimeFilter<"Survey"> | Date | string
  }

  export type AreaCreateWithoutUsersInput = {
    name: string
    ward_code: string
    target_households?: number
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    surveys?: SurveyCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    ward_code: string
    target_households?: number
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    surveys?: SurveyUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutUsersInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutUsersInput, AreaUncheckedCreateWithoutUsersInput>
  }

  export type SurveyCreateWithoutSurveyorInput = {
    survey_code: string
    status?: $Enums.SurveyStatus
    consent_given?: boolean
    head_name: string
    head_age?: number | null
    head_gender?: string | null
    head_marital_status?: string | null
    head_education?: string | null
    head_occupation?: string | null
    head_skill?: string | null
    head_namaz?: string | null
    head_income?: Decimal | DecimalJsLike | number | string
    address: string
    phone?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    spouse_name?: string | null
    spouse_age?: number | null
    spouse_education?: string | null
    spouse_occupation?: string | null
    spouse_skill?: string | null
    spouse_namaz?: string | null
    spouse_income?: Decimal | DecimalJsLike | number | string
    house_tenure?: string | null
    house_condition?: string | null
    rooms?: number | null
    toilet_access?: string | null
    drinking_water?: string | null
    electricity_access?: string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: boolean
    govt_scheme_names?: string | null
    govt_scheme_amount?: Decimal | DecimalJsLike | number | string
    bedridden?: boolean
    bedridden_monthly_expense?: Decimal | DecimalJsLike | number | string
    ration_card?: boolean
    aadhaar_status?: string | null
    health_card?: boolean
    bank_account?: boolean
    voter_id_status?: string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: boolean
    television?: boolean
    tv_connection?: string | null
    tv_type?: string | null
    washing_machine?: boolean
    smartphone_access?: string | null
    internet_access?: string | null
    monthly_household_income?: Decimal | DecimalJsLike | number | string
    monthly_household_expense?: Decimal | DecimalJsLike | number | string
    food_security?: string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    surveyed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    area: AreaCreateNestedOneWithoutSurveysInput
    dependants?: DependantCreateNestedManyWithoutSurveyInput
  }

  export type SurveyUncheckedCreateWithoutSurveyorInput = {
    id?: number
    survey_code: string
    area_id: number
    status?: $Enums.SurveyStatus
    consent_given?: boolean
    head_name: string
    head_age?: number | null
    head_gender?: string | null
    head_marital_status?: string | null
    head_education?: string | null
    head_occupation?: string | null
    head_skill?: string | null
    head_namaz?: string | null
    head_income?: Decimal | DecimalJsLike | number | string
    address: string
    phone?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    spouse_name?: string | null
    spouse_age?: number | null
    spouse_education?: string | null
    spouse_occupation?: string | null
    spouse_skill?: string | null
    spouse_namaz?: string | null
    spouse_income?: Decimal | DecimalJsLike | number | string
    house_tenure?: string | null
    house_condition?: string | null
    rooms?: number | null
    toilet_access?: string | null
    drinking_water?: string | null
    electricity_access?: string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: boolean
    govt_scheme_names?: string | null
    govt_scheme_amount?: Decimal | DecimalJsLike | number | string
    bedridden?: boolean
    bedridden_monthly_expense?: Decimal | DecimalJsLike | number | string
    ration_card?: boolean
    aadhaar_status?: string | null
    health_card?: boolean
    bank_account?: boolean
    voter_id_status?: string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: boolean
    television?: boolean
    tv_connection?: string | null
    tv_type?: string | null
    washing_machine?: boolean
    smartphone_access?: string | null
    internet_access?: string | null
    monthly_household_income?: Decimal | DecimalJsLike | number | string
    monthly_household_expense?: Decimal | DecimalJsLike | number | string
    food_security?: string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    surveyed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    dependants?: DependantUncheckedCreateNestedManyWithoutSurveyInput
  }

  export type SurveyCreateOrConnectWithoutSurveyorInput = {
    where: SurveyWhereUniqueInput
    create: XOR<SurveyCreateWithoutSurveyorInput, SurveyUncheckedCreateWithoutSurveyorInput>
  }

  export type SurveyCreateManySurveyorInputEnvelope = {
    data: SurveyCreateManySurveyorInput | SurveyCreateManySurveyorInput[]
    skipDuplicates?: boolean
  }

  export type AreaUpsertWithoutUsersInput = {
    update: XOR<AreaUpdateWithoutUsersInput, AreaUncheckedUpdateWithoutUsersInput>
    create: XOR<AreaCreateWithoutUsersInput, AreaUncheckedCreateWithoutUsersInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutUsersInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutUsersInput, AreaUncheckedUpdateWithoutUsersInput>
  }

  export type AreaUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    ward_code?: StringFieldUpdateOperationsInput | string
    target_households?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surveys?: SurveyUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ward_code?: StringFieldUpdateOperationsInput | string
    target_households?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surveys?: SurveyUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type SurveyUpsertWithWhereUniqueWithoutSurveyorInput = {
    where: SurveyWhereUniqueInput
    update: XOR<SurveyUpdateWithoutSurveyorInput, SurveyUncheckedUpdateWithoutSurveyorInput>
    create: XOR<SurveyCreateWithoutSurveyorInput, SurveyUncheckedCreateWithoutSurveyorInput>
  }

  export type SurveyUpdateWithWhereUniqueWithoutSurveyorInput = {
    where: SurveyWhereUniqueInput
    data: XOR<SurveyUpdateWithoutSurveyorInput, SurveyUncheckedUpdateWithoutSurveyorInput>
  }

  export type SurveyUpdateManyWithWhereWithoutSurveyorInput = {
    where: SurveyScalarWhereInput
    data: XOR<SurveyUpdateManyMutationInput, SurveyUncheckedUpdateManyWithoutSurveyorInput>
  }

  export type AreaCreateWithoutSurveysInput = {
    name: string
    ward_code: string
    target_households?: number
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutSurveysInput = {
    id?: number
    name: string
    ward_code: string
    target_households?: number
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutSurveysInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutSurveysInput, AreaUncheckedCreateWithoutSurveysInput>
  }

  export type UserCreateWithoutSurveys_takenInput = {
    name: string
    email: string
    password_hash: string
    role: $Enums.Role
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    area?: AreaCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSurveys_takenInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    role: $Enums.Role
    area_id?: number | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutSurveys_takenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSurveys_takenInput, UserUncheckedCreateWithoutSurveys_takenInput>
  }

  export type DependantCreateWithoutSurveyInput = {
    name: string
    age?: number | null
    relationship?: string | null
    gender?: string | null
    member_type: $Enums.MemberType
    education?: string | null
    institution?: string | null
    part_time_job?: boolean
    scholarship_availed?: string | null
    occupation?: string | null
    skill?: string | null
    namaz?: string | null
    income?: Decimal | DecimalJsLike | number | string
    disability_or_health_need?: string | null
    created_at?: Date | string
  }

  export type DependantUncheckedCreateWithoutSurveyInput = {
    id?: number
    name: string
    age?: number | null
    relationship?: string | null
    gender?: string | null
    member_type: $Enums.MemberType
    education?: string | null
    institution?: string | null
    part_time_job?: boolean
    scholarship_availed?: string | null
    occupation?: string | null
    skill?: string | null
    namaz?: string | null
    income?: Decimal | DecimalJsLike | number | string
    disability_or_health_need?: string | null
    created_at?: Date | string
  }

  export type DependantCreateOrConnectWithoutSurveyInput = {
    where: DependantWhereUniqueInput
    create: XOR<DependantCreateWithoutSurveyInput, DependantUncheckedCreateWithoutSurveyInput>
  }

  export type DependantCreateManySurveyInputEnvelope = {
    data: DependantCreateManySurveyInput | DependantCreateManySurveyInput[]
    skipDuplicates?: boolean
  }

  export type AreaUpsertWithoutSurveysInput = {
    update: XOR<AreaUpdateWithoutSurveysInput, AreaUncheckedUpdateWithoutSurveysInput>
    create: XOR<AreaCreateWithoutSurveysInput, AreaUncheckedCreateWithoutSurveysInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutSurveysInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutSurveysInput, AreaUncheckedUpdateWithoutSurveysInput>
  }

  export type AreaUpdateWithoutSurveysInput = {
    name?: StringFieldUpdateOperationsInput | string
    ward_code?: StringFieldUpdateOperationsInput | string
    target_households?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutSurveysInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ward_code?: StringFieldUpdateOperationsInput | string
    target_households?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type UserUpsertWithoutSurveys_takenInput = {
    update: XOR<UserUpdateWithoutSurveys_takenInput, UserUncheckedUpdateWithoutSurveys_takenInput>
    create: XOR<UserCreateWithoutSurveys_takenInput, UserUncheckedCreateWithoutSurveys_takenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSurveys_takenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSurveys_takenInput, UserUncheckedUpdateWithoutSurveys_takenInput>
  }

  export type UserUpdateWithoutSurveys_takenInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSurveys_takenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    area_id?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependantUpsertWithWhereUniqueWithoutSurveyInput = {
    where: DependantWhereUniqueInput
    update: XOR<DependantUpdateWithoutSurveyInput, DependantUncheckedUpdateWithoutSurveyInput>
    create: XOR<DependantCreateWithoutSurveyInput, DependantUncheckedCreateWithoutSurveyInput>
  }

  export type DependantUpdateWithWhereUniqueWithoutSurveyInput = {
    where: DependantWhereUniqueInput
    data: XOR<DependantUpdateWithoutSurveyInput, DependantUncheckedUpdateWithoutSurveyInput>
  }

  export type DependantUpdateManyWithWhereWithoutSurveyInput = {
    where: DependantScalarWhereInput
    data: XOR<DependantUpdateManyMutationInput, DependantUncheckedUpdateManyWithoutSurveyInput>
  }

  export type DependantScalarWhereInput = {
    AND?: DependantScalarWhereInput | DependantScalarWhereInput[]
    OR?: DependantScalarWhereInput[]
    NOT?: DependantScalarWhereInput | DependantScalarWhereInput[]
    id?: IntFilter<"Dependant"> | number
    survey_id?: IntFilter<"Dependant"> | number
    name?: StringFilter<"Dependant"> | string
    age?: IntNullableFilter<"Dependant"> | number | null
    relationship?: StringNullableFilter<"Dependant"> | string | null
    gender?: StringNullableFilter<"Dependant"> | string | null
    member_type?: EnumMemberTypeFilter<"Dependant"> | $Enums.MemberType
    education?: StringNullableFilter<"Dependant"> | string | null
    institution?: StringNullableFilter<"Dependant"> | string | null
    part_time_job?: BoolFilter<"Dependant"> | boolean
    scholarship_availed?: StringNullableFilter<"Dependant"> | string | null
    occupation?: StringNullableFilter<"Dependant"> | string | null
    skill?: StringNullableFilter<"Dependant"> | string | null
    namaz?: StringNullableFilter<"Dependant"> | string | null
    income?: DecimalFilter<"Dependant"> | Decimal | DecimalJsLike | number | string
    disability_or_health_need?: StringNullableFilter<"Dependant"> | string | null
    created_at?: DateTimeFilter<"Dependant"> | Date | string
  }

  export type SurveyCreateWithoutDependantsInput = {
    survey_code: string
    status?: $Enums.SurveyStatus
    consent_given?: boolean
    head_name: string
    head_age?: number | null
    head_gender?: string | null
    head_marital_status?: string | null
    head_education?: string | null
    head_occupation?: string | null
    head_skill?: string | null
    head_namaz?: string | null
    head_income?: Decimal | DecimalJsLike | number | string
    address: string
    phone?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    spouse_name?: string | null
    spouse_age?: number | null
    spouse_education?: string | null
    spouse_occupation?: string | null
    spouse_skill?: string | null
    spouse_namaz?: string | null
    spouse_income?: Decimal | DecimalJsLike | number | string
    house_tenure?: string | null
    house_condition?: string | null
    rooms?: number | null
    toilet_access?: string | null
    drinking_water?: string | null
    electricity_access?: string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: boolean
    govt_scheme_names?: string | null
    govt_scheme_amount?: Decimal | DecimalJsLike | number | string
    bedridden?: boolean
    bedridden_monthly_expense?: Decimal | DecimalJsLike | number | string
    ration_card?: boolean
    aadhaar_status?: string | null
    health_card?: boolean
    bank_account?: boolean
    voter_id_status?: string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: boolean
    television?: boolean
    tv_connection?: string | null
    tv_type?: string | null
    washing_machine?: boolean
    smartphone_access?: string | null
    internet_access?: string | null
    monthly_household_income?: Decimal | DecimalJsLike | number | string
    monthly_household_expense?: Decimal | DecimalJsLike | number | string
    food_security?: string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    surveyed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    area: AreaCreateNestedOneWithoutSurveysInput
    surveyor: UserCreateNestedOneWithoutSurveys_takenInput
  }

  export type SurveyUncheckedCreateWithoutDependantsInput = {
    id?: number
    survey_code: string
    area_id: number
    surveyor_id: number
    status?: $Enums.SurveyStatus
    consent_given?: boolean
    head_name: string
    head_age?: number | null
    head_gender?: string | null
    head_marital_status?: string | null
    head_education?: string | null
    head_occupation?: string | null
    head_skill?: string | null
    head_namaz?: string | null
    head_income?: Decimal | DecimalJsLike | number | string
    address: string
    phone?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    spouse_name?: string | null
    spouse_age?: number | null
    spouse_education?: string | null
    spouse_occupation?: string | null
    spouse_skill?: string | null
    spouse_namaz?: string | null
    spouse_income?: Decimal | DecimalJsLike | number | string
    house_tenure?: string | null
    house_condition?: string | null
    rooms?: number | null
    toilet_access?: string | null
    drinking_water?: string | null
    electricity_access?: string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: boolean
    govt_scheme_names?: string | null
    govt_scheme_amount?: Decimal | DecimalJsLike | number | string
    bedridden?: boolean
    bedridden_monthly_expense?: Decimal | DecimalJsLike | number | string
    ration_card?: boolean
    aadhaar_status?: string | null
    health_card?: boolean
    bank_account?: boolean
    voter_id_status?: string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: boolean
    television?: boolean
    tv_connection?: string | null
    tv_type?: string | null
    washing_machine?: boolean
    smartphone_access?: string | null
    internet_access?: string | null
    monthly_household_income?: Decimal | DecimalJsLike | number | string
    monthly_household_expense?: Decimal | DecimalJsLike | number | string
    food_security?: string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    surveyed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SurveyCreateOrConnectWithoutDependantsInput = {
    where: SurveyWhereUniqueInput
    create: XOR<SurveyCreateWithoutDependantsInput, SurveyUncheckedCreateWithoutDependantsInput>
  }

  export type SurveyUpsertWithoutDependantsInput = {
    update: XOR<SurveyUpdateWithoutDependantsInput, SurveyUncheckedUpdateWithoutDependantsInput>
    create: XOR<SurveyCreateWithoutDependantsInput, SurveyUncheckedCreateWithoutDependantsInput>
    where?: SurveyWhereInput
  }

  export type SurveyUpdateToOneWithWhereWithoutDependantsInput = {
    where?: SurveyWhereInput
    data: XOR<SurveyUpdateWithoutDependantsInput, SurveyUncheckedUpdateWithoutDependantsInput>
  }

  export type SurveyUpdateWithoutDependantsInput = {
    survey_code?: StringFieldUpdateOperationsInput | string
    status?: EnumSurveyStatusFieldUpdateOperationsInput | $Enums.SurveyStatus
    consent_given?: BoolFieldUpdateOperationsInput | boolean
    head_name?: StringFieldUpdateOperationsInput | string
    head_age?: NullableIntFieldUpdateOperationsInput | number | null
    head_gender?: NullableStringFieldUpdateOperationsInput | string | null
    head_marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    head_education?: NullableStringFieldUpdateOperationsInput | string | null
    head_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    head_skill?: NullableStringFieldUpdateOperationsInput | string | null
    head_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    head_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spouse_name?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_age?: NullableIntFieldUpdateOperationsInput | number | null
    spouse_education?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_skill?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    house_tenure?: NullableStringFieldUpdateOperationsInput | string | null
    house_condition?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    toilet_access?: NullableStringFieldUpdateOperationsInput | string | null
    drinking_water?: NullableStringFieldUpdateOperationsInput | string | null
    electricity_access?: NullableStringFieldUpdateOperationsInput | string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: BoolFieldUpdateOperationsInput | boolean
    govt_scheme_names?: NullableStringFieldUpdateOperationsInput | string | null
    govt_scheme_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bedridden?: BoolFieldUpdateOperationsInput | boolean
    bedridden_monthly_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ration_card?: BoolFieldUpdateOperationsInput | boolean
    aadhaar_status?: NullableStringFieldUpdateOperationsInput | string | null
    health_card?: BoolFieldUpdateOperationsInput | boolean
    bank_account?: BoolFieldUpdateOperationsInput | boolean
    voter_id_status?: NullableStringFieldUpdateOperationsInput | string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    tv_connection?: NullableStringFieldUpdateOperationsInput | string | null
    tv_type?: NullableStringFieldUpdateOperationsInput | string | null
    washing_machine?: BoolFieldUpdateOperationsInput | boolean
    smartphone_access?: NullableStringFieldUpdateOperationsInput | string | null
    internet_access?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_household_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_household_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    food_security?: NullableStringFieldUpdateOperationsInput | string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    surveyed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneRequiredWithoutSurveysNestedInput
    surveyor?: UserUpdateOneRequiredWithoutSurveys_takenNestedInput
  }

  export type SurveyUncheckedUpdateWithoutDependantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    survey_code?: StringFieldUpdateOperationsInput | string
    area_id?: IntFieldUpdateOperationsInput | number
    surveyor_id?: IntFieldUpdateOperationsInput | number
    status?: EnumSurveyStatusFieldUpdateOperationsInput | $Enums.SurveyStatus
    consent_given?: BoolFieldUpdateOperationsInput | boolean
    head_name?: StringFieldUpdateOperationsInput | string
    head_age?: NullableIntFieldUpdateOperationsInput | number | null
    head_gender?: NullableStringFieldUpdateOperationsInput | string | null
    head_marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    head_education?: NullableStringFieldUpdateOperationsInput | string | null
    head_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    head_skill?: NullableStringFieldUpdateOperationsInput | string | null
    head_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    head_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spouse_name?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_age?: NullableIntFieldUpdateOperationsInput | number | null
    spouse_education?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_skill?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    house_tenure?: NullableStringFieldUpdateOperationsInput | string | null
    house_condition?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    toilet_access?: NullableStringFieldUpdateOperationsInput | string | null
    drinking_water?: NullableStringFieldUpdateOperationsInput | string | null
    electricity_access?: NullableStringFieldUpdateOperationsInput | string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: BoolFieldUpdateOperationsInput | boolean
    govt_scheme_names?: NullableStringFieldUpdateOperationsInput | string | null
    govt_scheme_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bedridden?: BoolFieldUpdateOperationsInput | boolean
    bedridden_monthly_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ration_card?: BoolFieldUpdateOperationsInput | boolean
    aadhaar_status?: NullableStringFieldUpdateOperationsInput | string | null
    health_card?: BoolFieldUpdateOperationsInput | boolean
    bank_account?: BoolFieldUpdateOperationsInput | boolean
    voter_id_status?: NullableStringFieldUpdateOperationsInput | string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    tv_connection?: NullableStringFieldUpdateOperationsInput | string | null
    tv_type?: NullableStringFieldUpdateOperationsInput | string | null
    washing_machine?: BoolFieldUpdateOperationsInput | boolean
    smartphone_access?: NullableStringFieldUpdateOperationsInput | string | null
    internet_access?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_household_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_household_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    food_security?: NullableStringFieldUpdateOperationsInput | string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    surveyed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyAreaInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    role: $Enums.Role
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SurveyCreateManyAreaInput = {
    id?: number
    survey_code: string
    surveyor_id: number
    status?: $Enums.SurveyStatus
    consent_given?: boolean
    head_name: string
    head_age?: number | null
    head_gender?: string | null
    head_marital_status?: string | null
    head_education?: string | null
    head_occupation?: string | null
    head_skill?: string | null
    head_namaz?: string | null
    head_income?: Decimal | DecimalJsLike | number | string
    address: string
    phone?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    spouse_name?: string | null
    spouse_age?: number | null
    spouse_education?: string | null
    spouse_occupation?: string | null
    spouse_skill?: string | null
    spouse_namaz?: string | null
    spouse_income?: Decimal | DecimalJsLike | number | string
    house_tenure?: string | null
    house_condition?: string | null
    rooms?: number | null
    toilet_access?: string | null
    drinking_water?: string | null
    electricity_access?: string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: boolean
    govt_scheme_names?: string | null
    govt_scheme_amount?: Decimal | DecimalJsLike | number | string
    bedridden?: boolean
    bedridden_monthly_expense?: Decimal | DecimalJsLike | number | string
    ration_card?: boolean
    aadhaar_status?: string | null
    health_card?: boolean
    bank_account?: boolean
    voter_id_status?: string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: boolean
    television?: boolean
    tv_connection?: string | null
    tv_type?: string | null
    washing_machine?: boolean
    smartphone_access?: string | null
    internet_access?: string | null
    monthly_household_income?: Decimal | DecimalJsLike | number | string
    monthly_household_expense?: Decimal | DecimalJsLike | number | string
    food_security?: string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    surveyed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateWithoutAreaInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surveys_taken?: SurveyUpdateManyWithoutSurveyorNestedInput
  }

  export type UserUncheckedUpdateWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surveys_taken?: SurveyUncheckedUpdateManyWithoutSurveyorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyUpdateWithoutAreaInput = {
    survey_code?: StringFieldUpdateOperationsInput | string
    status?: EnumSurveyStatusFieldUpdateOperationsInput | $Enums.SurveyStatus
    consent_given?: BoolFieldUpdateOperationsInput | boolean
    head_name?: StringFieldUpdateOperationsInput | string
    head_age?: NullableIntFieldUpdateOperationsInput | number | null
    head_gender?: NullableStringFieldUpdateOperationsInput | string | null
    head_marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    head_education?: NullableStringFieldUpdateOperationsInput | string | null
    head_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    head_skill?: NullableStringFieldUpdateOperationsInput | string | null
    head_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    head_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spouse_name?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_age?: NullableIntFieldUpdateOperationsInput | number | null
    spouse_education?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_skill?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    house_tenure?: NullableStringFieldUpdateOperationsInput | string | null
    house_condition?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    toilet_access?: NullableStringFieldUpdateOperationsInput | string | null
    drinking_water?: NullableStringFieldUpdateOperationsInput | string | null
    electricity_access?: NullableStringFieldUpdateOperationsInput | string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: BoolFieldUpdateOperationsInput | boolean
    govt_scheme_names?: NullableStringFieldUpdateOperationsInput | string | null
    govt_scheme_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bedridden?: BoolFieldUpdateOperationsInput | boolean
    bedridden_monthly_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ration_card?: BoolFieldUpdateOperationsInput | boolean
    aadhaar_status?: NullableStringFieldUpdateOperationsInput | string | null
    health_card?: BoolFieldUpdateOperationsInput | boolean
    bank_account?: BoolFieldUpdateOperationsInput | boolean
    voter_id_status?: NullableStringFieldUpdateOperationsInput | string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    tv_connection?: NullableStringFieldUpdateOperationsInput | string | null
    tv_type?: NullableStringFieldUpdateOperationsInput | string | null
    washing_machine?: BoolFieldUpdateOperationsInput | boolean
    smartphone_access?: NullableStringFieldUpdateOperationsInput | string | null
    internet_access?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_household_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_household_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    food_security?: NullableStringFieldUpdateOperationsInput | string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    surveyed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surveyor?: UserUpdateOneRequiredWithoutSurveys_takenNestedInput
    dependants?: DependantUpdateManyWithoutSurveyNestedInput
  }

  export type SurveyUncheckedUpdateWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    survey_code?: StringFieldUpdateOperationsInput | string
    surveyor_id?: IntFieldUpdateOperationsInput | number
    status?: EnumSurveyStatusFieldUpdateOperationsInput | $Enums.SurveyStatus
    consent_given?: BoolFieldUpdateOperationsInput | boolean
    head_name?: StringFieldUpdateOperationsInput | string
    head_age?: NullableIntFieldUpdateOperationsInput | number | null
    head_gender?: NullableStringFieldUpdateOperationsInput | string | null
    head_marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    head_education?: NullableStringFieldUpdateOperationsInput | string | null
    head_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    head_skill?: NullableStringFieldUpdateOperationsInput | string | null
    head_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    head_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spouse_name?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_age?: NullableIntFieldUpdateOperationsInput | number | null
    spouse_education?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_skill?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    house_tenure?: NullableStringFieldUpdateOperationsInput | string | null
    house_condition?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    toilet_access?: NullableStringFieldUpdateOperationsInput | string | null
    drinking_water?: NullableStringFieldUpdateOperationsInput | string | null
    electricity_access?: NullableStringFieldUpdateOperationsInput | string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: BoolFieldUpdateOperationsInput | boolean
    govt_scheme_names?: NullableStringFieldUpdateOperationsInput | string | null
    govt_scheme_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bedridden?: BoolFieldUpdateOperationsInput | boolean
    bedridden_monthly_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ration_card?: BoolFieldUpdateOperationsInput | boolean
    aadhaar_status?: NullableStringFieldUpdateOperationsInput | string | null
    health_card?: BoolFieldUpdateOperationsInput | boolean
    bank_account?: BoolFieldUpdateOperationsInput | boolean
    voter_id_status?: NullableStringFieldUpdateOperationsInput | string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    tv_connection?: NullableStringFieldUpdateOperationsInput | string | null
    tv_type?: NullableStringFieldUpdateOperationsInput | string | null
    washing_machine?: BoolFieldUpdateOperationsInput | boolean
    smartphone_access?: NullableStringFieldUpdateOperationsInput | string | null
    internet_access?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_household_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_household_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    food_security?: NullableStringFieldUpdateOperationsInput | string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    surveyed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dependants?: DependantUncheckedUpdateManyWithoutSurveyNestedInput
  }

  export type SurveyUncheckedUpdateManyWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    survey_code?: StringFieldUpdateOperationsInput | string
    surveyor_id?: IntFieldUpdateOperationsInput | number
    status?: EnumSurveyStatusFieldUpdateOperationsInput | $Enums.SurveyStatus
    consent_given?: BoolFieldUpdateOperationsInput | boolean
    head_name?: StringFieldUpdateOperationsInput | string
    head_age?: NullableIntFieldUpdateOperationsInput | number | null
    head_gender?: NullableStringFieldUpdateOperationsInput | string | null
    head_marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    head_education?: NullableStringFieldUpdateOperationsInput | string | null
    head_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    head_skill?: NullableStringFieldUpdateOperationsInput | string | null
    head_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    head_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spouse_name?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_age?: NullableIntFieldUpdateOperationsInput | number | null
    spouse_education?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_skill?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    house_tenure?: NullableStringFieldUpdateOperationsInput | string | null
    house_condition?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    toilet_access?: NullableStringFieldUpdateOperationsInput | string | null
    drinking_water?: NullableStringFieldUpdateOperationsInput | string | null
    electricity_access?: NullableStringFieldUpdateOperationsInput | string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: BoolFieldUpdateOperationsInput | boolean
    govt_scheme_names?: NullableStringFieldUpdateOperationsInput | string | null
    govt_scheme_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bedridden?: BoolFieldUpdateOperationsInput | boolean
    bedridden_monthly_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ration_card?: BoolFieldUpdateOperationsInput | boolean
    aadhaar_status?: NullableStringFieldUpdateOperationsInput | string | null
    health_card?: BoolFieldUpdateOperationsInput | boolean
    bank_account?: BoolFieldUpdateOperationsInput | boolean
    voter_id_status?: NullableStringFieldUpdateOperationsInput | string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    tv_connection?: NullableStringFieldUpdateOperationsInput | string | null
    tv_type?: NullableStringFieldUpdateOperationsInput | string | null
    washing_machine?: BoolFieldUpdateOperationsInput | boolean
    smartphone_access?: NullableStringFieldUpdateOperationsInput | string | null
    internet_access?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_household_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_household_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    food_security?: NullableStringFieldUpdateOperationsInput | string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    surveyed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyCreateManySurveyorInput = {
    id?: number
    survey_code: string
    area_id: number
    status?: $Enums.SurveyStatus
    consent_given?: boolean
    head_name: string
    head_age?: number | null
    head_gender?: string | null
    head_marital_status?: string | null
    head_education?: string | null
    head_occupation?: string | null
    head_skill?: string | null
    head_namaz?: string | null
    head_income?: Decimal | DecimalJsLike | number | string
    address: string
    phone?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    spouse_name?: string | null
    spouse_age?: number | null
    spouse_education?: string | null
    spouse_occupation?: string | null
    spouse_skill?: string | null
    spouse_namaz?: string | null
    spouse_income?: Decimal | DecimalJsLike | number | string
    house_tenure?: string | null
    house_condition?: string | null
    rooms?: number | null
    toilet_access?: string | null
    drinking_water?: string | null
    electricity_access?: string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: boolean
    govt_scheme_names?: string | null
    govt_scheme_amount?: Decimal | DecimalJsLike | number | string
    bedridden?: boolean
    bedridden_monthly_expense?: Decimal | DecimalJsLike | number | string
    ration_card?: boolean
    aadhaar_status?: string | null
    health_card?: boolean
    bank_account?: boolean
    voter_id_status?: string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: boolean
    television?: boolean
    tv_connection?: string | null
    tv_type?: string | null
    washing_machine?: boolean
    smartphone_access?: string | null
    internet_access?: string | null
    monthly_household_income?: Decimal | DecimalJsLike | number | string
    monthly_household_expense?: Decimal | DecimalJsLike | number | string
    food_security?: string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    surveyed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SurveyUpdateWithoutSurveyorInput = {
    survey_code?: StringFieldUpdateOperationsInput | string
    status?: EnumSurveyStatusFieldUpdateOperationsInput | $Enums.SurveyStatus
    consent_given?: BoolFieldUpdateOperationsInput | boolean
    head_name?: StringFieldUpdateOperationsInput | string
    head_age?: NullableIntFieldUpdateOperationsInput | number | null
    head_gender?: NullableStringFieldUpdateOperationsInput | string | null
    head_marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    head_education?: NullableStringFieldUpdateOperationsInput | string | null
    head_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    head_skill?: NullableStringFieldUpdateOperationsInput | string | null
    head_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    head_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spouse_name?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_age?: NullableIntFieldUpdateOperationsInput | number | null
    spouse_education?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_skill?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    house_tenure?: NullableStringFieldUpdateOperationsInput | string | null
    house_condition?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    toilet_access?: NullableStringFieldUpdateOperationsInput | string | null
    drinking_water?: NullableStringFieldUpdateOperationsInput | string | null
    electricity_access?: NullableStringFieldUpdateOperationsInput | string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: BoolFieldUpdateOperationsInput | boolean
    govt_scheme_names?: NullableStringFieldUpdateOperationsInput | string | null
    govt_scheme_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bedridden?: BoolFieldUpdateOperationsInput | boolean
    bedridden_monthly_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ration_card?: BoolFieldUpdateOperationsInput | boolean
    aadhaar_status?: NullableStringFieldUpdateOperationsInput | string | null
    health_card?: BoolFieldUpdateOperationsInput | boolean
    bank_account?: BoolFieldUpdateOperationsInput | boolean
    voter_id_status?: NullableStringFieldUpdateOperationsInput | string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    tv_connection?: NullableStringFieldUpdateOperationsInput | string | null
    tv_type?: NullableStringFieldUpdateOperationsInput | string | null
    washing_machine?: BoolFieldUpdateOperationsInput | boolean
    smartphone_access?: NullableStringFieldUpdateOperationsInput | string | null
    internet_access?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_household_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_household_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    food_security?: NullableStringFieldUpdateOperationsInput | string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    surveyed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneRequiredWithoutSurveysNestedInput
    dependants?: DependantUpdateManyWithoutSurveyNestedInput
  }

  export type SurveyUncheckedUpdateWithoutSurveyorInput = {
    id?: IntFieldUpdateOperationsInput | number
    survey_code?: StringFieldUpdateOperationsInput | string
    area_id?: IntFieldUpdateOperationsInput | number
    status?: EnumSurveyStatusFieldUpdateOperationsInput | $Enums.SurveyStatus
    consent_given?: BoolFieldUpdateOperationsInput | boolean
    head_name?: StringFieldUpdateOperationsInput | string
    head_age?: NullableIntFieldUpdateOperationsInput | number | null
    head_gender?: NullableStringFieldUpdateOperationsInput | string | null
    head_marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    head_education?: NullableStringFieldUpdateOperationsInput | string | null
    head_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    head_skill?: NullableStringFieldUpdateOperationsInput | string | null
    head_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    head_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spouse_name?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_age?: NullableIntFieldUpdateOperationsInput | number | null
    spouse_education?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_skill?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    house_tenure?: NullableStringFieldUpdateOperationsInput | string | null
    house_condition?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    toilet_access?: NullableStringFieldUpdateOperationsInput | string | null
    drinking_water?: NullableStringFieldUpdateOperationsInput | string | null
    electricity_access?: NullableStringFieldUpdateOperationsInput | string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: BoolFieldUpdateOperationsInput | boolean
    govt_scheme_names?: NullableStringFieldUpdateOperationsInput | string | null
    govt_scheme_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bedridden?: BoolFieldUpdateOperationsInput | boolean
    bedridden_monthly_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ration_card?: BoolFieldUpdateOperationsInput | boolean
    aadhaar_status?: NullableStringFieldUpdateOperationsInput | string | null
    health_card?: BoolFieldUpdateOperationsInput | boolean
    bank_account?: BoolFieldUpdateOperationsInput | boolean
    voter_id_status?: NullableStringFieldUpdateOperationsInput | string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    tv_connection?: NullableStringFieldUpdateOperationsInput | string | null
    tv_type?: NullableStringFieldUpdateOperationsInput | string | null
    washing_machine?: BoolFieldUpdateOperationsInput | boolean
    smartphone_access?: NullableStringFieldUpdateOperationsInput | string | null
    internet_access?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_household_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_household_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    food_security?: NullableStringFieldUpdateOperationsInput | string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    surveyed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dependants?: DependantUncheckedUpdateManyWithoutSurveyNestedInput
  }

  export type SurveyUncheckedUpdateManyWithoutSurveyorInput = {
    id?: IntFieldUpdateOperationsInput | number
    survey_code?: StringFieldUpdateOperationsInput | string
    area_id?: IntFieldUpdateOperationsInput | number
    status?: EnumSurveyStatusFieldUpdateOperationsInput | $Enums.SurveyStatus
    consent_given?: BoolFieldUpdateOperationsInput | boolean
    head_name?: StringFieldUpdateOperationsInput | string
    head_age?: NullableIntFieldUpdateOperationsInput | number | null
    head_gender?: NullableStringFieldUpdateOperationsInput | string | null
    head_marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    head_education?: NullableStringFieldUpdateOperationsInput | string | null
    head_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    head_skill?: NullableStringFieldUpdateOperationsInput | string | null
    head_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    head_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spouse_name?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_age?: NullableIntFieldUpdateOperationsInput | number | null
    spouse_education?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_occupation?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_skill?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_namaz?: NullableStringFieldUpdateOperationsInput | string | null
    spouse_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    house_tenure?: NullableStringFieldUpdateOperationsInput | string | null
    house_condition?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    toilet_access?: NullableStringFieldUpdateOperationsInput | string | null
    drinking_water?: NullableStringFieldUpdateOperationsInput | string | null
    electricity_access?: NullableStringFieldUpdateOperationsInput | string | null
    loan_types?: NullableJsonNullValueInput | InputJsonValue
    loan_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    govt_scheme_availed?: BoolFieldUpdateOperationsInput | boolean
    govt_scheme_names?: NullableStringFieldUpdateOperationsInput | string | null
    govt_scheme_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bedridden?: BoolFieldUpdateOperationsInput | boolean
    bedridden_monthly_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ration_card?: BoolFieldUpdateOperationsInput | boolean
    aadhaar_status?: NullableStringFieldUpdateOperationsInput | string | null
    health_card?: BoolFieldUpdateOperationsInput | boolean
    bank_account?: BoolFieldUpdateOperationsInput | boolean
    voter_id_status?: NullableStringFieldUpdateOperationsInput | string | null
    vehicles?: NullableJsonNullValueInput | InputJsonValue
    fridge?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    tv_connection?: NullableStringFieldUpdateOperationsInput | string | null
    tv_type?: NullableStringFieldUpdateOperationsInput | string | null
    washing_machine?: BoolFieldUpdateOperationsInput | boolean
    smartphone_access?: NullableStringFieldUpdateOperationsInput | string | null
    internet_access?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_household_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthly_household_expense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    food_security?: NullableStringFieldUpdateOperationsInput | string | null
    vulnerable_category?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    surveyed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependantCreateManySurveyInput = {
    id?: number
    name: string
    age?: number | null
    relationship?: string | null
    gender?: string | null
    member_type: $Enums.MemberType
    education?: string | null
    institution?: string | null
    part_time_job?: boolean
    scholarship_availed?: string | null
    occupation?: string | null
    skill?: string | null
    namaz?: string | null
    income?: Decimal | DecimalJsLike | number | string
    disability_or_health_need?: string | null
    created_at?: Date | string
  }

  export type DependantUpdateWithoutSurveyInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    education?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    part_time_job?: BoolFieldUpdateOperationsInput | boolean
    scholarship_availed?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: NullableStringFieldUpdateOperationsInput | string | null
    namaz?: NullableStringFieldUpdateOperationsInput | string | null
    income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    disability_or_health_need?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependantUncheckedUpdateWithoutSurveyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    education?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    part_time_job?: BoolFieldUpdateOperationsInput | boolean
    scholarship_availed?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: NullableStringFieldUpdateOperationsInput | string | null
    namaz?: NullableStringFieldUpdateOperationsInput | string | null
    income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    disability_or_health_need?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependantUncheckedUpdateManyWithoutSurveyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    education?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    part_time_job?: BoolFieldUpdateOperationsInput | boolean
    scholarship_availed?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: NullableStringFieldUpdateOperationsInput | string | null
    namaz?: NullableStringFieldUpdateOperationsInput | string | null
    income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    disability_or_health_need?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AreaCountOutputTypeDefaultArgs instead
     */
    export type AreaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AreaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SurveyCountOutputTypeDefaultArgs instead
     */
    export type SurveyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SurveyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AreaDefaultArgs instead
     */
    export type AreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AreaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SurveyDefaultArgs instead
     */
    export type SurveyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SurveyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DependantDefaultArgs instead
     */
    export type DependantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DependantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChartConfigDefaultArgs instead
     */
    export type ChartConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChartConfigDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}