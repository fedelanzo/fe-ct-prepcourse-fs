/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   let arr= []
   arr=array.shift()
   return arr
   
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let ar= []
   ar=array.pop()
   return ar
   
}

function obtenerLargoDelArray(array) {
   let a = 0
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
  a= array.length
  return a
}

function incrementarPorUno(array) {
   let result=[]
   for(let i = 0 ; i < array.length ; i++){
      result.push(array[i]+1)
   }
   return result
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   

}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento)
   return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(" ")
}

function arrayContiene(array, elemento) {
   if(array.includes(elemento)){
      return true
   }return false
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
}

function agregarNumeros(arrayOfNums) {
   let a =0
   for( let i = 0; i < arrayOfNums.length; i++){
     a += arrayOfNums[i]
   }
   return a 
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
}

function promedioResultadosTest(resultadosTest) {
   let a= 0
   let b= resultadosTest.length
   let c= 0
   for (let i = 0; i < resultadosTest.length; i++) {
      a += resultadosTest[i] 
      c= a/b
   }
   return c
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
}

function numeroMasGrande(arrayOfNums) {
   let count= 0
   for (let i = 0; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > count ) {
         count= arrayOfNums[i]
      }
      
   }
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return count
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0;
    } else if (arguments.length === 1) {
      return arguments[0];
    } else {
      var producto = 1;
      for (var i = 0; i < arguments.length; i++) {
        producto *= arguments[i];
      }
      return producto;
    }
  }

function cuentoElementos(array) {
   let count = 0
   for (let i = 0; i < array.length; i++) {
      if( array[i]> 18){
        count ++
      }
      
   }
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   return count
}

function diaDeLaSemana(numeroDeDia) {
   if(numeroDeDia > 1 && numeroDeDia <= 6 ){
      return  "Es dia laboral"
   }else if(numeroDeDia == 1 || numeroDeDia== 7 ){
    return "Es fin de semana"
   }
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
}

function empiezaConNueve(num) {
   let count=num.toString()
   if(count[0]==9){
      return true
   }return false
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
}

function todosIguales(array) {
   for (let i = 0; i < array.length; i++) {
     if( array[i] !== array[0]){
         return false
      }
      
   }
   return true
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
}

function mesesDelAño(array) {
   let meses =[]
   let pedidos=["Enero", "Marzo", "Noviembre"]
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      if (pedidos.includes(array[i]) ){
         meses.push(array[i])
      
      
   }
}if(meses.length== pedidos.length){
  return meses
}
return "No se encontraron los meses pedidos"
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let arr=[0]
   let count=1
   do{
     arr.push(6*count)
     count++
   }while(count <= 10)
   return arr
}

function mayorACien(array) {
   let arr=[]
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      if(array[i]>100){
         arr.push(array[i])
      }
   }
   return arr
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
