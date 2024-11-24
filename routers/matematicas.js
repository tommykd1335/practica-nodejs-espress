const express = require('express');
const {matematicas}= require('../datos/cursos.js').infoCursos;
const routerMatematicas = express.Router();

function ordenarVistas(req, res, resultados) {
  if(req.query.ordenar === 'vistas'){
    res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)))
  }
}
//matematicas 

routerMatematicas.get('/', (req, res)=>{
  res.send(JSON.stringify(matematicas))
  ordenarVistas(req, res, resultados)
})

routerMatematicas.get('/:tema', (req, res)=>{
  const tema = req.params.tema;
  const resultados = matematicas.filter(curso => curso.tema === tema)

  if (resultados.length===0){
    return res.status(404).send(`No se encontrarosn cursos de ${tema}`)
  }
  ordenarVistas(req, res, resultados)
  res.send(JSON.stringify(resultados))
})

module.exports = routerMatematicas;