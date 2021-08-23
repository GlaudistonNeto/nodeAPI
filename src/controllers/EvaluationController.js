const Post = require('../models/Post');
const Evaluation = require('../models/Evaluation');

module.exports = {
  async store(req, res) {
    const { post_id, user_id } = req.params;
    const { review, rate } = req.body;

    const post = await Post.findByPk(post_id);

    if (!post) {
      return res.status(400).json({ error: 'Post not found' })
    }

    const evaluation = await Evaluation.create({ review, rate, post_id, user_id });

    return res.json(evaluation);
  },

  async index(req, res) {
    const { post_id, user_id } = req.params;

    const post = await Post.findByPk(post_id, {
      include: { association: 'evaluations' }
    });
    const user = await Post.findByPk(user_id, {
      include: { association: 'owner' }
    });

    return res.json(post.evaluations, user.evaluation);
  },

  async update(req, res) {
    const { post_id, description, image_url, latitude, longitude } = req.body;

    const user = await User.update({ post_id, description, image_url, latitude, longitude }, {
      include: { association: 'evaluations' }
    });
    const post = await Post.findByPk(user_id, {
      include: { association: 'owner' }
    });

    return res.json(user, post);
  },

  async delete(req, res) {
    const { post_id } = req.params;
    const user = await User.destroy({
      include: { association: 'evaluations' }
    });
    const post = await Post.findByPk(post_id, {
      include: { association: 'owner' }
    });

    return res.json();
  }
};
