const express = require('express');

const {programacion} =require ('../datos/cursos.js')

const routerProgramacion = express.Router();

app.use('/api/cursos/programacion', routerProgramacion)

app.get('/',(req, res)=>{
    res.send('Mi primer servidor. Cursos 🌚🌚🌚.')
});

app.get('/api/cursos', (req, res)=>{
    res.send(JSON.stringify(infoCursos));
});


routerProgramacion.get('/:lenguaje',(req, res)=>{

    const leng = req.params.lenguaje;
    const resultado = infoCursos.programacion.filter(curso =>curso.lenguaje ===leng)
    if(resultado.length === 0){
        return res.status(404).send(`No se encuentra curso de ${leng}`)
    }else if(req.query.ordenar==='visitas'){
        return res.send(JSON.stringify(resultado.sort((a,b)=> b.visitas - a.visitas)))
    }else{
        res.send(JSON.stringify(resultado))

    }
    
})
