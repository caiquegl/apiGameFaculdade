'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('rankings', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    id_usuario: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    nome: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    pontuacao: {
      type: Sequelize.STRING,
    },
    vidas: {
      type: Sequelize.STRING,
    },
    ultima_fase: {
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
  down: async (queryInterface, Sequelize) =>  queryInterface.dropTable('rankings'),
  
};
