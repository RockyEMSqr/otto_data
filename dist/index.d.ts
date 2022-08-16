export * from './mongooseDataService';
import { Schema, SchemaTypeOptions, SchemaDefinition } from 'mongoose';
export declare type SchemaDef<T> = {
    [P in keyof T]: T[P] extends string ? StringConstructor | SchemaTypeOptions<StringConstructor> | 'string' | Schema | Schema[] | Array<SchemaTypeOptions<StringConstructor>> | Function[] | SchemaDef<T> | SchemaDef<T>[] : T[P] extends number ? NumberConstructor | SchemaTypeOptions<NumberConstructor> | 'number' | Function | Schema | Schema[] | Array<SchemaTypeOptions<NumberConstructor>> | Function[] | SchemaDef<T> | SchemaDef<T>[] : T[P] extends Date ? DateConstructor | SchemaTypeOptions<DateConstructor> | Function | Schema | Schema[] | Array<SchemaTypeOptions<DateConstructor>> | Function[] | SchemaDef<T> | SchemaDef<T>[] : SchemaTypeOptions<any> | Function | string | Schema | Schema[] | Array<SchemaTypeOptions<any>> | Function[] | SchemaDefinition | SchemaDefinition[];
};
export * from './dataService';
export * from './mongooseDataService';
export * from './paginatedMDS';
//# sourceMappingURL=index.d.ts.map