const express = require('express');
const app = express();




const  maria  = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', maria)

const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion',routerProgramacion);



const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO} ...`)
});


