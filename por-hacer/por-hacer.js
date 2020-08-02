const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) console.log(err)
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: 'false'
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = (completado) => {
    cargarDB();

    if (completado) {
        var nuevoListado = listadoPorHacer.filter(tarea => tarea.completado == completado);
        return nuevoListado;
    } else console.log(listadoPorHacer);
}


const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else
        return false;
}


const borrar = (descripcion) => {
    cargarDB()

    let actualizado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)
    if (listadoPorHacer !== actualizado) {
        listadoPorHacer = actualizado;
        guardarDB();
        return true;
    }
    return false;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};