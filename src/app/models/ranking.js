module.exports = (sequelize, DataTypes) => {
  const rankings = sequelize.define('rankings', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    id_usuario: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    pontuacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vidas: {
      type: DataTypes.STRING,
    },
    ultima_fase: {
      type: DataTypes.STRING,
    },
  });

  return rankings;
};
