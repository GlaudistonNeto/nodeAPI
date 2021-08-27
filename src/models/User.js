const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      city: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Post, { foreignKey: 'user_id', as: 'posts' });
    this.hasMany(models.Evaluation, { foreignKey: 'rate_id', as: 'rates' });
  }
}

module.exports = User;
