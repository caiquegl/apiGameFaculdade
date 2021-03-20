const { Router } = require('express');
const UsuarioController = require('./app/controller/usuariosController');
const RankingController = require('./app/controller/rankingController');

const routes = Router();

routes.post('/create', UsuarioController.create);
routes.post('/listAll', UsuarioController.listAll);
routes.post('/login', UsuarioController.login);

routes.post('/pontuacao', RankingController.create);
routes.post('/listRanking', RankingController.listAll);
routes.post('/myPosition', RankingController.myPosition);

module.exports = routes;
