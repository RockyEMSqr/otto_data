export * from './mongooseDataService';

import { Schema, SchemaTypeOptions, SchemaDefinition } from 'mongoose';

// interface StricterSchemaTypeOpts<T> extends SchemaTypeOpts<T> {
//     //@ts-ignore
//     [other: string]: T;
// }
// interface StricterSchemaTypeOptions<T> extends SchemaTypeOptions<T> {

// }
//old
// export type SchemaDef<T> = {
//     [P in keyof T]:
//     T[P] extends string ? StringConstructor | StricterSchemaTypeOpts<StringConstructor>
//     : T[P] extends number ? NumberConstructor | StricterSchemaTypeOpts<NumberConstructor>
//     : T[P] extends Date ? Date | StricterSchemaTypeOpts<DateConstructor>
//     : SchemaTypeOpts<any> | Schema | SchemaType;
// };
export type SchemaDef<T> = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    // [path: string]: SchemaTypeOptions<any> | Function | string | Schema | Schema[] | Array<SchemaTypeOptions<any>> | Function[] | SchemaDefinition | SchemaDefinition[];

    [P in keyof T]:
    T[P] extends string ? StringConstructor | SchemaTypeOptions<StringConstructor> | 'string' | Schema | Schema[] | Array<SchemaTypeOptions<StringConstructor>> | Function[] | SchemaDef<T> | SchemaDef<T>[]
    : T[P] extends number ? NumberConstructor | SchemaTypeOptions<NumberConstructor> | 'number' | Function | Schema | Schema[] | Array<SchemaTypeOptions<NumberConstructor>> | Function[] | SchemaDef<T> | SchemaDef<T>[]
    : T[P] extends Date ? DateConstructor | SchemaTypeOptions<DateConstructor> | Function | Schema | Schema[] | Array<SchemaTypeOptions<DateConstructor>> | Function[] | SchemaDef<T> | SchemaDef<T>[]
    : SchemaTypeOptions<any> | Function | string | Schema | Schema[] | Array<SchemaTypeOptions<any>> | Function[] | SchemaDefinition | SchemaDefinition[];
}


type X = {
    foo: string,
    bar: string,
    booboo: number,
    d: Date,
    user: any
}
let schemaDef: SchemaDef<X> = {
    bar: String,
    booboo: String,
    foo: String,
    d: { type: Date },
    user: { type: 'asdf', ref: 'adf' }

}
let s = new Schema(schemaDef, {})