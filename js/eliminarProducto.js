import { conexionApi } from "./conexionApi.js";

//funcion para eliminar producto por id
export const eliminarProducto = (id, producto) => {
    // Seleccionar y manipular el botón eliminar
    const botonEliminar = producto.querySelector(".delete-btn");
    botonEliminar.addEventListener("click", async () => {
        try {
            await conexionApi.eliminarProducto(id);
            alert("Producto Eliminado correctamente");
        } catch (error) {
            console.error("Error al eliminar el producto", error);
            alert("Hubo un error al eliminar el producto. Intente nuevamente.");
        }
    });
};
