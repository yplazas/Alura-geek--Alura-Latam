# Pasos para ejecutar el proyecto de manera correcta

## paso 1:
Abrimos la carpeta del proyecto en visual studio, luego abrimos la terminal para ejecutar el siguiente comando:

```
npm install
```

esto lo hacemos para instalar la dependencia de json server que está agregada en el archivo package.json.

## paso 2:
cuando se haya instalado la dependencia de json server, ejecutamos el siguiente comando:

```
npx json-server --watch productos.json --port 3000
```
con este comando exponemos un endpoint que permite que el proyecto de aluraGeek funcione, es decir, que se pueda mostrar, agregar y eliminar productos.