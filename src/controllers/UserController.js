const User = require('../models/User');
const bcrypt = require('bcrypt')
const cryptography = require('../util/cryptography');
module.exports = {
  async store(req, res) {
    const { name, age, city, email, password } = req.body;
    let hashPassword = await cryptography.generateHash(password);
    console.log(hashPassword)

  },

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async findById(req, res) {
    const { id } = req.params;
    const user = await User.findAll({
      where: {
        id: id
      }
    });

    return res.json(user);
  },

  async update(req, res) {
    const { id, name, city, email, password } = req.body;

    const user = await User.update({ id, name, city, email, password }, {
      where: {
        id: id
      }
    });

    return res.json(user);
  },

  async delete(req, res) {
    const { id } = req.params;
    const user = await User.destroy({
      where: {
        id: id
      }
    });

    return res.json(user);
  },

};
