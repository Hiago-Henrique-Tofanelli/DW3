const mdlCursos = require("../model/mdlCursos");

const GetAllCursos = (req, res) =>
  (async () => {
    let registro = await mdlCursos.GetAllCursos();
    res.json({ status: "ok", registro: registro });
  })();

const GetCursoByID = (req, res) =>
  (async () => {
    const cursoID = parseInt(req.body.cursoid);
    let registro = await mdlCursos.GetCursoByID(cursoID);

    res.json({ status: "ok", registro: registro });
  })();

  module.exports = {
    GetAllCursos,
  };