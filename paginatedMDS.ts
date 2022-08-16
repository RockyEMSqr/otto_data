import { Document } from "mongoose";
import { MDataService } from "./mongooseDataService";


export abstract class PaginatedDS<Doc extends Document, DS> extends MDataService<Doc, DS>{
    async paginate(populate: any[], page = 1, where: any = {}, howmany = 10, sortKey: string[] | string = [], sortDirection = -1, sort = null) {
        where.deletedOn = null;
        if (!howmany) {
            howmany = 10;
        }
        if (howmany < 0 || howmany == 0) {
            howmany = 10;
        }
        if (Number.isNaN(sortDirection)) {
            sortDirection = -1;
        }
        let q = this.model.find(where).limit(howmany).skip((page - 1) * howmany).populate(populate);

        if (sortKey) {
            if (Array.isArray(sortKey)) {
                let asort = {};
                for (let k of sortKey) {
                    asort[k] = sortDirection;
                }
                q.sort(asort);
            } else {
                // assume string
                if (typeof sortKey == 'string') {
                    q.sort({ [sortKey]: sortDirection as any })
                }
            }
        }
        if (sort) {
            q.sort(sort);
        }

        return {
            data: await q,
            count: await this.model.count(where)
        }
    }
    async deleteThisOne(_id) {
        let m: any = await this.model.findById(_id);
        m.deletedOn = new Date();
        await m.save();
    }
}