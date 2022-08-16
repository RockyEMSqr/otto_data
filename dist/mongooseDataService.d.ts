import { ADataService } from './dataService';
import * as mongoose from 'mongoose';
export declare abstract class MDataService<M extends mongoose.Document, DS> extends ADataService<M> {
    protected user: any;
    protected ds: DS;
    constructor(user: any, ds: DS);
    abstract model: mongoose.Model<M>;
    find: (crit: any) => Promise<mongoose.HydratedDocument<M, {}, {}>[]>;
    /**
     * find pass through
     */
    get f(): (conditions: any, projection?: any | null) => mongoose.Query<M[], M>;
    get f1(): (conditions: any, projection?: any | null) => mongoose.Query<M[], M>;
    _search(crit: any, populate?: string[]): mongoose.Query<mongoose.HydratedDocument<M, {}, {}>[], mongoose.HydratedDocument<M, {}, {}>, {}, M>;
    search(crit: any): Promise<mongoose.HydratedDocument<M, {}, {}>[]>;
    _findById(id: any, populate?: string[]): mongoose.Query<mongoose.HydratedDocument<M, {}, {}>, mongoose.HydratedDocument<M, {}, {}>, {}, M>;
    findById(id: any, populate?: string[]): Promise<mongoose.HydratedDocument<M, {}, {}>>;
    _list(populate?: string[]): mongoose.Query<mongoose.HydratedDocument<M, {}, {}>[], mongoose.HydratedDocument<M, {}, {}>, {}, M>;
    list(sortBy?: string, populate?: string[]): Promise<mongoose.HydratedDocument<M, {}, {}>[]>;
    insert(modelData: Partial<M>): Promise<mongoose.HydratedDocument<M, {}, unknown>>;
    update(model: Partial<M>): Promise<mongoose.HydratedDocument<M, {}, {}>>;
    save(model: Partial<M>): Promise<mongoose.HydratedDocument<M, {}, {}>>;
    set(data: any): Promise<mongoose.HydratedDocument<M, {}, {}>>;
    random(): Promise<mongoose.HydratedDocument<M, {}, {}>>;
    _findOne(crit: any): mongoose.Query<mongoose.HydratedDocument<M, {}, {}>, mongoose.HydratedDocument<M, {}, {}>, {}, M>;
    findOne(crit: any): Promise<mongoose.HydratedDocument<M, {}, {}>>;
}
export declare class GenericMDataService<M extends mongoose.Document, DS> extends MDataService<M, DS> {
    model: any;
    protected user: any;
    protected ds: any;
    constructor(model: any, user: any, ds: any);
}
export declare function connect(mongoConnectionString: any): void;
//# sourceMappingURL=mongooseDataService.d.ts.map