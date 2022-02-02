const express = require("express");
const fs = require("fs");
const Container = require("./Container.js");

const userService = new Container();

const app = express();

const pathToProducts = "./files/products.json";

//server en puerto 8080
const server = app.listen(8080, () => {
  console.log("listening on port 8080");
});

//la ruta ./productos nos muesta un array con todos los productos del json
app.get("/productos", (req, res) => {
  userService.getAll().then((result) => res.send(result));
});

// la ruta ./productosRandom nos muestra un producto al azar del listado de productos.
app.get("/productoRandom", (req, res) => {
  userService.getByRandomId().then((result) => res.send(result));
});
