const express = require("express");
const {programacion}= require('../datos/cursos.js').infoCursos;
const routerProgramacion = express.Router();

function ordenarVistas(req, res, resultados) {
    if(req.query.ordenar === 'vistas'){
      res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)))
    }
  }

routerProgramacion.get('/', (req, res)=>{
    res.send(JSON.stringify(programacion))
    ordenarVistas(req, res, resultados)
  })
  
  routerProgramacion.get('/:lenguaje', (req, res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje)
  
    if (resultados.length===0){
      return res.status(404).send(`No se encontrarosn cursos de ${lenguaje}`)
    }
    ordenarVistas(req, res, resultados)
    res.send(JSON.stringify(resultados));
  })
  routerProgramacion.get('/:lenguaje/:nivel', (req, res)=>{
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel)
  
    if (resultados.length===0){
      return res.status(404).send(`No se encontrarosn cursos de ${lenguaje} de nivel ${nivel}`)
    }
  
    res.send(JSON.stringify(resultados));
  })

  module.exports= routerProgramacion;