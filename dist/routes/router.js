"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien'
    });
});
router.post('/mensajes', (req, res) => {
    const cuerpo = req.body.body; // obtenemos el cuerpo
    const de = req.body.from; // obtenemos el de
    res.json({
        ok: true,
        cuerpo,
        de
    });
});
router.post('/mensajes/:id', (req, res) => {
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
exports.default = router;
