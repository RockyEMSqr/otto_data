/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from "mongoose";
import { MDataService } from "./mongooseDataService";
export declare abstract class PaginatedDS<Doc extends Document, DS> extends MDataService<Doc, DS> {
    paginate(populate: any[], page?: number, where?: any, howmany?: number, sortKey?: string[] | string, sortDirection?: number, sort?: any): Promise<{
        data: Pick<import("mongoose").HydratedDocument<Doc, {}, {}>, Exclude<keyof import("mongoose").HydratedDocument<Doc, {}, {}>, never>>[];
        count: number;
    }>;
    deleteThisOne(_id: any): Promise<void>;
}
//# sourceMappingURL=paginatedMDS.d.ts.map