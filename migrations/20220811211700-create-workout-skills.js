'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('workoutSkills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      workoutId: {
        type: Sequelize.INTEGER
      },
      skillId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        // field: 'createdAt',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        // field: 'updatedAt',
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('workoutSkills')
  }
}
