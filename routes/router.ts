

import { Router, Request, Response } from 'express';
import Server from '../classes/server';

const router = Router();


router.get('/mensajes', ( req: Request, res: Response) => {
    
    res.json({
        ok: true,
        mensaje: 'Todo esta bien'
    });
});

router.post('/mensajes', ( req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo; // obtenemos el cuerpo
    const de = req.body.de; // obtenemos el de

    const payload = {
        de,
        cuerpo
    }

    // Conectar REST con Sockets: Instancia del server
    const server = Server.instance;

    // Enviar mensaje a uno o varios usuarios
    server.io.emit('mensaje-nuevo', payload)
    
    res.json({
        ok: true,
        cuerpo,
        de
    });
});

router.post('/mensajes/:id', ( req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo; // obtenemos del body el campo: cuerpo
    const de = req.body.de; // obtenemos del body el campo: de
    const id = req.params.id; // obtenemos el parametro ID desde el URL

    const payload = {
        de,
        cuerpo
    }

    // Conectar REST con Sockets: Instancia del server
    const server = Server.instance;

    // Enviar mensaje a uno o varios usuarios
    server.io.in( id ).emit('mensaje-privado', payload)

    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});


export default router;
