"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const enviropment_1 = require("./global/enviropment");
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const server = new server_1.default();
/*
* BODYPARSER —
* El BodyParser nos ayudará a convertir
* lo que pasamos en el body / url de las peticiones REST en un formato JSON
*/
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// CORS
server.app.use(cors_1.default({ origin: true, credentials: true }));
// Rutas
server.app.use('/', router_1.default);
server.start(() => {
    console.log(`Servidor corriendo en el puerto ${enviropment_1.SERVER_PORT}`);
});
