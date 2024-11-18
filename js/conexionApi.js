const url = "http://localhost:3000/productos";

//metodo get para mostrar productos
const listarProductos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

//metodo post para guardar productos
const enviarProducto = async (nombre, precio, urlImagen) => {
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            urlImagen: urlImagen,
        }),
    });
    const data = await response.json();
    return data;
};

//metodo delete para eliminar productos
const eliminarProducto = async (id) => {
    const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    return data;
};

export const conexionApi = {
    listarProductos,
    enviarProducto,
    eliminarProducto,
};
