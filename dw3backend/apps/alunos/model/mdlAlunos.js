const db = require("../../../databases/databaseConfig");

const getAllAlunos = async () => {
  return (
    await db.query(
      "SELECT *, (SELECT descricao from CURSOS where cursoid = alunos.cursoid)" +
        "FROM alunos where deleted = false ORDER BY nome ASC"
    )
  ).rows;
};

module.exports = {
    getAllAlunos,
  };