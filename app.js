let tareas = require('./funcionesDeTareas.js');
let process = require('process');
let titulo = process.argv[3];
let estado = process.argv[4];
let filtrarEstado = process.argv[3];

switch (process.argv[2]) {
    case 'crear':
       
        if(process.argv[3] !== undefined){
            tareas.crear(titulo,estado);
        }else console.log("Error, Ingresar un comando válido");
        break;

    case 'listar':
        tareas.listar(titulo,estado)
        break;

    case 'filtrar':
        if(process.argv[3] !== undefined){
        
            tareas.filtrarPorEstado(filtrarEstado)
        }
        else console.log("Error, Ingresar un comando válido");
        break;

        
    default:
            console.log('Error, Debe ingresar uno de los siguientes comandos : "crear" - "listar" - filtrar"')
              break;
}
