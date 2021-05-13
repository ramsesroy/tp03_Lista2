let fs = require('fs');
const tareas = JSON.parse(fs.readFileSync('./tareas.json'))
module.exports = {

    cartel:function(tarea) {
        console.log("....Espere un momento")
        console.log(`    ${tarea} Ha sido exitoso.`)
    
    },
   crear:function(titulo,estado = 'pendiente'){//agrego informacion al json parseado
       let nuevaTarea={ //con los parametros creo una nueva tarea
           titulo,
           estado
       }
       tareas.push(nuevaTarea) // le agrego una nueva tarea
       this.escribirJSON(tareas);
       this.cartel('Guardar tarea');

   },
   listar : function () {
          tareas.forEach(e => {
            console.log(`
            Titulo: ${e.titulo}.
            Estado: ${e.estado}.
            `) 
        });     
   },

   escribirJSON: function (tareas) {
    fs.writeFileSync('./tareas.json', JSON.stringify(tareas),'utf-8')

   },
   filtrarPorEstado:function(estado) {
    let json = JSON.parse(fs.readFileSync('./tareas.json'))
       json = tareas.filter(tarea => tarea.estado === estado)
       json.forEach(e=>{
        console.log(`
            Titulo: ${e.titulo}
            Estado: ${e.estado} 
            `);
       })
       this.cartel('Filtrar datos');
       
   }
}
