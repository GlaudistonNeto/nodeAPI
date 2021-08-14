const Post = require('../models/Post');
const Evaluation = require('../models/Evaluation');

module.exports = {
  async index(req, res) {
    const { post_id } = req.params;

    const post = await Post.findByPk(post_id, {
      include: { association: 'evaluations' }
    });

    return res.json(post.evaluations);
  },

  async store(req, res) {
    const { post_id } = req.params;
    const { review, rate } = req.body;

    const post = await Post.findByPk(post_id);

    if (!post) {
      return res.status(400).json({ error: 'Post not found' })
    }

    const evaluation = await Evaluation.create({ review, rate, post_id });

    return res.json(evaluation);
  }
};
