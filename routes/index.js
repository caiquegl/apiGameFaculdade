const { Router } = require('express');
const UsuarioController = require('../controllers/usuariosController');
const RankingController = require('../controllers/rankingController');

const routes = Router();

routes.post('/create', UsuarioController.create);
routes.post('/listAll', UsuarioController.listAll);
routes.post('/login', UsuarioController.login);

routes.post('/pontuacao', RankingController.create);
routes.post('/listRanking', RankingController.listAll);
routes.post('/myPosition', RankingController.myPosition);

module.exports = routes;
