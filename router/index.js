const express = require("express");
const router = express.Router();
const bodyParse = require("body-parser");

router.get("/viajes",(req,res)=>{
    const valores = {
        viajes:req.query.viajes,
        destino:req.query.destino,
        nombre:req.query.nombre,
        edad:req.query.edad,
        precio:req.query.precio,
        tipo:req.query.tipo
    }
    res.render('viajes.html', valores);
})

router.post("/viajes",(req,res)=>{
    const valores = {
        viajes:req.body.viajes,
        destino:req.body.destino,
        nombre:req.body.nombre,
        edad:req.body.edad,
        precio:req.body.precio,
        tipo:req.body.tipo
    }
    res.render('viajes.html', valores);
})

module.exports = router;