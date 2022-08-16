"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.GenericMDataService = exports.MDataService = void 0;
var dataService_1 = require("./dataService");
var MDataService = /** @class */ (function (_super) {
    __extends(MDataService, _super);
    function MDataService(user, ds) {
        var _this = _super.call(this, user, ds) || this;
        _this.user = user;
        _this.ds = ds;
        _this.find = _this.search;
        return _this;
    }
    Object.defineProperty(MDataService.prototype, "f", {
        /**
         * find pass through
         */
        get: function () {
            return this.model.find.bind(this.model);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDataService.prototype, "f1", {
        get: function () {
            return this.model.findOne.bind(this.model);
        },
        enumerable: false,
        configurable: true
    });
    MDataService.prototype._search = function (crit, populate) {
        var q = this.model.find(crit);
        if (populate) {
            q.populate(populate);
        }
        return q;
    };
    MDataService.prototype.search = function (crit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._search(crit)];
            });
        });
    };
    MDataService.prototype._findById = function (id, populate) {
        var q = this.model.findById(id);
        if (populate) {
            q.populate(populate);
        }
        return q;
    };
    MDataService.prototype.findById = function (id, populate) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._findById(id, populate)];
            });
        });
    };
    MDataService.prototype._list = function (populate) {
        var q = this.model.find({});
        if (populate) {
            q.populate(populate);
        }
        return q;
    };
    MDataService.prototype.list = function (sortBy, populate) {
        if (sortBy === void 0) { sortBy = 'name'; }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                return [2 /*return*/, this._list(populate).sort((_a = {}, _a[sortBy] = 1, _a))];
            });
        });
    };
    MDataService.prototype.insert = function (modelData) {
        return __awaiter(this, void 0, void 0, function () {
            var model;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new this.model(modelData).save()];
                    case 1:
                        model = _a.sent();
                        return [2 /*return*/, model];
                }
            });
        });
    };
    ;
    MDataService.prototype.update = function (model) {
        return this.set(model);
    };
    MDataService.prototype.save = function (model) {
        model.modified = new Date();
        return (model.id || model._id) ? this.update(model) : this.insert(model);
    };
    MDataService.prototype.set = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var m;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findById(data.id || data._id.toString())];
                    case 1:
                        m = _a.sent();
                        if (m) {
                            m.set(data);
                            return [2 /*return*/, m.save()];
                        }
                        return [2 /*return*/, this.insert(data)];
                }
            });
        });
    };
    MDataService.prototype.random = function () {
        return __awaiter(this, void 0, void 0, function () {
            var count, rand;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.count({})];
                    case 1:
                        count = _a.sent();
                        rand = Math.floor(Math.random() * count);
                        return [2 /*return*/, this.model.findOne().skip(rand)];
                }
            });
        });
    };
    MDataService.prototype._findOne = function (crit) {
        return this.model.findOne(crit);
    };
    MDataService.prototype.findOne = function (crit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._findOne(crit)];
            });
        });
    };
    return MDataService;
}(dataService_1.ADataService));
exports.MDataService = MDataService;
var GenericMDataService = /** @class */ (function (_super) {
    __extends(GenericMDataService, _super);
    function GenericMDataService(model, user, ds) {
        var _this = _super.call(this, user, ds) || this;
        _this.model = model;
        _this.user = user;
        _this.ds = ds;
        return _this;
    }
    return GenericMDataService;
}(MDataService));
exports.GenericMDataService = GenericMDataService;
function connect(mongoose, mongoConnectionString) {
    var attempt = 0;
    var connect = function () {
        attempt++;
        mongoose.connect(mongoConnectionString, {
            connectTimeoutMS: 3000,
        }).then(function () {
        }).catch(function (err) {
            console.error(err.message);
            reconnectTimer = setTimeout(function () { connect(); }, 1000 * attempt);
        });
    };
    var reconnectTimer = null;
    connect();
    mongoose.connection.on('connecting', function () {
        console.log('connecting to mongo');
    });
    mongoose.connection.on('connect', function () {
        console.log('connecting to mongo');
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
exports.connect = connect;
// connect();
//# sourceMappingURL=mongooseDataService.js.map