"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./mongooseDataService"), exports);
// type X = {
//     foo: string,
//     bar: string,
//     booboo: number,
//     d: Date,
//     user: any
// }
// let schemaDef: SchemaDef<X> = {
//     bar: String,
//     booboo: String,
//     foo: String,
//     d: { type: Date },
//     user: { type: 'asdf', ref: 'adf' }
// }
// let s = new Schema(schemaDef, {})
__exportStar(require("./dataService"), exports);
__exportStar(require("./mongooseDataService"), exports);
__exportStar(require("./paginatedMDS"), exports);
//# sourceMappingURL=index.js.map