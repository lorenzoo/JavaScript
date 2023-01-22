/* La idea es hacer una mini tienda de tokens para un negocio de tokens que se puedan intercambiar.
Como me sugirio el tutor corrector  */



//Defino los productos
const productos = [
    {
        id: "golden_token",
        titulo: "GOLDEN TOKEN",
        imagen: "./TOKENS/golden_token_1.jpg",
        categoria: {
            nombre: "PS-4",
            id: "golden_token"
        },
        precio: 120
    },
    {
        id: "silver_token",
        titulo: "SILVER TOKEN",
        imagen: "./TOKENS/silver_token_1.jpg",
        categoria: {
            nombre: "NINTENDO,PS-4",
            id: "silver_token"
        },
        precio: 100
    },
    {
        id: "platinum_token",
        titulo: "PLATINUM TOKEN",
        imagen: "./TOKENS/platinum_token_1.jpg",
        categoria: {
            nombre: "SEGA",
            id: "platinum_token"
        },
        precio: 150
    },
    {
        id: "bronze_token",
        titulo: "BRONZE TOKEN",
        imagen: "./TOKENS/coper_token_1.jpg",
        categoria: {
            nombre: "NINTENDO,PS-4",
            id: "bronze_token"
        },
        precio: 85
    },
    {
        id: "special_token",
        titulo: "SUPER DUPER",
        imagen: "./TOKENS/special_token_1.jpg",
        categoria: {
            nombre: "PS-4",
            id: "special_token"
        },
        precio: 200
    },
    {
        id: "deal_token",
        titulo: "OFERTA ESPECIAL",
        imagen: "./TOKENS/deal_token_1.jpg",
        categoria: {
            nombre: "NINTENDO,PS-4",
            id: "deal_token"
        },
        precio: 180
    },
];



const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

//creamos la plantilla de producto que se cargara en nuestro html
function cargarProductos(productosElegidos) {

  contenedorProductos.innerHTML = "";

  productosElegidos.forEach(producto => {

      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
          <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
          <div class="producto-detalles">
              <h3 class="producto-titulo">${producto.titulo}</h3>
              <p class="producto-precio">$${producto.precio}</p>
              <button class="producto-agregar" id="${producto.id}">Agregar</button>
          </div>
      `;

      contenedorProductos.append(div);
  })
//actualizamos los botones del producto que se van creando
  actualizarBotonesAgregar();
}

cargarProductos(productos);


//actualizamos los botones del producto que se van creando
function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach(boton => {
      boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if(productosEnCarrito.some(producto => producto.id === idBoton)) {
      const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
      productosEnCarrito[index].cantidad++;
  } else {
      productoAgregado.cantidad = 1;
      productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}

