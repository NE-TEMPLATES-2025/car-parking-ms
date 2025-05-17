
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
 * Model Vehicles
 * 
 */
export type Vehicles = $Result.DefaultSelection<Prisma.$VehiclesPayload>
/**
 * Model Slots
 * 
 */
export type Slots = $Result.DefaultSelection<Prisma.$SlotsPayload>
/**
 * Model ParkingSession
 * 
 */
export type ParkingSession = $Result.DefaultSelection<Prisma.$ParkingSessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EROLE: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type EROLE = (typeof EROLE)[keyof typeof EROLE]


export const ESlotStatus: {
  AVAILABLE: 'AVAILABLE',
  OCCUPIED: 'OCCUPIED'
};

export type ESlotStatus = (typeof ESlotStatus)[keyof typeof ESlotStatus]


export const ESlotType: {
  BIKE: 'BIKE',
  CAR: 'CAR',
  EV: 'EV'
};

export type ESlotType = (typeof ESlotType)[keyof typeof ESlotType]


export const EParkingStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  COMPLETED: 'COMPLETED'
};

export type EParkingStatus = (typeof EParkingStatus)[keyof typeof EParkingStatus]

}

export type EROLE = $Enums.EROLE

export const EROLE: typeof $Enums.EROLE

export type ESlotStatus = $Enums.ESlotStatus

export const ESlotStatus: typeof $Enums.ESlotStatus

export type ESlotType = $Enums.ESlotType

export const ESlotType: typeof $Enums.ESlotType

export type EParkingStatus = $Enums.EParkingStatus

export const EParkingStatus: typeof $Enums.EParkingStatus

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
   * `prisma.vehicles`: Exposes CRUD operations for the **Vehicles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicles.findMany()
    * ```
    */
  get vehicles(): Prisma.VehiclesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.slots`: Exposes CRUD operations for the **Slots** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Slots
    * const slots = await prisma.slots.findMany()
    * ```
    */
  get slots(): Prisma.SlotsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingSession`: Exposes CRUD operations for the **ParkingSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingSessions
    * const parkingSessions = await prisma.parkingSession.findMany()
    * ```
    */
  get parkingSession(): Prisma.ParkingSessionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Vehicles: 'Vehicles',
    Slots: 'Slots',
    ParkingSession: 'ParkingSession'
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
      modelProps: "user" | "vehicles" | "slots" | "parkingSession"
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
      Vehicles: {
        payload: Prisma.$VehiclesPayload<ExtArgs>
        fields: Prisma.VehiclesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehiclesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehiclesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload>
          }
          findFirst: {
            args: Prisma.VehiclesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehiclesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload>
          }
          findMany: {
            args: Prisma.VehiclesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload>[]
          }
          create: {
            args: Prisma.VehiclesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload>
          }
          createMany: {
            args: Prisma.VehiclesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehiclesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload>[]
          }
          delete: {
            args: Prisma.VehiclesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload>
          }
          update: {
            args: Prisma.VehiclesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload>
          }
          deleteMany: {
            args: Prisma.VehiclesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehiclesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehiclesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload>[]
          }
          upsert: {
            args: Prisma.VehiclesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload>
          }
          aggregate: {
            args: Prisma.VehiclesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicles>
          }
          groupBy: {
            args: Prisma.VehiclesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiclesGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehiclesCountArgs<ExtArgs>
            result: $Utils.Optional<VehiclesCountAggregateOutputType> | number
          }
        }
      }
      Slots: {
        payload: Prisma.$SlotsPayload<ExtArgs>
        fields: Prisma.SlotsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlotsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlotsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload>
          }
          findFirst: {
            args: Prisma.SlotsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlotsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload>
          }
          findMany: {
            args: Prisma.SlotsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload>[]
          }
          create: {
            args: Prisma.SlotsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload>
          }
          createMany: {
            args: Prisma.SlotsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlotsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload>[]
          }
          delete: {
            args: Prisma.SlotsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload>
          }
          update: {
            args: Prisma.SlotsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload>
          }
          deleteMany: {
            args: Prisma.SlotsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlotsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SlotsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload>[]
          }
          upsert: {
            args: Prisma.SlotsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload>
          }
          aggregate: {
            args: Prisma.SlotsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlots>
          }
          groupBy: {
            args: Prisma.SlotsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlotsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlotsCountArgs<ExtArgs>
            result: $Utils.Optional<SlotsCountAggregateOutputType> | number
          }
        }
      }
      ParkingSession: {
        payload: Prisma.$ParkingSessionPayload<ExtArgs>
        fields: Prisma.ParkingSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>
          }
          findFirst: {
            args: Prisma.ParkingSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>
          }
          findMany: {
            args: Prisma.ParkingSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>[]
          }
          create: {
            args: Prisma.ParkingSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>
          }
          createMany: {
            args: Prisma.ParkingSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>[]
          }
          delete: {
            args: Prisma.ParkingSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>
          }
          update: {
            args: Prisma.ParkingSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>
          }
          deleteMany: {
            args: Prisma.ParkingSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>[]
          }
          upsert: {
            args: Prisma.ParkingSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>
          }
          aggregate: {
            args: Prisma.ParkingSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingSession>
          }
          groupBy: {
            args: Prisma.ParkingSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingSessionCountAggregateOutputType> | number
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
    vehicles?: VehiclesOmit
    slots?: SlotsOmit
    parkingSession?: ParkingSessionOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    vehicles: number
    parkingSession: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | UserCountOutputTypeCountVehiclesArgs
    parkingSession?: boolean | UserCountOutputTypeCountParkingSessionArgs
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
  export type UserCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiclesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParkingSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSessionWhereInput
  }


  /**
   * Count Type SlotsCountOutputType
   */

  export type SlotsCountOutputType = {
    parkingSession: number
  }

  export type SlotsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingSession?: boolean | SlotsCountOutputTypeCountParkingSessionArgs
  }

  // Custom InputTypes
  /**
   * SlotsCountOutputType without action
   */
  export type SlotsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotsCountOutputType
     */
    select?: SlotsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SlotsCountOutputType without action
   */
  export type SlotsCountOutputTypeCountParkingSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSessionWhereInput
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
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.EROLE | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.EROLE | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
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
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.EROLE
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
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    parkingSession?: boolean | User$parkingSessionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    parkingSession?: boolean | User$parkingSessionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vehicles: Prisma.$VehiclesPayload<ExtArgs>[]
      parkingSession: Prisma.$ParkingSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      password: string
      role: $Enums.EROLE
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
    vehicles<T extends User$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, User$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parkingSession<T extends User$parkingSessionArgs<ExtArgs> = {}>(args?: Subset<T, User$parkingSessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'EROLE'>
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
   * User.vehicles
   */
  export type User$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicles
     */
    omit?: VehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclesInclude<ExtArgs> | null
    where?: VehiclesWhereInput
    orderBy?: VehiclesOrderByWithRelationInput | VehiclesOrderByWithRelationInput[]
    cursor?: VehiclesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehiclesScalarFieldEnum | VehiclesScalarFieldEnum[]
  }

  /**
   * User.parkingSession
   */
  export type User$parkingSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    where?: ParkingSessionWhereInput
    orderBy?: ParkingSessionOrderByWithRelationInput | ParkingSessionOrderByWithRelationInput[]
    cursor?: ParkingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSessionScalarFieldEnum | ParkingSessionScalarFieldEnum[]
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
   * Model Vehicles
   */

  export type AggregateVehicles = {
    _count: VehiclesCountAggregateOutputType | null
    _min: VehiclesMinAggregateOutputType | null
    _max: VehiclesMaxAggregateOutputType | null
  }

  export type VehiclesMinAggregateOutputType = {
    id: string | null
    plateNumber: string | null
    brand: string | null
    model: string | null
    color: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type VehiclesMaxAggregateOutputType = {
    id: string | null
    plateNumber: string | null
    brand: string | null
    model: string | null
    color: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type VehiclesCountAggregateOutputType = {
    id: number
    plateNumber: number
    brand: number
    model: number
    color: number
    createdAt: number
    userId: number
    _all: number
  }


  export type VehiclesMinAggregateInputType = {
    id?: true
    plateNumber?: true
    brand?: true
    model?: true
    color?: true
    createdAt?: true
    userId?: true
  }

  export type VehiclesMaxAggregateInputType = {
    id?: true
    plateNumber?: true
    brand?: true
    model?: true
    color?: true
    createdAt?: true
    userId?: true
  }

  export type VehiclesCountAggregateInputType = {
    id?: true
    plateNumber?: true
    brand?: true
    model?: true
    color?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type VehiclesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to aggregate.
     */
    where?: VehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehiclesOrderByWithRelationInput | VehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehiclesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiclesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiclesMaxAggregateInputType
  }

  export type GetVehiclesAggregateType<T extends VehiclesAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicles[P]>
      : GetScalarType<T[P], AggregateVehicles[P]>
  }




  export type VehiclesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiclesWhereInput
    orderBy?: VehiclesOrderByWithAggregationInput | VehiclesOrderByWithAggregationInput[]
    by: VehiclesScalarFieldEnum[] | VehiclesScalarFieldEnum
    having?: VehiclesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiclesCountAggregateInputType | true
    _min?: VehiclesMinAggregateInputType
    _max?: VehiclesMaxAggregateInputType
  }

  export type VehiclesGroupByOutputType = {
    id: string
    plateNumber: string
    brand: string
    model: string
    color: string
    createdAt: Date
    userId: string
    _count: VehiclesCountAggregateOutputType | null
    _min: VehiclesMinAggregateOutputType | null
    _max: VehiclesMaxAggregateOutputType | null
  }

  type GetVehiclesGroupByPayload<T extends VehiclesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiclesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiclesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiclesGroupByOutputType[P]>
            : GetScalarType<T[P], VehiclesGroupByOutputType[P]>
        }
      >
    >


  export type VehiclesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    brand?: boolean
    model?: boolean
    color?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicles"]>

  export type VehiclesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    brand?: boolean
    model?: boolean
    color?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicles"]>

  export type VehiclesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    brand?: boolean
    model?: boolean
    color?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicles"]>

  export type VehiclesSelectScalar = {
    id?: boolean
    plateNumber?: boolean
    brand?: boolean
    model?: boolean
    color?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type VehiclesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plateNumber" | "brand" | "model" | "color" | "createdAt" | "userId", ExtArgs["result"]["vehicles"]>
  export type VehiclesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VehiclesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VehiclesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VehiclesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicles"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plateNumber: string
      brand: string
      model: string
      color: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["vehicles"]>
    composites: {}
  }

  type VehiclesGetPayload<S extends boolean | null | undefined | VehiclesDefaultArgs> = $Result.GetResult<Prisma.$VehiclesPayload, S>

  type VehiclesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehiclesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiclesCountAggregateInputType | true
    }

  export interface VehiclesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicles'], meta: { name: 'Vehicles' } }
    /**
     * Find zero or one Vehicles that matches the filter.
     * @param {VehiclesFindUniqueArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehiclesFindUniqueArgs>(args: SelectSubset<T, VehiclesFindUniqueArgs<ExtArgs>>): Prisma__VehiclesClient<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehiclesFindUniqueOrThrowArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehiclesFindUniqueOrThrowArgs>(args: SelectSubset<T, VehiclesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehiclesClient<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesFindFirstArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehiclesFindFirstArgs>(args?: SelectSubset<T, VehiclesFindFirstArgs<ExtArgs>>): Prisma__VehiclesClient<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesFindFirstOrThrowArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehiclesFindFirstOrThrowArgs>(args?: SelectSubset<T, VehiclesFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehiclesClient<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicles.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehiclesWithIdOnly = await prisma.vehicles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehiclesFindManyArgs>(args?: SelectSubset<T, VehiclesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicles.
     * @param {VehiclesCreateArgs} args - Arguments to create a Vehicles.
     * @example
     * // Create one Vehicles
     * const Vehicles = await prisma.vehicles.create({
     *   data: {
     *     // ... data to create a Vehicles
     *   }
     * })
     * 
     */
    create<T extends VehiclesCreateArgs>(args: SelectSubset<T, VehiclesCreateArgs<ExtArgs>>): Prisma__VehiclesClient<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehiclesCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicles = await prisma.vehicles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehiclesCreateManyArgs>(args?: SelectSubset<T, VehiclesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehiclesCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicles = await prisma.vehicles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehiclesWithIdOnly = await prisma.vehicles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehiclesCreateManyAndReturnArgs>(args?: SelectSubset<T, VehiclesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicles.
     * @param {VehiclesDeleteArgs} args - Arguments to delete one Vehicles.
     * @example
     * // Delete one Vehicles
     * const Vehicles = await prisma.vehicles.delete({
     *   where: {
     *     // ... filter to delete one Vehicles
     *   }
     * })
     * 
     */
    delete<T extends VehiclesDeleteArgs>(args: SelectSubset<T, VehiclesDeleteArgs<ExtArgs>>): Prisma__VehiclesClient<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicles.
     * @param {VehiclesUpdateArgs} args - Arguments to update one Vehicles.
     * @example
     * // Update one Vehicles
     * const vehicles = await prisma.vehicles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehiclesUpdateArgs>(args: SelectSubset<T, VehiclesUpdateArgs<ExtArgs>>): Prisma__VehiclesClient<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehiclesDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehiclesDeleteManyArgs>(args?: SelectSubset<T, VehiclesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicles = await prisma.vehicles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehiclesUpdateManyArgs>(args: SelectSubset<T, VehiclesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehiclesUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicles = await prisma.vehicles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehiclesWithIdOnly = await prisma.vehicles.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehiclesUpdateManyAndReturnArgs>(args: SelectSubset<T, VehiclesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicles.
     * @param {VehiclesUpsertArgs} args - Arguments to update or create a Vehicles.
     * @example
     * // Update or create a Vehicles
     * const vehicles = await prisma.vehicles.upsert({
     *   create: {
     *     // ... data to create a Vehicles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicles we want to update
     *   }
     * })
     */
    upsert<T extends VehiclesUpsertArgs>(args: SelectSubset<T, VehiclesUpsertArgs<ExtArgs>>): Prisma__VehiclesClient<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicles.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehiclesCountArgs>(
      args?: Subset<T, VehiclesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiclesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehiclesAggregateArgs>(args: Subset<T, VehiclesAggregateArgs>): Prisma.PrismaPromise<GetVehiclesAggregateType<T>>

    /**
     * Group by Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesGroupByArgs} args - Group by arguments.
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
      T extends VehiclesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehiclesGroupByArgs['orderBy'] }
        : { orderBy?: VehiclesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehiclesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiclesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicles model
   */
  readonly fields: VehiclesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehiclesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Vehicles model
   */
  interface VehiclesFieldRefs {
    readonly id: FieldRef<"Vehicles", 'String'>
    readonly plateNumber: FieldRef<"Vehicles", 'String'>
    readonly brand: FieldRef<"Vehicles", 'String'>
    readonly model: FieldRef<"Vehicles", 'String'>
    readonly color: FieldRef<"Vehicles", 'String'>
    readonly createdAt: FieldRef<"Vehicles", 'DateTime'>
    readonly userId: FieldRef<"Vehicles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vehicles findUnique
   */
  export type VehiclesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicles
     */
    omit?: VehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where: VehiclesWhereUniqueInput
  }

  /**
   * Vehicles findUniqueOrThrow
   */
  export type VehiclesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicles
     */
    omit?: VehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where: VehiclesWhereUniqueInput
  }

  /**
   * Vehicles findFirst
   */
  export type VehiclesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicles
     */
    omit?: VehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehiclesOrderByWithRelationInput | VehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehiclesScalarFieldEnum | VehiclesScalarFieldEnum[]
  }

  /**
   * Vehicles findFirstOrThrow
   */
  export type VehiclesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicles
     */
    omit?: VehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehiclesOrderByWithRelationInput | VehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehiclesScalarFieldEnum | VehiclesScalarFieldEnum[]
  }

  /**
   * Vehicles findMany
   */
  export type VehiclesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicles
     */
    omit?: VehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehiclesOrderByWithRelationInput | VehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehiclesScalarFieldEnum | VehiclesScalarFieldEnum[]
  }

  /**
   * Vehicles create
   */
  export type VehiclesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicles
     */
    omit?: VehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicles.
     */
    data: XOR<VehiclesCreateInput, VehiclesUncheckedCreateInput>
  }

  /**
   * Vehicles createMany
   */
  export type VehiclesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehiclesCreateManyInput | VehiclesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicles createManyAndReturn
   */
  export type VehiclesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicles
     */
    omit?: VehiclesOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehiclesCreateManyInput | VehiclesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicles update
   */
  export type VehiclesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicles
     */
    omit?: VehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicles.
     */
    data: XOR<VehiclesUpdateInput, VehiclesUncheckedUpdateInput>
    /**
     * Choose, which Vehicles to update.
     */
    where: VehiclesWhereUniqueInput
  }

  /**
   * Vehicles updateMany
   */
  export type VehiclesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehiclesUpdateManyMutationInput, VehiclesUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehiclesWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicles updateManyAndReturn
   */
  export type VehiclesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicles
     */
    omit?: VehiclesOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehiclesUpdateManyMutationInput, VehiclesUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehiclesWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicles upsert
   */
  export type VehiclesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicles
     */
    omit?: VehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicles to update in case it exists.
     */
    where: VehiclesWhereUniqueInput
    /**
     * In case the Vehicles found by the `where` argument doesn't exist, create a new Vehicles with this data.
     */
    create: XOR<VehiclesCreateInput, VehiclesUncheckedCreateInput>
    /**
     * In case the Vehicles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehiclesUpdateInput, VehiclesUncheckedUpdateInput>
  }

  /**
   * Vehicles delete
   */
  export type VehiclesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicles
     */
    omit?: VehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * Filter which Vehicles to delete.
     */
    where: VehiclesWhereUniqueInput
  }

  /**
   * Vehicles deleteMany
   */
  export type VehiclesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehiclesWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicles without action
   */
  export type VehiclesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicles
     */
    omit?: VehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclesInclude<ExtArgs> | null
  }


  /**
   * Model Slots
   */

  export type AggregateSlots = {
    _count: SlotsCountAggregateOutputType | null
    _avg: SlotsAvgAggregateOutputType | null
    _sum: SlotsSumAggregateOutputType | null
    _min: SlotsMinAggregateOutputType | null
    _max: SlotsMaxAggregateOutputType | null
  }

  export type SlotsAvgAggregateOutputType = {
    floor: number | null
    unitPrice: number | null
  }

  export type SlotsSumAggregateOutputType = {
    floor: number | null
    unitPrice: number | null
  }

  export type SlotsMinAggregateOutputType = {
    id: string | null
    slotNumber: string | null
    status: $Enums.ESlotStatus | null
    floor: number | null
    type: $Enums.ESlotType | null
    unitPrice: number | null
    createdAt: Date | null
  }

  export type SlotsMaxAggregateOutputType = {
    id: string | null
    slotNumber: string | null
    status: $Enums.ESlotStatus | null
    floor: number | null
    type: $Enums.ESlotType | null
    unitPrice: number | null
    createdAt: Date | null
  }

  export type SlotsCountAggregateOutputType = {
    id: number
    slotNumber: number
    status: number
    floor: number
    type: number
    unitPrice: number
    createdAt: number
    _all: number
  }


  export type SlotsAvgAggregateInputType = {
    floor?: true
    unitPrice?: true
  }

  export type SlotsSumAggregateInputType = {
    floor?: true
    unitPrice?: true
  }

  export type SlotsMinAggregateInputType = {
    id?: true
    slotNumber?: true
    status?: true
    floor?: true
    type?: true
    unitPrice?: true
    createdAt?: true
  }

  export type SlotsMaxAggregateInputType = {
    id?: true
    slotNumber?: true
    status?: true
    floor?: true
    type?: true
    unitPrice?: true
    createdAt?: true
  }

  export type SlotsCountAggregateInputType = {
    id?: true
    slotNumber?: true
    status?: true
    floor?: true
    type?: true
    unitPrice?: true
    createdAt?: true
    _all?: true
  }

  export type SlotsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slots to aggregate.
     */
    where?: SlotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotsOrderByWithRelationInput | SlotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Slots
    **/
    _count?: true | SlotsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlotsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlotsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlotsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlotsMaxAggregateInputType
  }

  export type GetSlotsAggregateType<T extends SlotsAggregateArgs> = {
        [P in keyof T & keyof AggregateSlots]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlots[P]>
      : GetScalarType<T[P], AggregateSlots[P]>
  }




  export type SlotsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotsWhereInput
    orderBy?: SlotsOrderByWithAggregationInput | SlotsOrderByWithAggregationInput[]
    by: SlotsScalarFieldEnum[] | SlotsScalarFieldEnum
    having?: SlotsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlotsCountAggregateInputType | true
    _avg?: SlotsAvgAggregateInputType
    _sum?: SlotsSumAggregateInputType
    _min?: SlotsMinAggregateInputType
    _max?: SlotsMaxAggregateInputType
  }

  export type SlotsGroupByOutputType = {
    id: string
    slotNumber: string
    status: $Enums.ESlotStatus
    floor: number
    type: $Enums.ESlotType
    unitPrice: number
    createdAt: Date
    _count: SlotsCountAggregateOutputType | null
    _avg: SlotsAvgAggregateOutputType | null
    _sum: SlotsSumAggregateOutputType | null
    _min: SlotsMinAggregateOutputType | null
    _max: SlotsMaxAggregateOutputType | null
  }

  type GetSlotsGroupByPayload<T extends SlotsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlotsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlotsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlotsGroupByOutputType[P]>
            : GetScalarType<T[P], SlotsGroupByOutputType[P]>
        }
      >
    >


  export type SlotsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotNumber?: boolean
    status?: boolean
    floor?: boolean
    type?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    parkingSession?: boolean | Slots$parkingSessionArgs<ExtArgs>
    _count?: boolean | SlotsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slots"]>

  export type SlotsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotNumber?: boolean
    status?: boolean
    floor?: boolean
    type?: boolean
    unitPrice?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["slots"]>

  export type SlotsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotNumber?: boolean
    status?: boolean
    floor?: boolean
    type?: boolean
    unitPrice?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["slots"]>

  export type SlotsSelectScalar = {
    id?: boolean
    slotNumber?: boolean
    status?: boolean
    floor?: boolean
    type?: boolean
    unitPrice?: boolean
    createdAt?: boolean
  }

  export type SlotsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slotNumber" | "status" | "floor" | "type" | "unitPrice" | "createdAt", ExtArgs["result"]["slots"]>
  export type SlotsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingSession?: boolean | Slots$parkingSessionArgs<ExtArgs>
    _count?: boolean | SlotsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SlotsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SlotsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SlotsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Slots"
    objects: {
      parkingSession: Prisma.$ParkingSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slotNumber: string
      status: $Enums.ESlotStatus
      floor: number
      type: $Enums.ESlotType
      unitPrice: number
      createdAt: Date
    }, ExtArgs["result"]["slots"]>
    composites: {}
  }

  type SlotsGetPayload<S extends boolean | null | undefined | SlotsDefaultArgs> = $Result.GetResult<Prisma.$SlotsPayload, S>

  type SlotsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SlotsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SlotsCountAggregateInputType | true
    }

  export interface SlotsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Slots'], meta: { name: 'Slots' } }
    /**
     * Find zero or one Slots that matches the filter.
     * @param {SlotsFindUniqueArgs} args - Arguments to find a Slots
     * @example
     * // Get one Slots
     * const slots = await prisma.slots.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlotsFindUniqueArgs>(args: SelectSubset<T, SlotsFindUniqueArgs<ExtArgs>>): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Slots that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SlotsFindUniqueOrThrowArgs} args - Arguments to find a Slots
     * @example
     * // Get one Slots
     * const slots = await prisma.slots.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlotsFindUniqueOrThrowArgs>(args: SelectSubset<T, SlotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Slots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotsFindFirstArgs} args - Arguments to find a Slots
     * @example
     * // Get one Slots
     * const slots = await prisma.slots.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlotsFindFirstArgs>(args?: SelectSubset<T, SlotsFindFirstArgs<ExtArgs>>): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Slots that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotsFindFirstOrThrowArgs} args - Arguments to find a Slots
     * @example
     * // Get one Slots
     * const slots = await prisma.slots.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlotsFindFirstOrThrowArgs>(args?: SelectSubset<T, SlotsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Slots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Slots
     * const slots = await prisma.slots.findMany()
     * 
     * // Get first 10 Slots
     * const slots = await prisma.slots.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slotsWithIdOnly = await prisma.slots.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlotsFindManyArgs>(args?: SelectSubset<T, SlotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Slots.
     * @param {SlotsCreateArgs} args - Arguments to create a Slots.
     * @example
     * // Create one Slots
     * const Slots = await prisma.slots.create({
     *   data: {
     *     // ... data to create a Slots
     *   }
     * })
     * 
     */
    create<T extends SlotsCreateArgs>(args: SelectSubset<T, SlotsCreateArgs<ExtArgs>>): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Slots.
     * @param {SlotsCreateManyArgs} args - Arguments to create many Slots.
     * @example
     * // Create many Slots
     * const slots = await prisma.slots.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlotsCreateManyArgs>(args?: SelectSubset<T, SlotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Slots and returns the data saved in the database.
     * @param {SlotsCreateManyAndReturnArgs} args - Arguments to create many Slots.
     * @example
     * // Create many Slots
     * const slots = await prisma.slots.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Slots and only return the `id`
     * const slotsWithIdOnly = await prisma.slots.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlotsCreateManyAndReturnArgs>(args?: SelectSubset<T, SlotsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Slots.
     * @param {SlotsDeleteArgs} args - Arguments to delete one Slots.
     * @example
     * // Delete one Slots
     * const Slots = await prisma.slots.delete({
     *   where: {
     *     // ... filter to delete one Slots
     *   }
     * })
     * 
     */
    delete<T extends SlotsDeleteArgs>(args: SelectSubset<T, SlotsDeleteArgs<ExtArgs>>): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Slots.
     * @param {SlotsUpdateArgs} args - Arguments to update one Slots.
     * @example
     * // Update one Slots
     * const slots = await prisma.slots.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlotsUpdateArgs>(args: SelectSubset<T, SlotsUpdateArgs<ExtArgs>>): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Slots.
     * @param {SlotsDeleteManyArgs} args - Arguments to filter Slots to delete.
     * @example
     * // Delete a few Slots
     * const { count } = await prisma.slots.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlotsDeleteManyArgs>(args?: SelectSubset<T, SlotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Slots
     * const slots = await prisma.slots.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlotsUpdateManyArgs>(args: SelectSubset<T, SlotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Slots and returns the data updated in the database.
     * @param {SlotsUpdateManyAndReturnArgs} args - Arguments to update many Slots.
     * @example
     * // Update many Slots
     * const slots = await prisma.slots.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Slots and only return the `id`
     * const slotsWithIdOnly = await prisma.slots.updateManyAndReturn({
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
    updateManyAndReturn<T extends SlotsUpdateManyAndReturnArgs>(args: SelectSubset<T, SlotsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Slots.
     * @param {SlotsUpsertArgs} args - Arguments to update or create a Slots.
     * @example
     * // Update or create a Slots
     * const slots = await prisma.slots.upsert({
     *   create: {
     *     // ... data to create a Slots
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Slots we want to update
     *   }
     * })
     */
    upsert<T extends SlotsUpsertArgs>(args: SelectSubset<T, SlotsUpsertArgs<ExtArgs>>): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotsCountArgs} args - Arguments to filter Slots to count.
     * @example
     * // Count the number of Slots
     * const count = await prisma.slots.count({
     *   where: {
     *     // ... the filter for the Slots we want to count
     *   }
     * })
    **/
    count<T extends SlotsCountArgs>(
      args?: Subset<T, SlotsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlotsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SlotsAggregateArgs>(args: Subset<T, SlotsAggregateArgs>): Prisma.PrismaPromise<GetSlotsAggregateType<T>>

    /**
     * Group by Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotsGroupByArgs} args - Group by arguments.
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
      T extends SlotsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlotsGroupByArgs['orderBy'] }
        : { orderBy?: SlotsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SlotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Slots model
   */
  readonly fields: SlotsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Slots.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlotsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkingSession<T extends Slots$parkingSessionArgs<ExtArgs> = {}>(args?: Subset<T, Slots$parkingSessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Slots model
   */
  interface SlotsFieldRefs {
    readonly id: FieldRef<"Slots", 'String'>
    readonly slotNumber: FieldRef<"Slots", 'String'>
    readonly status: FieldRef<"Slots", 'ESlotStatus'>
    readonly floor: FieldRef<"Slots", 'Int'>
    readonly type: FieldRef<"Slots", 'ESlotType'>
    readonly unitPrice: FieldRef<"Slots", 'Int'>
    readonly createdAt: FieldRef<"Slots", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Slots findUnique
   */
  export type SlotsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slots
     */
    omit?: SlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * Filter, which Slots to fetch.
     */
    where: SlotsWhereUniqueInput
  }

  /**
   * Slots findUniqueOrThrow
   */
  export type SlotsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slots
     */
    omit?: SlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * Filter, which Slots to fetch.
     */
    where: SlotsWhereUniqueInput
  }

  /**
   * Slots findFirst
   */
  export type SlotsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slots
     */
    omit?: SlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * Filter, which Slots to fetch.
     */
    where?: SlotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotsOrderByWithRelationInput | SlotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slots.
     */
    cursor?: SlotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slots.
     */
    distinct?: SlotsScalarFieldEnum | SlotsScalarFieldEnum[]
  }

  /**
   * Slots findFirstOrThrow
   */
  export type SlotsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slots
     */
    omit?: SlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * Filter, which Slots to fetch.
     */
    where?: SlotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotsOrderByWithRelationInput | SlotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slots.
     */
    cursor?: SlotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slots.
     */
    distinct?: SlotsScalarFieldEnum | SlotsScalarFieldEnum[]
  }

  /**
   * Slots findMany
   */
  export type SlotsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slots
     */
    omit?: SlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * Filter, which Slots to fetch.
     */
    where?: SlotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotsOrderByWithRelationInput | SlotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Slots.
     */
    cursor?: SlotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    distinct?: SlotsScalarFieldEnum | SlotsScalarFieldEnum[]
  }

  /**
   * Slots create
   */
  export type SlotsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slots
     */
    omit?: SlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * The data needed to create a Slots.
     */
    data: XOR<SlotsCreateInput, SlotsUncheckedCreateInput>
  }

  /**
   * Slots createMany
   */
  export type SlotsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Slots.
     */
    data: SlotsCreateManyInput | SlotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Slots createManyAndReturn
   */
  export type SlotsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Slots
     */
    omit?: SlotsOmit<ExtArgs> | null
    /**
     * The data used to create many Slots.
     */
    data: SlotsCreateManyInput | SlotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Slots update
   */
  export type SlotsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slots
     */
    omit?: SlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * The data needed to update a Slots.
     */
    data: XOR<SlotsUpdateInput, SlotsUncheckedUpdateInput>
    /**
     * Choose, which Slots to update.
     */
    where: SlotsWhereUniqueInput
  }

  /**
   * Slots updateMany
   */
  export type SlotsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Slots.
     */
    data: XOR<SlotsUpdateManyMutationInput, SlotsUncheckedUpdateManyInput>
    /**
     * Filter which Slots to update
     */
    where?: SlotsWhereInput
    /**
     * Limit how many Slots to update.
     */
    limit?: number
  }

  /**
   * Slots updateManyAndReturn
   */
  export type SlotsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Slots
     */
    omit?: SlotsOmit<ExtArgs> | null
    /**
     * The data used to update Slots.
     */
    data: XOR<SlotsUpdateManyMutationInput, SlotsUncheckedUpdateManyInput>
    /**
     * Filter which Slots to update
     */
    where?: SlotsWhereInput
    /**
     * Limit how many Slots to update.
     */
    limit?: number
  }

  /**
   * Slots upsert
   */
  export type SlotsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slots
     */
    omit?: SlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * The filter to search for the Slots to update in case it exists.
     */
    where: SlotsWhereUniqueInput
    /**
     * In case the Slots found by the `where` argument doesn't exist, create a new Slots with this data.
     */
    create: XOR<SlotsCreateInput, SlotsUncheckedCreateInput>
    /**
     * In case the Slots was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlotsUpdateInput, SlotsUncheckedUpdateInput>
  }

  /**
   * Slots delete
   */
  export type SlotsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slots
     */
    omit?: SlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * Filter which Slots to delete.
     */
    where: SlotsWhereUniqueInput
  }

  /**
   * Slots deleteMany
   */
  export type SlotsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slots to delete
     */
    where?: SlotsWhereInput
    /**
     * Limit how many Slots to delete.
     */
    limit?: number
  }

  /**
   * Slots.parkingSession
   */
  export type Slots$parkingSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    where?: ParkingSessionWhereInput
    orderBy?: ParkingSessionOrderByWithRelationInput | ParkingSessionOrderByWithRelationInput[]
    cursor?: ParkingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSessionScalarFieldEnum | ParkingSessionScalarFieldEnum[]
  }

  /**
   * Slots without action
   */
  export type SlotsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slots
     */
    omit?: SlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotsInclude<ExtArgs> | null
  }


  /**
   * Model ParkingSession
   */

  export type AggregateParkingSession = {
    _count: ParkingSessionCountAggregateOutputType | null
    _avg: ParkingSessionAvgAggregateOutputType | null
    _sum: ParkingSessionSumAggregateOutputType | null
    _min: ParkingSessionMinAggregateOutputType | null
    _max: ParkingSessionMaxAggregateOutputType | null
  }

  export type ParkingSessionAvgAggregateOutputType = {
    id: number | null
    duration: number | null
    totalFee: number | null
  }

  export type ParkingSessionSumAggregateOutputType = {
    id: number | null
    duration: number | null
    totalFee: number | null
  }

  export type ParkingSessionMinAggregateOutputType = {
    id: number | null
    slotId: string | null
    userId: string | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    duration: number | null
    totalFee: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.EParkingStatus | null
  }

  export type ParkingSessionMaxAggregateOutputType = {
    id: number | null
    slotId: string | null
    userId: string | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    duration: number | null
    totalFee: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.EParkingStatus | null
  }

  export type ParkingSessionCountAggregateOutputType = {
    id: number
    slotId: number
    userId: number
    date: number
    startTime: number
    endTime: number
    duration: number
    totalFee: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type ParkingSessionAvgAggregateInputType = {
    id?: true
    duration?: true
    totalFee?: true
  }

  export type ParkingSessionSumAggregateInputType = {
    id?: true
    duration?: true
    totalFee?: true
  }

  export type ParkingSessionMinAggregateInputType = {
    id?: true
    slotId?: true
    userId?: true
    date?: true
    startTime?: true
    endTime?: true
    duration?: true
    totalFee?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type ParkingSessionMaxAggregateInputType = {
    id?: true
    slotId?: true
    userId?: true
    date?: true
    startTime?: true
    endTime?: true
    duration?: true
    totalFee?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type ParkingSessionCountAggregateInputType = {
    id?: true
    slotId?: true
    userId?: true
    date?: true
    startTime?: true
    endTime?: true
    duration?: true
    totalFee?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type ParkingSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSession to aggregate.
     */
    where?: ParkingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSessions to fetch.
     */
    orderBy?: ParkingSessionOrderByWithRelationInput | ParkingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingSessions
    **/
    _count?: true | ParkingSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingSessionMaxAggregateInputType
  }

  export type GetParkingSessionAggregateType<T extends ParkingSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingSession[P]>
      : GetScalarType<T[P], AggregateParkingSession[P]>
  }




  export type ParkingSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSessionWhereInput
    orderBy?: ParkingSessionOrderByWithAggregationInput | ParkingSessionOrderByWithAggregationInput[]
    by: ParkingSessionScalarFieldEnum[] | ParkingSessionScalarFieldEnum
    having?: ParkingSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingSessionCountAggregateInputType | true
    _avg?: ParkingSessionAvgAggregateInputType
    _sum?: ParkingSessionSumAggregateInputType
    _min?: ParkingSessionMinAggregateInputType
    _max?: ParkingSessionMaxAggregateInputType
  }

  export type ParkingSessionGroupByOutputType = {
    id: number
    slotId: string
    userId: string
    date: Date
    startTime: string
    endTime: string
    duration: number
    totalFee: number
    createdAt: Date
    updatedAt: Date
    status: $Enums.EParkingStatus
    _count: ParkingSessionCountAggregateOutputType | null
    _avg: ParkingSessionAvgAggregateOutputType | null
    _sum: ParkingSessionSumAggregateOutputType | null
    _min: ParkingSessionMinAggregateOutputType | null
    _max: ParkingSessionMaxAggregateOutputType | null
  }

  type GetParkingSessionGroupByPayload<T extends ParkingSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingSessionGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotId?: boolean
    userId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    totalFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    slot?: boolean | SlotsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSession"]>

  export type ParkingSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotId?: boolean
    userId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    totalFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    slot?: boolean | SlotsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSession"]>

  export type ParkingSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotId?: boolean
    userId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    totalFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    slot?: boolean | SlotsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSession"]>

  export type ParkingSessionSelectScalar = {
    id?: boolean
    slotId?: boolean
    userId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    totalFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type ParkingSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slotId" | "userId" | "date" | "startTime" | "endTime" | "duration" | "totalFee" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["parkingSession"]>
  export type ParkingSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slot?: boolean | SlotsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParkingSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slot?: boolean | SlotsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParkingSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slot?: boolean | SlotsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParkingSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingSession"
    objects: {
      slot: Prisma.$SlotsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slotId: string
      userId: string
      date: Date
      startTime: string
      endTime: string
      duration: number
      totalFee: number
      createdAt: Date
      updatedAt: Date
      status: $Enums.EParkingStatus
    }, ExtArgs["result"]["parkingSession"]>
    composites: {}
  }

  type ParkingSessionGetPayload<S extends boolean | null | undefined | ParkingSessionDefaultArgs> = $Result.GetResult<Prisma.$ParkingSessionPayload, S>

  type ParkingSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingSessionCountAggregateInputType | true
    }

  export interface ParkingSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingSession'], meta: { name: 'ParkingSession' } }
    /**
     * Find zero or one ParkingSession that matches the filter.
     * @param {ParkingSessionFindUniqueArgs} args - Arguments to find a ParkingSession
     * @example
     * // Get one ParkingSession
     * const parkingSession = await prisma.parkingSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingSessionFindUniqueArgs>(args: SelectSubset<T, ParkingSessionFindUniqueArgs<ExtArgs>>): Prisma__ParkingSessionClient<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingSessionFindUniqueOrThrowArgs} args - Arguments to find a ParkingSession
     * @example
     * // Get one ParkingSession
     * const parkingSession = await prisma.parkingSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingSessionClient<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSessionFindFirstArgs} args - Arguments to find a ParkingSession
     * @example
     * // Get one ParkingSession
     * const parkingSession = await prisma.parkingSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingSessionFindFirstArgs>(args?: SelectSubset<T, ParkingSessionFindFirstArgs<ExtArgs>>): Prisma__ParkingSessionClient<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSessionFindFirstOrThrowArgs} args - Arguments to find a ParkingSession
     * @example
     * // Get one ParkingSession
     * const parkingSession = await prisma.parkingSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingSessionClient<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingSessions
     * const parkingSessions = await prisma.parkingSession.findMany()
     * 
     * // Get first 10 ParkingSessions
     * const parkingSessions = await prisma.parkingSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingSessionWithIdOnly = await prisma.parkingSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingSessionFindManyArgs>(args?: SelectSubset<T, ParkingSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingSession.
     * @param {ParkingSessionCreateArgs} args - Arguments to create a ParkingSession.
     * @example
     * // Create one ParkingSession
     * const ParkingSession = await prisma.parkingSession.create({
     *   data: {
     *     // ... data to create a ParkingSession
     *   }
     * })
     * 
     */
    create<T extends ParkingSessionCreateArgs>(args: SelectSubset<T, ParkingSessionCreateArgs<ExtArgs>>): Prisma__ParkingSessionClient<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingSessions.
     * @param {ParkingSessionCreateManyArgs} args - Arguments to create many ParkingSessions.
     * @example
     * // Create many ParkingSessions
     * const parkingSession = await prisma.parkingSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingSessionCreateManyArgs>(args?: SelectSubset<T, ParkingSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingSessions and returns the data saved in the database.
     * @param {ParkingSessionCreateManyAndReturnArgs} args - Arguments to create many ParkingSessions.
     * @example
     * // Create many ParkingSessions
     * const parkingSession = await prisma.parkingSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingSessions and only return the `id`
     * const parkingSessionWithIdOnly = await prisma.parkingSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingSession.
     * @param {ParkingSessionDeleteArgs} args - Arguments to delete one ParkingSession.
     * @example
     * // Delete one ParkingSession
     * const ParkingSession = await prisma.parkingSession.delete({
     *   where: {
     *     // ... filter to delete one ParkingSession
     *   }
     * })
     * 
     */
    delete<T extends ParkingSessionDeleteArgs>(args: SelectSubset<T, ParkingSessionDeleteArgs<ExtArgs>>): Prisma__ParkingSessionClient<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingSession.
     * @param {ParkingSessionUpdateArgs} args - Arguments to update one ParkingSession.
     * @example
     * // Update one ParkingSession
     * const parkingSession = await prisma.parkingSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingSessionUpdateArgs>(args: SelectSubset<T, ParkingSessionUpdateArgs<ExtArgs>>): Prisma__ParkingSessionClient<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingSessions.
     * @param {ParkingSessionDeleteManyArgs} args - Arguments to filter ParkingSessions to delete.
     * @example
     * // Delete a few ParkingSessions
     * const { count } = await prisma.parkingSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingSessionDeleteManyArgs>(args?: SelectSubset<T, ParkingSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingSessions
     * const parkingSession = await prisma.parkingSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingSessionUpdateManyArgs>(args: SelectSubset<T, ParkingSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSessions and returns the data updated in the database.
     * @param {ParkingSessionUpdateManyAndReturnArgs} args - Arguments to update many ParkingSessions.
     * @example
     * // Update many ParkingSessions
     * const parkingSession = await prisma.parkingSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingSessions and only return the `id`
     * const parkingSessionWithIdOnly = await prisma.parkingSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParkingSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingSession.
     * @param {ParkingSessionUpsertArgs} args - Arguments to update or create a ParkingSession.
     * @example
     * // Update or create a ParkingSession
     * const parkingSession = await prisma.parkingSession.upsert({
     *   create: {
     *     // ... data to create a ParkingSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingSession we want to update
     *   }
     * })
     */
    upsert<T extends ParkingSessionUpsertArgs>(args: SelectSubset<T, ParkingSessionUpsertArgs<ExtArgs>>): Prisma__ParkingSessionClient<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSessionCountArgs} args - Arguments to filter ParkingSessions to count.
     * @example
     * // Count the number of ParkingSessions
     * const count = await prisma.parkingSession.count({
     *   where: {
     *     // ... the filter for the ParkingSessions we want to count
     *   }
     * })
    **/
    count<T extends ParkingSessionCountArgs>(
      args?: Subset<T, ParkingSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParkingSessionAggregateArgs>(args: Subset<T, ParkingSessionAggregateArgs>): Prisma.PrismaPromise<GetParkingSessionAggregateType<T>>

    /**
     * Group by ParkingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSessionGroupByArgs} args - Group by arguments.
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
      T extends ParkingSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingSessionGroupByArgs['orderBy'] }
        : { orderBy?: ParkingSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParkingSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingSession model
   */
  readonly fields: ParkingSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    slot<T extends SlotsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SlotsDefaultArgs<ExtArgs>>): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ParkingSession model
   */
  interface ParkingSessionFieldRefs {
    readonly id: FieldRef<"ParkingSession", 'Int'>
    readonly slotId: FieldRef<"ParkingSession", 'String'>
    readonly userId: FieldRef<"ParkingSession", 'String'>
    readonly date: FieldRef<"ParkingSession", 'DateTime'>
    readonly startTime: FieldRef<"ParkingSession", 'String'>
    readonly endTime: FieldRef<"ParkingSession", 'String'>
    readonly duration: FieldRef<"ParkingSession", 'Int'>
    readonly totalFee: FieldRef<"ParkingSession", 'Float'>
    readonly createdAt: FieldRef<"ParkingSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingSession", 'DateTime'>
    readonly status: FieldRef<"ParkingSession", 'EParkingStatus'>
  }
    

  // Custom InputTypes
  /**
   * ParkingSession findUnique
   */
  export type ParkingSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSession to fetch.
     */
    where: ParkingSessionWhereUniqueInput
  }

  /**
   * ParkingSession findUniqueOrThrow
   */
  export type ParkingSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSession to fetch.
     */
    where: ParkingSessionWhereUniqueInput
  }

  /**
   * ParkingSession findFirst
   */
  export type ParkingSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSession to fetch.
     */
    where?: ParkingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSessions to fetch.
     */
    orderBy?: ParkingSessionOrderByWithRelationInput | ParkingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSessions.
     */
    cursor?: ParkingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSessions.
     */
    distinct?: ParkingSessionScalarFieldEnum | ParkingSessionScalarFieldEnum[]
  }

  /**
   * ParkingSession findFirstOrThrow
   */
  export type ParkingSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSession to fetch.
     */
    where?: ParkingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSessions to fetch.
     */
    orderBy?: ParkingSessionOrderByWithRelationInput | ParkingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSessions.
     */
    cursor?: ParkingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSessions.
     */
    distinct?: ParkingSessionScalarFieldEnum | ParkingSessionScalarFieldEnum[]
  }

  /**
   * ParkingSession findMany
   */
  export type ParkingSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSessions to fetch.
     */
    where?: ParkingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSessions to fetch.
     */
    orderBy?: ParkingSessionOrderByWithRelationInput | ParkingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingSessions.
     */
    cursor?: ParkingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSessions.
     */
    skip?: number
    distinct?: ParkingSessionScalarFieldEnum | ParkingSessionScalarFieldEnum[]
  }

  /**
   * ParkingSession create
   */
  export type ParkingSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingSession.
     */
    data: XOR<ParkingSessionCreateInput, ParkingSessionUncheckedCreateInput>
  }

  /**
   * ParkingSession createMany
   */
  export type ParkingSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingSessions.
     */
    data: ParkingSessionCreateManyInput | ParkingSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingSession createManyAndReturn
   */
  export type ParkingSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingSessions.
     */
    data: ParkingSessionCreateManyInput | ParkingSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSession update
   */
  export type ParkingSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingSession.
     */
    data: XOR<ParkingSessionUpdateInput, ParkingSessionUncheckedUpdateInput>
    /**
     * Choose, which ParkingSession to update.
     */
    where: ParkingSessionWhereUniqueInput
  }

  /**
   * ParkingSession updateMany
   */
  export type ParkingSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingSessions.
     */
    data: XOR<ParkingSessionUpdateManyMutationInput, ParkingSessionUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSessions to update
     */
    where?: ParkingSessionWhereInput
    /**
     * Limit how many ParkingSessions to update.
     */
    limit?: number
  }

  /**
   * ParkingSession updateManyAndReturn
   */
  export type ParkingSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * The data used to update ParkingSessions.
     */
    data: XOR<ParkingSessionUpdateManyMutationInput, ParkingSessionUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSessions to update
     */
    where?: ParkingSessionWhereInput
    /**
     * Limit how many ParkingSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSession upsert
   */
  export type ParkingSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingSession to update in case it exists.
     */
    where: ParkingSessionWhereUniqueInput
    /**
     * In case the ParkingSession found by the `where` argument doesn't exist, create a new ParkingSession with this data.
     */
    create: XOR<ParkingSessionCreateInput, ParkingSessionUncheckedCreateInput>
    /**
     * In case the ParkingSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingSessionUpdateInput, ParkingSessionUncheckedUpdateInput>
  }

  /**
   * ParkingSession delete
   */
  export type ParkingSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * Filter which ParkingSession to delete.
     */
    where: ParkingSessionWhereUniqueInput
  }

  /**
   * ParkingSession deleteMany
   */
  export type ParkingSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSessions to delete
     */
    where?: ParkingSessionWhereInput
    /**
     * Limit how many ParkingSessions to delete.
     */
    limit?: number
  }

  /**
   * ParkingSession without action
   */
  export type ParkingSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
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
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehiclesScalarFieldEnum: {
    id: 'id',
    plateNumber: 'plateNumber',
    brand: 'brand',
    model: 'model',
    color: 'color',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type VehiclesScalarFieldEnum = (typeof VehiclesScalarFieldEnum)[keyof typeof VehiclesScalarFieldEnum]


  export const SlotsScalarFieldEnum: {
    id: 'id',
    slotNumber: 'slotNumber',
    status: 'status',
    floor: 'floor',
    type: 'type',
    unitPrice: 'unitPrice',
    createdAt: 'createdAt'
  };

  export type SlotsScalarFieldEnum = (typeof SlotsScalarFieldEnum)[keyof typeof SlotsScalarFieldEnum]


  export const ParkingSessionScalarFieldEnum: {
    id: 'id',
    slotId: 'slotId',
    userId: 'userId',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    duration: 'duration',
    totalFee: 'totalFee',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type ParkingSessionScalarFieldEnum = (typeof ParkingSessionScalarFieldEnum)[keyof typeof ParkingSessionScalarFieldEnum]


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
   * Reference to a field of type 'EROLE'
   */
  export type EnumEROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EROLE'>
    


  /**
   * Reference to a field of type 'EROLE[]'
   */
  export type ListEnumEROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EROLE[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ESlotStatus'
   */
  export type EnumESlotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ESlotStatus'>
    


  /**
   * Reference to a field of type 'ESlotStatus[]'
   */
  export type ListEnumESlotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ESlotStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ESlotType'
   */
  export type EnumESlotTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ESlotType'>
    


  /**
   * Reference to a field of type 'ESlotType[]'
   */
  export type ListEnumESlotTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ESlotType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'EParkingStatus'
   */
  export type EnumEParkingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EParkingStatus'>
    


  /**
   * Reference to a field of type 'EParkingStatus[]'
   */
  export type ListEnumEParkingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EParkingStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumEROLEFilter<"User"> | $Enums.EROLE
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vehicles?: VehiclesListRelationFilter
    parkingSession?: ParkingSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicles?: VehiclesOrderByRelationAggregateInput
    parkingSession?: ParkingSessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumEROLEFilter<"User"> | $Enums.EROLE
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vehicles?: VehiclesListRelationFilter
    parkingSession?: ParkingSessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumEROLEWithAggregatesFilter<"User"> | $Enums.EROLE
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VehiclesWhereInput = {
    AND?: VehiclesWhereInput | VehiclesWhereInput[]
    OR?: VehiclesWhereInput[]
    NOT?: VehiclesWhereInput | VehiclesWhereInput[]
    id?: StringFilter<"Vehicles"> | string
    plateNumber?: StringFilter<"Vehicles"> | string
    brand?: StringFilter<"Vehicles"> | string
    model?: StringFilter<"Vehicles"> | string
    color?: StringFilter<"Vehicles"> | string
    createdAt?: DateTimeFilter<"Vehicles"> | Date | string
    userId?: StringFilter<"Vehicles"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VehiclesOrderByWithRelationInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VehiclesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plateNumber?: string
    AND?: VehiclesWhereInput | VehiclesWhereInput[]
    OR?: VehiclesWhereInput[]
    NOT?: VehiclesWhereInput | VehiclesWhereInput[]
    brand?: StringFilter<"Vehicles"> | string
    model?: StringFilter<"Vehicles"> | string
    color?: StringFilter<"Vehicles"> | string
    createdAt?: DateTimeFilter<"Vehicles"> | Date | string
    userId?: StringFilter<"Vehicles"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "plateNumber">

  export type VehiclesOrderByWithAggregationInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: VehiclesCountOrderByAggregateInput
    _max?: VehiclesMaxOrderByAggregateInput
    _min?: VehiclesMinOrderByAggregateInput
  }

  export type VehiclesScalarWhereWithAggregatesInput = {
    AND?: VehiclesScalarWhereWithAggregatesInput | VehiclesScalarWhereWithAggregatesInput[]
    OR?: VehiclesScalarWhereWithAggregatesInput[]
    NOT?: VehiclesScalarWhereWithAggregatesInput | VehiclesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicles"> | string
    plateNumber?: StringWithAggregatesFilter<"Vehicles"> | string
    brand?: StringWithAggregatesFilter<"Vehicles"> | string
    model?: StringWithAggregatesFilter<"Vehicles"> | string
    color?: StringWithAggregatesFilter<"Vehicles"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vehicles"> | Date | string
    userId?: StringWithAggregatesFilter<"Vehicles"> | string
  }

  export type SlotsWhereInput = {
    AND?: SlotsWhereInput | SlotsWhereInput[]
    OR?: SlotsWhereInput[]
    NOT?: SlotsWhereInput | SlotsWhereInput[]
    id?: StringFilter<"Slots"> | string
    slotNumber?: StringFilter<"Slots"> | string
    status?: EnumESlotStatusFilter<"Slots"> | $Enums.ESlotStatus
    floor?: IntFilter<"Slots"> | number
    type?: EnumESlotTypeFilter<"Slots"> | $Enums.ESlotType
    unitPrice?: IntFilter<"Slots"> | number
    createdAt?: DateTimeFilter<"Slots"> | Date | string
    parkingSession?: ParkingSessionListRelationFilter
  }

  export type SlotsOrderByWithRelationInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    status?: SortOrder
    floor?: SortOrder
    type?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    parkingSession?: ParkingSessionOrderByRelationAggregateInput
  }

  export type SlotsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slotNumber?: string
    AND?: SlotsWhereInput | SlotsWhereInput[]
    OR?: SlotsWhereInput[]
    NOT?: SlotsWhereInput | SlotsWhereInput[]
    status?: EnumESlotStatusFilter<"Slots"> | $Enums.ESlotStatus
    floor?: IntFilter<"Slots"> | number
    type?: EnumESlotTypeFilter<"Slots"> | $Enums.ESlotType
    unitPrice?: IntFilter<"Slots"> | number
    createdAt?: DateTimeFilter<"Slots"> | Date | string
    parkingSession?: ParkingSessionListRelationFilter
  }, "id" | "slotNumber">

  export type SlotsOrderByWithAggregationInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    status?: SortOrder
    floor?: SortOrder
    type?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    _count?: SlotsCountOrderByAggregateInput
    _avg?: SlotsAvgOrderByAggregateInput
    _max?: SlotsMaxOrderByAggregateInput
    _min?: SlotsMinOrderByAggregateInput
    _sum?: SlotsSumOrderByAggregateInput
  }

  export type SlotsScalarWhereWithAggregatesInput = {
    AND?: SlotsScalarWhereWithAggregatesInput | SlotsScalarWhereWithAggregatesInput[]
    OR?: SlotsScalarWhereWithAggregatesInput[]
    NOT?: SlotsScalarWhereWithAggregatesInput | SlotsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Slots"> | string
    slotNumber?: StringWithAggregatesFilter<"Slots"> | string
    status?: EnumESlotStatusWithAggregatesFilter<"Slots"> | $Enums.ESlotStatus
    floor?: IntWithAggregatesFilter<"Slots"> | number
    type?: EnumESlotTypeWithAggregatesFilter<"Slots"> | $Enums.ESlotType
    unitPrice?: IntWithAggregatesFilter<"Slots"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Slots"> | Date | string
  }

  export type ParkingSessionWhereInput = {
    AND?: ParkingSessionWhereInput | ParkingSessionWhereInput[]
    OR?: ParkingSessionWhereInput[]
    NOT?: ParkingSessionWhereInput | ParkingSessionWhereInput[]
    id?: IntFilter<"ParkingSession"> | number
    slotId?: StringFilter<"ParkingSession"> | string
    userId?: StringFilter<"ParkingSession"> | string
    date?: DateTimeFilter<"ParkingSession"> | Date | string
    startTime?: StringFilter<"ParkingSession"> | string
    endTime?: StringFilter<"ParkingSession"> | string
    duration?: IntFilter<"ParkingSession"> | number
    totalFee?: FloatFilter<"ParkingSession"> | number
    createdAt?: DateTimeFilter<"ParkingSession"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSession"> | Date | string
    status?: EnumEParkingStatusFilter<"ParkingSession"> | $Enums.EParkingStatus
    slot?: XOR<SlotsScalarRelationFilter, SlotsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ParkingSessionOrderByWithRelationInput = {
    id?: SortOrder
    slotId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    totalFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    slot?: SlotsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ParkingSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParkingSessionWhereInput | ParkingSessionWhereInput[]
    OR?: ParkingSessionWhereInput[]
    NOT?: ParkingSessionWhereInput | ParkingSessionWhereInput[]
    slotId?: StringFilter<"ParkingSession"> | string
    userId?: StringFilter<"ParkingSession"> | string
    date?: DateTimeFilter<"ParkingSession"> | Date | string
    startTime?: StringFilter<"ParkingSession"> | string
    endTime?: StringFilter<"ParkingSession"> | string
    duration?: IntFilter<"ParkingSession"> | number
    totalFee?: FloatFilter<"ParkingSession"> | number
    createdAt?: DateTimeFilter<"ParkingSession"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSession"> | Date | string
    status?: EnumEParkingStatusFilter<"ParkingSession"> | $Enums.EParkingStatus
    slot?: XOR<SlotsScalarRelationFilter, SlotsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ParkingSessionOrderByWithAggregationInput = {
    id?: SortOrder
    slotId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    totalFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: ParkingSessionCountOrderByAggregateInput
    _avg?: ParkingSessionAvgOrderByAggregateInput
    _max?: ParkingSessionMaxOrderByAggregateInput
    _min?: ParkingSessionMinOrderByAggregateInput
    _sum?: ParkingSessionSumOrderByAggregateInput
  }

  export type ParkingSessionScalarWhereWithAggregatesInput = {
    AND?: ParkingSessionScalarWhereWithAggregatesInput | ParkingSessionScalarWhereWithAggregatesInput[]
    OR?: ParkingSessionScalarWhereWithAggregatesInput[]
    NOT?: ParkingSessionScalarWhereWithAggregatesInput | ParkingSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParkingSession"> | number
    slotId?: StringWithAggregatesFilter<"ParkingSession"> | string
    userId?: StringWithAggregatesFilter<"ParkingSession"> | string
    date?: DateTimeWithAggregatesFilter<"ParkingSession"> | Date | string
    startTime?: StringWithAggregatesFilter<"ParkingSession"> | string
    endTime?: StringWithAggregatesFilter<"ParkingSession"> | string
    duration?: IntWithAggregatesFilter<"ParkingSession"> | number
    totalFee?: FloatWithAggregatesFilter<"ParkingSession"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ParkingSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingSession"> | Date | string
    status?: EnumEParkingStatusWithAggregatesFilter<"ParkingSession"> | $Enums.EParkingStatus
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.EROLE
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehiclesCreateNestedManyWithoutUserInput
    parkingSession?: ParkingSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.EROLE
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehiclesUncheckedCreateNestedManyWithoutUserInput
    parkingSession?: ParkingSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEROLEFieldUpdateOperationsInput | $Enums.EROLE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehiclesUpdateManyWithoutUserNestedInput
    parkingSession?: ParkingSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEROLEFieldUpdateOperationsInput | $Enums.EROLE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehiclesUncheckedUpdateManyWithoutUserNestedInput
    parkingSession?: ParkingSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.EROLE
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEROLEFieldUpdateOperationsInput | $Enums.EROLE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEROLEFieldUpdateOperationsInput | $Enums.EROLE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiclesCreateInput = {
    id?: string
    plateNumber: string
    brand: string
    model: string
    color: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVehiclesInput
  }

  export type VehiclesUncheckedCreateInput = {
    id?: string
    plateNumber: string
    brand: string
    model: string
    color: string
    createdAt?: Date | string
    userId: string
  }

  export type VehiclesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
  }

  export type VehiclesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VehiclesCreateManyInput = {
    id?: string
    plateNumber: string
    brand: string
    model: string
    color: string
    createdAt?: Date | string
    userId: string
  }

  export type VehiclesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiclesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SlotsCreateInput = {
    id?: string
    slotNumber: string
    status: $Enums.ESlotStatus
    floor: number
    type: $Enums.ESlotType
    unitPrice?: number
    createdAt?: Date | string
    parkingSession?: ParkingSessionCreateNestedManyWithoutSlotInput
  }

  export type SlotsUncheckedCreateInput = {
    id?: string
    slotNumber: string
    status: $Enums.ESlotStatus
    floor: number
    type: $Enums.ESlotType
    unitPrice?: number
    createdAt?: Date | string
    parkingSession?: ParkingSessionUncheckedCreateNestedManyWithoutSlotInput
  }

  export type SlotsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumESlotStatusFieldUpdateOperationsInput | $Enums.ESlotStatus
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumESlotTypeFieldUpdateOperationsInput | $Enums.ESlotType
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSession?: ParkingSessionUpdateManyWithoutSlotNestedInput
  }

  export type SlotsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumESlotStatusFieldUpdateOperationsInput | $Enums.ESlotStatus
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumESlotTypeFieldUpdateOperationsInput | $Enums.ESlotType
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSession?: ParkingSessionUncheckedUpdateManyWithoutSlotNestedInput
  }

  export type SlotsCreateManyInput = {
    id?: string
    slotNumber: string
    status: $Enums.ESlotStatus
    floor: number
    type: $Enums.ESlotType
    unitPrice?: number
    createdAt?: Date | string
  }

  export type SlotsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumESlotStatusFieldUpdateOperationsInput | $Enums.ESlotStatus
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumESlotTypeFieldUpdateOperationsInput | $Enums.ESlotType
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumESlotStatusFieldUpdateOperationsInput | $Enums.ESlotStatus
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumESlotTypeFieldUpdateOperationsInput | $Enums.ESlotType
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSessionCreateInput = {
    date: Date | string
    startTime: string
    endTime: string
    duration: number
    totalFee: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.EParkingStatus
    slot: SlotsCreateNestedOneWithoutParkingSessionInput
    user: UserCreateNestedOneWithoutParkingSessionInput
  }

  export type ParkingSessionUncheckedCreateInput = {
    id?: number
    slotId: string
    userId: string
    date: Date | string
    startTime: string
    endTime: string
    duration: number
    totalFee: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.EParkingStatus
  }

  export type ParkingSessionUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalFee?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEParkingStatusFieldUpdateOperationsInput | $Enums.EParkingStatus
    slot?: SlotsUpdateOneRequiredWithoutParkingSessionNestedInput
    user?: UserUpdateOneRequiredWithoutParkingSessionNestedInput
  }

  export type ParkingSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slotId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalFee?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEParkingStatusFieldUpdateOperationsInput | $Enums.EParkingStatus
  }

  export type ParkingSessionCreateManyInput = {
    id?: number
    slotId: string
    userId: string
    date: Date | string
    startTime: string
    endTime: string
    duration: number
    totalFee: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.EParkingStatus
  }

  export type ParkingSessionUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalFee?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEParkingStatusFieldUpdateOperationsInput | $Enums.EParkingStatus
  }

  export type ParkingSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slotId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalFee?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEParkingStatusFieldUpdateOperationsInput | $Enums.EParkingStatus
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

  export type EnumEROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.EROLE | EnumEROLEFieldRefInput<$PrismaModel>
    in?: $Enums.EROLE[] | ListEnumEROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.EROLE[] | ListEnumEROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumEROLEFilter<$PrismaModel> | $Enums.EROLE
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

  export type VehiclesListRelationFilter = {
    every?: VehiclesWhereInput
    some?: VehiclesWhereInput
    none?: VehiclesWhereInput
  }

  export type ParkingSessionListRelationFilter = {
    every?: ParkingSessionWhereInput
    some?: ParkingSessionWhereInput
    none?: ParkingSessionWhereInput
  }

  export type VehiclesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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

  export type EnumEROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EROLE | EnumEROLEFieldRefInput<$PrismaModel>
    in?: $Enums.EROLE[] | ListEnumEROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.EROLE[] | ListEnumEROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumEROLEWithAggregatesFilter<$PrismaModel> | $Enums.EROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEROLEFilter<$PrismaModel>
    _max?: NestedEnumEROLEFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VehiclesCountOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type VehiclesMaxOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type VehiclesMinOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumESlotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ESlotStatus | EnumESlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ESlotStatus[] | ListEnumESlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ESlotStatus[] | ListEnumESlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumESlotStatusFilter<$PrismaModel> | $Enums.ESlotStatus
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

  export type EnumESlotTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ESlotType | EnumESlotTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ESlotType[] | ListEnumESlotTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ESlotType[] | ListEnumESlotTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumESlotTypeFilter<$PrismaModel> | $Enums.ESlotType
  }

  export type SlotsCountOrderByAggregateInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    status?: SortOrder
    floor?: SortOrder
    type?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type SlotsAvgOrderByAggregateInput = {
    floor?: SortOrder
    unitPrice?: SortOrder
  }

  export type SlotsMaxOrderByAggregateInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    status?: SortOrder
    floor?: SortOrder
    type?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type SlotsMinOrderByAggregateInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    status?: SortOrder
    floor?: SortOrder
    type?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type SlotsSumOrderByAggregateInput = {
    floor?: SortOrder
    unitPrice?: SortOrder
  }

  export type EnumESlotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ESlotStatus | EnumESlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ESlotStatus[] | ListEnumESlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ESlotStatus[] | ListEnumESlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumESlotStatusWithAggregatesFilter<$PrismaModel> | $Enums.ESlotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumESlotStatusFilter<$PrismaModel>
    _max?: NestedEnumESlotStatusFilter<$PrismaModel>
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

  export type EnumESlotTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ESlotType | EnumESlotTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ESlotType[] | ListEnumESlotTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ESlotType[] | ListEnumESlotTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumESlotTypeWithAggregatesFilter<$PrismaModel> | $Enums.ESlotType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumESlotTypeFilter<$PrismaModel>
    _max?: NestedEnumESlotTypeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumEParkingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EParkingStatus | EnumEParkingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EParkingStatus[] | ListEnumEParkingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EParkingStatus[] | ListEnumEParkingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEParkingStatusFilter<$PrismaModel> | $Enums.EParkingStatus
  }

  export type SlotsScalarRelationFilter = {
    is?: SlotsWhereInput
    isNot?: SlotsWhereInput
  }

  export type ParkingSessionCountOrderByAggregateInput = {
    id?: SortOrder
    slotId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    totalFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type ParkingSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    totalFee?: SortOrder
  }

  export type ParkingSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    slotId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    totalFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type ParkingSessionMinOrderByAggregateInput = {
    id?: SortOrder
    slotId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    totalFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type ParkingSessionSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    totalFee?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumEParkingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EParkingStatus | EnumEParkingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EParkingStatus[] | ListEnumEParkingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EParkingStatus[] | ListEnumEParkingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEParkingStatusWithAggregatesFilter<$PrismaModel> | $Enums.EParkingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEParkingStatusFilter<$PrismaModel>
    _max?: NestedEnumEParkingStatusFilter<$PrismaModel>
  }

  export type VehiclesCreateNestedManyWithoutUserInput = {
    create?: XOR<VehiclesCreateWithoutUserInput, VehiclesUncheckedCreateWithoutUserInput> | VehiclesCreateWithoutUserInput[] | VehiclesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehiclesCreateOrConnectWithoutUserInput | VehiclesCreateOrConnectWithoutUserInput[]
    createMany?: VehiclesCreateManyUserInputEnvelope
    connect?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
  }

  export type ParkingSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<ParkingSessionCreateWithoutUserInput, ParkingSessionUncheckedCreateWithoutUserInput> | ParkingSessionCreateWithoutUserInput[] | ParkingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutUserInput | ParkingSessionCreateOrConnectWithoutUserInput[]
    createMany?: ParkingSessionCreateManyUserInputEnvelope
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
  }

  export type VehiclesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VehiclesCreateWithoutUserInput, VehiclesUncheckedCreateWithoutUserInput> | VehiclesCreateWithoutUserInput[] | VehiclesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehiclesCreateOrConnectWithoutUserInput | VehiclesCreateOrConnectWithoutUserInput[]
    createMany?: VehiclesCreateManyUserInputEnvelope
    connect?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
  }

  export type ParkingSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ParkingSessionCreateWithoutUserInput, ParkingSessionUncheckedCreateWithoutUserInput> | ParkingSessionCreateWithoutUserInput[] | ParkingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutUserInput | ParkingSessionCreateOrConnectWithoutUserInput[]
    createMany?: ParkingSessionCreateManyUserInputEnvelope
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumEROLEFieldUpdateOperationsInput = {
    set?: $Enums.EROLE
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VehiclesUpdateManyWithoutUserNestedInput = {
    create?: XOR<VehiclesCreateWithoutUserInput, VehiclesUncheckedCreateWithoutUserInput> | VehiclesCreateWithoutUserInput[] | VehiclesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehiclesCreateOrConnectWithoutUserInput | VehiclesCreateOrConnectWithoutUserInput[]
    upsert?: VehiclesUpsertWithWhereUniqueWithoutUserInput | VehiclesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VehiclesCreateManyUserInputEnvelope
    set?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
    disconnect?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
    delete?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
    connect?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
    update?: VehiclesUpdateWithWhereUniqueWithoutUserInput | VehiclesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VehiclesUpdateManyWithWhereWithoutUserInput | VehiclesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VehiclesScalarWhereInput | VehiclesScalarWhereInput[]
  }

  export type ParkingSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParkingSessionCreateWithoutUserInput, ParkingSessionUncheckedCreateWithoutUserInput> | ParkingSessionCreateWithoutUserInput[] | ParkingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutUserInput | ParkingSessionCreateOrConnectWithoutUserInput[]
    upsert?: ParkingSessionUpsertWithWhereUniqueWithoutUserInput | ParkingSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParkingSessionCreateManyUserInputEnvelope
    set?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    disconnect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    delete?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    update?: ParkingSessionUpdateWithWhereUniqueWithoutUserInput | ParkingSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParkingSessionUpdateManyWithWhereWithoutUserInput | ParkingSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParkingSessionScalarWhereInput | ParkingSessionScalarWhereInput[]
  }

  export type VehiclesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VehiclesCreateWithoutUserInput, VehiclesUncheckedCreateWithoutUserInput> | VehiclesCreateWithoutUserInput[] | VehiclesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehiclesCreateOrConnectWithoutUserInput | VehiclesCreateOrConnectWithoutUserInput[]
    upsert?: VehiclesUpsertWithWhereUniqueWithoutUserInput | VehiclesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VehiclesCreateManyUserInputEnvelope
    set?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
    disconnect?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
    delete?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
    connect?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
    update?: VehiclesUpdateWithWhereUniqueWithoutUserInput | VehiclesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VehiclesUpdateManyWithWhereWithoutUserInput | VehiclesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VehiclesScalarWhereInput | VehiclesScalarWhereInput[]
  }

  export type ParkingSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParkingSessionCreateWithoutUserInput, ParkingSessionUncheckedCreateWithoutUserInput> | ParkingSessionCreateWithoutUserInput[] | ParkingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutUserInput | ParkingSessionCreateOrConnectWithoutUserInput[]
    upsert?: ParkingSessionUpsertWithWhereUniqueWithoutUserInput | ParkingSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParkingSessionCreateManyUserInputEnvelope
    set?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    disconnect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    delete?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    update?: ParkingSessionUpdateWithWhereUniqueWithoutUserInput | ParkingSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParkingSessionUpdateManyWithWhereWithoutUserInput | ParkingSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParkingSessionScalarWhereInput | ParkingSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    upsert?: UserUpsertWithoutVehiclesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehiclesInput, UserUpdateWithoutVehiclesInput>, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type ParkingSessionCreateNestedManyWithoutSlotInput = {
    create?: XOR<ParkingSessionCreateWithoutSlotInput, ParkingSessionUncheckedCreateWithoutSlotInput> | ParkingSessionCreateWithoutSlotInput[] | ParkingSessionUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutSlotInput | ParkingSessionCreateOrConnectWithoutSlotInput[]
    createMany?: ParkingSessionCreateManySlotInputEnvelope
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
  }

  export type ParkingSessionUncheckedCreateNestedManyWithoutSlotInput = {
    create?: XOR<ParkingSessionCreateWithoutSlotInput, ParkingSessionUncheckedCreateWithoutSlotInput> | ParkingSessionCreateWithoutSlotInput[] | ParkingSessionUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutSlotInput | ParkingSessionCreateOrConnectWithoutSlotInput[]
    createMany?: ParkingSessionCreateManySlotInputEnvelope
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
  }

  export type EnumESlotStatusFieldUpdateOperationsInput = {
    set?: $Enums.ESlotStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumESlotTypeFieldUpdateOperationsInput = {
    set?: $Enums.ESlotType
  }

  export type ParkingSessionUpdateManyWithoutSlotNestedInput = {
    create?: XOR<ParkingSessionCreateWithoutSlotInput, ParkingSessionUncheckedCreateWithoutSlotInput> | ParkingSessionCreateWithoutSlotInput[] | ParkingSessionUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutSlotInput | ParkingSessionCreateOrConnectWithoutSlotInput[]
    upsert?: ParkingSessionUpsertWithWhereUniqueWithoutSlotInput | ParkingSessionUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: ParkingSessionCreateManySlotInputEnvelope
    set?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    disconnect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    delete?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    update?: ParkingSessionUpdateWithWhereUniqueWithoutSlotInput | ParkingSessionUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: ParkingSessionUpdateManyWithWhereWithoutSlotInput | ParkingSessionUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: ParkingSessionScalarWhereInput | ParkingSessionScalarWhereInput[]
  }

  export type ParkingSessionUncheckedUpdateManyWithoutSlotNestedInput = {
    create?: XOR<ParkingSessionCreateWithoutSlotInput, ParkingSessionUncheckedCreateWithoutSlotInput> | ParkingSessionCreateWithoutSlotInput[] | ParkingSessionUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutSlotInput | ParkingSessionCreateOrConnectWithoutSlotInput[]
    upsert?: ParkingSessionUpsertWithWhereUniqueWithoutSlotInput | ParkingSessionUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: ParkingSessionCreateManySlotInputEnvelope
    set?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    disconnect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    delete?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    update?: ParkingSessionUpdateWithWhereUniqueWithoutSlotInput | ParkingSessionUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: ParkingSessionUpdateManyWithWhereWithoutSlotInput | ParkingSessionUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: ParkingSessionScalarWhereInput | ParkingSessionScalarWhereInput[]
  }

  export type SlotsCreateNestedOneWithoutParkingSessionInput = {
    create?: XOR<SlotsCreateWithoutParkingSessionInput, SlotsUncheckedCreateWithoutParkingSessionInput>
    connectOrCreate?: SlotsCreateOrConnectWithoutParkingSessionInput
    connect?: SlotsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParkingSessionInput = {
    create?: XOR<UserCreateWithoutParkingSessionInput, UserUncheckedCreateWithoutParkingSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingSessionInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEParkingStatusFieldUpdateOperationsInput = {
    set?: $Enums.EParkingStatus
  }

  export type SlotsUpdateOneRequiredWithoutParkingSessionNestedInput = {
    create?: XOR<SlotsCreateWithoutParkingSessionInput, SlotsUncheckedCreateWithoutParkingSessionInput>
    connectOrCreate?: SlotsCreateOrConnectWithoutParkingSessionInput
    upsert?: SlotsUpsertWithoutParkingSessionInput
    connect?: SlotsWhereUniqueInput
    update?: XOR<XOR<SlotsUpdateToOneWithWhereWithoutParkingSessionInput, SlotsUpdateWithoutParkingSessionInput>, SlotsUncheckedUpdateWithoutParkingSessionInput>
  }

  export type UserUpdateOneRequiredWithoutParkingSessionNestedInput = {
    create?: XOR<UserCreateWithoutParkingSessionInput, UserUncheckedCreateWithoutParkingSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingSessionInput
    upsert?: UserUpsertWithoutParkingSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParkingSessionInput, UserUpdateWithoutParkingSessionInput>, UserUncheckedUpdateWithoutParkingSessionInput>
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

  export type NestedEnumEROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.EROLE | EnumEROLEFieldRefInput<$PrismaModel>
    in?: $Enums.EROLE[] | ListEnumEROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.EROLE[] | ListEnumEROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumEROLEFilter<$PrismaModel> | $Enums.EROLE
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

  export type NestedEnumEROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EROLE | EnumEROLEFieldRefInput<$PrismaModel>
    in?: $Enums.EROLE[] | ListEnumEROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.EROLE[] | ListEnumEROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumEROLEWithAggregatesFilter<$PrismaModel> | $Enums.EROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEROLEFilter<$PrismaModel>
    _max?: NestedEnumEROLEFilter<$PrismaModel>
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

  export type NestedEnumESlotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ESlotStatus | EnumESlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ESlotStatus[] | ListEnumESlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ESlotStatus[] | ListEnumESlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumESlotStatusFilter<$PrismaModel> | $Enums.ESlotStatus
  }

  export type NestedEnumESlotTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ESlotType | EnumESlotTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ESlotType[] | ListEnumESlotTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ESlotType[] | ListEnumESlotTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumESlotTypeFilter<$PrismaModel> | $Enums.ESlotType
  }

  export type NestedEnumESlotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ESlotStatus | EnumESlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ESlotStatus[] | ListEnumESlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ESlotStatus[] | ListEnumESlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumESlotStatusWithAggregatesFilter<$PrismaModel> | $Enums.ESlotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumESlotStatusFilter<$PrismaModel>
    _max?: NestedEnumESlotStatusFilter<$PrismaModel>
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

  export type NestedEnumESlotTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ESlotType | EnumESlotTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ESlotType[] | ListEnumESlotTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ESlotType[] | ListEnumESlotTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumESlotTypeWithAggregatesFilter<$PrismaModel> | $Enums.ESlotType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumESlotTypeFilter<$PrismaModel>
    _max?: NestedEnumESlotTypeFilter<$PrismaModel>
  }

  export type NestedEnumEParkingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EParkingStatus | EnumEParkingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EParkingStatus[] | ListEnumEParkingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EParkingStatus[] | ListEnumEParkingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEParkingStatusFilter<$PrismaModel> | $Enums.EParkingStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumEParkingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EParkingStatus | EnumEParkingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EParkingStatus[] | ListEnumEParkingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EParkingStatus[] | ListEnumEParkingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEParkingStatusWithAggregatesFilter<$PrismaModel> | $Enums.EParkingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEParkingStatusFilter<$PrismaModel>
    _max?: NestedEnumEParkingStatusFilter<$PrismaModel>
  }

  export type VehiclesCreateWithoutUserInput = {
    id?: string
    plateNumber: string
    brand: string
    model: string
    color: string
    createdAt?: Date | string
  }

  export type VehiclesUncheckedCreateWithoutUserInput = {
    id?: string
    plateNumber: string
    brand: string
    model: string
    color: string
    createdAt?: Date | string
  }

  export type VehiclesCreateOrConnectWithoutUserInput = {
    where: VehiclesWhereUniqueInput
    create: XOR<VehiclesCreateWithoutUserInput, VehiclesUncheckedCreateWithoutUserInput>
  }

  export type VehiclesCreateManyUserInputEnvelope = {
    data: VehiclesCreateManyUserInput | VehiclesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParkingSessionCreateWithoutUserInput = {
    date: Date | string
    startTime: string
    endTime: string
    duration: number
    totalFee: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.EParkingStatus
    slot: SlotsCreateNestedOneWithoutParkingSessionInput
  }

  export type ParkingSessionUncheckedCreateWithoutUserInput = {
    id?: number
    slotId: string
    date: Date | string
    startTime: string
    endTime: string
    duration: number
    totalFee: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.EParkingStatus
  }

  export type ParkingSessionCreateOrConnectWithoutUserInput = {
    where: ParkingSessionWhereUniqueInput
    create: XOR<ParkingSessionCreateWithoutUserInput, ParkingSessionUncheckedCreateWithoutUserInput>
  }

  export type ParkingSessionCreateManyUserInputEnvelope = {
    data: ParkingSessionCreateManyUserInput | ParkingSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VehiclesUpsertWithWhereUniqueWithoutUserInput = {
    where: VehiclesWhereUniqueInput
    update: XOR<VehiclesUpdateWithoutUserInput, VehiclesUncheckedUpdateWithoutUserInput>
    create: XOR<VehiclesCreateWithoutUserInput, VehiclesUncheckedCreateWithoutUserInput>
  }

  export type VehiclesUpdateWithWhereUniqueWithoutUserInput = {
    where: VehiclesWhereUniqueInput
    data: XOR<VehiclesUpdateWithoutUserInput, VehiclesUncheckedUpdateWithoutUserInput>
  }

  export type VehiclesUpdateManyWithWhereWithoutUserInput = {
    where: VehiclesScalarWhereInput
    data: XOR<VehiclesUpdateManyMutationInput, VehiclesUncheckedUpdateManyWithoutUserInput>
  }

  export type VehiclesScalarWhereInput = {
    AND?: VehiclesScalarWhereInput | VehiclesScalarWhereInput[]
    OR?: VehiclesScalarWhereInput[]
    NOT?: VehiclesScalarWhereInput | VehiclesScalarWhereInput[]
    id?: StringFilter<"Vehicles"> | string
    plateNumber?: StringFilter<"Vehicles"> | string
    brand?: StringFilter<"Vehicles"> | string
    model?: StringFilter<"Vehicles"> | string
    color?: StringFilter<"Vehicles"> | string
    createdAt?: DateTimeFilter<"Vehicles"> | Date | string
    userId?: StringFilter<"Vehicles"> | string
  }

  export type ParkingSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: ParkingSessionWhereUniqueInput
    update: XOR<ParkingSessionUpdateWithoutUserInput, ParkingSessionUncheckedUpdateWithoutUserInput>
    create: XOR<ParkingSessionCreateWithoutUserInput, ParkingSessionUncheckedCreateWithoutUserInput>
  }

  export type ParkingSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: ParkingSessionWhereUniqueInput
    data: XOR<ParkingSessionUpdateWithoutUserInput, ParkingSessionUncheckedUpdateWithoutUserInput>
  }

  export type ParkingSessionUpdateManyWithWhereWithoutUserInput = {
    where: ParkingSessionScalarWhereInput
    data: XOR<ParkingSessionUpdateManyMutationInput, ParkingSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type ParkingSessionScalarWhereInput = {
    AND?: ParkingSessionScalarWhereInput | ParkingSessionScalarWhereInput[]
    OR?: ParkingSessionScalarWhereInput[]
    NOT?: ParkingSessionScalarWhereInput | ParkingSessionScalarWhereInput[]
    id?: IntFilter<"ParkingSession"> | number
    slotId?: StringFilter<"ParkingSession"> | string
    userId?: StringFilter<"ParkingSession"> | string
    date?: DateTimeFilter<"ParkingSession"> | Date | string
    startTime?: StringFilter<"ParkingSession"> | string
    endTime?: StringFilter<"ParkingSession"> | string
    duration?: IntFilter<"ParkingSession"> | number
    totalFee?: FloatFilter<"ParkingSession"> | number
    createdAt?: DateTimeFilter<"ParkingSession"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSession"> | Date | string
    status?: EnumEParkingStatusFilter<"ParkingSession"> | $Enums.EParkingStatus
  }

  export type UserCreateWithoutVehiclesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.EROLE
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSession?: ParkingSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVehiclesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.EROLE
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSession?: ParkingSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVehiclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
  }

  export type UserUpsertWithoutVehiclesInput = {
    update: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type UserUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEROLEFieldUpdateOperationsInput | $Enums.EROLE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSession?: ParkingSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEROLEFieldUpdateOperationsInput | $Enums.EROLE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSession?: ParkingSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ParkingSessionCreateWithoutSlotInput = {
    date: Date | string
    startTime: string
    endTime: string
    duration: number
    totalFee: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.EParkingStatus
    user: UserCreateNestedOneWithoutParkingSessionInput
  }

  export type ParkingSessionUncheckedCreateWithoutSlotInput = {
    id?: number
    userId: string
    date: Date | string
    startTime: string
    endTime: string
    duration: number
    totalFee: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.EParkingStatus
  }

  export type ParkingSessionCreateOrConnectWithoutSlotInput = {
    where: ParkingSessionWhereUniqueInput
    create: XOR<ParkingSessionCreateWithoutSlotInput, ParkingSessionUncheckedCreateWithoutSlotInput>
  }

  export type ParkingSessionCreateManySlotInputEnvelope = {
    data: ParkingSessionCreateManySlotInput | ParkingSessionCreateManySlotInput[]
    skipDuplicates?: boolean
  }

  export type ParkingSessionUpsertWithWhereUniqueWithoutSlotInput = {
    where: ParkingSessionWhereUniqueInput
    update: XOR<ParkingSessionUpdateWithoutSlotInput, ParkingSessionUncheckedUpdateWithoutSlotInput>
    create: XOR<ParkingSessionCreateWithoutSlotInput, ParkingSessionUncheckedCreateWithoutSlotInput>
  }

  export type ParkingSessionUpdateWithWhereUniqueWithoutSlotInput = {
    where: ParkingSessionWhereUniqueInput
    data: XOR<ParkingSessionUpdateWithoutSlotInput, ParkingSessionUncheckedUpdateWithoutSlotInput>
  }

  export type ParkingSessionUpdateManyWithWhereWithoutSlotInput = {
    where: ParkingSessionScalarWhereInput
    data: XOR<ParkingSessionUpdateManyMutationInput, ParkingSessionUncheckedUpdateManyWithoutSlotInput>
  }

  export type SlotsCreateWithoutParkingSessionInput = {
    id?: string
    slotNumber: string
    status: $Enums.ESlotStatus
    floor: number
    type: $Enums.ESlotType
    unitPrice?: number
    createdAt?: Date | string
  }

  export type SlotsUncheckedCreateWithoutParkingSessionInput = {
    id?: string
    slotNumber: string
    status: $Enums.ESlotStatus
    floor: number
    type: $Enums.ESlotType
    unitPrice?: number
    createdAt?: Date | string
  }

  export type SlotsCreateOrConnectWithoutParkingSessionInput = {
    where: SlotsWhereUniqueInput
    create: XOR<SlotsCreateWithoutParkingSessionInput, SlotsUncheckedCreateWithoutParkingSessionInput>
  }

  export type UserCreateWithoutParkingSessionInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.EROLE
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehiclesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParkingSessionInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.EROLE
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehiclesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParkingSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParkingSessionInput, UserUncheckedCreateWithoutParkingSessionInput>
  }

  export type SlotsUpsertWithoutParkingSessionInput = {
    update: XOR<SlotsUpdateWithoutParkingSessionInput, SlotsUncheckedUpdateWithoutParkingSessionInput>
    create: XOR<SlotsCreateWithoutParkingSessionInput, SlotsUncheckedCreateWithoutParkingSessionInput>
    where?: SlotsWhereInput
  }

  export type SlotsUpdateToOneWithWhereWithoutParkingSessionInput = {
    where?: SlotsWhereInput
    data: XOR<SlotsUpdateWithoutParkingSessionInput, SlotsUncheckedUpdateWithoutParkingSessionInput>
  }

  export type SlotsUpdateWithoutParkingSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumESlotStatusFieldUpdateOperationsInput | $Enums.ESlotStatus
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumESlotTypeFieldUpdateOperationsInput | $Enums.ESlotType
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotsUncheckedUpdateWithoutParkingSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumESlotStatusFieldUpdateOperationsInput | $Enums.ESlotStatus
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumESlotTypeFieldUpdateOperationsInput | $Enums.ESlotType
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutParkingSessionInput = {
    update: XOR<UserUpdateWithoutParkingSessionInput, UserUncheckedUpdateWithoutParkingSessionInput>
    create: XOR<UserCreateWithoutParkingSessionInput, UserUncheckedCreateWithoutParkingSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParkingSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParkingSessionInput, UserUncheckedUpdateWithoutParkingSessionInput>
  }

  export type UserUpdateWithoutParkingSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEROLEFieldUpdateOperationsInput | $Enums.EROLE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehiclesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParkingSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEROLEFieldUpdateOperationsInput | $Enums.EROLE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehiclesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VehiclesCreateManyUserInput = {
    id?: string
    plateNumber: string
    brand: string
    model: string
    color: string
    createdAt?: Date | string
  }

  export type ParkingSessionCreateManyUserInput = {
    id?: number
    slotId: string
    date: Date | string
    startTime: string
    endTime: string
    duration: number
    totalFee: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.EParkingStatus
  }

  export type VehiclesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiclesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiclesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSessionUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalFee?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEParkingStatusFieldUpdateOperationsInput | $Enums.EParkingStatus
    slot?: SlotsUpdateOneRequiredWithoutParkingSessionNestedInput
  }

  export type ParkingSessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    slotId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalFee?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEParkingStatusFieldUpdateOperationsInput | $Enums.EParkingStatus
  }

  export type ParkingSessionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    slotId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalFee?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEParkingStatusFieldUpdateOperationsInput | $Enums.EParkingStatus
  }

  export type ParkingSessionCreateManySlotInput = {
    id?: number
    userId: string
    date: Date | string
    startTime: string
    endTime: string
    duration: number
    totalFee: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.EParkingStatus
  }

  export type ParkingSessionUpdateWithoutSlotInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalFee?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEParkingStatusFieldUpdateOperationsInput | $Enums.EParkingStatus
    user?: UserUpdateOneRequiredWithoutParkingSessionNestedInput
  }

  export type ParkingSessionUncheckedUpdateWithoutSlotInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalFee?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEParkingStatusFieldUpdateOperationsInput | $Enums.EParkingStatus
  }

  export type ParkingSessionUncheckedUpdateManyWithoutSlotInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalFee?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEParkingStatusFieldUpdateOperationsInput | $Enums.EParkingStatus
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