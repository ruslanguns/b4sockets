

import { Router, Request, Response } from 'express';

const router = Router();


router.get('/mensajes', ( req: Request, res: Response) => {
    
    res.json({
        ok: true,
        mensaje: 'Todo esta bien'
    });
});

router.post('/mensajes', ( req: Request, res: Response) => {

    const cuerpo = req.body.body; // obtenemos el cuerpo
    const de = req.body.from; // obtenemos el de
    
    res.json({
        ok: true,
        cuerpo,
        de
    });
});

router.post('/mensajes/:id', ( req: Request, res: Response) => {

    const cuerpo = req.body.body; // obtenemos del body el campo: cuerpo
    const de = req.body.from; // obtenemos del body el campo: de
    const id = req.params.id; // obtenemos el parametro ID desde el URL
    
    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});


export default router;
