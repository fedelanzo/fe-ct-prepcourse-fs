/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   constructor(nombre, apellido, edad, domicilio){
     this.nombre= nombre
     this.apellido= apellido
     this.edad= edad
     this.domicilio= domicilio
   }
   detalle(){
      let obj= {
         nombre: this.nombre,
         apellido: this.apellido,
         edad: this.edad,
         domicilio: this.domicilio
      }
      return obj
   }
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
}

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   let Papa= new Persona("fede", "scurri", 24, "barrio vista de un buen pueblo")
   return Papa
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
}

function agregarMetodo() {
   Persona.prototype.datos= function(){
   return this.nombre + ", " + this.edad + " años"
   }
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
