"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const connect = () => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(config_1.default.MONGODB.URI, {
                useNewUrlParser: true, useUnifiedTopology: true
            });
            resolve();
        }
        catch (err) {
            reject(err);
        }
    }));
};
const drop = () => {
    return new Promise((resolve, reject) => {
        mongoose_1.default.connection.db.dropDatabase(function (err, result) {
            if (err)
                return reject();
            resolve();
        });
    });
};
const close = () => {
    return mongoose_1.default.disconnect();
};
exports.default = {
    connect,
    drop,
    close
};
