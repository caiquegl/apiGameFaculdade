'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('usuarios', {
    id_usuarios: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nome: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    senha: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    foto_perfil: {
      type: Sequelize.STRING,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: async (queryInterface, Sequelize) =>  queryInterface.dropTable('usuarios'),
};
