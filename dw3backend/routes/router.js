const express = require("express");
const routerApp = express.Router();

const appAlunos = require("../apps/alunos/controller/ctlAlunos");
const appCursos = require("../apps/cursos/controller/ctlCursos");
const appLogin = require("../apps/login/controller/ctlLogin");
// middleware that is specific to this router
routerApp.use((req, res, next) => {
  next();
});
routerApp.get("/", (req, res) => {
  res.send("Olá mundo!");
});
//Rotas de Alunos
routerApp.get("/getAllAlunos", appAlunos.getAllAlunos);

//Rotas de Cursos
routerApp.get("/getAllCursos", appCursos.GetAllCursos);

// Rota Login
routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);

module.exports = routerApp;
