const { Model, DataTypes } = require('sequelize');

class Post extends Model {
  static init(sequelize) {
    super.init({
      description: DataTypes.STRING,
      image_url: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' });
    this.hasMany(models.Evaluation, { foreignKey: 'post_id', as: 'evaluations' });
  }
}

module.exports = Post;

