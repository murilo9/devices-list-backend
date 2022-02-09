"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
require('dotenv').config();
const PORT = process.env.PORT || 8888;
const devicesApp = new App_1.default();
devicesApp.listen(PORT);
//# sourceMappingURL=index.js.map