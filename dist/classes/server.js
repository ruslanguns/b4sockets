"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const enviropment_1 = require("../global/enviropment");
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = enviropment_1.SERVER_PORT;
    }
    // metodo para levantar el servidor
    start(callback) {
        this.app.listen(this.port, callback);
    }
}
exports.default = Server;
