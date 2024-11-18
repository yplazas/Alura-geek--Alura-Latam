import { conexionApi } from "./conexionApi.js";
import { eliminarProducto } from "./eliminarProducto.js";
const listaProductosContainer = document.querySelector(
    "[data-lista-productos]"
);

//funcion para agregar producto al contenedor
const agregarProducto = (id, nombre, precio, urlImagen) => {
    const producto = document.createElement("div");
    producto.className = "producto";
    producto.innerHTML = `
        <img src="${urlImagen}" alt="${nombre}" />
        <h3>${nombre}</h3>
        <div class="producto-eliminar">
            <p>${precio}</p>
            <button class="delete-btn">
                <svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke"
                    stroke-linecap="round" stroke-linejoin="round" width="24" height="24"
                    stroke-width="2">
                    <path d="M4 7l16 0"></path>
                    <path d="M10 11l0 6"></path>
                    <path d="M14 11l0 6"></path>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                </svg>                                                                                                       
            </button>
        </div>
        `;
    //funcion para eliminar producto por id
    eliminarProducto(id, producto);
    return producto;
};

//funcion para mostrar productos
const mostrarProductos = async () => {
    try {
        const data = await conexionApi.listarProductos();
        data.forEach((producto) =>
            listaProductosContainer.appendChild(
                agregarProducto(
                    producto.id,
                    producto.nombre,
                    producto.precio,
                    producto.urlImagen
                )
            )
        );
    } catch (error) {
        listaProductosContainer.innerHTML = `<h3>ha ocurrido un error al mostrar productos</h3>`;
        console.error("Error al mostrar productos:", error);
    }
};

mostrarProductos();
