const User = require('../models/User');

module.exports = {

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async store(req, res) {
    const { name, age, city, email, password } = req.body;

    const user = await User.create({ name, age, city, email, password });

    return res.json(user);
  }
};
