/* La idea es hacer una mini tienda de tokens para un negocio de tokens que te puedan intercambiar.
Como me sugirio el tutor corrector mejor que no seguir trabajando en un juego de azar */

const tokens = []//Defino el Array de productos

/* ESTOS SON LOS VALORES QUE YO PONDRIA POR DEFECTO
  {id:1, nombre:"Platino", precio: 1000},
  {id:2, nombre:"Oro", precio: 800},
  {id:3, nombre:"Plata", precio: 600},
  {id:4, nombre:"Cobre", precio: 300},
  {id:5, nombre:"Estaño", precio: 100},
*/

const tokens_comprados = []; //Defino los productos que compro

class Producto {
  constructor (id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;

  }
}
// Busqueda de token
function seleccionarToken(id) {
  return (tokens.find(item => item.id === id) || null);
}

function meterEnCompras(token) {
  tokens_comprados.push(token);
}

let cargarToken = true;

while (cargarToken) { //Valores de los tokens libres escribir
  let id_token = tokens.length + 1;
  let nombre_token = prompt("Nombre del Token:");
  let precio_token = parseFloat(prompt("Precio del Token"));
  let token = new Producto(id_token, nombre_token, precio_token);

  //Agregar tokens al Array de tokens
  tokens.push(token);
  //Cortar subida de datos
  cargarToken = confirm("Quieres añadir mas Tokens?");
  
} 

 cargarToken = true;
 
 
 while (cargarToken) {
  let contenido_tokens = "";
  for (let token of tokens) {
    contenido_tokens += token.id + "- " + token.nombre + "€" + token.precio + "\n";


  }
  //Indicamos token ID
  let id_token = parseInt(prompt("Selecciona tu Token:\n" + contenido_tokens));
  
  //Buscamos el token
  let token = seleccionarToken(id_token);
  
  if (token != null) {
    //Añadimos token a la compra
    meterEnCompras(token)
  } else {
    alert("Este Token con ID numero: " + id_token + " no esta disponible")

    }
  
  
  

    cargarToken = confirm("Quieres añadir mas Tokens?");
  }
 
let suma_total = 0;
contenido_tokens = " ";

for (let tok of tokens_comprados) {
     let token = new Producto(tok.id, tok.nombre, tok.precio);
     suma_total += token.precio;
     alert("Total Token:\n\n" + contenido_tokens + "€" + suma_total);
}
 













































/*Me gustaria crear un juego de azar, empezamos por recolectar datos basicos, nombre, apellido, sexo, etc..
Aqui tenemos un algoritmo con condicional ( function ) */
/* let sexo = prompt('Hola, es usted Hombre o Mujer?').toLocaleLowerCase()
let nombre = prompt('Introduzca su nombre')
let apellido = prompt('Introduzca su apelllido' + ' ' + nombre)
function validar_sexo(sexo) {
  if (sexo == 'hombre') {
    alert('Hola' + ' ' + 'Sr.' + ' ' + nombre + ' ' + apellido)
  } else {
    alert('Hola' + ' ' + 'Sra.' + ' ' + nombre + ' ' + apellido)
  }
}
validar_sexo(sexo)
if (nombre == null || apellido == null) {
  alert('Error! Introduzca correctamente su nombre y apellido')
} else if (nombre.length == 0 && apellido.length == 0) {
  alert('Error! Introduzca correctamente su nombre y apellido')
}
if (sexo == 'hombre') {
  alert(
    'Como se encuentra hoy' +
      ' ' +
      'Sr.' +
      ' ' +
      nombre +
      ' ' +
      apellido +
      ' ' +
      '?',
  )
} else {
  alert(
    'Como se encuentra hoy' +
      ' ' +
      'Sra.' +
      ' ' +
      nombre +
      ' ' +
      apellido +
      ' ' +
      '?',
  )
}
 // Aqui tenemos nuestro array de idiomas, la idea es que cada jugador seleccione su idioma ( mas adelante para poder explicar las instrucciones del juego en su idioma) este array podria ir al inicio del todo para que ya empiece con sus datos basicos.
console.log(idioma[2]); // Aqui tenemos en consola lo que podria ser una llamda de array al idioma Ingles.
//Aqui he hecho el algoritmo ciclo del ejercicio para la entrega
var jugador = {sexo, nombre, apellido}; // Esot es un bojeto con los datos del jugador 
console.log(jugador);
var min = 1
var max = 5
var aleatorio = Math.floor(Math.random() * max - min + 1) + min
var intentos = 0
var adivina_numero
function juego(adivina_numero) { 
  console.log(aleatorio); // Aqui cuando llega a la parte del juego en ete console.log podemos ver que numero aleatorio se ha creado.
  for (intentos; intentos < 5; intentos++) {
    adivina_numero = parseInt(
      prompt(
        'Vamos a jugar' +
          ' ' +
          nombre +
          ' ' +
          ',adivina que número estoy pensando del' +
          ' ' +
          min +
          ' ' +
          'al' +
          ' ' +
          max +
          ' ' +
          ',escribelo aqui debajo',
      ),
    )
    if (adivina_numero >= min && adivina_numero <= max) {
      if (adivina_numero > aleatorio) {
        alert('El número que estoy pensando es más bajo')
      } else if (adivina_numero < aleatorio) {
        alert('El número que estoy pensando es más alto')
      }
    } else {
      alert('Debes de poner un número del' + ' ' + min + ' ' + 'al' + ' ' + max)
    }
    if (adivina_numero == aleatorio) {
      alert(
        'Feliciades, acertaste el número que estaba pensando' +
          ' ' +
          nombre +
          '!' +
          ' ' +
          'lo adivinaste en' +
          ' ' +
          (intentos + 1) +
          ' ' +
          'intentos!',
      )
    } else if (adivina_numero != aleatorio) {
      alert('Intentalo de nuevo')
    } else if (adivina_numero == aleatorio) {
      break
    }
  }
}
juego(adivina_numero) */

