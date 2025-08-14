
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Household
 * 
 */
export type Household = $Result.DefaultSelection<Prisma.$HouseholdPayload>
/**
 * Model HouseholdMember
 * 
 */
export type HouseholdMember = $Result.DefaultSelection<Prisma.$HouseholdMemberPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model RecurrenceRule
 * 
 */
export type RecurrenceRule = $Result.DefaultSelection<Prisma.$RecurrenceRulePayload>
/**
 * Model TaskHistory
 * 
 */
export type TaskHistory = $Result.DefaultSelection<Prisma.$TaskHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.household`: Exposes CRUD operations for the **Household** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Households
    * const households = await prisma.household.findMany()
    * ```
    */
  get household(): Prisma.HouseholdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.householdMember`: Exposes CRUD operations for the **HouseholdMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HouseholdMembers
    * const householdMembers = await prisma.householdMember.findMany()
    * ```
    */
  get householdMember(): Prisma.HouseholdMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recurrenceRule`: Exposes CRUD operations for the **RecurrenceRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecurrenceRules
    * const recurrenceRules = await prisma.recurrenceRule.findMany()
    * ```
    */
  get recurrenceRule(): Prisma.RecurrenceRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskHistory`: Exposes CRUD operations for the **TaskHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskHistories
    * const taskHistories = await prisma.taskHistory.findMany()
    * ```
    */
  get taskHistory(): Prisma.TaskHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Household: 'Household',
    HouseholdMember: 'HouseholdMember',
    Category: 'Category',
    Task: 'Task',
    RecurrenceRule: 'RecurrenceRule',
    TaskHistory: 'TaskHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "household" | "householdMember" | "category" | "task" | "recurrenceRule" | "taskHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Household: {
        payload: Prisma.$HouseholdPayload<ExtArgs>
        fields: Prisma.HouseholdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseholdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseholdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          findFirst: {
            args: Prisma.HouseholdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseholdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          findMany: {
            args: Prisma.HouseholdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>[]
          }
          create: {
            args: Prisma.HouseholdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          createMany: {
            args: Prisma.HouseholdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HouseholdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>[]
          }
          delete: {
            args: Prisma.HouseholdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          update: {
            args: Prisma.HouseholdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          deleteMany: {
            args: Prisma.HouseholdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseholdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HouseholdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>[]
          }
          upsert: {
            args: Prisma.HouseholdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          aggregate: {
            args: Prisma.HouseholdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHousehold>
          }
          groupBy: {
            args: Prisma.HouseholdGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseholdGroupByOutputType>[]
          }
          count: {
            args: Prisma.HouseholdCountArgs<ExtArgs>
            result: $Utils.Optional<HouseholdCountAggregateOutputType> | number
          }
        }
      }
      HouseholdMember: {
        payload: Prisma.$HouseholdMemberPayload<ExtArgs>
        fields: Prisma.HouseholdMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseholdMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseholdMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>
          }
          findFirst: {
            args: Prisma.HouseholdMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseholdMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>
          }
          findMany: {
            args: Prisma.HouseholdMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>[]
          }
          create: {
            args: Prisma.HouseholdMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>
          }
          createMany: {
            args: Prisma.HouseholdMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HouseholdMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>[]
          }
          delete: {
            args: Prisma.HouseholdMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>
          }
          update: {
            args: Prisma.HouseholdMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>
          }
          deleteMany: {
            args: Prisma.HouseholdMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseholdMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HouseholdMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>[]
          }
          upsert: {
            args: Prisma.HouseholdMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>
          }
          aggregate: {
            args: Prisma.HouseholdMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHouseholdMember>
          }
          groupBy: {
            args: Prisma.HouseholdMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseholdMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.HouseholdMemberCountArgs<ExtArgs>
            result: $Utils.Optional<HouseholdMemberCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      RecurrenceRule: {
        payload: Prisma.$RecurrenceRulePayload<ExtArgs>
        fields: Prisma.RecurrenceRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecurrenceRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecurrenceRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceRulePayload>
          }
          findFirst: {
            args: Prisma.RecurrenceRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecurrenceRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceRulePayload>
          }
          findMany: {
            args: Prisma.RecurrenceRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceRulePayload>[]
          }
          create: {
            args: Prisma.RecurrenceRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceRulePayload>
          }
          createMany: {
            args: Prisma.RecurrenceRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecurrenceRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceRulePayload>[]
          }
          delete: {
            args: Prisma.RecurrenceRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceRulePayload>
          }
          update: {
            args: Prisma.RecurrenceRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceRulePayload>
          }
          deleteMany: {
            args: Prisma.RecurrenceRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecurrenceRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecurrenceRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceRulePayload>[]
          }
          upsert: {
            args: Prisma.RecurrenceRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceRulePayload>
          }
          aggregate: {
            args: Prisma.RecurrenceRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurrenceRule>
          }
          groupBy: {
            args: Prisma.RecurrenceRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecurrenceRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecurrenceRuleCountArgs<ExtArgs>
            result: $Utils.Optional<RecurrenceRuleCountAggregateOutputType> | number
          }
        }
      }
      TaskHistory: {
        payload: Prisma.$TaskHistoryPayload<ExtArgs>
        fields: Prisma.TaskHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          findFirst: {
            args: Prisma.TaskHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          findMany: {
            args: Prisma.TaskHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>[]
          }
          create: {
            args: Prisma.TaskHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          createMany: {
            args: Prisma.TaskHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>[]
          }
          delete: {
            args: Prisma.TaskHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          update: {
            args: Prisma.TaskHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TaskHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>[]
          }
          upsert: {
            args: Prisma.TaskHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          aggregate: {
            args: Prisma.TaskHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskHistory>
          }
          groupBy: {
            args: Prisma.TaskHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TaskHistoryCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    household?: HouseholdOmit
    householdMember?: HouseholdMemberOmit
    category?: CategoryOmit
    task?: TaskOmit
    recurrenceRule?: RecurrenceRuleOmit
    taskHistory?: TaskHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    categories: number
    households: number
    tasks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | UserCountOutputTypeCountCategoriesArgs
    households?: boolean | UserCountOutputTypeCountHouseholdsArgs
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
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
  export type UserCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHouseholdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type HouseholdCountOutputType
   */

  export type HouseholdCountOutputType = {
    categories: number
    members: number
    tasks: number
  }

  export type HouseholdCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | HouseholdCountOutputTypeCountCategoriesArgs
    members?: boolean | HouseholdCountOutputTypeCountMembersArgs
    tasks?: boolean | HouseholdCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdCountOutputType
     */
    select?: HouseholdCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdMemberWhereInput
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    tasks: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | CategoryCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    subTasks: number
    taskHistory: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subTasks?: boolean | TaskCountOutputTypeCountSubTasksArgs
    taskHistory?: boolean | TaskCountOutputTypeCountTaskHistoryArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSubTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountTaskHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categories?: boolean | User$categoriesArgs<ExtArgs>
    households?: boolean | User$householdsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | User$categoriesArgs<ExtArgs>
    households?: boolean | User$householdsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      households: Prisma.$HouseholdMemberPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends User$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    households<T extends User$householdsArgs<ExtArgs> = {}>(args?: Subset<T, User$householdsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.categories
   */
  export type User$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * User.households
   */
  export type User$householdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    where?: HouseholdMemberWhereInput
    orderBy?: HouseholdMemberOrderByWithRelationInput | HouseholdMemberOrderByWithRelationInput[]
    cursor?: HouseholdMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseholdMemberScalarFieldEnum | HouseholdMemberScalarFieldEnum[]
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Household
   */

  export type AggregateHousehold = {
    _count: HouseholdCountAggregateOutputType | null
    _min: HouseholdMinAggregateOutputType | null
    _max: HouseholdMaxAggregateOutputType | null
  }

  export type HouseholdMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HouseholdMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HouseholdCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HouseholdMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HouseholdMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HouseholdCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HouseholdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Household to aggregate.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Households
    **/
    _count?: true | HouseholdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseholdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseholdMaxAggregateInputType
  }

  export type GetHouseholdAggregateType<T extends HouseholdAggregateArgs> = {
        [P in keyof T & keyof AggregateHousehold]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHousehold[P]>
      : GetScalarType<T[P], AggregateHousehold[P]>
  }




  export type HouseholdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdWhereInput
    orderBy?: HouseholdOrderByWithAggregationInput | HouseholdOrderByWithAggregationInput[]
    by: HouseholdScalarFieldEnum[] | HouseholdScalarFieldEnum
    having?: HouseholdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseholdCountAggregateInputType | true
    _min?: HouseholdMinAggregateInputType
    _max?: HouseholdMaxAggregateInputType
  }

  export type HouseholdGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: HouseholdCountAggregateOutputType | null
    _min: HouseholdMinAggregateOutputType | null
    _max: HouseholdMaxAggregateOutputType | null
  }

  type GetHouseholdGroupByPayload<T extends HouseholdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseholdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseholdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseholdGroupByOutputType[P]>
            : GetScalarType<T[P], HouseholdGroupByOutputType[P]>
        }
      >
    >


  export type HouseholdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categories?: boolean | Household$categoriesArgs<ExtArgs>
    members?: boolean | Household$membersArgs<ExtArgs>
    tasks?: boolean | Household$tasksArgs<ExtArgs>
    _count?: boolean | HouseholdCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["household"]>

  export type HouseholdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["household"]>

  export type HouseholdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["household"]>

  export type HouseholdSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HouseholdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["household"]>
  export type HouseholdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Household$categoriesArgs<ExtArgs>
    members?: boolean | Household$membersArgs<ExtArgs>
    tasks?: boolean | Household$tasksArgs<ExtArgs>
    _count?: boolean | HouseholdCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HouseholdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HouseholdIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HouseholdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Household"
    objects: {
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      members: Prisma.$HouseholdMemberPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["household"]>
    composites: {}
  }

  type HouseholdGetPayload<S extends boolean | null | undefined | HouseholdDefaultArgs> = $Result.GetResult<Prisma.$HouseholdPayload, S>

  type HouseholdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HouseholdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HouseholdCountAggregateInputType | true
    }

  export interface HouseholdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Household'], meta: { name: 'Household' } }
    /**
     * Find zero or one Household that matches the filter.
     * @param {HouseholdFindUniqueArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseholdFindUniqueArgs>(args: SelectSubset<T, HouseholdFindUniqueArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Household that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HouseholdFindUniqueOrThrowArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseholdFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseholdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Household that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindFirstArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseholdFindFirstArgs>(args?: SelectSubset<T, HouseholdFindFirstArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Household that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindFirstOrThrowArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseholdFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseholdFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Households that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Households
     * const households = await prisma.household.findMany()
     * 
     * // Get first 10 Households
     * const households = await prisma.household.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const householdWithIdOnly = await prisma.household.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HouseholdFindManyArgs>(args?: SelectSubset<T, HouseholdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Household.
     * @param {HouseholdCreateArgs} args - Arguments to create a Household.
     * @example
     * // Create one Household
     * const Household = await prisma.household.create({
     *   data: {
     *     // ... data to create a Household
     *   }
     * })
     * 
     */
    create<T extends HouseholdCreateArgs>(args: SelectSubset<T, HouseholdCreateArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Households.
     * @param {HouseholdCreateManyArgs} args - Arguments to create many Households.
     * @example
     * // Create many Households
     * const household = await prisma.household.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseholdCreateManyArgs>(args?: SelectSubset<T, HouseholdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Households and returns the data saved in the database.
     * @param {HouseholdCreateManyAndReturnArgs} args - Arguments to create many Households.
     * @example
     * // Create many Households
     * const household = await prisma.household.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Households and only return the `id`
     * const householdWithIdOnly = await prisma.household.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HouseholdCreateManyAndReturnArgs>(args?: SelectSubset<T, HouseholdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Household.
     * @param {HouseholdDeleteArgs} args - Arguments to delete one Household.
     * @example
     * // Delete one Household
     * const Household = await prisma.household.delete({
     *   where: {
     *     // ... filter to delete one Household
     *   }
     * })
     * 
     */
    delete<T extends HouseholdDeleteArgs>(args: SelectSubset<T, HouseholdDeleteArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Household.
     * @param {HouseholdUpdateArgs} args - Arguments to update one Household.
     * @example
     * // Update one Household
     * const household = await prisma.household.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseholdUpdateArgs>(args: SelectSubset<T, HouseholdUpdateArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Households.
     * @param {HouseholdDeleteManyArgs} args - Arguments to filter Households to delete.
     * @example
     * // Delete a few Households
     * const { count } = await prisma.household.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseholdDeleteManyArgs>(args?: SelectSubset<T, HouseholdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Households.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Households
     * const household = await prisma.household.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseholdUpdateManyArgs>(args: SelectSubset<T, HouseholdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Households and returns the data updated in the database.
     * @param {HouseholdUpdateManyAndReturnArgs} args - Arguments to update many Households.
     * @example
     * // Update many Households
     * const household = await prisma.household.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Households and only return the `id`
     * const householdWithIdOnly = await prisma.household.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HouseholdUpdateManyAndReturnArgs>(args: SelectSubset<T, HouseholdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Household.
     * @param {HouseholdUpsertArgs} args - Arguments to update or create a Household.
     * @example
     * // Update or create a Household
     * const household = await prisma.household.upsert({
     *   create: {
     *     // ... data to create a Household
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Household we want to update
     *   }
     * })
     */
    upsert<T extends HouseholdUpsertArgs>(args: SelectSubset<T, HouseholdUpsertArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Households.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdCountArgs} args - Arguments to filter Households to count.
     * @example
     * // Count the number of Households
     * const count = await prisma.household.count({
     *   where: {
     *     // ... the filter for the Households we want to count
     *   }
     * })
    **/
    count<T extends HouseholdCountArgs>(
      args?: Subset<T, HouseholdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseholdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Household.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HouseholdAggregateArgs>(args: Subset<T, HouseholdAggregateArgs>): Prisma.PrismaPromise<GetHouseholdAggregateType<T>>

    /**
     * Group by Household.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdGroupByArgs} args - Group by arguments.
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
      T extends HouseholdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseholdGroupByArgs['orderBy'] }
        : { orderBy?: HouseholdGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HouseholdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseholdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Household model
   */
  readonly fields: HouseholdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Household.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseholdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Household$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Household$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Household$membersArgs<ExtArgs> = {}>(args?: Subset<T, Household$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Household$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Household$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Household model
   */
  interface HouseholdFieldRefs {
    readonly id: FieldRef<"Household", 'String'>
    readonly name: FieldRef<"Household", 'String'>
    readonly description: FieldRef<"Household", 'String'>
    readonly createdAt: FieldRef<"Household", 'DateTime'>
    readonly updatedAt: FieldRef<"Household", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Household findUnique
   */
  export type HouseholdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household findUniqueOrThrow
   */
  export type HouseholdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household findFirst
   */
  export type HouseholdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Households.
     */
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household findFirstOrThrow
   */
  export type HouseholdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Households.
     */
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household findMany
   */
  export type HouseholdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Households to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household create
   */
  export type HouseholdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The data needed to create a Household.
     */
    data: XOR<HouseholdCreateInput, HouseholdUncheckedCreateInput>
  }

  /**
   * Household createMany
   */
  export type HouseholdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Households.
     */
    data: HouseholdCreateManyInput | HouseholdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Household createManyAndReturn
   */
  export type HouseholdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * The data used to create many Households.
     */
    data: HouseholdCreateManyInput | HouseholdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Household update
   */
  export type HouseholdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The data needed to update a Household.
     */
    data: XOR<HouseholdUpdateInput, HouseholdUncheckedUpdateInput>
    /**
     * Choose, which Household to update.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household updateMany
   */
  export type HouseholdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Households.
     */
    data: XOR<HouseholdUpdateManyMutationInput, HouseholdUncheckedUpdateManyInput>
    /**
     * Filter which Households to update
     */
    where?: HouseholdWhereInput
    /**
     * Limit how many Households to update.
     */
    limit?: number
  }

  /**
   * Household updateManyAndReturn
   */
  export type HouseholdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * The data used to update Households.
     */
    data: XOR<HouseholdUpdateManyMutationInput, HouseholdUncheckedUpdateManyInput>
    /**
     * Filter which Households to update
     */
    where?: HouseholdWhereInput
    /**
     * Limit how many Households to update.
     */
    limit?: number
  }

  /**
   * Household upsert
   */
  export type HouseholdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The filter to search for the Household to update in case it exists.
     */
    where: HouseholdWhereUniqueInput
    /**
     * In case the Household found by the `where` argument doesn't exist, create a new Household with this data.
     */
    create: XOR<HouseholdCreateInput, HouseholdUncheckedCreateInput>
    /**
     * In case the Household was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseholdUpdateInput, HouseholdUncheckedUpdateInput>
  }

  /**
   * Household delete
   */
  export type HouseholdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter which Household to delete.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household deleteMany
   */
  export type HouseholdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Households to delete
     */
    where?: HouseholdWhereInput
    /**
     * Limit how many Households to delete.
     */
    limit?: number
  }

  /**
   * Household.categories
   */
  export type Household$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Household.members
   */
  export type Household$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    where?: HouseholdMemberWhereInput
    orderBy?: HouseholdMemberOrderByWithRelationInput | HouseholdMemberOrderByWithRelationInput[]
    cursor?: HouseholdMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseholdMemberScalarFieldEnum | HouseholdMemberScalarFieldEnum[]
  }

  /**
   * Household.tasks
   */
  export type Household$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Household without action
   */
  export type HouseholdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
  }


  /**
   * Model HouseholdMember
   */

  export type AggregateHouseholdMember = {
    _count: HouseholdMemberCountAggregateOutputType | null
    _min: HouseholdMemberMinAggregateOutputType | null
    _max: HouseholdMemberMaxAggregateOutputType | null
  }

  export type HouseholdMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    householdId: string | null
    role: string | null
    joinedAt: Date | null
  }

  export type HouseholdMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    householdId: string | null
    role: string | null
    joinedAt: Date | null
  }

  export type HouseholdMemberCountAggregateOutputType = {
    id: number
    userId: number
    householdId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type HouseholdMemberMinAggregateInputType = {
    id?: true
    userId?: true
    householdId?: true
    role?: true
    joinedAt?: true
  }

  export type HouseholdMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    householdId?: true
    role?: true
    joinedAt?: true
  }

  export type HouseholdMemberCountAggregateInputType = {
    id?: true
    userId?: true
    householdId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type HouseholdMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HouseholdMember to aggregate.
     */
    where?: HouseholdMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseholdMembers to fetch.
     */
    orderBy?: HouseholdMemberOrderByWithRelationInput | HouseholdMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseholdMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseholdMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseholdMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HouseholdMembers
    **/
    _count?: true | HouseholdMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseholdMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseholdMemberMaxAggregateInputType
  }

  export type GetHouseholdMemberAggregateType<T extends HouseholdMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateHouseholdMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHouseholdMember[P]>
      : GetScalarType<T[P], AggregateHouseholdMember[P]>
  }




  export type HouseholdMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdMemberWhereInput
    orderBy?: HouseholdMemberOrderByWithAggregationInput | HouseholdMemberOrderByWithAggregationInput[]
    by: HouseholdMemberScalarFieldEnum[] | HouseholdMemberScalarFieldEnum
    having?: HouseholdMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseholdMemberCountAggregateInputType | true
    _min?: HouseholdMemberMinAggregateInputType
    _max?: HouseholdMemberMaxAggregateInputType
  }

  export type HouseholdMemberGroupByOutputType = {
    id: string
    userId: string
    householdId: string
    role: string
    joinedAt: Date
    _count: HouseholdMemberCountAggregateOutputType | null
    _min: HouseholdMemberMinAggregateOutputType | null
    _max: HouseholdMemberMaxAggregateOutputType | null
  }

  type GetHouseholdMemberGroupByPayload<T extends HouseholdMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseholdMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseholdMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseholdMemberGroupByOutputType[P]>
            : GetScalarType<T[P], HouseholdMemberGroupByOutputType[P]>
        }
      >
    >


  export type HouseholdMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    householdId?: boolean
    role?: boolean
    joinedAt?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["householdMember"]>

  export type HouseholdMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    householdId?: boolean
    role?: boolean
    joinedAt?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["householdMember"]>

  export type HouseholdMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    householdId?: boolean
    role?: boolean
    joinedAt?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["householdMember"]>

  export type HouseholdMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    householdId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type HouseholdMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "householdId" | "role" | "joinedAt", ExtArgs["result"]["householdMember"]>
  export type HouseholdMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HouseholdMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HouseholdMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HouseholdMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HouseholdMember"
    objects: {
      household: Prisma.$HouseholdPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      householdId: string
      role: string
      joinedAt: Date
    }, ExtArgs["result"]["householdMember"]>
    composites: {}
  }

  type HouseholdMemberGetPayload<S extends boolean | null | undefined | HouseholdMemberDefaultArgs> = $Result.GetResult<Prisma.$HouseholdMemberPayload, S>

  type HouseholdMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HouseholdMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HouseholdMemberCountAggregateInputType | true
    }

  export interface HouseholdMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HouseholdMember'], meta: { name: 'HouseholdMember' } }
    /**
     * Find zero or one HouseholdMember that matches the filter.
     * @param {HouseholdMemberFindUniqueArgs} args - Arguments to find a HouseholdMember
     * @example
     * // Get one HouseholdMember
     * const householdMember = await prisma.householdMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseholdMemberFindUniqueArgs>(args: SelectSubset<T, HouseholdMemberFindUniqueArgs<ExtArgs>>): Prisma__HouseholdMemberClient<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HouseholdMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HouseholdMemberFindUniqueOrThrowArgs} args - Arguments to find a HouseholdMember
     * @example
     * // Get one HouseholdMember
     * const householdMember = await prisma.householdMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseholdMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseholdMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseholdMemberClient<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HouseholdMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdMemberFindFirstArgs} args - Arguments to find a HouseholdMember
     * @example
     * // Get one HouseholdMember
     * const householdMember = await prisma.householdMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseholdMemberFindFirstArgs>(args?: SelectSubset<T, HouseholdMemberFindFirstArgs<ExtArgs>>): Prisma__HouseholdMemberClient<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HouseholdMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdMemberFindFirstOrThrowArgs} args - Arguments to find a HouseholdMember
     * @example
     * // Get one HouseholdMember
     * const householdMember = await prisma.householdMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseholdMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseholdMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseholdMemberClient<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HouseholdMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HouseholdMembers
     * const householdMembers = await prisma.householdMember.findMany()
     * 
     * // Get first 10 HouseholdMembers
     * const householdMembers = await prisma.householdMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const householdMemberWithIdOnly = await prisma.householdMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HouseholdMemberFindManyArgs>(args?: SelectSubset<T, HouseholdMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HouseholdMember.
     * @param {HouseholdMemberCreateArgs} args - Arguments to create a HouseholdMember.
     * @example
     * // Create one HouseholdMember
     * const HouseholdMember = await prisma.householdMember.create({
     *   data: {
     *     // ... data to create a HouseholdMember
     *   }
     * })
     * 
     */
    create<T extends HouseholdMemberCreateArgs>(args: SelectSubset<T, HouseholdMemberCreateArgs<ExtArgs>>): Prisma__HouseholdMemberClient<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HouseholdMembers.
     * @param {HouseholdMemberCreateManyArgs} args - Arguments to create many HouseholdMembers.
     * @example
     * // Create many HouseholdMembers
     * const householdMember = await prisma.householdMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseholdMemberCreateManyArgs>(args?: SelectSubset<T, HouseholdMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HouseholdMembers and returns the data saved in the database.
     * @param {HouseholdMemberCreateManyAndReturnArgs} args - Arguments to create many HouseholdMembers.
     * @example
     * // Create many HouseholdMembers
     * const householdMember = await prisma.householdMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HouseholdMembers and only return the `id`
     * const householdMemberWithIdOnly = await prisma.householdMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HouseholdMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, HouseholdMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HouseholdMember.
     * @param {HouseholdMemberDeleteArgs} args - Arguments to delete one HouseholdMember.
     * @example
     * // Delete one HouseholdMember
     * const HouseholdMember = await prisma.householdMember.delete({
     *   where: {
     *     // ... filter to delete one HouseholdMember
     *   }
     * })
     * 
     */
    delete<T extends HouseholdMemberDeleteArgs>(args: SelectSubset<T, HouseholdMemberDeleteArgs<ExtArgs>>): Prisma__HouseholdMemberClient<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HouseholdMember.
     * @param {HouseholdMemberUpdateArgs} args - Arguments to update one HouseholdMember.
     * @example
     * // Update one HouseholdMember
     * const householdMember = await prisma.householdMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseholdMemberUpdateArgs>(args: SelectSubset<T, HouseholdMemberUpdateArgs<ExtArgs>>): Prisma__HouseholdMemberClient<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HouseholdMembers.
     * @param {HouseholdMemberDeleteManyArgs} args - Arguments to filter HouseholdMembers to delete.
     * @example
     * // Delete a few HouseholdMembers
     * const { count } = await prisma.householdMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseholdMemberDeleteManyArgs>(args?: SelectSubset<T, HouseholdMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HouseholdMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HouseholdMembers
     * const householdMember = await prisma.householdMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseholdMemberUpdateManyArgs>(args: SelectSubset<T, HouseholdMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HouseholdMembers and returns the data updated in the database.
     * @param {HouseholdMemberUpdateManyAndReturnArgs} args - Arguments to update many HouseholdMembers.
     * @example
     * // Update many HouseholdMembers
     * const householdMember = await prisma.householdMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HouseholdMembers and only return the `id`
     * const householdMemberWithIdOnly = await prisma.householdMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HouseholdMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, HouseholdMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HouseholdMember.
     * @param {HouseholdMemberUpsertArgs} args - Arguments to update or create a HouseholdMember.
     * @example
     * // Update or create a HouseholdMember
     * const householdMember = await prisma.householdMember.upsert({
     *   create: {
     *     // ... data to create a HouseholdMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HouseholdMember we want to update
     *   }
     * })
     */
    upsert<T extends HouseholdMemberUpsertArgs>(args: SelectSubset<T, HouseholdMemberUpsertArgs<ExtArgs>>): Prisma__HouseholdMemberClient<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HouseholdMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdMemberCountArgs} args - Arguments to filter HouseholdMembers to count.
     * @example
     * // Count the number of HouseholdMembers
     * const count = await prisma.householdMember.count({
     *   where: {
     *     // ... the filter for the HouseholdMembers we want to count
     *   }
     * })
    **/
    count<T extends HouseholdMemberCountArgs>(
      args?: Subset<T, HouseholdMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseholdMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HouseholdMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HouseholdMemberAggregateArgs>(args: Subset<T, HouseholdMemberAggregateArgs>): Prisma.PrismaPromise<GetHouseholdMemberAggregateType<T>>

    /**
     * Group by HouseholdMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdMemberGroupByArgs} args - Group by arguments.
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
      T extends HouseholdMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseholdMemberGroupByArgs['orderBy'] }
        : { orderBy?: HouseholdMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HouseholdMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseholdMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HouseholdMember model
   */
  readonly fields: HouseholdMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HouseholdMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseholdMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household<T extends HouseholdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseholdDefaultArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HouseholdMember model
   */
  interface HouseholdMemberFieldRefs {
    readonly id: FieldRef<"HouseholdMember", 'String'>
    readonly userId: FieldRef<"HouseholdMember", 'String'>
    readonly householdId: FieldRef<"HouseholdMember", 'String'>
    readonly role: FieldRef<"HouseholdMember", 'String'>
    readonly joinedAt: FieldRef<"HouseholdMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HouseholdMember findUnique
   */
  export type HouseholdMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdMember to fetch.
     */
    where: HouseholdMemberWhereUniqueInput
  }

  /**
   * HouseholdMember findUniqueOrThrow
   */
  export type HouseholdMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdMember to fetch.
     */
    where: HouseholdMemberWhereUniqueInput
  }

  /**
   * HouseholdMember findFirst
   */
  export type HouseholdMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdMember to fetch.
     */
    where?: HouseholdMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseholdMembers to fetch.
     */
    orderBy?: HouseholdMemberOrderByWithRelationInput | HouseholdMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HouseholdMembers.
     */
    cursor?: HouseholdMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseholdMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseholdMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HouseholdMembers.
     */
    distinct?: HouseholdMemberScalarFieldEnum | HouseholdMemberScalarFieldEnum[]
  }

  /**
   * HouseholdMember findFirstOrThrow
   */
  export type HouseholdMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdMember to fetch.
     */
    where?: HouseholdMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseholdMembers to fetch.
     */
    orderBy?: HouseholdMemberOrderByWithRelationInput | HouseholdMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HouseholdMembers.
     */
    cursor?: HouseholdMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseholdMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseholdMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HouseholdMembers.
     */
    distinct?: HouseholdMemberScalarFieldEnum | HouseholdMemberScalarFieldEnum[]
  }

  /**
   * HouseholdMember findMany
   */
  export type HouseholdMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdMembers to fetch.
     */
    where?: HouseholdMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseholdMembers to fetch.
     */
    orderBy?: HouseholdMemberOrderByWithRelationInput | HouseholdMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HouseholdMembers.
     */
    cursor?: HouseholdMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseholdMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseholdMembers.
     */
    skip?: number
    distinct?: HouseholdMemberScalarFieldEnum | HouseholdMemberScalarFieldEnum[]
  }

  /**
   * HouseholdMember create
   */
  export type HouseholdMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a HouseholdMember.
     */
    data: XOR<HouseholdMemberCreateInput, HouseholdMemberUncheckedCreateInput>
  }

  /**
   * HouseholdMember createMany
   */
  export type HouseholdMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HouseholdMembers.
     */
    data: HouseholdMemberCreateManyInput | HouseholdMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HouseholdMember createManyAndReturn
   */
  export type HouseholdMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * The data used to create many HouseholdMembers.
     */
    data: HouseholdMemberCreateManyInput | HouseholdMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HouseholdMember update
   */
  export type HouseholdMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a HouseholdMember.
     */
    data: XOR<HouseholdMemberUpdateInput, HouseholdMemberUncheckedUpdateInput>
    /**
     * Choose, which HouseholdMember to update.
     */
    where: HouseholdMemberWhereUniqueInput
  }

  /**
   * HouseholdMember updateMany
   */
  export type HouseholdMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HouseholdMembers.
     */
    data: XOR<HouseholdMemberUpdateManyMutationInput, HouseholdMemberUncheckedUpdateManyInput>
    /**
     * Filter which HouseholdMembers to update
     */
    where?: HouseholdMemberWhereInput
    /**
     * Limit how many HouseholdMembers to update.
     */
    limit?: number
  }

  /**
   * HouseholdMember updateManyAndReturn
   */
  export type HouseholdMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * The data used to update HouseholdMembers.
     */
    data: XOR<HouseholdMemberUpdateManyMutationInput, HouseholdMemberUncheckedUpdateManyInput>
    /**
     * Filter which HouseholdMembers to update
     */
    where?: HouseholdMemberWhereInput
    /**
     * Limit how many HouseholdMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HouseholdMember upsert
   */
  export type HouseholdMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the HouseholdMember to update in case it exists.
     */
    where: HouseholdMemberWhereUniqueInput
    /**
     * In case the HouseholdMember found by the `where` argument doesn't exist, create a new HouseholdMember with this data.
     */
    create: XOR<HouseholdMemberCreateInput, HouseholdMemberUncheckedCreateInput>
    /**
     * In case the HouseholdMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseholdMemberUpdateInput, HouseholdMemberUncheckedUpdateInput>
  }

  /**
   * HouseholdMember delete
   */
  export type HouseholdMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * Filter which HouseholdMember to delete.
     */
    where: HouseholdMemberWhereUniqueInput
  }

  /**
   * HouseholdMember deleteMany
   */
  export type HouseholdMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HouseholdMembers to delete
     */
    where?: HouseholdMemberWhereInput
    /**
     * Limit how many HouseholdMembers to delete.
     */
    limit?: number
  }

  /**
   * HouseholdMember without action
   */
  export type HouseholdMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    emoji: string | null
    color: string | null
    userId: string | null
    householdId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    emoji: string | null
    color: string | null
    userId: string | null
    householdId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    emoji: number
    color: number
    userId: number
    householdId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    emoji?: true
    color?: true
    userId?: true
    householdId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    emoji?: true
    color?: true
    userId?: true
    householdId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    emoji?: true
    color?: true
    userId?: true
    householdId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    emoji: string | null
    color: string | null
    userId: string | null
    householdId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    emoji?: boolean
    color?: boolean
    userId?: boolean
    householdId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    household?: boolean | Category$householdArgs<ExtArgs>
    user?: boolean | Category$userArgs<ExtArgs>
    tasks?: boolean | Category$tasksArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    emoji?: boolean
    color?: boolean
    userId?: boolean
    householdId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    household?: boolean | Category$householdArgs<ExtArgs>
    user?: boolean | Category$userArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    emoji?: boolean
    color?: boolean
    userId?: boolean
    householdId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    household?: boolean | Category$householdArgs<ExtArgs>
    user?: boolean | Category$userArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    emoji?: boolean
    color?: boolean
    userId?: boolean
    householdId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "emoji" | "color" | "userId" | "householdId" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | Category$householdArgs<ExtArgs>
    user?: boolean | Category$userArgs<ExtArgs>
    tasks?: boolean | Category$tasksArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | Category$householdArgs<ExtArgs>
    user?: boolean | Category$userArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | Category$householdArgs<ExtArgs>
    user?: boolean | Category$userArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      household: Prisma.$HouseholdPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      emoji: string | null
      color: string | null
      userId: string | null
      householdId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household<T extends Category$householdArgs<ExtArgs> = {}>(args?: Subset<T, Category$householdArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends Category$userArgs<ExtArgs> = {}>(args?: Subset<T, Category$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Category$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Category$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly emoji: FieldRef<"Category", 'String'>
    readonly color: FieldRef<"Category", 'String'>
    readonly userId: FieldRef<"Category", 'String'>
    readonly householdId: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.household
   */
  export type Category$householdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    where?: HouseholdWhereInput
  }

  /**
   * Category.user
   */
  export type Category$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Category.tasks
   */
  export type Category$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    estimatedMinutes: number | null
    actualMinutes: number | null
  }

  export type TaskSumAggregateOutputType = {
    estimatedMinutes: number | null
    actualMinutes: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    isCompleted: boolean | null
    completedAt: Date | null
    dueDate: Date | null
    estimatedMinutes: number | null
    actualMinutes: number | null
    priority: string | null
    userId: string | null
    categoryId: string | null
    householdId: string | null
    assignedToId: string | null
    parentTaskId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    isCompleted: boolean | null
    completedAt: Date | null
    dueDate: Date | null
    estimatedMinutes: number | null
    actualMinutes: number | null
    priority: string | null
    userId: string | null
    categoryId: string | null
    householdId: string | null
    assignedToId: string | null
    parentTaskId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    isCompleted: number
    completedAt: number
    dueDate: number
    estimatedMinutes: number
    actualMinutes: number
    priority: number
    userId: number
    categoryId: number
    householdId: number
    assignedToId: number
    parentTaskId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    estimatedMinutes?: true
    actualMinutes?: true
  }

  export type TaskSumAggregateInputType = {
    estimatedMinutes?: true
    actualMinutes?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isCompleted?: true
    completedAt?: true
    dueDate?: true
    estimatedMinutes?: true
    actualMinutes?: true
    priority?: true
    userId?: true
    categoryId?: true
    householdId?: true
    assignedToId?: true
    parentTaskId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isCompleted?: true
    completedAt?: true
    dueDate?: true
    estimatedMinutes?: true
    actualMinutes?: true
    priority?: true
    userId?: true
    categoryId?: true
    householdId?: true
    assignedToId?: true
    parentTaskId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isCompleted?: true
    completedAt?: true
    dueDate?: true
    estimatedMinutes?: true
    actualMinutes?: true
    priority?: true
    userId?: true
    categoryId?: true
    householdId?: true
    assignedToId?: true
    parentTaskId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    isCompleted: boolean
    completedAt: Date | null
    dueDate: Date
    estimatedMinutes: number | null
    actualMinutes: number | null
    priority: string
    userId: string | null
    categoryId: string
    householdId: string | null
    assignedToId: string | null
    parentTaskId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isCompleted?: boolean
    completedAt?: boolean
    dueDate?: boolean
    estimatedMinutes?: boolean
    actualMinutes?: boolean
    priority?: boolean
    userId?: boolean
    categoryId?: boolean
    householdId?: boolean
    assignedToId?: boolean
    parentTaskId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recurrenceRule?: boolean | Task$recurrenceRuleArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    household?: boolean | Task$householdArgs<ExtArgs>
    parentTask?: boolean | Task$parentTaskArgs<ExtArgs>
    subTasks?: boolean | Task$subTasksArgs<ExtArgs>
    user?: boolean | Task$userArgs<ExtArgs>
    taskHistory?: boolean | Task$taskHistoryArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isCompleted?: boolean
    completedAt?: boolean
    dueDate?: boolean
    estimatedMinutes?: boolean
    actualMinutes?: boolean
    priority?: boolean
    userId?: boolean
    categoryId?: boolean
    householdId?: boolean
    assignedToId?: boolean
    parentTaskId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    household?: boolean | Task$householdArgs<ExtArgs>
    parentTask?: boolean | Task$parentTaskArgs<ExtArgs>
    user?: boolean | Task$userArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isCompleted?: boolean
    completedAt?: boolean
    dueDate?: boolean
    estimatedMinutes?: boolean
    actualMinutes?: boolean
    priority?: boolean
    userId?: boolean
    categoryId?: boolean
    householdId?: boolean
    assignedToId?: boolean
    parentTaskId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    household?: boolean | Task$householdArgs<ExtArgs>
    parentTask?: boolean | Task$parentTaskArgs<ExtArgs>
    user?: boolean | Task$userArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    isCompleted?: boolean
    completedAt?: boolean
    dueDate?: boolean
    estimatedMinutes?: boolean
    actualMinutes?: boolean
    priority?: boolean
    userId?: boolean
    categoryId?: boolean
    householdId?: boolean
    assignedToId?: boolean
    parentTaskId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "isCompleted" | "completedAt" | "dueDate" | "estimatedMinutes" | "actualMinutes" | "priority" | "userId" | "categoryId" | "householdId" | "assignedToId" | "parentTaskId" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recurrenceRule?: boolean | Task$recurrenceRuleArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    household?: boolean | Task$householdArgs<ExtArgs>
    parentTask?: boolean | Task$parentTaskArgs<ExtArgs>
    subTasks?: boolean | Task$subTasksArgs<ExtArgs>
    user?: boolean | Task$userArgs<ExtArgs>
    taskHistory?: boolean | Task$taskHistoryArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    household?: boolean | Task$householdArgs<ExtArgs>
    parentTask?: boolean | Task$parentTaskArgs<ExtArgs>
    user?: boolean | Task$userArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    household?: boolean | Task$householdArgs<ExtArgs>
    parentTask?: boolean | Task$parentTaskArgs<ExtArgs>
    user?: boolean | Task$userArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      recurrenceRule: Prisma.$RecurrenceRulePayload<ExtArgs> | null
      category: Prisma.$CategoryPayload<ExtArgs>
      household: Prisma.$HouseholdPayload<ExtArgs> | null
      parentTask: Prisma.$TaskPayload<ExtArgs> | null
      subTasks: Prisma.$TaskPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
      taskHistory: Prisma.$TaskHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      isCompleted: boolean
      completedAt: Date | null
      dueDate: Date
      estimatedMinutes: number | null
      actualMinutes: number | null
      priority: string
      userId: string | null
      categoryId: string
      householdId: string | null
      assignedToId: string | null
      parentTaskId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recurrenceRule<T extends Task$recurrenceRuleArgs<ExtArgs> = {}>(args?: Subset<T, Task$recurrenceRuleArgs<ExtArgs>>): Prisma__RecurrenceRuleClient<$Result.GetResult<Prisma.$RecurrenceRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    household<T extends Task$householdArgs<ExtArgs> = {}>(args?: Subset<T, Task$householdArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parentTask<T extends Task$parentTaskArgs<ExtArgs> = {}>(args?: Subset<T, Task$parentTaskArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subTasks<T extends Task$subTasksArgs<ExtArgs> = {}>(args?: Subset<T, Task$subTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Task$userArgs<ExtArgs> = {}>(args?: Subset<T, Task$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    taskHistory<T extends Task$taskHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Task$taskHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly isCompleted: FieldRef<"Task", 'Boolean'>
    readonly completedAt: FieldRef<"Task", 'DateTime'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly estimatedMinutes: FieldRef<"Task", 'Int'>
    readonly actualMinutes: FieldRef<"Task", 'Int'>
    readonly priority: FieldRef<"Task", 'String'>
    readonly userId: FieldRef<"Task", 'String'>
    readonly categoryId: FieldRef<"Task", 'String'>
    readonly householdId: FieldRef<"Task", 'String'>
    readonly assignedToId: FieldRef<"Task", 'String'>
    readonly parentTaskId: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.recurrenceRule
   */
  export type Task$recurrenceRuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceRule
     */
    select?: RecurrenceRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceRule
     */
    omit?: RecurrenceRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceRuleInclude<ExtArgs> | null
    where?: RecurrenceRuleWhereInput
  }

  /**
   * Task.household
   */
  export type Task$householdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    where?: HouseholdWhereInput
  }

  /**
   * Task.parentTask
   */
  export type Task$parentTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
  }

  /**
   * Task.subTasks
   */
  export type Task$subTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task.user
   */
  export type Task$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Task.taskHistory
   */
  export type Task$taskHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    where?: TaskHistoryWhereInput
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    cursor?: TaskHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model RecurrenceRule
   */

  export type AggregateRecurrenceRule = {
    _count: RecurrenceRuleCountAggregateOutputType | null
    _avg: RecurrenceRuleAvgAggregateOutputType | null
    _sum: RecurrenceRuleSumAggregateOutputType | null
    _min: RecurrenceRuleMinAggregateOutputType | null
    _max: RecurrenceRuleMaxAggregateOutputType | null
  }

  export type RecurrenceRuleAvgAggregateOutputType = {
    interval: number | null
    dayOfMonth: number | null
    occurrences: number | null
  }

  export type RecurrenceRuleSumAggregateOutputType = {
    interval: number | null
    dayOfMonth: number | null
    occurrences: number | null
  }

  export type RecurrenceRuleMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    frequency: string | null
    interval: number | null
    dayOfMonth: number | null
    endDate: Date | null
    occurrences: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecurrenceRuleMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    frequency: string | null
    interval: number | null
    dayOfMonth: number | null
    endDate: Date | null
    occurrences: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecurrenceRuleCountAggregateOutputType = {
    id: number
    taskId: number
    frequency: number
    interval: number
    daysOfWeek: number
    dayOfMonth: number
    endDate: number
    occurrences: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecurrenceRuleAvgAggregateInputType = {
    interval?: true
    dayOfMonth?: true
    occurrences?: true
  }

  export type RecurrenceRuleSumAggregateInputType = {
    interval?: true
    dayOfMonth?: true
    occurrences?: true
  }

  export type RecurrenceRuleMinAggregateInputType = {
    id?: true
    taskId?: true
    frequency?: true
    interval?: true
    dayOfMonth?: true
    endDate?: true
    occurrences?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecurrenceRuleMaxAggregateInputType = {
    id?: true
    taskId?: true
    frequency?: true
    interval?: true
    dayOfMonth?: true
    endDate?: true
    occurrences?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecurrenceRuleCountAggregateInputType = {
    id?: true
    taskId?: true
    frequency?: true
    interval?: true
    daysOfWeek?: true
    dayOfMonth?: true
    endDate?: true
    occurrences?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecurrenceRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurrenceRule to aggregate.
     */
    where?: RecurrenceRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurrenceRules to fetch.
     */
    orderBy?: RecurrenceRuleOrderByWithRelationInput | RecurrenceRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecurrenceRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurrenceRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurrenceRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecurrenceRules
    **/
    _count?: true | RecurrenceRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecurrenceRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecurrenceRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecurrenceRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecurrenceRuleMaxAggregateInputType
  }

  export type GetRecurrenceRuleAggregateType<T extends RecurrenceRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurrenceRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurrenceRule[P]>
      : GetScalarType<T[P], AggregateRecurrenceRule[P]>
  }




  export type RecurrenceRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurrenceRuleWhereInput
    orderBy?: RecurrenceRuleOrderByWithAggregationInput | RecurrenceRuleOrderByWithAggregationInput[]
    by: RecurrenceRuleScalarFieldEnum[] | RecurrenceRuleScalarFieldEnum
    having?: RecurrenceRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecurrenceRuleCountAggregateInputType | true
    _avg?: RecurrenceRuleAvgAggregateInputType
    _sum?: RecurrenceRuleSumAggregateInputType
    _min?: RecurrenceRuleMinAggregateInputType
    _max?: RecurrenceRuleMaxAggregateInputType
  }

  export type RecurrenceRuleGroupByOutputType = {
    id: string
    taskId: string
    frequency: string
    interval: number
    daysOfWeek: string[]
    dayOfMonth: number | null
    endDate: Date | null
    occurrences: number | null
    createdAt: Date
    updatedAt: Date
    _count: RecurrenceRuleCountAggregateOutputType | null
    _avg: RecurrenceRuleAvgAggregateOutputType | null
    _sum: RecurrenceRuleSumAggregateOutputType | null
    _min: RecurrenceRuleMinAggregateOutputType | null
    _max: RecurrenceRuleMaxAggregateOutputType | null
  }

  type GetRecurrenceRuleGroupByPayload<T extends RecurrenceRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecurrenceRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecurrenceRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecurrenceRuleGroupByOutputType[P]>
            : GetScalarType<T[P], RecurrenceRuleGroupByOutputType[P]>
        }
      >
    >


  export type RecurrenceRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    frequency?: boolean
    interval?: boolean
    daysOfWeek?: boolean
    dayOfMonth?: boolean
    endDate?: boolean
    occurrences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurrenceRule"]>

  export type RecurrenceRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    frequency?: boolean
    interval?: boolean
    daysOfWeek?: boolean
    dayOfMonth?: boolean
    endDate?: boolean
    occurrences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurrenceRule"]>

  export type RecurrenceRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    frequency?: boolean
    interval?: boolean
    daysOfWeek?: boolean
    dayOfMonth?: boolean
    endDate?: boolean
    occurrences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurrenceRule"]>

  export type RecurrenceRuleSelectScalar = {
    id?: boolean
    taskId?: boolean
    frequency?: boolean
    interval?: boolean
    daysOfWeek?: boolean
    dayOfMonth?: boolean
    endDate?: boolean
    occurrences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecurrenceRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "frequency" | "interval" | "daysOfWeek" | "dayOfMonth" | "endDate" | "occurrences" | "createdAt" | "updatedAt", ExtArgs["result"]["recurrenceRule"]>
  export type RecurrenceRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type RecurrenceRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type RecurrenceRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $RecurrenceRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecurrenceRule"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      frequency: string
      interval: number
      daysOfWeek: string[]
      dayOfMonth: number | null
      endDate: Date | null
      occurrences: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recurrenceRule"]>
    composites: {}
  }

  type RecurrenceRuleGetPayload<S extends boolean | null | undefined | RecurrenceRuleDefaultArgs> = $Result.GetResult<Prisma.$RecurrenceRulePayload, S>

  type RecurrenceRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecurrenceRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecurrenceRuleCountAggregateInputType | true
    }

  export interface RecurrenceRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecurrenceRule'], meta: { name: 'RecurrenceRule' } }
    /**
     * Find zero or one RecurrenceRule that matches the filter.
     * @param {RecurrenceRuleFindUniqueArgs} args - Arguments to find a RecurrenceRule
     * @example
     * // Get one RecurrenceRule
     * const recurrenceRule = await prisma.recurrenceRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecurrenceRuleFindUniqueArgs>(args: SelectSubset<T, RecurrenceRuleFindUniqueArgs<ExtArgs>>): Prisma__RecurrenceRuleClient<$Result.GetResult<Prisma.$RecurrenceRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecurrenceRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecurrenceRuleFindUniqueOrThrowArgs} args - Arguments to find a RecurrenceRule
     * @example
     * // Get one RecurrenceRule
     * const recurrenceRule = await prisma.recurrenceRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecurrenceRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, RecurrenceRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecurrenceRuleClient<$Result.GetResult<Prisma.$RecurrenceRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurrenceRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceRuleFindFirstArgs} args - Arguments to find a RecurrenceRule
     * @example
     * // Get one RecurrenceRule
     * const recurrenceRule = await prisma.recurrenceRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecurrenceRuleFindFirstArgs>(args?: SelectSubset<T, RecurrenceRuleFindFirstArgs<ExtArgs>>): Prisma__RecurrenceRuleClient<$Result.GetResult<Prisma.$RecurrenceRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurrenceRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceRuleFindFirstOrThrowArgs} args - Arguments to find a RecurrenceRule
     * @example
     * // Get one RecurrenceRule
     * const recurrenceRule = await prisma.recurrenceRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecurrenceRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, RecurrenceRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecurrenceRuleClient<$Result.GetResult<Prisma.$RecurrenceRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecurrenceRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecurrenceRules
     * const recurrenceRules = await prisma.recurrenceRule.findMany()
     * 
     * // Get first 10 RecurrenceRules
     * const recurrenceRules = await prisma.recurrenceRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recurrenceRuleWithIdOnly = await prisma.recurrenceRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecurrenceRuleFindManyArgs>(args?: SelectSubset<T, RecurrenceRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurrenceRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecurrenceRule.
     * @param {RecurrenceRuleCreateArgs} args - Arguments to create a RecurrenceRule.
     * @example
     * // Create one RecurrenceRule
     * const RecurrenceRule = await prisma.recurrenceRule.create({
     *   data: {
     *     // ... data to create a RecurrenceRule
     *   }
     * })
     * 
     */
    create<T extends RecurrenceRuleCreateArgs>(args: SelectSubset<T, RecurrenceRuleCreateArgs<ExtArgs>>): Prisma__RecurrenceRuleClient<$Result.GetResult<Prisma.$RecurrenceRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecurrenceRules.
     * @param {RecurrenceRuleCreateManyArgs} args - Arguments to create many RecurrenceRules.
     * @example
     * // Create many RecurrenceRules
     * const recurrenceRule = await prisma.recurrenceRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecurrenceRuleCreateManyArgs>(args?: SelectSubset<T, RecurrenceRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecurrenceRules and returns the data saved in the database.
     * @param {RecurrenceRuleCreateManyAndReturnArgs} args - Arguments to create many RecurrenceRules.
     * @example
     * // Create many RecurrenceRules
     * const recurrenceRule = await prisma.recurrenceRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecurrenceRules and only return the `id`
     * const recurrenceRuleWithIdOnly = await prisma.recurrenceRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecurrenceRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, RecurrenceRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurrenceRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecurrenceRule.
     * @param {RecurrenceRuleDeleteArgs} args - Arguments to delete one RecurrenceRule.
     * @example
     * // Delete one RecurrenceRule
     * const RecurrenceRule = await prisma.recurrenceRule.delete({
     *   where: {
     *     // ... filter to delete one RecurrenceRule
     *   }
     * })
     * 
     */
    delete<T extends RecurrenceRuleDeleteArgs>(args: SelectSubset<T, RecurrenceRuleDeleteArgs<ExtArgs>>): Prisma__RecurrenceRuleClient<$Result.GetResult<Prisma.$RecurrenceRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecurrenceRule.
     * @param {RecurrenceRuleUpdateArgs} args - Arguments to update one RecurrenceRule.
     * @example
     * // Update one RecurrenceRule
     * const recurrenceRule = await prisma.recurrenceRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecurrenceRuleUpdateArgs>(args: SelectSubset<T, RecurrenceRuleUpdateArgs<ExtArgs>>): Prisma__RecurrenceRuleClient<$Result.GetResult<Prisma.$RecurrenceRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecurrenceRules.
     * @param {RecurrenceRuleDeleteManyArgs} args - Arguments to filter RecurrenceRules to delete.
     * @example
     * // Delete a few RecurrenceRules
     * const { count } = await prisma.recurrenceRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecurrenceRuleDeleteManyArgs>(args?: SelectSubset<T, RecurrenceRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurrenceRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecurrenceRules
     * const recurrenceRule = await prisma.recurrenceRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecurrenceRuleUpdateManyArgs>(args: SelectSubset<T, RecurrenceRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurrenceRules and returns the data updated in the database.
     * @param {RecurrenceRuleUpdateManyAndReturnArgs} args - Arguments to update many RecurrenceRules.
     * @example
     * // Update many RecurrenceRules
     * const recurrenceRule = await prisma.recurrenceRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecurrenceRules and only return the `id`
     * const recurrenceRuleWithIdOnly = await prisma.recurrenceRule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecurrenceRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, RecurrenceRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurrenceRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecurrenceRule.
     * @param {RecurrenceRuleUpsertArgs} args - Arguments to update or create a RecurrenceRule.
     * @example
     * // Update or create a RecurrenceRule
     * const recurrenceRule = await prisma.recurrenceRule.upsert({
     *   create: {
     *     // ... data to create a RecurrenceRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecurrenceRule we want to update
     *   }
     * })
     */
    upsert<T extends RecurrenceRuleUpsertArgs>(args: SelectSubset<T, RecurrenceRuleUpsertArgs<ExtArgs>>): Prisma__RecurrenceRuleClient<$Result.GetResult<Prisma.$RecurrenceRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecurrenceRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceRuleCountArgs} args - Arguments to filter RecurrenceRules to count.
     * @example
     * // Count the number of RecurrenceRules
     * const count = await prisma.recurrenceRule.count({
     *   where: {
     *     // ... the filter for the RecurrenceRules we want to count
     *   }
     * })
    **/
    count<T extends RecurrenceRuleCountArgs>(
      args?: Subset<T, RecurrenceRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecurrenceRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecurrenceRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecurrenceRuleAggregateArgs>(args: Subset<T, RecurrenceRuleAggregateArgs>): Prisma.PrismaPromise<GetRecurrenceRuleAggregateType<T>>

    /**
     * Group by RecurrenceRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceRuleGroupByArgs} args - Group by arguments.
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
      T extends RecurrenceRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecurrenceRuleGroupByArgs['orderBy'] }
        : { orderBy?: RecurrenceRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecurrenceRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecurrenceRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecurrenceRule model
   */
  readonly fields: RecurrenceRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecurrenceRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecurrenceRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecurrenceRule model
   */
  interface RecurrenceRuleFieldRefs {
    readonly id: FieldRef<"RecurrenceRule", 'String'>
    readonly taskId: FieldRef<"RecurrenceRule", 'String'>
    readonly frequency: FieldRef<"RecurrenceRule", 'String'>
    readonly interval: FieldRef<"RecurrenceRule", 'Int'>
    readonly daysOfWeek: FieldRef<"RecurrenceRule", 'String[]'>
    readonly dayOfMonth: FieldRef<"RecurrenceRule", 'Int'>
    readonly endDate: FieldRef<"RecurrenceRule", 'DateTime'>
    readonly occurrences: FieldRef<"RecurrenceRule", 'Int'>
    readonly createdAt: FieldRef<"RecurrenceRule", 'DateTime'>
    readonly updatedAt: FieldRef<"RecurrenceRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecurrenceRule findUnique
   */
  export type RecurrenceRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceRule
     */
    select?: RecurrenceRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceRule
     */
    omit?: RecurrenceRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceRuleInclude<ExtArgs> | null
    /**
     * Filter, which RecurrenceRule to fetch.
     */
    where: RecurrenceRuleWhereUniqueInput
  }

  /**
   * RecurrenceRule findUniqueOrThrow
   */
  export type RecurrenceRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceRule
     */
    select?: RecurrenceRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceRule
     */
    omit?: RecurrenceRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceRuleInclude<ExtArgs> | null
    /**
     * Filter, which RecurrenceRule to fetch.
     */
    where: RecurrenceRuleWhereUniqueInput
  }

  /**
   * RecurrenceRule findFirst
   */
  export type RecurrenceRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceRule
     */
    select?: RecurrenceRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceRule
     */
    omit?: RecurrenceRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceRuleInclude<ExtArgs> | null
    /**
     * Filter, which RecurrenceRule to fetch.
     */
    where?: RecurrenceRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurrenceRules to fetch.
     */
    orderBy?: RecurrenceRuleOrderByWithRelationInput | RecurrenceRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurrenceRules.
     */
    cursor?: RecurrenceRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurrenceRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurrenceRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurrenceRules.
     */
    distinct?: RecurrenceRuleScalarFieldEnum | RecurrenceRuleScalarFieldEnum[]
  }

  /**
   * RecurrenceRule findFirstOrThrow
   */
  export type RecurrenceRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceRule
     */
    select?: RecurrenceRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceRule
     */
    omit?: RecurrenceRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceRuleInclude<ExtArgs> | null
    /**
     * Filter, which RecurrenceRule to fetch.
     */
    where?: RecurrenceRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurrenceRules to fetch.
     */
    orderBy?: RecurrenceRuleOrderByWithRelationInput | RecurrenceRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurrenceRules.
     */
    cursor?: RecurrenceRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurrenceRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurrenceRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurrenceRules.
     */
    distinct?: RecurrenceRuleScalarFieldEnum | RecurrenceRuleScalarFieldEnum[]
  }

  /**
   * RecurrenceRule findMany
   */
  export type RecurrenceRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceRule
     */
    select?: RecurrenceRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceRule
     */
    omit?: RecurrenceRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceRuleInclude<ExtArgs> | null
    /**
     * Filter, which RecurrenceRules to fetch.
     */
    where?: RecurrenceRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurrenceRules to fetch.
     */
    orderBy?: RecurrenceRuleOrderByWithRelationInput | RecurrenceRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecurrenceRules.
     */
    cursor?: RecurrenceRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurrenceRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurrenceRules.
     */
    skip?: number
    distinct?: RecurrenceRuleScalarFieldEnum | RecurrenceRuleScalarFieldEnum[]
  }

  /**
   * RecurrenceRule create
   */
  export type RecurrenceRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceRule
     */
    select?: RecurrenceRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceRule
     */
    omit?: RecurrenceRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a RecurrenceRule.
     */
    data: XOR<RecurrenceRuleCreateInput, RecurrenceRuleUncheckedCreateInput>
  }

  /**
   * RecurrenceRule createMany
   */
  export type RecurrenceRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecurrenceRules.
     */
    data: RecurrenceRuleCreateManyInput | RecurrenceRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecurrenceRule createManyAndReturn
   */
  export type RecurrenceRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceRule
     */
    select?: RecurrenceRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceRule
     */
    omit?: RecurrenceRuleOmit<ExtArgs> | null
    /**
     * The data used to create many RecurrenceRules.
     */
    data: RecurrenceRuleCreateManyInput | RecurrenceRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecurrenceRule update
   */
  export type RecurrenceRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceRule
     */
    select?: RecurrenceRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceRule
     */
    omit?: RecurrenceRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a RecurrenceRule.
     */
    data: XOR<RecurrenceRuleUpdateInput, RecurrenceRuleUncheckedUpdateInput>
    /**
     * Choose, which RecurrenceRule to update.
     */
    where: RecurrenceRuleWhereUniqueInput
  }

  /**
   * RecurrenceRule updateMany
   */
  export type RecurrenceRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecurrenceRules.
     */
    data: XOR<RecurrenceRuleUpdateManyMutationInput, RecurrenceRuleUncheckedUpdateManyInput>
    /**
     * Filter which RecurrenceRules to update
     */
    where?: RecurrenceRuleWhereInput
    /**
     * Limit how many RecurrenceRules to update.
     */
    limit?: number
  }

  /**
   * RecurrenceRule updateManyAndReturn
   */
  export type RecurrenceRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceRule
     */
    select?: RecurrenceRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceRule
     */
    omit?: RecurrenceRuleOmit<ExtArgs> | null
    /**
     * The data used to update RecurrenceRules.
     */
    data: XOR<RecurrenceRuleUpdateManyMutationInput, RecurrenceRuleUncheckedUpdateManyInput>
    /**
     * Filter which RecurrenceRules to update
     */
    where?: RecurrenceRuleWhereInput
    /**
     * Limit how many RecurrenceRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceRuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecurrenceRule upsert
   */
  export type RecurrenceRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceRule
     */
    select?: RecurrenceRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceRule
     */
    omit?: RecurrenceRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the RecurrenceRule to update in case it exists.
     */
    where: RecurrenceRuleWhereUniqueInput
    /**
     * In case the RecurrenceRule found by the `where` argument doesn't exist, create a new RecurrenceRule with this data.
     */
    create: XOR<RecurrenceRuleCreateInput, RecurrenceRuleUncheckedCreateInput>
    /**
     * In case the RecurrenceRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecurrenceRuleUpdateInput, RecurrenceRuleUncheckedUpdateInput>
  }

  /**
   * RecurrenceRule delete
   */
  export type RecurrenceRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceRule
     */
    select?: RecurrenceRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceRule
     */
    omit?: RecurrenceRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceRuleInclude<ExtArgs> | null
    /**
     * Filter which RecurrenceRule to delete.
     */
    where: RecurrenceRuleWhereUniqueInput
  }

  /**
   * RecurrenceRule deleteMany
   */
  export type RecurrenceRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurrenceRules to delete
     */
    where?: RecurrenceRuleWhereInput
    /**
     * Limit how many RecurrenceRules to delete.
     */
    limit?: number
  }

  /**
   * RecurrenceRule without action
   */
  export type RecurrenceRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceRule
     */
    select?: RecurrenceRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceRule
     */
    omit?: RecurrenceRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceRuleInclude<ExtArgs> | null
  }


  /**
   * Model TaskHistory
   */

  export type AggregateTaskHistory = {
    _count: TaskHistoryCountAggregateOutputType | null
    _min: TaskHistoryMinAggregateOutputType | null
    _max: TaskHistoryMaxAggregateOutputType | null
  }

  export type TaskHistoryMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    action: string | null
    completedBy: string | null
    completionTime: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type TaskHistoryMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    action: string | null
    completedBy: string | null
    completionTime: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type TaskHistoryCountAggregateOutputType = {
    id: number
    taskId: number
    action: number
    completedBy: number
    completionTime: number
    notes: number
    createdAt: number
    _all: number
  }


  export type TaskHistoryMinAggregateInputType = {
    id?: true
    taskId?: true
    action?: true
    completedBy?: true
    completionTime?: true
    notes?: true
    createdAt?: true
  }

  export type TaskHistoryMaxAggregateInputType = {
    id?: true
    taskId?: true
    action?: true
    completedBy?: true
    completionTime?: true
    notes?: true
    createdAt?: true
  }

  export type TaskHistoryCountAggregateInputType = {
    id?: true
    taskId?: true
    action?: true
    completedBy?: true
    completionTime?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type TaskHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskHistory to aggregate.
     */
    where?: TaskHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskHistories to fetch.
     */
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskHistories
    **/
    _count?: true | TaskHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskHistoryMaxAggregateInputType
  }

  export type GetTaskHistoryAggregateType<T extends TaskHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskHistory[P]>
      : GetScalarType<T[P], AggregateTaskHistory[P]>
  }




  export type TaskHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskHistoryWhereInput
    orderBy?: TaskHistoryOrderByWithAggregationInput | TaskHistoryOrderByWithAggregationInput[]
    by: TaskHistoryScalarFieldEnum[] | TaskHistoryScalarFieldEnum
    having?: TaskHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskHistoryCountAggregateInputType | true
    _min?: TaskHistoryMinAggregateInputType
    _max?: TaskHistoryMaxAggregateInputType
  }

  export type TaskHistoryGroupByOutputType = {
    id: string
    taskId: string
    action: string
    completedBy: string | null
    completionTime: Date | null
    notes: string | null
    createdAt: Date
    _count: TaskHistoryCountAggregateOutputType | null
    _min: TaskHistoryMinAggregateOutputType | null
    _max: TaskHistoryMaxAggregateOutputType | null
  }

  type GetTaskHistoryGroupByPayload<T extends TaskHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TaskHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TaskHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    action?: boolean
    completedBy?: boolean
    completionTime?: boolean
    notes?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskHistory"]>

  export type TaskHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    action?: boolean
    completedBy?: boolean
    completionTime?: boolean
    notes?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskHistory"]>

  export type TaskHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    action?: boolean
    completedBy?: boolean
    completionTime?: boolean
    notes?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskHistory"]>

  export type TaskHistorySelectScalar = {
    id?: boolean
    taskId?: boolean
    action?: boolean
    completedBy?: boolean
    completionTime?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type TaskHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "action" | "completedBy" | "completionTime" | "notes" | "createdAt", ExtArgs["result"]["taskHistory"]>
  export type TaskHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $TaskHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskHistory"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      action: string
      completedBy: string | null
      completionTime: Date | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["taskHistory"]>
    composites: {}
  }

  type TaskHistoryGetPayload<S extends boolean | null | undefined | TaskHistoryDefaultArgs> = $Result.GetResult<Prisma.$TaskHistoryPayload, S>

  type TaskHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskHistoryCountAggregateInputType | true
    }

  export interface TaskHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskHistory'], meta: { name: 'TaskHistory' } }
    /**
     * Find zero or one TaskHistory that matches the filter.
     * @param {TaskHistoryFindUniqueArgs} args - Arguments to find a TaskHistory
     * @example
     * // Get one TaskHistory
     * const taskHistory = await prisma.taskHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskHistoryFindUniqueArgs>(args: SelectSubset<T, TaskHistoryFindUniqueArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskHistoryFindUniqueOrThrowArgs} args - Arguments to find a TaskHistory
     * @example
     * // Get one TaskHistory
     * const taskHistory = await prisma.taskHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryFindFirstArgs} args - Arguments to find a TaskHistory
     * @example
     * // Get one TaskHistory
     * const taskHistory = await prisma.taskHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskHistoryFindFirstArgs>(args?: SelectSubset<T, TaskHistoryFindFirstArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryFindFirstOrThrowArgs} args - Arguments to find a TaskHistory
     * @example
     * // Get one TaskHistory
     * const taskHistory = await prisma.taskHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskHistories
     * const taskHistories = await prisma.taskHistory.findMany()
     * 
     * // Get first 10 TaskHistories
     * const taskHistories = await prisma.taskHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskHistoryWithIdOnly = await prisma.taskHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskHistoryFindManyArgs>(args?: SelectSubset<T, TaskHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskHistory.
     * @param {TaskHistoryCreateArgs} args - Arguments to create a TaskHistory.
     * @example
     * // Create one TaskHistory
     * const TaskHistory = await prisma.taskHistory.create({
     *   data: {
     *     // ... data to create a TaskHistory
     *   }
     * })
     * 
     */
    create<T extends TaskHistoryCreateArgs>(args: SelectSubset<T, TaskHistoryCreateArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskHistories.
     * @param {TaskHistoryCreateManyArgs} args - Arguments to create many TaskHistories.
     * @example
     * // Create many TaskHistories
     * const taskHistory = await prisma.taskHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskHistoryCreateManyArgs>(args?: SelectSubset<T, TaskHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskHistories and returns the data saved in the database.
     * @param {TaskHistoryCreateManyAndReturnArgs} args - Arguments to create many TaskHistories.
     * @example
     * // Create many TaskHistories
     * const taskHistory = await prisma.taskHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskHistories and only return the `id`
     * const taskHistoryWithIdOnly = await prisma.taskHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskHistory.
     * @param {TaskHistoryDeleteArgs} args - Arguments to delete one TaskHistory.
     * @example
     * // Delete one TaskHistory
     * const TaskHistory = await prisma.taskHistory.delete({
     *   where: {
     *     // ... filter to delete one TaskHistory
     *   }
     * })
     * 
     */
    delete<T extends TaskHistoryDeleteArgs>(args: SelectSubset<T, TaskHistoryDeleteArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskHistory.
     * @param {TaskHistoryUpdateArgs} args - Arguments to update one TaskHistory.
     * @example
     * // Update one TaskHistory
     * const taskHistory = await prisma.taskHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskHistoryUpdateArgs>(args: SelectSubset<T, TaskHistoryUpdateArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskHistories.
     * @param {TaskHistoryDeleteManyArgs} args - Arguments to filter TaskHistories to delete.
     * @example
     * // Delete a few TaskHistories
     * const { count } = await prisma.taskHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskHistoryDeleteManyArgs>(args?: SelectSubset<T, TaskHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskHistories
     * const taskHistory = await prisma.taskHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskHistoryUpdateManyArgs>(args: SelectSubset<T, TaskHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskHistories and returns the data updated in the database.
     * @param {TaskHistoryUpdateManyAndReturnArgs} args - Arguments to update many TaskHistories.
     * @example
     * // Update many TaskHistories
     * const taskHistory = await prisma.taskHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskHistories and only return the `id`
     * const taskHistoryWithIdOnly = await prisma.taskHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskHistory.
     * @param {TaskHistoryUpsertArgs} args - Arguments to update or create a TaskHistory.
     * @example
     * // Update or create a TaskHistory
     * const taskHistory = await prisma.taskHistory.upsert({
     *   create: {
     *     // ... data to create a TaskHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskHistory we want to update
     *   }
     * })
     */
    upsert<T extends TaskHistoryUpsertArgs>(args: SelectSubset<T, TaskHistoryUpsertArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryCountArgs} args - Arguments to filter TaskHistories to count.
     * @example
     * // Count the number of TaskHistories
     * const count = await prisma.taskHistory.count({
     *   where: {
     *     // ... the filter for the TaskHistories we want to count
     *   }
     * })
    **/
    count<T extends TaskHistoryCountArgs>(
      args?: Subset<T, TaskHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskHistoryAggregateArgs>(args: Subset<T, TaskHistoryAggregateArgs>): Prisma.PrismaPromise<GetTaskHistoryAggregateType<T>>

    /**
     * Group by TaskHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryGroupByArgs} args - Group by arguments.
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
      T extends TaskHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TaskHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskHistory model
   */
  readonly fields: TaskHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TaskHistory model
   */
  interface TaskHistoryFieldRefs {
    readonly id: FieldRef<"TaskHistory", 'String'>
    readonly taskId: FieldRef<"TaskHistory", 'String'>
    readonly action: FieldRef<"TaskHistory", 'String'>
    readonly completedBy: FieldRef<"TaskHistory", 'String'>
    readonly completionTime: FieldRef<"TaskHistory", 'DateTime'>
    readonly notes: FieldRef<"TaskHistory", 'String'>
    readonly createdAt: FieldRef<"TaskHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskHistory findUnique
   */
  export type TaskHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistory to fetch.
     */
    where: TaskHistoryWhereUniqueInput
  }

  /**
   * TaskHistory findUniqueOrThrow
   */
  export type TaskHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistory to fetch.
     */
    where: TaskHistoryWhereUniqueInput
  }

  /**
   * TaskHistory findFirst
   */
  export type TaskHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistory to fetch.
     */
    where?: TaskHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskHistories to fetch.
     */
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskHistories.
     */
    cursor?: TaskHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskHistories.
     */
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * TaskHistory findFirstOrThrow
   */
  export type TaskHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistory to fetch.
     */
    where?: TaskHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskHistories to fetch.
     */
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskHistories.
     */
    cursor?: TaskHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskHistories.
     */
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * TaskHistory findMany
   */
  export type TaskHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistories to fetch.
     */
    where?: TaskHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskHistories to fetch.
     */
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskHistories.
     */
    cursor?: TaskHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskHistories.
     */
    skip?: number
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * TaskHistory create
   */
  export type TaskHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskHistory.
     */
    data: XOR<TaskHistoryCreateInput, TaskHistoryUncheckedCreateInput>
  }

  /**
   * TaskHistory createMany
   */
  export type TaskHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskHistories.
     */
    data: TaskHistoryCreateManyInput | TaskHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskHistory createManyAndReturn
   */
  export type TaskHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many TaskHistories.
     */
    data: TaskHistoryCreateManyInput | TaskHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskHistory update
   */
  export type TaskHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskHistory.
     */
    data: XOR<TaskHistoryUpdateInput, TaskHistoryUncheckedUpdateInput>
    /**
     * Choose, which TaskHistory to update.
     */
    where: TaskHistoryWhereUniqueInput
  }

  /**
   * TaskHistory updateMany
   */
  export type TaskHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskHistories.
     */
    data: XOR<TaskHistoryUpdateManyMutationInput, TaskHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TaskHistories to update
     */
    where?: TaskHistoryWhereInput
    /**
     * Limit how many TaskHistories to update.
     */
    limit?: number
  }

  /**
   * TaskHistory updateManyAndReturn
   */
  export type TaskHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * The data used to update TaskHistories.
     */
    data: XOR<TaskHistoryUpdateManyMutationInput, TaskHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TaskHistories to update
     */
    where?: TaskHistoryWhereInput
    /**
     * Limit how many TaskHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskHistory upsert
   */
  export type TaskHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskHistory to update in case it exists.
     */
    where: TaskHistoryWhereUniqueInput
    /**
     * In case the TaskHistory found by the `where` argument doesn't exist, create a new TaskHistory with this data.
     */
    create: XOR<TaskHistoryCreateInput, TaskHistoryUncheckedCreateInput>
    /**
     * In case the TaskHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskHistoryUpdateInput, TaskHistoryUncheckedUpdateInput>
  }

  /**
   * TaskHistory delete
   */
  export type TaskHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter which TaskHistory to delete.
     */
    where: TaskHistoryWhereUniqueInput
  }

  /**
   * TaskHistory deleteMany
   */
  export type TaskHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskHistories to delete
     */
    where?: TaskHistoryWhereInput
    /**
     * Limit how many TaskHistories to delete.
     */
    limit?: number
  }

  /**
   * TaskHistory without action
   */
  export type TaskHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HouseholdScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HouseholdScalarFieldEnum = (typeof HouseholdScalarFieldEnum)[keyof typeof HouseholdScalarFieldEnum]


  export const HouseholdMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    householdId: 'householdId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type HouseholdMemberScalarFieldEnum = (typeof HouseholdMemberScalarFieldEnum)[keyof typeof HouseholdMemberScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    emoji: 'emoji',
    color: 'color',
    userId: 'userId',
    householdId: 'householdId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    isCompleted: 'isCompleted',
    completedAt: 'completedAt',
    dueDate: 'dueDate',
    estimatedMinutes: 'estimatedMinutes',
    actualMinutes: 'actualMinutes',
    priority: 'priority',
    userId: 'userId',
    categoryId: 'categoryId',
    householdId: 'householdId',
    assignedToId: 'assignedToId',
    parentTaskId: 'parentTaskId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const RecurrenceRuleScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    frequency: 'frequency',
    interval: 'interval',
    daysOfWeek: 'daysOfWeek',
    dayOfMonth: 'dayOfMonth',
    endDate: 'endDate',
    occurrences: 'occurrences',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecurrenceRuleScalarFieldEnum = (typeof RecurrenceRuleScalarFieldEnum)[keyof typeof RecurrenceRuleScalarFieldEnum]


  export const TaskHistoryScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    action: 'action',
    completedBy: 'completedBy',
    completionTime: 'completionTime',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type TaskHistoryScalarFieldEnum = (typeof TaskHistoryScalarFieldEnum)[keyof typeof TaskHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    categories?: CategoryListRelationFilter
    households?: HouseholdMemberListRelationFilter
    tasks?: TaskListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categories?: CategoryOrderByRelationAggregateInput
    households?: HouseholdMemberOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    categories?: CategoryListRelationFilter
    households?: HouseholdMemberListRelationFilter
    tasks?: TaskListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type HouseholdWhereInput = {
    AND?: HouseholdWhereInput | HouseholdWhereInput[]
    OR?: HouseholdWhereInput[]
    NOT?: HouseholdWhereInput | HouseholdWhereInput[]
    id?: StringFilter<"Household"> | string
    name?: StringFilter<"Household"> | string
    description?: StringNullableFilter<"Household"> | string | null
    createdAt?: DateTimeFilter<"Household"> | Date | string
    updatedAt?: DateTimeFilter<"Household"> | Date | string
    categories?: CategoryListRelationFilter
    members?: HouseholdMemberListRelationFilter
    tasks?: TaskListRelationFilter
  }

  export type HouseholdOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categories?: CategoryOrderByRelationAggregateInput
    members?: HouseholdMemberOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type HouseholdWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HouseholdWhereInput | HouseholdWhereInput[]
    OR?: HouseholdWhereInput[]
    NOT?: HouseholdWhereInput | HouseholdWhereInput[]
    name?: StringFilter<"Household"> | string
    description?: StringNullableFilter<"Household"> | string | null
    createdAt?: DateTimeFilter<"Household"> | Date | string
    updatedAt?: DateTimeFilter<"Household"> | Date | string
    categories?: CategoryListRelationFilter
    members?: HouseholdMemberListRelationFilter
    tasks?: TaskListRelationFilter
  }, "id">

  export type HouseholdOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HouseholdCountOrderByAggregateInput
    _max?: HouseholdMaxOrderByAggregateInput
    _min?: HouseholdMinOrderByAggregateInput
  }

  export type HouseholdScalarWhereWithAggregatesInput = {
    AND?: HouseholdScalarWhereWithAggregatesInput | HouseholdScalarWhereWithAggregatesInput[]
    OR?: HouseholdScalarWhereWithAggregatesInput[]
    NOT?: HouseholdScalarWhereWithAggregatesInput | HouseholdScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Household"> | string
    name?: StringWithAggregatesFilter<"Household"> | string
    description?: StringNullableWithAggregatesFilter<"Household"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Household"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Household"> | Date | string
  }

  export type HouseholdMemberWhereInput = {
    AND?: HouseholdMemberWhereInput | HouseholdMemberWhereInput[]
    OR?: HouseholdMemberWhereInput[]
    NOT?: HouseholdMemberWhereInput | HouseholdMemberWhereInput[]
    id?: StringFilter<"HouseholdMember"> | string
    userId?: StringFilter<"HouseholdMember"> | string
    householdId?: StringFilter<"HouseholdMember"> | string
    role?: StringFilter<"HouseholdMember"> | string
    joinedAt?: DateTimeFilter<"HouseholdMember"> | Date | string
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HouseholdMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    householdId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    household?: HouseholdOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type HouseholdMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_householdId?: HouseholdMemberUserIdHouseholdIdCompoundUniqueInput
    AND?: HouseholdMemberWhereInput | HouseholdMemberWhereInput[]
    OR?: HouseholdMemberWhereInput[]
    NOT?: HouseholdMemberWhereInput | HouseholdMemberWhereInput[]
    userId?: StringFilter<"HouseholdMember"> | string
    householdId?: StringFilter<"HouseholdMember"> | string
    role?: StringFilter<"HouseholdMember"> | string
    joinedAt?: DateTimeFilter<"HouseholdMember"> | Date | string
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_householdId">

  export type HouseholdMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    householdId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: HouseholdMemberCountOrderByAggregateInput
    _max?: HouseholdMemberMaxOrderByAggregateInput
    _min?: HouseholdMemberMinOrderByAggregateInput
  }

  export type HouseholdMemberScalarWhereWithAggregatesInput = {
    AND?: HouseholdMemberScalarWhereWithAggregatesInput | HouseholdMemberScalarWhereWithAggregatesInput[]
    OR?: HouseholdMemberScalarWhereWithAggregatesInput[]
    NOT?: HouseholdMemberScalarWhereWithAggregatesInput | HouseholdMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HouseholdMember"> | string
    userId?: StringWithAggregatesFilter<"HouseholdMember"> | string
    householdId?: StringWithAggregatesFilter<"HouseholdMember"> | string
    role?: StringWithAggregatesFilter<"HouseholdMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"HouseholdMember"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    emoji?: StringNullableFilter<"Category"> | string | null
    color?: StringNullableFilter<"Category"> | string | null
    userId?: StringNullableFilter<"Category"> | string | null
    householdId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    household?: XOR<HouseholdNullableScalarRelationFilter, HouseholdWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tasks?: TaskListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    emoji?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    householdId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    household?: HouseholdOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_userId?: CategoryNameUserIdCompoundUniqueInput
    name_householdId?: CategoryNameHouseholdIdCompoundUniqueInput
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    emoji?: StringNullableFilter<"Category"> | string | null
    color?: StringNullableFilter<"Category"> | string | null
    userId?: StringNullableFilter<"Category"> | string | null
    householdId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    household?: XOR<HouseholdNullableScalarRelationFilter, HouseholdWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tasks?: TaskListRelationFilter
  }, "id" | "name_userId" | "name_householdId">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    emoji?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    householdId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    emoji?: StringNullableWithAggregatesFilter<"Category"> | string | null
    color?: StringNullableWithAggregatesFilter<"Category"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Category"> | string | null
    householdId?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    isCompleted?: BoolFilter<"Task"> | boolean
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    dueDate?: DateTimeFilter<"Task"> | Date | string
    estimatedMinutes?: IntNullableFilter<"Task"> | number | null
    actualMinutes?: IntNullableFilter<"Task"> | number | null
    priority?: StringFilter<"Task"> | string
    userId?: StringNullableFilter<"Task"> | string | null
    categoryId?: StringFilter<"Task"> | string
    householdId?: StringNullableFilter<"Task"> | string | null
    assignedToId?: StringNullableFilter<"Task"> | string | null
    parentTaskId?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    recurrenceRule?: XOR<RecurrenceRuleNullableScalarRelationFilter, RecurrenceRuleWhereInput> | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    household?: XOR<HouseholdNullableScalarRelationFilter, HouseholdWhereInput> | null
    parentTask?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
    subTasks?: TaskListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    taskHistory?: TaskHistoryListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    dueDate?: SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    actualMinutes?: SortOrderInput | SortOrder
    priority?: SortOrder
    userId?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    householdId?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    parentTaskId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recurrenceRule?: RecurrenceRuleOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    household?: HouseholdOrderByWithRelationInput
    parentTask?: TaskOrderByWithRelationInput
    subTasks?: TaskOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    taskHistory?: TaskHistoryOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    isCompleted?: BoolFilter<"Task"> | boolean
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    dueDate?: DateTimeFilter<"Task"> | Date | string
    estimatedMinutes?: IntNullableFilter<"Task"> | number | null
    actualMinutes?: IntNullableFilter<"Task"> | number | null
    priority?: StringFilter<"Task"> | string
    userId?: StringNullableFilter<"Task"> | string | null
    categoryId?: StringFilter<"Task"> | string
    householdId?: StringNullableFilter<"Task"> | string | null
    assignedToId?: StringNullableFilter<"Task"> | string | null
    parentTaskId?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    recurrenceRule?: XOR<RecurrenceRuleNullableScalarRelationFilter, RecurrenceRuleWhereInput> | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    household?: XOR<HouseholdNullableScalarRelationFilter, HouseholdWhereInput> | null
    parentTask?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
    subTasks?: TaskListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    taskHistory?: TaskHistoryListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    dueDate?: SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    actualMinutes?: SortOrderInput | SortOrder
    priority?: SortOrder
    userId?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    householdId?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    parentTaskId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    isCompleted?: BoolWithAggregatesFilter<"Task"> | boolean
    completedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    dueDate?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    estimatedMinutes?: IntNullableWithAggregatesFilter<"Task"> | number | null
    actualMinutes?: IntNullableWithAggregatesFilter<"Task"> | number | null
    priority?: StringWithAggregatesFilter<"Task"> | string
    userId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    categoryId?: StringWithAggregatesFilter<"Task"> | string
    householdId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    assignedToId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    parentTaskId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type RecurrenceRuleWhereInput = {
    AND?: RecurrenceRuleWhereInput | RecurrenceRuleWhereInput[]
    OR?: RecurrenceRuleWhereInput[]
    NOT?: RecurrenceRuleWhereInput | RecurrenceRuleWhereInput[]
    id?: StringFilter<"RecurrenceRule"> | string
    taskId?: StringFilter<"RecurrenceRule"> | string
    frequency?: StringFilter<"RecurrenceRule"> | string
    interval?: IntFilter<"RecurrenceRule"> | number
    daysOfWeek?: StringNullableListFilter<"RecurrenceRule">
    dayOfMonth?: IntNullableFilter<"RecurrenceRule"> | number | null
    endDate?: DateTimeNullableFilter<"RecurrenceRule"> | Date | string | null
    occurrences?: IntNullableFilter<"RecurrenceRule"> | number | null
    createdAt?: DateTimeFilter<"RecurrenceRule"> | Date | string
    updatedAt?: DateTimeFilter<"RecurrenceRule"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type RecurrenceRuleOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    frequency?: SortOrder
    interval?: SortOrder
    daysOfWeek?: SortOrder
    dayOfMonth?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    occurrences?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type RecurrenceRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    taskId?: string
    AND?: RecurrenceRuleWhereInput | RecurrenceRuleWhereInput[]
    OR?: RecurrenceRuleWhereInput[]
    NOT?: RecurrenceRuleWhereInput | RecurrenceRuleWhereInput[]
    frequency?: StringFilter<"RecurrenceRule"> | string
    interval?: IntFilter<"RecurrenceRule"> | number
    daysOfWeek?: StringNullableListFilter<"RecurrenceRule">
    dayOfMonth?: IntNullableFilter<"RecurrenceRule"> | number | null
    endDate?: DateTimeNullableFilter<"RecurrenceRule"> | Date | string | null
    occurrences?: IntNullableFilter<"RecurrenceRule"> | number | null
    createdAt?: DateTimeFilter<"RecurrenceRule"> | Date | string
    updatedAt?: DateTimeFilter<"RecurrenceRule"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id" | "taskId">

  export type RecurrenceRuleOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    frequency?: SortOrder
    interval?: SortOrder
    daysOfWeek?: SortOrder
    dayOfMonth?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    occurrences?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecurrenceRuleCountOrderByAggregateInput
    _avg?: RecurrenceRuleAvgOrderByAggregateInput
    _max?: RecurrenceRuleMaxOrderByAggregateInput
    _min?: RecurrenceRuleMinOrderByAggregateInput
    _sum?: RecurrenceRuleSumOrderByAggregateInput
  }

  export type RecurrenceRuleScalarWhereWithAggregatesInput = {
    AND?: RecurrenceRuleScalarWhereWithAggregatesInput | RecurrenceRuleScalarWhereWithAggregatesInput[]
    OR?: RecurrenceRuleScalarWhereWithAggregatesInput[]
    NOT?: RecurrenceRuleScalarWhereWithAggregatesInput | RecurrenceRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecurrenceRule"> | string
    taskId?: StringWithAggregatesFilter<"RecurrenceRule"> | string
    frequency?: StringWithAggregatesFilter<"RecurrenceRule"> | string
    interval?: IntWithAggregatesFilter<"RecurrenceRule"> | number
    daysOfWeek?: StringNullableListFilter<"RecurrenceRule">
    dayOfMonth?: IntNullableWithAggregatesFilter<"RecurrenceRule"> | number | null
    endDate?: DateTimeNullableWithAggregatesFilter<"RecurrenceRule"> | Date | string | null
    occurrences?: IntNullableWithAggregatesFilter<"RecurrenceRule"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"RecurrenceRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RecurrenceRule"> | Date | string
  }

  export type TaskHistoryWhereInput = {
    AND?: TaskHistoryWhereInput | TaskHistoryWhereInput[]
    OR?: TaskHistoryWhereInput[]
    NOT?: TaskHistoryWhereInput | TaskHistoryWhereInput[]
    id?: StringFilter<"TaskHistory"> | string
    taskId?: StringFilter<"TaskHistory"> | string
    action?: StringFilter<"TaskHistory"> | string
    completedBy?: StringNullableFilter<"TaskHistory"> | string | null
    completionTime?: DateTimeNullableFilter<"TaskHistory"> | Date | string | null
    notes?: StringNullableFilter<"TaskHistory"> | string | null
    createdAt?: DateTimeFilter<"TaskHistory"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type TaskHistoryOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    action?: SortOrder
    completedBy?: SortOrderInput | SortOrder
    completionTime?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type TaskHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskHistoryWhereInput | TaskHistoryWhereInput[]
    OR?: TaskHistoryWhereInput[]
    NOT?: TaskHistoryWhereInput | TaskHistoryWhereInput[]
    taskId?: StringFilter<"TaskHistory"> | string
    action?: StringFilter<"TaskHistory"> | string
    completedBy?: StringNullableFilter<"TaskHistory"> | string | null
    completionTime?: DateTimeNullableFilter<"TaskHistory"> | Date | string | null
    notes?: StringNullableFilter<"TaskHistory"> | string | null
    createdAt?: DateTimeFilter<"TaskHistory"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type TaskHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    action?: SortOrder
    completedBy?: SortOrderInput | SortOrder
    completionTime?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TaskHistoryCountOrderByAggregateInput
    _max?: TaskHistoryMaxOrderByAggregateInput
    _min?: TaskHistoryMinOrderByAggregateInput
  }

  export type TaskHistoryScalarWhereWithAggregatesInput = {
    AND?: TaskHistoryScalarWhereWithAggregatesInput | TaskHistoryScalarWhereWithAggregatesInput[]
    OR?: TaskHistoryScalarWhereWithAggregatesInput[]
    NOT?: TaskHistoryScalarWhereWithAggregatesInput | TaskHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskHistory"> | string
    taskId?: StringWithAggregatesFilter<"TaskHistory"> | string
    action?: StringWithAggregatesFilter<"TaskHistory"> | string
    completedBy?: StringNullableWithAggregatesFilter<"TaskHistory"> | string | null
    completionTime?: DateTimeNullableWithAggregatesFilter<"TaskHistory"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"TaskHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TaskHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutUserInput
    households?: HouseholdMemberCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    households?: HouseholdMemberUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutUserNestedInput
    households?: HouseholdMemberUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    households?: HouseholdMemberUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutHouseholdInput
    members?: HouseholdMemberCreateNestedManyWithoutHouseholdInput
    tasks?: TaskCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutHouseholdInput
    members?: HouseholdMemberUncheckedCreateNestedManyWithoutHouseholdInput
    tasks?: TaskUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutHouseholdNestedInput
    members?: HouseholdMemberUpdateManyWithoutHouseholdNestedInput
    tasks?: TaskUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutHouseholdNestedInput
    members?: HouseholdMemberUncheckedUpdateManyWithoutHouseholdNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HouseholdUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdMemberCreateInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    household: HouseholdCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutHouseholdsInput
  }

  export type HouseholdMemberUncheckedCreateInput = {
    id?: string
    userId: string
    householdId: string
    role?: string
    joinedAt?: Date | string
  }

  export type HouseholdMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    household?: HouseholdUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutHouseholdsNestedInput
  }

  export type HouseholdMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    householdId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdMemberCreateManyInput = {
    id?: string
    userId: string
    householdId: string
    role?: string
    joinedAt?: Date | string
  }

  export type HouseholdMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    householdId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    emoji?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    household?: HouseholdCreateNestedOneWithoutCategoriesInput
    user?: UserCreateNestedOneWithoutCategoriesInput
    tasks?: TaskCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    emoji?: string | null
    color?: string | null
    userId?: string | null
    householdId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    household?: HouseholdUpdateOneWithoutCategoriesNestedInput
    user?: UserUpdateOneWithoutCategoriesNestedInput
    tasks?: TaskUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    householdId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    emoji?: string | null
    color?: string | null
    userId?: string | null
    householdId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    householdId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recurrenceRule?: RecurrenceRuleCreateNestedOneWithoutTaskInput
    category: CategoryCreateNestedOneWithoutTasksInput
    household?: HouseholdCreateNestedOneWithoutTasksInput
    parentTask?: TaskCreateNestedOneWithoutSubTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentTaskInput
    user?: UserCreateNestedOneWithoutTasksInput
    taskHistory?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    userId?: string | null
    categoryId: string
    householdId?: string | null
    assignedToId?: string | null
    parentTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recurrenceRule?: RecurrenceRuleUncheckedCreateNestedOneWithoutTaskInput
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput
    taskHistory?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrenceRule?: RecurrenceRuleUpdateOneWithoutTaskNestedInput
    category?: CategoryUpdateOneRequiredWithoutTasksNestedInput
    household?: HouseholdUpdateOneWithoutTasksNestedInput
    parentTask?: TaskUpdateOneWithoutSubTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentTaskNestedInput
    user?: UserUpdateOneWithoutTasksNestedInput
    taskHistory?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    householdId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrenceRule?: RecurrenceRuleUncheckedUpdateOneWithoutTaskNestedInput
    subTasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput
    taskHistory?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    userId?: string | null
    categoryId: string
    householdId?: string | null
    assignedToId?: string | null
    parentTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    householdId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurrenceRuleCreateInput = {
    id?: string
    frequency: string
    interval?: number
    daysOfWeek?: RecurrenceRuleCreatedaysOfWeekInput | string[]
    dayOfMonth?: number | null
    endDate?: Date | string | null
    occurrences?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutRecurrenceRuleInput
  }

  export type RecurrenceRuleUncheckedCreateInput = {
    id?: string
    taskId: string
    frequency: string
    interval?: number
    daysOfWeek?: RecurrenceRuleCreatedaysOfWeekInput | string[]
    dayOfMonth?: number | null
    endDate?: Date | string | null
    occurrences?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurrenceRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    daysOfWeek?: RecurrenceRuleUpdatedaysOfWeekInput | string[]
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    occurrences?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutRecurrenceRuleNestedInput
  }

  export type RecurrenceRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    daysOfWeek?: RecurrenceRuleUpdatedaysOfWeekInput | string[]
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    occurrences?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurrenceRuleCreateManyInput = {
    id?: string
    taskId: string
    frequency: string
    interval?: number
    daysOfWeek?: RecurrenceRuleCreatedaysOfWeekInput | string[]
    dayOfMonth?: number | null
    endDate?: Date | string | null
    occurrences?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurrenceRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    daysOfWeek?: RecurrenceRuleUpdatedaysOfWeekInput | string[]
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    occurrences?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurrenceRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    daysOfWeek?: RecurrenceRuleUpdatedaysOfWeekInput | string[]
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    occurrences?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryCreateInput = {
    id?: string
    action: string
    completedBy?: string | null
    completionTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutTaskHistoryInput
  }

  export type TaskHistoryUncheckedCreateInput = {
    id?: string
    taskId: string
    action: string
    completedBy?: string | null
    completionTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type TaskHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    completedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutTaskHistoryNestedInput
  }

  export type TaskHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    completedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryCreateManyInput = {
    id?: string
    taskId: string
    action: string
    completedBy?: string | null
    completionTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type TaskHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    completedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    completedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type HouseholdMemberListRelationFilter = {
    every?: HouseholdMemberWhereInput
    some?: HouseholdMemberWhereInput
    none?: HouseholdMemberWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HouseholdMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type HouseholdCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HouseholdMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HouseholdMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HouseholdScalarRelationFilter = {
    is?: HouseholdWhereInput
    isNot?: HouseholdWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type HouseholdMemberUserIdHouseholdIdCompoundUniqueInput = {
    userId: string
    householdId: string
  }

  export type HouseholdMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    householdId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type HouseholdMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    householdId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type HouseholdMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    householdId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type HouseholdNullableScalarRelationFilter = {
    is?: HouseholdWhereInput | null
    isNot?: HouseholdWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CategoryNameUserIdCompoundUniqueInput = {
    name: string
    userId: string
  }

  export type CategoryNameHouseholdIdCompoundUniqueInput = {
    name: string
    householdId: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    color?: SortOrder
    userId?: SortOrder
    householdId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    color?: SortOrder
    userId?: SortOrder
    householdId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    color?: SortOrder
    userId?: SortOrder
    householdId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RecurrenceRuleNullableScalarRelationFilter = {
    is?: RecurrenceRuleWhereInput | null
    isNot?: RecurrenceRuleWhereInput | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type TaskNullableScalarRelationFilter = {
    is?: TaskWhereInput | null
    isNot?: TaskWhereInput | null
  }

  export type TaskHistoryListRelationFilter = {
    every?: TaskHistoryWhereInput
    some?: TaskHistoryWhereInput
    none?: TaskHistoryWhereInput
  }

  export type TaskHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrder
    dueDate?: SortOrder
    estimatedMinutes?: SortOrder
    actualMinutes?: SortOrder
    priority?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    householdId?: SortOrder
    assignedToId?: SortOrder
    parentTaskId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    estimatedMinutes?: SortOrder
    actualMinutes?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrder
    dueDate?: SortOrder
    estimatedMinutes?: SortOrder
    actualMinutes?: SortOrder
    priority?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    householdId?: SortOrder
    assignedToId?: SortOrder
    parentTaskId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrder
    dueDate?: SortOrder
    estimatedMinutes?: SortOrder
    actualMinutes?: SortOrder
    priority?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    householdId?: SortOrder
    assignedToId?: SortOrder
    parentTaskId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    estimatedMinutes?: SortOrder
    actualMinutes?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type RecurrenceRuleCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    frequency?: SortOrder
    interval?: SortOrder
    daysOfWeek?: SortOrder
    dayOfMonth?: SortOrder
    endDate?: SortOrder
    occurrences?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurrenceRuleAvgOrderByAggregateInput = {
    interval?: SortOrder
    dayOfMonth?: SortOrder
    occurrences?: SortOrder
  }

  export type RecurrenceRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    frequency?: SortOrder
    interval?: SortOrder
    dayOfMonth?: SortOrder
    endDate?: SortOrder
    occurrences?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurrenceRuleMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    frequency?: SortOrder
    interval?: SortOrder
    dayOfMonth?: SortOrder
    endDate?: SortOrder
    occurrences?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurrenceRuleSumOrderByAggregateInput = {
    interval?: SortOrder
    dayOfMonth?: SortOrder
    occurrences?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type TaskHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    action?: SortOrder
    completedBy?: SortOrder
    completionTime?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    action?: SortOrder
    completedBy?: SortOrder
    completionTime?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    action?: SortOrder
    completedBy?: SortOrder
    completionTime?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type HouseholdMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<HouseholdMemberCreateWithoutUserInput, HouseholdMemberUncheckedCreateWithoutUserInput> | HouseholdMemberCreateWithoutUserInput[] | HouseholdMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HouseholdMemberCreateOrConnectWithoutUserInput | HouseholdMemberCreateOrConnectWithoutUserInput[]
    createMany?: HouseholdMemberCreateManyUserInputEnvelope
    connect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type HouseholdMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HouseholdMemberCreateWithoutUserInput, HouseholdMemberUncheckedCreateWithoutUserInput> | HouseholdMemberCreateWithoutUserInput[] | HouseholdMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HouseholdMemberCreateOrConnectWithoutUserInput | HouseholdMemberCreateOrConnectWithoutUserInput[]
    createMany?: HouseholdMemberCreateManyUserInputEnvelope
    connect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type HouseholdMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<HouseholdMemberCreateWithoutUserInput, HouseholdMemberUncheckedCreateWithoutUserInput> | HouseholdMemberCreateWithoutUserInput[] | HouseholdMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HouseholdMemberCreateOrConnectWithoutUserInput | HouseholdMemberCreateOrConnectWithoutUserInput[]
    upsert?: HouseholdMemberUpsertWithWhereUniqueWithoutUserInput | HouseholdMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HouseholdMemberCreateManyUserInputEnvelope
    set?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    disconnect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    delete?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    connect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    update?: HouseholdMemberUpdateWithWhereUniqueWithoutUserInput | HouseholdMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HouseholdMemberUpdateManyWithWhereWithoutUserInput | HouseholdMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HouseholdMemberScalarWhereInput | HouseholdMemberScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type HouseholdMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HouseholdMemberCreateWithoutUserInput, HouseholdMemberUncheckedCreateWithoutUserInput> | HouseholdMemberCreateWithoutUserInput[] | HouseholdMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HouseholdMemberCreateOrConnectWithoutUserInput | HouseholdMemberCreateOrConnectWithoutUserInput[]
    upsert?: HouseholdMemberUpsertWithWhereUniqueWithoutUserInput | HouseholdMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HouseholdMemberCreateManyUserInputEnvelope
    set?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    disconnect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    delete?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    connect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    update?: HouseholdMemberUpdateWithWhereUniqueWithoutUserInput | HouseholdMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HouseholdMemberUpdateManyWithWhereWithoutUserInput | HouseholdMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HouseholdMemberScalarWhereInput | HouseholdMemberScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CategoryCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<CategoryCreateWithoutHouseholdInput, CategoryUncheckedCreateWithoutHouseholdInput> | CategoryCreateWithoutHouseholdInput[] | CategoryUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutHouseholdInput | CategoryCreateOrConnectWithoutHouseholdInput[]
    createMany?: CategoryCreateManyHouseholdInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type HouseholdMemberCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<HouseholdMemberCreateWithoutHouseholdInput, HouseholdMemberUncheckedCreateWithoutHouseholdInput> | HouseholdMemberCreateWithoutHouseholdInput[] | HouseholdMemberUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: HouseholdMemberCreateOrConnectWithoutHouseholdInput | HouseholdMemberCreateOrConnectWithoutHouseholdInput[]
    createMany?: HouseholdMemberCreateManyHouseholdInputEnvelope
    connect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<TaskCreateWithoutHouseholdInput, TaskUncheckedCreateWithoutHouseholdInput> | TaskCreateWithoutHouseholdInput[] | TaskUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutHouseholdInput | TaskCreateOrConnectWithoutHouseholdInput[]
    createMany?: TaskCreateManyHouseholdInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<CategoryCreateWithoutHouseholdInput, CategoryUncheckedCreateWithoutHouseholdInput> | CategoryCreateWithoutHouseholdInput[] | CategoryUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutHouseholdInput | CategoryCreateOrConnectWithoutHouseholdInput[]
    createMany?: CategoryCreateManyHouseholdInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type HouseholdMemberUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<HouseholdMemberCreateWithoutHouseholdInput, HouseholdMemberUncheckedCreateWithoutHouseholdInput> | HouseholdMemberCreateWithoutHouseholdInput[] | HouseholdMemberUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: HouseholdMemberCreateOrConnectWithoutHouseholdInput | HouseholdMemberCreateOrConnectWithoutHouseholdInput[]
    createMany?: HouseholdMemberCreateManyHouseholdInputEnvelope
    connect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<TaskCreateWithoutHouseholdInput, TaskUncheckedCreateWithoutHouseholdInput> | TaskCreateWithoutHouseholdInput[] | TaskUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutHouseholdInput | TaskCreateOrConnectWithoutHouseholdInput[]
    createMany?: TaskCreateManyHouseholdInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CategoryUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<CategoryCreateWithoutHouseholdInput, CategoryUncheckedCreateWithoutHouseholdInput> | CategoryCreateWithoutHouseholdInput[] | CategoryUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutHouseholdInput | CategoryCreateOrConnectWithoutHouseholdInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutHouseholdInput | CategoryUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: CategoryCreateManyHouseholdInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutHouseholdInput | CategoryUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutHouseholdInput | CategoryUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type HouseholdMemberUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<HouseholdMemberCreateWithoutHouseholdInput, HouseholdMemberUncheckedCreateWithoutHouseholdInput> | HouseholdMemberCreateWithoutHouseholdInput[] | HouseholdMemberUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: HouseholdMemberCreateOrConnectWithoutHouseholdInput | HouseholdMemberCreateOrConnectWithoutHouseholdInput[]
    upsert?: HouseholdMemberUpsertWithWhereUniqueWithoutHouseholdInput | HouseholdMemberUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: HouseholdMemberCreateManyHouseholdInputEnvelope
    set?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    disconnect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    delete?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    connect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    update?: HouseholdMemberUpdateWithWhereUniqueWithoutHouseholdInput | HouseholdMemberUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: HouseholdMemberUpdateManyWithWhereWithoutHouseholdInput | HouseholdMemberUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: HouseholdMemberScalarWhereInput | HouseholdMemberScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<TaskCreateWithoutHouseholdInput, TaskUncheckedCreateWithoutHouseholdInput> | TaskCreateWithoutHouseholdInput[] | TaskUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutHouseholdInput | TaskCreateOrConnectWithoutHouseholdInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutHouseholdInput | TaskUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: TaskCreateManyHouseholdInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutHouseholdInput | TaskUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutHouseholdInput | TaskUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<CategoryCreateWithoutHouseholdInput, CategoryUncheckedCreateWithoutHouseholdInput> | CategoryCreateWithoutHouseholdInput[] | CategoryUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutHouseholdInput | CategoryCreateOrConnectWithoutHouseholdInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutHouseholdInput | CategoryUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: CategoryCreateManyHouseholdInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutHouseholdInput | CategoryUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutHouseholdInput | CategoryUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type HouseholdMemberUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<HouseholdMemberCreateWithoutHouseholdInput, HouseholdMemberUncheckedCreateWithoutHouseholdInput> | HouseholdMemberCreateWithoutHouseholdInput[] | HouseholdMemberUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: HouseholdMemberCreateOrConnectWithoutHouseholdInput | HouseholdMemberCreateOrConnectWithoutHouseholdInput[]
    upsert?: HouseholdMemberUpsertWithWhereUniqueWithoutHouseholdInput | HouseholdMemberUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: HouseholdMemberCreateManyHouseholdInputEnvelope
    set?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    disconnect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    delete?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    connect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    update?: HouseholdMemberUpdateWithWhereUniqueWithoutHouseholdInput | HouseholdMemberUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: HouseholdMemberUpdateManyWithWhereWithoutHouseholdInput | HouseholdMemberUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: HouseholdMemberScalarWhereInput | HouseholdMemberScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<TaskCreateWithoutHouseholdInput, TaskUncheckedCreateWithoutHouseholdInput> | TaskCreateWithoutHouseholdInput[] | TaskUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutHouseholdInput | TaskCreateOrConnectWithoutHouseholdInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutHouseholdInput | TaskUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: TaskCreateManyHouseholdInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutHouseholdInput | TaskUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutHouseholdInput | TaskUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type HouseholdCreateNestedOneWithoutMembersInput = {
    create?: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutMembersInput
    connect?: HouseholdWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutHouseholdsInput = {
    create?: XOR<UserCreateWithoutHouseholdsInput, UserUncheckedCreateWithoutHouseholdsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHouseholdsInput
    connect?: UserWhereUniqueInput
  }

  export type HouseholdUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutMembersInput
    upsert?: HouseholdUpsertWithoutMembersInput
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutMembersInput, HouseholdUpdateWithoutMembersInput>, HouseholdUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutHouseholdsNestedInput = {
    create?: XOR<UserCreateWithoutHouseholdsInput, UserUncheckedCreateWithoutHouseholdsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHouseholdsInput
    upsert?: UserUpsertWithoutHouseholdsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHouseholdsInput, UserUpdateWithoutHouseholdsInput>, UserUncheckedUpdateWithoutHouseholdsInput>
  }

  export type HouseholdCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<HouseholdCreateWithoutCategoriesInput, HouseholdUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutCategoriesInput
    connect?: HouseholdWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput> | TaskCreateWithoutCategoryInput[] | TaskUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCategoryInput | TaskCreateOrConnectWithoutCategoryInput[]
    createMany?: TaskCreateManyCategoryInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput> | TaskCreateWithoutCategoryInput[] | TaskUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCategoryInput | TaskCreateOrConnectWithoutCategoryInput[]
    createMany?: TaskCreateManyCategoryInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type HouseholdUpdateOneWithoutCategoriesNestedInput = {
    create?: XOR<HouseholdCreateWithoutCategoriesInput, HouseholdUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutCategoriesInput
    upsert?: HouseholdUpsertWithoutCategoriesInput
    disconnect?: HouseholdWhereInput | boolean
    delete?: HouseholdWhereInput | boolean
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutCategoriesInput, HouseholdUpdateWithoutCategoriesInput>, HouseholdUncheckedUpdateWithoutCategoriesInput>
  }

  export type UserUpdateOneWithoutCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    upsert?: UserUpsertWithoutCategoriesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoriesInput, UserUpdateWithoutCategoriesInput>, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type TaskUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput> | TaskCreateWithoutCategoryInput[] | TaskUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCategoryInput | TaskCreateOrConnectWithoutCategoryInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCategoryInput | TaskUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TaskCreateManyCategoryInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCategoryInput | TaskUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCategoryInput | TaskUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput> | TaskCreateWithoutCategoryInput[] | TaskUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCategoryInput | TaskCreateOrConnectWithoutCategoryInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCategoryInput | TaskUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TaskCreateManyCategoryInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCategoryInput | TaskUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCategoryInput | TaskUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type RecurrenceRuleCreateNestedOneWithoutTaskInput = {
    create?: XOR<RecurrenceRuleCreateWithoutTaskInput, RecurrenceRuleUncheckedCreateWithoutTaskInput>
    connectOrCreate?: RecurrenceRuleCreateOrConnectWithoutTaskInput
    connect?: RecurrenceRuleWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutTasksInput = {
    create?: XOR<CategoryCreateWithoutTasksInput, CategoryUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTasksInput
    connect?: CategoryWhereUniqueInput
  }

  export type HouseholdCreateNestedOneWithoutTasksInput = {
    create?: XOR<HouseholdCreateWithoutTasksInput, HouseholdUncheckedCreateWithoutTasksInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutTasksInput
    connect?: HouseholdWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutSubTasksInput = {
    create?: XOR<TaskCreateWithoutSubTasksInput, TaskUncheckedCreateWithoutSubTasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubTasksInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutParentTaskInput = {
    create?: XOR<TaskCreateWithoutParentTaskInput, TaskUncheckedCreateWithoutParentTaskInput> | TaskCreateWithoutParentTaskInput[] | TaskUncheckedCreateWithoutParentTaskInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentTaskInput | TaskCreateOrConnectWithoutParentTaskInput[]
    createMany?: TaskCreateManyParentTaskInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type TaskHistoryCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput> | TaskHistoryCreateWithoutTaskInput[] | TaskHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutTaskInput | TaskHistoryCreateOrConnectWithoutTaskInput[]
    createMany?: TaskHistoryCreateManyTaskInputEnvelope
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
  }

  export type RecurrenceRuleUncheckedCreateNestedOneWithoutTaskInput = {
    create?: XOR<RecurrenceRuleCreateWithoutTaskInput, RecurrenceRuleUncheckedCreateWithoutTaskInput>
    connectOrCreate?: RecurrenceRuleCreateOrConnectWithoutTaskInput
    connect?: RecurrenceRuleWhereUniqueInput
  }

  export type TaskUncheckedCreateNestedManyWithoutParentTaskInput = {
    create?: XOR<TaskCreateWithoutParentTaskInput, TaskUncheckedCreateWithoutParentTaskInput> | TaskCreateWithoutParentTaskInput[] | TaskUncheckedCreateWithoutParentTaskInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentTaskInput | TaskCreateOrConnectWithoutParentTaskInput[]
    createMany?: TaskCreateManyParentTaskInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskHistoryUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput> | TaskHistoryCreateWithoutTaskInput[] | TaskHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutTaskInput | TaskHistoryCreateOrConnectWithoutTaskInput[]
    createMany?: TaskHistoryCreateManyTaskInputEnvelope
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecurrenceRuleUpdateOneWithoutTaskNestedInput = {
    create?: XOR<RecurrenceRuleCreateWithoutTaskInput, RecurrenceRuleUncheckedCreateWithoutTaskInput>
    connectOrCreate?: RecurrenceRuleCreateOrConnectWithoutTaskInput
    upsert?: RecurrenceRuleUpsertWithoutTaskInput
    disconnect?: RecurrenceRuleWhereInput | boolean
    delete?: RecurrenceRuleWhereInput | boolean
    connect?: RecurrenceRuleWhereUniqueInput
    update?: XOR<XOR<RecurrenceRuleUpdateToOneWithWhereWithoutTaskInput, RecurrenceRuleUpdateWithoutTaskInput>, RecurrenceRuleUncheckedUpdateWithoutTaskInput>
  }

  export type CategoryUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<CategoryCreateWithoutTasksInput, CategoryUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTasksInput
    upsert?: CategoryUpsertWithoutTasksInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTasksInput, CategoryUpdateWithoutTasksInput>, CategoryUncheckedUpdateWithoutTasksInput>
  }

  export type HouseholdUpdateOneWithoutTasksNestedInput = {
    create?: XOR<HouseholdCreateWithoutTasksInput, HouseholdUncheckedCreateWithoutTasksInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutTasksInput
    upsert?: HouseholdUpsertWithoutTasksInput
    disconnect?: HouseholdWhereInput | boolean
    delete?: HouseholdWhereInput | boolean
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutTasksInput, HouseholdUpdateWithoutTasksInput>, HouseholdUncheckedUpdateWithoutTasksInput>
  }

  export type TaskUpdateOneWithoutSubTasksNestedInput = {
    create?: XOR<TaskCreateWithoutSubTasksInput, TaskUncheckedCreateWithoutSubTasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubTasksInput
    upsert?: TaskUpsertWithoutSubTasksInput
    disconnect?: TaskWhereInput | boolean
    delete?: TaskWhereInput | boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutSubTasksInput, TaskUpdateWithoutSubTasksInput>, TaskUncheckedUpdateWithoutSubTasksInput>
  }

  export type TaskUpdateManyWithoutParentTaskNestedInput = {
    create?: XOR<TaskCreateWithoutParentTaskInput, TaskUncheckedCreateWithoutParentTaskInput> | TaskCreateWithoutParentTaskInput[] | TaskUncheckedCreateWithoutParentTaskInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentTaskInput | TaskCreateOrConnectWithoutParentTaskInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutParentTaskInput | TaskUpsertWithWhereUniqueWithoutParentTaskInput[]
    createMany?: TaskCreateManyParentTaskInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutParentTaskInput | TaskUpdateWithWhereUniqueWithoutParentTaskInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutParentTaskInput | TaskUpdateManyWithWhereWithoutParentTaskInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserUpdateOneWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type TaskHistoryUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput> | TaskHistoryCreateWithoutTaskInput[] | TaskHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutTaskInput | TaskHistoryCreateOrConnectWithoutTaskInput[]
    upsert?: TaskHistoryUpsertWithWhereUniqueWithoutTaskInput | TaskHistoryUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskHistoryCreateManyTaskInputEnvelope
    set?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    disconnect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    delete?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    update?: TaskHistoryUpdateWithWhereUniqueWithoutTaskInput | TaskHistoryUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskHistoryUpdateManyWithWhereWithoutTaskInput | TaskHistoryUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
  }

  export type RecurrenceRuleUncheckedUpdateOneWithoutTaskNestedInput = {
    create?: XOR<RecurrenceRuleCreateWithoutTaskInput, RecurrenceRuleUncheckedCreateWithoutTaskInput>
    connectOrCreate?: RecurrenceRuleCreateOrConnectWithoutTaskInput
    upsert?: RecurrenceRuleUpsertWithoutTaskInput
    disconnect?: RecurrenceRuleWhereInput | boolean
    delete?: RecurrenceRuleWhereInput | boolean
    connect?: RecurrenceRuleWhereUniqueInput
    update?: XOR<XOR<RecurrenceRuleUpdateToOneWithWhereWithoutTaskInput, RecurrenceRuleUpdateWithoutTaskInput>, RecurrenceRuleUncheckedUpdateWithoutTaskInput>
  }

  export type TaskUncheckedUpdateManyWithoutParentTaskNestedInput = {
    create?: XOR<TaskCreateWithoutParentTaskInput, TaskUncheckedCreateWithoutParentTaskInput> | TaskCreateWithoutParentTaskInput[] | TaskUncheckedCreateWithoutParentTaskInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentTaskInput | TaskCreateOrConnectWithoutParentTaskInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutParentTaskInput | TaskUpsertWithWhereUniqueWithoutParentTaskInput[]
    createMany?: TaskCreateManyParentTaskInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutParentTaskInput | TaskUpdateWithWhereUniqueWithoutParentTaskInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutParentTaskInput | TaskUpdateManyWithWhereWithoutParentTaskInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput> | TaskHistoryCreateWithoutTaskInput[] | TaskHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutTaskInput | TaskHistoryCreateOrConnectWithoutTaskInput[]
    upsert?: TaskHistoryUpsertWithWhereUniqueWithoutTaskInput | TaskHistoryUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskHistoryCreateManyTaskInputEnvelope
    set?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    disconnect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    delete?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    update?: TaskHistoryUpdateWithWhereUniqueWithoutTaskInput | TaskHistoryUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskHistoryUpdateManyWithWhereWithoutTaskInput | TaskHistoryUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
  }

  export type RecurrenceRuleCreatedaysOfWeekInput = {
    set: string[]
  }

  export type TaskCreateNestedOneWithoutRecurrenceRuleInput = {
    create?: XOR<TaskCreateWithoutRecurrenceRuleInput, TaskUncheckedCreateWithoutRecurrenceRuleInput>
    connectOrCreate?: TaskCreateOrConnectWithoutRecurrenceRuleInput
    connect?: TaskWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecurrenceRuleUpdatedaysOfWeekInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TaskUpdateOneRequiredWithoutRecurrenceRuleNestedInput = {
    create?: XOR<TaskCreateWithoutRecurrenceRuleInput, TaskUncheckedCreateWithoutRecurrenceRuleInput>
    connectOrCreate?: TaskCreateOrConnectWithoutRecurrenceRuleInput
    upsert?: TaskUpsertWithoutRecurrenceRuleInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutRecurrenceRuleInput, TaskUpdateWithoutRecurrenceRuleInput>, TaskUncheckedUpdateWithoutRecurrenceRuleInput>
  }

  export type TaskCreateNestedOneWithoutTaskHistoryInput = {
    create?: XOR<TaskCreateWithoutTaskHistoryInput, TaskUncheckedCreateWithoutTaskHistoryInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTaskHistoryInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutTaskHistoryNestedInput = {
    create?: XOR<TaskCreateWithoutTaskHistoryInput, TaskUncheckedCreateWithoutTaskHistoryInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTaskHistoryInput
    upsert?: TaskUpsertWithoutTaskHistoryInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutTaskHistoryInput, TaskUpdateWithoutTaskHistoryInput>, TaskUncheckedUpdateWithoutTaskHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CategoryCreateWithoutUserInput = {
    id?: string
    name: string
    emoji?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    household?: HouseholdCreateNestedOneWithoutCategoriesInput
    tasks?: TaskCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    emoji?: string | null
    color?: string | null
    householdId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutUserInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryCreateManyUserInputEnvelope = {
    data: CategoryCreateManyUserInput | CategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HouseholdMemberCreateWithoutUserInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    household: HouseholdCreateNestedOneWithoutMembersInput
  }

  export type HouseholdMemberUncheckedCreateWithoutUserInput = {
    id?: string
    householdId: string
    role?: string
    joinedAt?: Date | string
  }

  export type HouseholdMemberCreateOrConnectWithoutUserInput = {
    where: HouseholdMemberWhereUniqueInput
    create: XOR<HouseholdMemberCreateWithoutUserInput, HouseholdMemberUncheckedCreateWithoutUserInput>
  }

  export type HouseholdMemberCreateManyUserInputEnvelope = {
    data: HouseholdMemberCreateManyUserInput | HouseholdMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recurrenceRule?: RecurrenceRuleCreateNestedOneWithoutTaskInput
    category: CategoryCreateNestedOneWithoutTasksInput
    household?: HouseholdCreateNestedOneWithoutTasksInput
    parentTask?: TaskCreateNestedOneWithoutSubTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentTaskInput
    taskHistory?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    categoryId: string
    householdId?: string | null
    assignedToId?: string | null
    parentTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recurrenceRule?: RecurrenceRuleUncheckedCreateNestedOneWithoutTaskInput
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput
    taskHistory?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
  }

  export type CategoryUpdateManyWithWhereWithoutUserInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    emoji?: StringNullableFilter<"Category"> | string | null
    color?: StringNullableFilter<"Category"> | string | null
    userId?: StringNullableFilter<"Category"> | string | null
    householdId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type HouseholdMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: HouseholdMemberWhereUniqueInput
    update: XOR<HouseholdMemberUpdateWithoutUserInput, HouseholdMemberUncheckedUpdateWithoutUserInput>
    create: XOR<HouseholdMemberCreateWithoutUserInput, HouseholdMemberUncheckedCreateWithoutUserInput>
  }

  export type HouseholdMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: HouseholdMemberWhereUniqueInput
    data: XOR<HouseholdMemberUpdateWithoutUserInput, HouseholdMemberUncheckedUpdateWithoutUserInput>
  }

  export type HouseholdMemberUpdateManyWithWhereWithoutUserInput = {
    where: HouseholdMemberScalarWhereInput
    data: XOR<HouseholdMemberUpdateManyMutationInput, HouseholdMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type HouseholdMemberScalarWhereInput = {
    AND?: HouseholdMemberScalarWhereInput | HouseholdMemberScalarWhereInput[]
    OR?: HouseholdMemberScalarWhereInput[]
    NOT?: HouseholdMemberScalarWhereInput | HouseholdMemberScalarWhereInput[]
    id?: StringFilter<"HouseholdMember"> | string
    userId?: StringFilter<"HouseholdMember"> | string
    householdId?: StringFilter<"HouseholdMember"> | string
    role?: StringFilter<"HouseholdMember"> | string
    joinedAt?: DateTimeFilter<"HouseholdMember"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    isCompleted?: BoolFilter<"Task"> | boolean
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    dueDate?: DateTimeFilter<"Task"> | Date | string
    estimatedMinutes?: IntNullableFilter<"Task"> | number | null
    actualMinutes?: IntNullableFilter<"Task"> | number | null
    priority?: StringFilter<"Task"> | string
    userId?: StringNullableFilter<"Task"> | string | null
    categoryId?: StringFilter<"Task"> | string
    householdId?: StringNullableFilter<"Task"> | string | null
    assignedToId?: StringNullableFilter<"Task"> | string | null
    parentTaskId?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type CategoryCreateWithoutHouseholdInput = {
    id?: string
    name: string
    emoji?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutCategoriesInput
    tasks?: TaskCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutHouseholdInput = {
    id?: string
    name: string
    emoji?: string | null
    color?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutHouseholdInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutHouseholdInput, CategoryUncheckedCreateWithoutHouseholdInput>
  }

  export type CategoryCreateManyHouseholdInputEnvelope = {
    data: CategoryCreateManyHouseholdInput | CategoryCreateManyHouseholdInput[]
    skipDuplicates?: boolean
  }

  export type HouseholdMemberCreateWithoutHouseholdInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutHouseholdsInput
  }

  export type HouseholdMemberUncheckedCreateWithoutHouseholdInput = {
    id?: string
    userId: string
    role?: string
    joinedAt?: Date | string
  }

  export type HouseholdMemberCreateOrConnectWithoutHouseholdInput = {
    where: HouseholdMemberWhereUniqueInput
    create: XOR<HouseholdMemberCreateWithoutHouseholdInput, HouseholdMemberUncheckedCreateWithoutHouseholdInput>
  }

  export type HouseholdMemberCreateManyHouseholdInputEnvelope = {
    data: HouseholdMemberCreateManyHouseholdInput | HouseholdMemberCreateManyHouseholdInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutHouseholdInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recurrenceRule?: RecurrenceRuleCreateNestedOneWithoutTaskInput
    category: CategoryCreateNestedOneWithoutTasksInput
    parentTask?: TaskCreateNestedOneWithoutSubTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentTaskInput
    user?: UserCreateNestedOneWithoutTasksInput
    taskHistory?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutHouseholdInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    userId?: string | null
    categoryId: string
    assignedToId?: string | null
    parentTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recurrenceRule?: RecurrenceRuleUncheckedCreateNestedOneWithoutTaskInput
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput
    taskHistory?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutHouseholdInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutHouseholdInput, TaskUncheckedCreateWithoutHouseholdInput>
  }

  export type TaskCreateManyHouseholdInputEnvelope = {
    data: TaskCreateManyHouseholdInput | TaskCreateManyHouseholdInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutHouseholdInput, CategoryUncheckedUpdateWithoutHouseholdInput>
    create: XOR<CategoryCreateWithoutHouseholdInput, CategoryUncheckedCreateWithoutHouseholdInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutHouseholdInput, CategoryUncheckedUpdateWithoutHouseholdInput>
  }

  export type CategoryUpdateManyWithWhereWithoutHouseholdInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type HouseholdMemberUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: HouseholdMemberWhereUniqueInput
    update: XOR<HouseholdMemberUpdateWithoutHouseholdInput, HouseholdMemberUncheckedUpdateWithoutHouseholdInput>
    create: XOR<HouseholdMemberCreateWithoutHouseholdInput, HouseholdMemberUncheckedCreateWithoutHouseholdInput>
  }

  export type HouseholdMemberUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: HouseholdMemberWhereUniqueInput
    data: XOR<HouseholdMemberUpdateWithoutHouseholdInput, HouseholdMemberUncheckedUpdateWithoutHouseholdInput>
  }

  export type HouseholdMemberUpdateManyWithWhereWithoutHouseholdInput = {
    where: HouseholdMemberScalarWhereInput
    data: XOR<HouseholdMemberUpdateManyMutationInput, HouseholdMemberUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutHouseholdInput, TaskUncheckedUpdateWithoutHouseholdInput>
    create: XOR<TaskCreateWithoutHouseholdInput, TaskUncheckedCreateWithoutHouseholdInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutHouseholdInput, TaskUncheckedUpdateWithoutHouseholdInput>
  }

  export type TaskUpdateManyWithWhereWithoutHouseholdInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type HouseholdCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutHouseholdInput
    tasks?: TaskCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutHouseholdInput
    tasks?: TaskUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutMembersInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutHouseholdsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHouseholdsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHouseholdsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHouseholdsInput, UserUncheckedCreateWithoutHouseholdsInput>
  }

  export type HouseholdUpsertWithoutMembersInput = {
    update: XOR<HouseholdUpdateWithoutMembersInput, HouseholdUncheckedUpdateWithoutMembersInput>
    create: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutMembersInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutMembersInput, HouseholdUncheckedUpdateWithoutMembersInput>
  }

  export type HouseholdUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutHouseholdNestedInput
    tasks?: TaskUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutHouseholdNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type UserUpsertWithoutHouseholdsInput = {
    update: XOR<UserUpdateWithoutHouseholdsInput, UserUncheckedUpdateWithoutHouseholdsInput>
    create: XOR<UserCreateWithoutHouseholdsInput, UserUncheckedCreateWithoutHouseholdsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHouseholdsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHouseholdsInput, UserUncheckedUpdateWithoutHouseholdsInput>
  }

  export type UserUpdateWithoutHouseholdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHouseholdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HouseholdCreateWithoutCategoriesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: HouseholdMemberCreateNestedManyWithoutHouseholdInput
    tasks?: TaskCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: HouseholdMemberUncheckedCreateNestedManyWithoutHouseholdInput
    tasks?: TaskUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutCategoriesInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutCategoriesInput, HouseholdUncheckedCreateWithoutCategoriesInput>
  }

  export type UserCreateWithoutCategoriesInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    households?: HouseholdMemberCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCategoriesInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    households?: HouseholdMemberUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
  }

  export type TaskCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recurrenceRule?: RecurrenceRuleCreateNestedOneWithoutTaskInput
    household?: HouseholdCreateNestedOneWithoutTasksInput
    parentTask?: TaskCreateNestedOneWithoutSubTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentTaskInput
    user?: UserCreateNestedOneWithoutTasksInput
    taskHistory?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    userId?: string | null
    householdId?: string | null
    assignedToId?: string | null
    parentTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recurrenceRule?: RecurrenceRuleUncheckedCreateNestedOneWithoutTaskInput
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput
    taskHistory?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutCategoryInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput>
  }

  export type TaskCreateManyCategoryInputEnvelope = {
    data: TaskCreateManyCategoryInput | TaskCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type HouseholdUpsertWithoutCategoriesInput = {
    update: XOR<HouseholdUpdateWithoutCategoriesInput, HouseholdUncheckedUpdateWithoutCategoriesInput>
    create: XOR<HouseholdCreateWithoutCategoriesInput, HouseholdUncheckedCreateWithoutCategoriesInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutCategoriesInput, HouseholdUncheckedUpdateWithoutCategoriesInput>
  }

  export type HouseholdUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: HouseholdMemberUpdateManyWithoutHouseholdNestedInput
    tasks?: TaskUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: HouseholdMemberUncheckedUpdateManyWithoutHouseholdNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type UserUpsertWithoutCategoriesInput = {
    update: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type UserUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    households?: HouseholdMemberUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    households?: HouseholdMemberUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCategoryInput, TaskUncheckedUpdateWithoutCategoryInput>
    create: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCategoryInput, TaskUncheckedUpdateWithoutCategoryInput>
  }

  export type TaskUpdateManyWithWhereWithoutCategoryInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCategoryInput>
  }

  export type RecurrenceRuleCreateWithoutTaskInput = {
    id?: string
    frequency: string
    interval?: number
    daysOfWeek?: RecurrenceRuleCreatedaysOfWeekInput | string[]
    dayOfMonth?: number | null
    endDate?: Date | string | null
    occurrences?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurrenceRuleUncheckedCreateWithoutTaskInput = {
    id?: string
    frequency: string
    interval?: number
    daysOfWeek?: RecurrenceRuleCreatedaysOfWeekInput | string[]
    dayOfMonth?: number | null
    endDate?: Date | string | null
    occurrences?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurrenceRuleCreateOrConnectWithoutTaskInput = {
    where: RecurrenceRuleWhereUniqueInput
    create: XOR<RecurrenceRuleCreateWithoutTaskInput, RecurrenceRuleUncheckedCreateWithoutTaskInput>
  }

  export type CategoryCreateWithoutTasksInput = {
    id?: string
    name: string
    emoji?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    household?: HouseholdCreateNestedOneWithoutCategoriesInput
    user?: UserCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    emoji?: string | null
    color?: string | null
    userId?: string | null
    householdId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutTasksInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTasksInput, CategoryUncheckedCreateWithoutTasksInput>
  }

  export type HouseholdCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutHouseholdInput
    members?: HouseholdMemberCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutHouseholdInput
    members?: HouseholdMemberUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutTasksInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutTasksInput, HouseholdUncheckedCreateWithoutTasksInput>
  }

  export type TaskCreateWithoutSubTasksInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recurrenceRule?: RecurrenceRuleCreateNestedOneWithoutTaskInput
    category: CategoryCreateNestedOneWithoutTasksInput
    household?: HouseholdCreateNestedOneWithoutTasksInput
    parentTask?: TaskCreateNestedOneWithoutSubTasksInput
    user?: UserCreateNestedOneWithoutTasksInput
    taskHistory?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSubTasksInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    userId?: string | null
    categoryId: string
    householdId?: string | null
    assignedToId?: string | null
    parentTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recurrenceRule?: RecurrenceRuleUncheckedCreateNestedOneWithoutTaskInput
    taskHistory?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSubTasksInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSubTasksInput, TaskUncheckedCreateWithoutSubTasksInput>
  }

  export type TaskCreateWithoutParentTaskInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recurrenceRule?: RecurrenceRuleCreateNestedOneWithoutTaskInput
    category: CategoryCreateNestedOneWithoutTasksInput
    household?: HouseholdCreateNestedOneWithoutTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentTaskInput
    user?: UserCreateNestedOneWithoutTasksInput
    taskHistory?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutParentTaskInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    userId?: string | null
    categoryId: string
    householdId?: string | null
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recurrenceRule?: RecurrenceRuleUncheckedCreateNestedOneWithoutTaskInput
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput
    taskHistory?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutParentTaskInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutParentTaskInput, TaskUncheckedCreateWithoutParentTaskInput>
  }

  export type TaskCreateManyParentTaskInputEnvelope = {
    data: TaskCreateManyParentTaskInput | TaskCreateManyParentTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTasksInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutUserInput
    households?: HouseholdMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    households?: HouseholdMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type TaskHistoryCreateWithoutTaskInput = {
    id?: string
    action: string
    completedBy?: string | null
    completionTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type TaskHistoryUncheckedCreateWithoutTaskInput = {
    id?: string
    action: string
    completedBy?: string | null
    completionTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type TaskHistoryCreateOrConnectWithoutTaskInput = {
    where: TaskHistoryWhereUniqueInput
    create: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput>
  }

  export type TaskHistoryCreateManyTaskInputEnvelope = {
    data: TaskHistoryCreateManyTaskInput | TaskHistoryCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type RecurrenceRuleUpsertWithoutTaskInput = {
    update: XOR<RecurrenceRuleUpdateWithoutTaskInput, RecurrenceRuleUncheckedUpdateWithoutTaskInput>
    create: XOR<RecurrenceRuleCreateWithoutTaskInput, RecurrenceRuleUncheckedCreateWithoutTaskInput>
    where?: RecurrenceRuleWhereInput
  }

  export type RecurrenceRuleUpdateToOneWithWhereWithoutTaskInput = {
    where?: RecurrenceRuleWhereInput
    data: XOR<RecurrenceRuleUpdateWithoutTaskInput, RecurrenceRuleUncheckedUpdateWithoutTaskInput>
  }

  export type RecurrenceRuleUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    daysOfWeek?: RecurrenceRuleUpdatedaysOfWeekInput | string[]
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    occurrences?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurrenceRuleUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    daysOfWeek?: RecurrenceRuleUpdatedaysOfWeekInput | string[]
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    occurrences?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpsertWithoutTasksInput = {
    update: XOR<CategoryUpdateWithoutTasksInput, CategoryUncheckedUpdateWithoutTasksInput>
    create: XOR<CategoryCreateWithoutTasksInput, CategoryUncheckedCreateWithoutTasksInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTasksInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTasksInput, CategoryUncheckedUpdateWithoutTasksInput>
  }

  export type CategoryUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    household?: HouseholdUpdateOneWithoutCategoriesNestedInput
    user?: UserUpdateOneWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    householdId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdUpsertWithoutTasksInput = {
    update: XOR<HouseholdUpdateWithoutTasksInput, HouseholdUncheckedUpdateWithoutTasksInput>
    create: XOR<HouseholdCreateWithoutTasksInput, HouseholdUncheckedCreateWithoutTasksInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutTasksInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutTasksInput, HouseholdUncheckedUpdateWithoutTasksInput>
  }

  export type HouseholdUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutHouseholdNestedInput
    members?: HouseholdMemberUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutHouseholdNestedInput
    members?: HouseholdMemberUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type TaskUpsertWithoutSubTasksInput = {
    update: XOR<TaskUpdateWithoutSubTasksInput, TaskUncheckedUpdateWithoutSubTasksInput>
    create: XOR<TaskCreateWithoutSubTasksInput, TaskUncheckedCreateWithoutSubTasksInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutSubTasksInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutSubTasksInput, TaskUncheckedUpdateWithoutSubTasksInput>
  }

  export type TaskUpdateWithoutSubTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrenceRule?: RecurrenceRuleUpdateOneWithoutTaskNestedInput
    category?: CategoryUpdateOneRequiredWithoutTasksNestedInput
    household?: HouseholdUpdateOneWithoutTasksNestedInput
    parentTask?: TaskUpdateOneWithoutSubTasksNestedInput
    user?: UserUpdateOneWithoutTasksNestedInput
    taskHistory?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSubTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    householdId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrenceRule?: RecurrenceRuleUncheckedUpdateOneWithoutTaskNestedInput
    taskHistory?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutParentTaskInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutParentTaskInput, TaskUncheckedUpdateWithoutParentTaskInput>
    create: XOR<TaskCreateWithoutParentTaskInput, TaskUncheckedCreateWithoutParentTaskInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutParentTaskInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutParentTaskInput, TaskUncheckedUpdateWithoutParentTaskInput>
  }

  export type TaskUpdateManyWithWhereWithoutParentTaskInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutParentTaskInput>
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutUserNestedInput
    households?: HouseholdMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    households?: HouseholdMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskHistoryUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskHistoryWhereUniqueInput
    update: XOR<TaskHistoryUpdateWithoutTaskInput, TaskHistoryUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput>
  }

  export type TaskHistoryUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskHistoryWhereUniqueInput
    data: XOR<TaskHistoryUpdateWithoutTaskInput, TaskHistoryUncheckedUpdateWithoutTaskInput>
  }

  export type TaskHistoryUpdateManyWithWhereWithoutTaskInput = {
    where: TaskHistoryScalarWhereInput
    data: XOR<TaskHistoryUpdateManyMutationInput, TaskHistoryUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskHistoryScalarWhereInput = {
    AND?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
    OR?: TaskHistoryScalarWhereInput[]
    NOT?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
    id?: StringFilter<"TaskHistory"> | string
    taskId?: StringFilter<"TaskHistory"> | string
    action?: StringFilter<"TaskHistory"> | string
    completedBy?: StringNullableFilter<"TaskHistory"> | string | null
    completionTime?: DateTimeNullableFilter<"TaskHistory"> | Date | string | null
    notes?: StringNullableFilter<"TaskHistory"> | string | null
    createdAt?: DateTimeFilter<"TaskHistory"> | Date | string
  }

  export type TaskCreateWithoutRecurrenceRuleInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutTasksInput
    household?: HouseholdCreateNestedOneWithoutTasksInput
    parentTask?: TaskCreateNestedOneWithoutSubTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentTaskInput
    user?: UserCreateNestedOneWithoutTasksInput
    taskHistory?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutRecurrenceRuleInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    userId?: string | null
    categoryId: string
    householdId?: string | null
    assignedToId?: string | null
    parentTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput
    taskHistory?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutRecurrenceRuleInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutRecurrenceRuleInput, TaskUncheckedCreateWithoutRecurrenceRuleInput>
  }

  export type TaskUpsertWithoutRecurrenceRuleInput = {
    update: XOR<TaskUpdateWithoutRecurrenceRuleInput, TaskUncheckedUpdateWithoutRecurrenceRuleInput>
    create: XOR<TaskCreateWithoutRecurrenceRuleInput, TaskUncheckedCreateWithoutRecurrenceRuleInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutRecurrenceRuleInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutRecurrenceRuleInput, TaskUncheckedUpdateWithoutRecurrenceRuleInput>
  }

  export type TaskUpdateWithoutRecurrenceRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutTasksNestedInput
    household?: HouseholdUpdateOneWithoutTasksNestedInput
    parentTask?: TaskUpdateOneWithoutSubTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentTaskNestedInput
    user?: UserUpdateOneWithoutTasksNestedInput
    taskHistory?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutRecurrenceRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    householdId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput
    taskHistory?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateWithoutTaskHistoryInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recurrenceRule?: RecurrenceRuleCreateNestedOneWithoutTaskInput
    category: CategoryCreateNestedOneWithoutTasksInput
    household?: HouseholdCreateNestedOneWithoutTasksInput
    parentTask?: TaskCreateNestedOneWithoutSubTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentTaskInput
    user?: UserCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutTaskHistoryInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    userId?: string | null
    categoryId: string
    householdId?: string | null
    assignedToId?: string | null
    parentTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recurrenceRule?: RecurrenceRuleUncheckedCreateNestedOneWithoutTaskInput
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput
  }

  export type TaskCreateOrConnectWithoutTaskHistoryInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTaskHistoryInput, TaskUncheckedCreateWithoutTaskHistoryInput>
  }

  export type TaskUpsertWithoutTaskHistoryInput = {
    update: XOR<TaskUpdateWithoutTaskHistoryInput, TaskUncheckedUpdateWithoutTaskHistoryInput>
    create: XOR<TaskCreateWithoutTaskHistoryInput, TaskUncheckedCreateWithoutTaskHistoryInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutTaskHistoryInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutTaskHistoryInput, TaskUncheckedUpdateWithoutTaskHistoryInput>
  }

  export type TaskUpdateWithoutTaskHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrenceRule?: RecurrenceRuleUpdateOneWithoutTaskNestedInput
    category?: CategoryUpdateOneRequiredWithoutTasksNestedInput
    household?: HouseholdUpdateOneWithoutTasksNestedInput
    parentTask?: TaskUpdateOneWithoutSubTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentTaskNestedInput
    user?: UserUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutTaskHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    householdId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrenceRule?: RecurrenceRuleUncheckedUpdateOneWithoutTaskNestedInput
    subTasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput
  }

  export type CategoryCreateManyUserInput = {
    id?: string
    name: string
    emoji?: string | null
    color?: string | null
    householdId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HouseholdMemberCreateManyUserInput = {
    id?: string
    householdId: string
    role?: string
    joinedAt?: Date | string
  }

  export type TaskCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    categoryId: string
    householdId?: string | null
    assignedToId?: string | null
    parentTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    household?: HouseholdUpdateOneWithoutCategoriesNestedInput
    tasks?: TaskUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    householdId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    householdId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    household?: HouseholdUpdateOneRequiredWithoutMembersNestedInput
  }

  export type HouseholdMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    householdId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    householdId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrenceRule?: RecurrenceRuleUpdateOneWithoutTaskNestedInput
    category?: CategoryUpdateOneRequiredWithoutTasksNestedInput
    household?: HouseholdUpdateOneWithoutTasksNestedInput
    parentTask?: TaskUpdateOneWithoutSubTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentTaskNestedInput
    taskHistory?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    householdId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrenceRule?: RecurrenceRuleUncheckedUpdateOneWithoutTaskNestedInput
    subTasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput
    taskHistory?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    householdId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyHouseholdInput = {
    id?: string
    name: string
    emoji?: string | null
    color?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HouseholdMemberCreateManyHouseholdInput = {
    id?: string
    userId: string
    role?: string
    joinedAt?: Date | string
  }

  export type TaskCreateManyHouseholdInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    userId?: string | null
    categoryId: string
    assignedToId?: string | null
    parentTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCategoriesNestedInput
    tasks?: TaskUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdMemberUpdateWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHouseholdsNestedInput
  }

  export type HouseholdMemberUncheckedUpdateWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdMemberUncheckedUpdateManyWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrenceRule?: RecurrenceRuleUpdateOneWithoutTaskNestedInput
    category?: CategoryUpdateOneRequiredWithoutTasksNestedInput
    parentTask?: TaskUpdateOneWithoutSubTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentTaskNestedInput
    user?: UserUpdateOneWithoutTasksNestedInput
    taskHistory?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrenceRule?: RecurrenceRuleUncheckedUpdateOneWithoutTaskNestedInput
    subTasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput
    taskHistory?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyCategoryInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    userId?: string | null
    householdId?: string | null
    assignedToId?: string | null
    parentTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrenceRule?: RecurrenceRuleUpdateOneWithoutTaskNestedInput
    household?: HouseholdUpdateOneWithoutTasksNestedInput
    parentTask?: TaskUpdateOneWithoutSubTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentTaskNestedInput
    user?: UserUpdateOneWithoutTasksNestedInput
    taskHistory?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    householdId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrenceRule?: RecurrenceRuleUncheckedUpdateOneWithoutTaskNestedInput
    subTasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput
    taskHistory?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    householdId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyParentTaskInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    completedAt?: Date | string | null
    dueDate: Date | string
    estimatedMinutes?: number | null
    actualMinutes?: number | null
    priority?: string
    userId?: string | null
    categoryId: string
    householdId?: string | null
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskHistoryCreateManyTaskInput = {
    id?: string
    action: string
    completedBy?: string | null
    completionTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type TaskUpdateWithoutParentTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrenceRule?: RecurrenceRuleUpdateOneWithoutTaskNestedInput
    category?: CategoryUpdateOneRequiredWithoutTasksNestedInput
    household?: HouseholdUpdateOneWithoutTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentTaskNestedInput
    user?: UserUpdateOneWithoutTasksNestedInput
    taskHistory?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutParentTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    householdId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrenceRule?: RecurrenceRuleUncheckedUpdateOneWithoutTaskNestedInput
    subTasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput
    taskHistory?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutParentTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    actualMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    householdId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    completedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    completedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    completedBy?: NullableStringFieldUpdateOperationsInput | string | null
    completionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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