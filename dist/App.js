"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import routes here
class DevicesApp {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.loadRoutes();
    }
    config() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)());
    }
    loadRoutes() {
        // load routes here
        this.app.get('/test', (req, res) => { res.send('Server works'); });
    }
    listen(port) {
        this.app.listen(port);
        console.log(`Server running on port ${port}`);
    }
}
exports.default = DevicesApp;
//# sourceMappingURL=App.js.map