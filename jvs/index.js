/* La idea es hacer una mini tienda de tokens para un negocio de tokens que te puedan intercambiar.
Como me sugirio el tutor corrector mejor que no seguir trabajando en un juego de azar */

const tokens = [] //Defino el Array de productos

/* ESTOS SON LOS VALORES QUE YO PONDRIA POR DEFECTO
  {id:1, nombre:"Platino", precio: 1000},
  {id:2, nombre:"Oro", precio: 800},
  {id:3, nombre:"Plata", precio: 600},
  {id:4, nombre:"Cobre", precio: 300},
  {id:5, nombre:"Estaño", precio: 100},
*/

const tokens_comprados = [] //Defino los productos que compro

class Producto {
  constructor(id, nombre, precio) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
  }
}
// Busqueda de token
function seleccionarToken(id) {
  return tokens.find((item) => item.id === id) || null
}

function meterEnCompras(token) {
  tokens_comprados.push(token)
}

let cargarToken = true

while (cargarToken) {
  //Valores de los tokens libres escribir
  let id_token = tokens.length + 1
  let nombre_token = prompt('Nombre del Token:')
  let precio_token = parseFloat(prompt('Precio del Token'))
  let token = new Producto(id_token, nombre_token, precio_token)

  //Agregar tokens al Array de tokens
  tokens.push(token)
  //Cortar subida de datos
  cargarToken = confirm('Quieres añadir mas Tokens?')
}

cargarToken = true

while (cargarToken) {
  let contenido_tokens = ''
  for (let token of tokens) {
    contenido_tokens +=
      token.id + '- ' + token.nombre + '€' + token.precio + '\n'
  }
  //Indicamos token ID
  let id_token = parseInt(prompt('Selecciona tu Token:\n' + contenido_tokens))

  //Buscamos el token
  let token = seleccionarToken(id_token)

  if (token != null) {
    //Añadimos token a la compra
    meterEnCompras(token)
  } else {
    alert('Este Token con ID numero: ' + id_token + ' no esta disponible')
  }

  cargarToken = confirm('Quieres añadir mas Tokens?')
}

let suma_total = 0
contenido_tokens = ''

/*for (let tok of tokens_comprados) {
  let token = new Producto(tok.id, tok.nombre, tok.precio)
  suma_total += token.precio;
  alert('Total Token:\n\n' + contenido_tokens + '€' + suma_total)
} */
tokens_comprados.forEach((tok) => {
  suma_total += tok.precio
})
alert('Total Token:\n\n' + contenido_tokens + '€' + suma_total)

