const argv = require('./config/yargs_config').argv
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');


switch (argv._[0]) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea)
        break;

    case 'listar':
        let listado = porHacer.getListado(argv.completado)

        for (let tarea of listado) {
            console.log(`=============POR HACER==============`.green)
            console.log(tarea)
            console.log(`====================================`.green)
        }
        break;
    case 'actualizar':
        let res = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(res)
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado)
        break;
    default:
        console.log('No se encontro el comando especificado')
        break;
}