module.exports = (sequelize, DataTypes) => {

  const Posts = sequelize.define("Posts", {
    discription: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });

  return Posts;
};
