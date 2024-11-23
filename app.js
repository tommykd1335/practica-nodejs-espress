const express = require("express");
const app = express();

const {infoCursos} = require('./cursos.js');

app.get('/',(req, res)=>{
  res.send("Mi primer servidor con express")
})

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, ()=>{
  console.log(`el servidor esta escuchando el puerto ${PUERTO}...`)
})