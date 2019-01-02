
import express from 'express';
import { SERVER_PORT } from '../global/enviropment';

export default class Server {
    
    public app: express.Application; // de tipo express
    public port: number;

    constructor() {
        this.app = express();
        this.port = SERVER_PORT;
    }

    // metodo para levantar el servidor
    start( callback: Function ) {
        this.app.listen( this.port, callback );
    }

}