const { Model, DataTypes } = require('sequelize');

class Evaluation extends Model {
  static init(sequelize) {
    super.init({
      review: DataTypes.INTEGER,
      rate: DataTypes.DECIMAL(2,1),
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Post, { foreignKey: 'post_id',  as: 'postage' });
  }
}

module.exports = Evaluation;
