import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { UsuariosLista } from '../classes/usuarios-lista';
import { Usuario } from '../classes/usuario';



export const usuariosConectados = new UsuariosLista();



export const connectarCliente = ( cliente: Socket ) => {

    const usuario = new Usuario( cliente.id );
    usuariosConectados.agregar( usuario );
}



export const desconectar = ( cliente: Socket) => {

    cliente.on('disconnect', () => {
        console.log('Cliente Desconectado');

        usuariosConectados.borrarUsuario( cliente.id );
        
    });
}


// Escuchar mensaje
export const mensaje = ( cliente: Socket, io: socketIO.Server ) => {
    
    cliente.on( 'mensaje', ( payload: { de: string, cuerpo: string } ) => {
        
        console.log( 'Mensaje recibido', payload );

        // emitir algo a todos los usuarios que estan conectados
        io.emit('mensaje-nuevo', payload);
    });
}

// Configurar usuario
export const configurarUsuario = ( cliente: Socket, io: socketIO.Server ) => {

    cliente.on('configurarusuario', (  payload: { nombre: string }, callback: Function  ) => {

        // console.log( payload );
        usuariosConectados.actualizarNombre( cliente.id, payload.nombre );

        callback({
            ok: true,
            mensaje: `Usuario ${ payload.nombre }, configurado`
        });
    });

}

// Configurar usuario
export const testSocket = ( cliente: Socket ) => {

    cliente.on('prueba-socket', (  payload  ) => {

        console.log( payload );

    });

}


