const mdlAlunos = require("../model/mdlAlunos");

const getAllAlunos = (req, res) =>
  (async () => {
    let registro = await mdlAlunos.getAllAlunos();
    res.json({ status: "ok", "registro": registro });
  })();

  module.exports = {
    getAllAlunos,
  };