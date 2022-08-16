
import { ADataService } from './dataService';
import * as mongoosee from 'mongoose';
export abstract class MDataService<M extends mongoosee.Document, DS> extends ADataService<M>{
    constructor(protected user, protected ds: DS) {
        super(user, ds);
    }
    abstract model: mongoosee.Model<M>;
    public find = this.search;
    /**
     * find pass through
     */
    public get f(): (conditions: any, projection?: any | null, ) =>  mongoosee.Query<M[], M> {
        return this.model.find.bind(this.model);
    }
    public get f1(): (conditions: any, projection?: any | null, ) => mongoosee.Query<M[], M> {
        return this.model.findOne.bind(this.model);
    }

    _search(crit, populate?:string[]) {
        let q =  this.model.find(crit);
        if(populate){
            q.populate(populate);
        }
        return q;
    }
    async search(crit) {
        return this._search(crit);
    }
    _findById(id, populate?: string[]) {
        let q = this.model.findById(id);
        if(populate){
            q.populate(populate);
        }
        return q;
    }
    async findById(id, populate?: string[]) {
        return this._findById(id, populate);
    }
    _list(populate?:string[]) {
        let q = this.model.find({});
        if(populate){
            q.populate(populate)
        }
        return q;
    }
    async list(sortBy = 'name', populate?:string[]) {
        return this._list(populate).sort({ [sortBy]: 1 });
    }

    async insert(modelData: Partial<M>) {
        var model = await new this.model(<M>modelData).save();
        return model;
    };
    update(model: Partial<M>) {
        return this.set(model);
    }
    save(model: Partial<M>) {
        (<any>model).modified = new Date();
        return (model.id || model._id) ? this.update(model) : this.insert(model);
    }
    async set(data) {
        var m = await this.model.findById(data.id || data._id.toString());
        if (m) {
            m.set(data);
            return m.save();
        }

        return this.insert(data);
    }
    async random() {
        let count = await this.model.count({});
        let rand = Math.floor(Math.random() * count);
        return this.model.findOne().skip(rand);
    }
    _findOne(crit) {
        return this.model.findOne(crit);
    }
    async findOne(crit) {
        return this._findOne(crit);
    }

}
export class GenericMDataService<M extends mongoosee.Document, DS> extends MDataService<M, DS>{
    constructor(public model, protected user, protected ds) {
        super(user, ds);
    }

}
export function connect(mongoose, mongoConnectionString) {
    let attempt = 0;
    var connect = function () {
        attempt++;
        mongoose.connect(mongoConnectionString, {
            connectTimeoutMS: 3000,
        }).then(() => {
        }).catch(err => {
            console.error(err.message);

            reconnectTimer = setTimeout(() => { connect(); }, 1000 * attempt);

        })
    }

    let reconnectTimer = null;
    connect();
    mongoose.connection.on('connecting', function () {
        console.log('connecting to mongo')
    });
    mongoose.connection.on('connect', function () {
        console.log('connecting to mongo')
    });
    mongoose.connection.on('connected', function () {
        console.log('connected to mongo');
        clearTimeout(reconnectTimer);
        reconnectTimer = null;
    });
    mongoose.connection.on('disconnected', function () {
        console.log('mongo disconnected');
        if (!reconnectTimer) {
            attempt = 0;
            // reconnectTimer = setTimeout(() => { connect(); }, 1000);
            connect();
        }
    });


}

// connect();