const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    demand: false,
    alias: 'c'
}

const argv = require('yargs').command('crear', 'Se crea una nueva tarea. --description=<String> o -d=<String>', {
    descripcion,
    completado
}).command('listar', 'Se listan todas o una tarea segun descripcion, si se especifica -c se listan las tareas completadas. --description=<?String> o -d=<?String>', {
    completado
}).command('actualizar', 'Se actualiza tarea segun descripcion, se especifica el estado completado con true o false --completado=<true/false> o -c=<true/false>. --description=<String> o -d=<String>', {
    descripcion,
    completado
}).command('borrar', 'Se borra tarea segun descripcion, devuelve true o false, --description=<String> o -d=<String>', {
    descripcion
}).help().argv


module.exports = {
    argv
}