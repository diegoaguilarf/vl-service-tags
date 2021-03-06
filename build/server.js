"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.set("PORT", process.env.PORT || 3000);
app.listen(app.get("PORT"), () => {
    console.log(`Server is running in port ${app.get("PORT")}`);
});
exports.default = app;
