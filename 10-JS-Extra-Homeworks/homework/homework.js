// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array = [];
  for (const property in objeto) {
    array.push([property, objeto[property]]);
  }
  return array;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  let array = [];
  let obj = {};
  let letras = "";
  let cantidad = 0;
  for (let i = 0; i < string.length; i++) {
    array.push(string[i]);
  }

  for (let x = 0; x < array.length; x++) {
    letras = array.filter((word) => word === array[x]);
    cantidad = letras.length;
    obj[letras[0]] = cantidad;
  }
  return obj;
}

console.log(numberOfCharacters("aaaaaxcasawwwrrr"));

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let letraMayus = "";
  let letraMinus = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      letraMayus += s[i];
    } else {
      letraMinus += s[i];
    }
  }
  let palabra = letraMayus + letraMinus;
  return palabra;
}

console.log(capToFront("AeIoU"));

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  /* GUARDA CADA PALABRA EN UN ARRAY */
  str += " ";
  let array = [];
  let palabra = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== " ") {
      palabra += str.charAt(i);
    } else {
      array.push(palabra);
      palabra = "";
    }
  }
  /* 1. INVIERTE EL ORDEN DE LAS LETRAS DE LA PALABRA
     2. AGREGA LAS PALABRAS INVERTIDAS AL ARRAY */
  let array2 = [];
  let strAlreves = "";
  for (let i = 0; i < array.length; i++) {
    let palabra = array[i];
    strAlreves = "";
    for (let x = palabra.length; x > 0; x--) {
      strAlreves += palabra[x - 1];
    }
    array2.push(strAlreves);
  }
  /* CONCATENA TODAS LAS PALABRAS YA INVERTIDAS QUE TIENE EL ARRAY2 */
  let cadenaCompleta = "";
  for (let i = 0; i < array2.length; i++) {
    if (i === array2.length - 1) {
      cadenaCompleta += array2[i];
      break;
    }
    cadenaCompleta += array2[i] + " ";
  }
  return cadenaCompleta;
}
console.log(asAmirror("Abra cadabra pata de cabra"));

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero = "" + numero;
  let array = [];
  for (let i = 0; i < numero.length; i++) {
    array.push(numero[i]);
  }
  let suma1 = 0;
  let suma2 = 0;

  for (let x = 0; x < Math.round(array.length / 2); x++) {
    suma1 += Number (array[x]);
  }

  return suma1;
}
console.log(Math.round(5 / 2));
console.log(capicua(23432));

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
