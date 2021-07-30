'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('news', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.TEXT
      },
      featured_image: {
        type: Sequelize.STRING
      },
      featured: {
        type: Sequelize.BOOLEAN
      },
      views: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM('Draft', 'Pending', 'Scheduled', 'Published')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('news');
  }
};