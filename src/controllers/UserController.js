const User = require('../models/User');
<<<<<<< HEAD
const bcrypt = require('../util/bcrypt');
module.exports = {
  async store(req, res) {
    const { name, age, city, email, password } = req.body;
    
    const hash = await bcrypt.generateHash(password);
    const user = await User.create({ name, age, city, email, password: hash });

    return res.json(user);
=======
const bcrypt = require('bcrypt')
const cryptography = require('../util/cryptography');
module.exports = {
  async store(req, res) {
    const { name, age, city, email, password } = req.body;
    let hashPassword = await cryptography.generateHash(password);
    console.log(hashPassword)

>>>>>>> 2ca0540d157d19861e4eb5f4d1c4107eea6934d5
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
