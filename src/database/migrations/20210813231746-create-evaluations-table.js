'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('evaluations', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    post_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'posts', key: 'id' },
      onUpdate: 'CASCADE',
      ondelete: 'CASCADE',
    },
    review: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    rate: {
      type: Sequelize.DECIMAL(2,1),
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
  });
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('evaluations');
  }
};
