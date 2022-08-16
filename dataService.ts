
export abstract class ADataService<M>{
    constructor(protected user, protected ds) { }
    public find = this.search;
    abstract _search(crit);
    abstract search(crit): Promise<M[]>
    abstract _findById(id);
    abstract findById(id): Promise<M | null>;
    abstract _list();
    abstract list()

    abstract insert(modelData: Partial<M>): Promise<M>

    abstract update(model: Partial<M>);
    abstract save(model: Partial<M>);
    /**
     * Like an Upsert
     * @param data 
     */
    abstract set(data);
    async upsert(data){
        return this.set(data);
    }
    // async random() {
    //     let count = await this.model.count({});
    //     let rand = Math.floor(Math.random() * count);
    //     return this.model.findOne().skip(rand);
    // }
    abstract _findOne(crit);
    abstract findOne(crit);

}