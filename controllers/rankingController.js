const { rankings } = require('../models');

const rankingController = {
  create: async (req, res) => {
    const { id_usuario, pontuacao, vidas, ultima_fase, nome } = req.body;

    try {
      await rankings.create({
        id_usuario,
        pontuacao,
        ultima_fase,
        vidas,
        nome,
      });
      res.send({ status: true, msg: 'Pontuação cadastrada' });
    } catch (error) {
      res.send({ status: false, msg: error });
    }
  },
  listAll: async (req, res) => {
    try {
      let list = await rankings.findAll({
        order: [['pontuacao', 'DESC']],
      });
      res.send({ status: true, list: list });
    } catch (error) {
      res.send({ status: false, msg: error });
    }
  },
  myPosition: async (req, res) => {
    const { id } = req.body;
    try {
      let list = await rankings.findAll({
        where: {
          id_usuario: id,
        },
        order: [['pontuacao', 'DESC']],
      });
      if (list.length === 0) {
        res.send({ status: true, list: 'Sem pontuação ainda' });
      } else {
        res.send({ status: true, list: list[0] });
      }
    } catch (error) {
      res.send({ status: false, msg: error });
    }
  },
};

module.exports = rankingController;
