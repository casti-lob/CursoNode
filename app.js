const express = require('express');
const app = express();

const {infoCursos} = require('./cursos.js')

// Routing
app.get('/',(req, res)=>{
    res.send('Mi primer servidor. Cursos 🌚🌚🌚.')
});

app.get('/api/cursos', (req, res)=>{
    res.send(JSON.stringify(infoCursos));
});

app.get('/api/cursos/programacion/:lenguaje',(req, res)=>{

    const leng = req.params.lenguaje;
    const resultado = infoCursos.programacion.filter(curso =>curso.lenguaje ===leng)
    if(resultado.length === 0){
        return res.status(404).send(`No se encuentra curso de ${leng}`)
    }else{
        res.send(JSON.stringify(resultado))
    }
    
})

app.get('/api/cursos/matematicas',(req, res)=>{
    res.send(JSON.stringify(infoCursos.matematicas))
})


const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO} ...`)
});


