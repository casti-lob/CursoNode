const express = require('express');

const {programacion} =require ('../datos/cursos.js').infoCursos

const routerProgramacion = express.Router();

//Middleware
routerProgramacion.use(express.json());




routerProgramacion.get('/', (req, res)=>{
    res.send(JSON.stringify(programacion));
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

routerProgramacion.post('/',(req, res)=>{
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(JSON.stringify(programacion));

});

routerProgramacion.put('/:id',(req, res)=>{
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice != -1){
        programacion[indice] = cursoActualizado;
        res.send(JSON.stringify(programacion));
    }else{
        return res.status(404).send(`No se encuentra curso con id ${id}`)
    }

    
})

routerProgramacion.patch('/:id', (req, res)=>{
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso=> curso.id == id);
    if (indice != -1){
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar, infoActualizada);
        res.send(JSON.stringify(programacion));
    }else{
        return res.status(404).send(`No se encuentra curso con id ${id}`)
    }
});

routerProgramacion.delete('/:id', (req, res)=>{
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >=0){
        programacion.splice(indice, 1);

    }
    res.send(JSON.stringify(programacion))
})

module.exports = routerProgramacion;