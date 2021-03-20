const { usuarios } = require('../models');
const bcrypt = require('bcryptjs');

const UsuarioController = {
  create: async (req, res) => {
    const { nome, senha, fotoPerfil } = req.body;
    const hashPassword = bcrypt.hashSync(senha, 8);

    try {
      let find = await usuarios.findAll({
        where: {
          nome,
        },
      });
      if (find.length === 0) {
        await usuarios.create({
          nome,
          senha: hashPassword,
          fotoPerfil,
        });
        res.send({ status: true, msg: 'Usuario cadastrado com sucesso' });
      } else {
        res.send({ status: true, msg: 'Usuario já existe' });
      }
    } catch (error) {
      res.send({ status: false, msg: error });
    }
  },
  listAll: async (req, res) => {
    try {
      let list = await usuarios.findAll();
      res.send({ status: true, lista: list });
    } catch (error) {
      res.send({ status: false, msg: error });
    }
  },
  login: async (req, res) => {
    const { nome, senha } = req.body;

    try {
      const [usuario] = await usuarios.findAll({
        where: {
          nome,
        },
      });

      if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
        return res.send({ status: true, msg: 'Nome ou senha errados!' });
      } else {
        return res.send({ status: true, msg: 'Logado com sucesso' });
      }
    } catch (error) {
      return res.send({ status: false, msg: error });
    }
  },
};

module.exports = UsuarioController;
