const User = require('../models/User');
const bcrypt = require('../util/bcrypt');

module.exports = {
  async store(req, res) {
    const { name, age, city, email, password } = req.body;

    User.findOne({where:{ email: email }}).then(user => {
      if (!user == undefined) {
        res.json({ msg:'Este email já está cadastrado.' })
      } else {
        if (
          name !== undefined
        || age !== undefined
        || city !== undefined
        || email !== undefined
        || password !== undefined
        || !password.length >= 6
        ) {
          const hash = await bcrypt.generateHash(password);
          const user = await User.create({ name, age, city, email, password: hash });
      
          return res.json(user);
        } else {
          res.json({ msg:'Todos os campos devem ser devidamente preenchidos!' })
        }
      }
    })
  },

  async auth(req, res) {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({where: { email: email }}).then(user => {
      if (user != undefined) {
        var correct = bcrypt.checkHash(password, user.password)

        if (correct) {
          req.session.user = {
            id: user.id,
            email: user.email
          }
          require.json(req.session.user);
        } else {
          res.json({ msg: 'Senha incorreta.' })
        }
      } else {
        res.json({ msg: 'Email não cadastrado!' })
      }
    })
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
