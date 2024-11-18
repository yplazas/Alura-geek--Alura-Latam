import { conexionApi } from "./conexionApi.js";
const botonEnviarDatos = document.getElementById("enviarDatos");
const botonlimpiarDatos = document.getElementById("limpiarDatos");

//funcion para guardar productos
const guardarProducto = async (event) => {
    event.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const urlImagen = document.querySelector("[data-urlImagen]").value;
    const precioFormat = new Intl.NumberFormat("es-CL", {
        currency: "CLP",
        style: "currency",
        useGrouping: true,
    }).format(precio);

    try {
        if (nombre === "" || precio === "" || urlImagen === "") {
            alert("los campos nombre, precio y urlImagen no pueden estar vacios");
            return;
        }
        await conexionApi.enviarProducto(
            nombre.toUpperCase(),
            precioFormat,
            urlImagen
        );
        alert("Producto añadido correctamente");
    } catch (error) {
        alert("error al guardar producto");
        console.error("Error al añadir video:", error);
    }
};

//funcion para limpiar formulario de agregar productos
const limpiarFormulario = () => {
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const urlImagen = document.querySelector("[data-urlImagen]").value;
    nombre.value = "";
    precio.value = "";
    urlImagen.value = "";
};

botonEnviarDatos.addEventListener("click", (event) => guardarProducto(event));
botonlimpiarDatos.addEventListener("click", () => limpiarFormulario());
