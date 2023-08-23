const db = require("../../../databases/databaseConfig");

const GetAllCursos = async () => {
  return (
    await db.query(
      "SELECT * " + "FROM cursos where deleted = false ORDER BY descricao ASC"
    )
  ).rows;
};

const GetCursoByID = async (cursoIDPar) => {
  return (
    await db.query(
      "SELECT * " +
        "FROM cursos WHERE cursoid = $1 and deleted = false ORDER BY descricao ASC",
      [cursoIDPar]
    )
  ).rows;
};