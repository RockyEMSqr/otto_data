import { ADataService } from './dataService';
import * as mongoosee from 'mongoose';
export declare abstract class MDataService<M extends mongoosee.Document, DS> extends ADataService<M> {
    protected user: any;
    protected ds: DS;
    constructor(user: any, ds: DS);
    abstract model: mongoosee.Model<M>;
    find: (crit: any) => Promise<mongoosee.HydratedDocument<M, {}, {}>[]>;
    /**
     * find pass through
     */
    get f(): (conditions: any, projection?: any | null) => mongoosee.Query<M[], M>;
    get f1(): (conditions: any, projection?: any | null) => mongoosee.Query<M[], M>;
    _search(crit: any, populate?: string[]): mongoosee.Query<mongoosee.HydratedDocument<M, {}, {}>[], mongoosee.HydratedDocument<M, {}, {}>, {}, M>;
    search(crit: any): Promise<mongoosee.HydratedDocument<M, {}, {}>[]>;
    _findById(id: any, populate?: string[]): mongoosee.Query<mongoosee.HydratedDocument<M, {}, {}>, mongoosee.HydratedDocument<M, {}, {}>, {}, M>;
    findById(id: any, populate?: string[]): Promise<mongoosee.HydratedDocument<M, {}, {}>>;
    _list(populate?: string[]): mongoosee.Query<mongoosee.HydratedDocument<M, {}, {}>[], mongoosee.HydratedDocument<M, {}, {}>, {}, M>;
    list(sortBy?: string, populate?: string[]): Promise<mongoosee.HydratedDocument<M, {}, {}>[]>;
    insert(modelData: Partial<M>): Promise<mongoosee.HydratedDocument<M, {}, unknown>>;
    update(model: Partial<M>): Promise<mongoosee.HydratedDocument<M, {}, {}>>;
    save(model: Partial<M>): Promise<mongoosee.HydratedDocument<M, {}, {}>>;
    set(data: any): Promise<mongoosee.HydratedDocument<M, {}, {}>>;
    random(): Promise<mongoosee.HydratedDocument<M, {}, {}>>;
    _findOne(crit: any): mongoosee.Query<mongoosee.HydratedDocument<M, {}, {}>, mongoosee.HydratedDocument<M, {}, {}>, {}, M>;
    findOne(crit: any): Promise<mongoosee.HydratedDocument<M, {}, {}>>;
}
export declare class GenericMDataService<M extends mongoosee.Document, DS> extends MDataService<M, DS> {
    model: any;
    protected user: any;
    protected ds: any;
    constructor(model: any, user: any, ds: any);
}
export declare function connect(mongoose: any, mongoConnectionString: any): void;
//# sourceMappingURL=mongooseDataService.d.ts.map