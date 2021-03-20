module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define('usuarios', {
    id_usuarios:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    foto_perfil: {
      type: DataTypes.STRING,
    },
    createdAt:{
      type: DataTypes.DATE,
    },
    updatedAt:{
      type: DataTypes.DATE,
    }
  });

  return usuarios;
};