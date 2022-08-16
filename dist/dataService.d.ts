export declare abstract class ADataService<M> {
    protected user: any;
    protected ds: any;
    constructor(user: any, ds: any);
    find: (crit: any) => Promise<M[]>;
    abstract _search(crit: any): any;
    abstract search(crit: any): Promise<M[]>;
    abstract _findById(id: any): any;
    abstract findById(id: any): Promise<M | null>;
    abstract _list(): any;
    abstract list(): any;
    abstract insert(modelData: Partial<M>): Promise<M>;
    abstract update(model: Partial<M>): any;
    abstract save(model: Partial<M>): any;
    /**
     * Like an Upsert
     * @param data
     */
    abstract set(data: any): any;
    upsert(data: any): Promise<any>;
    abstract _findOne(crit: any): any;
    abstract findOne(crit: any): any;
}
//# sourceMappingURL=dataService.d.ts.map