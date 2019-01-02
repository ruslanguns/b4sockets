
import express from 'express';
import { SERVER_PORT } from '../global/enviropment';
import socketIO from 'socket.io';
import http from 'http'; // socket.io y http son totalmente compatibles
import * as socket from '../sockets/sockets';

export default class Server {

    private static _instance: Server;
    
    public app: express.Application; // de tipo express
    public port: number;

    // Esta es la propiedad encargada de todos los eventos de los sockets
    public io: socketIO.Server;
    public httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;

        // inicializamos el socket.io y httpServer
        this.httpServer = new http.Server( this.app );
        this.io = socketIO( this.httpServer);

        this.escucharSockets();
    }

    public static get instance() {
        // Si ya existe una instancia regresa este this()
        return this._instance || ( this._instance = new this() );
    }

    // Lo creamos privado porque solo se va a llamar al momento de la inicializacion de la clase
    private escucharSockets() {
        console.log('Escuchando conexiones — Sockets');

        this.io.on('connection', cliente => {
            console.log('Cliente Conectado');

            // Mensajes
            socket.mensaje( cliente, this.io );

            // Desconectar
            socket.desconectar( cliente );
            
        });
    }

    // metodo para levantar el servidor
    start( callback: Function ) {
        this.httpServer.listen( this.port, callback );
    }

}