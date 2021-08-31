const User = require('../models/User');
const Post = require('../models/Post');

module.exports = {
  async index (req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'posts' }
    });

    return res.json(user.posts);
  },

  async findById(req, res) {
    const { user_id } = req.params;
    const user = await User.findAll({
      where: {
        user_id: user_id
      }
    });

    return res.json(user);
  },

  async update(req, res) {
    const { id, user_id, name, city, email, password } = req.body;

    const user = await User.update({ id, user_id, name, city, email, password }, {
      where: {
        id: id,
        user_id: user_id
      }
    });

    return res.json(user);
  },

  async delete(req, res) {
    const { id, user_id } = req.params;
    const user = await User.destroy({
      where: {
        id: id,
        user_id: user_id
      }
    });

    return res.json(user);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { description, image_url, latitude, longitude } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const post = await Post.create({ description, image_url, latitude, longitude, user_id });

    return res.json(post);
  }
};
