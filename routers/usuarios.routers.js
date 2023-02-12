const express = require("express");
const { crearUsuario, actualizarUsuario, eliminarUsuario, buscarUsuarios, listarUsuarios } = require("../controllers/usuario.controller");
const User = require("../models/usuarios.models");
const app = express();

app.get("/api/usuarios/", listarUsuarios);
app.post("/api/usuarios/new", crearUsuario);
app.put("/api/usuarios/update/:id", actualizarUsuario);
app.delete("/api/usuarios/delete/:id", eliminarUsuario);
app.get("/api/usuarios/search/:id", buscarUsuarios);


module.exports = app;