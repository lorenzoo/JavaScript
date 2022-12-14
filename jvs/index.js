/*Me gustaria crear un juego de azar, empezamos por recolectar datos basicos, nombre, apellido, sexo, etc..
Aqui tenemos un algoritmo con condicional ( function ) */
let sexo = prompt('Hola, es usted Hombre o Mujer?').toLocaleLowerCase()
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
const idioma = ['castellano', 'frances', 'ingles', 'portuges','aleman']; // Aqui tenemos nuestro array de idiomas, la idea es que cada jugador seleccione su idioma ( mas adelante para poder explicar las instrucciones del juego en su idioma) este array podria ir al inicio del todo para que ya empiece con sus datos basicos.
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
juego(adivina_numero)
