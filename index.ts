import Server from './classes/server';
import { SERVER_PORT } from './global/enviropment';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';


const server = new Server();

/* 
* BODYPARSER —
* El BodyParser nos ayudará a convertir 
* lo que pasamos en el body / url de las peticiones REST en un formato JSON
*/
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json());

// CORS
server.app.use( cors({ origin: true, credentials: true }));

// Rutas
server.app.use('/', router);

server.start( () => {
    console.log(`Servidor corriendo en el puerto ${ SERVER_PORT }`);
});