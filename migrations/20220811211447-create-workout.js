'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('workouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      completionDate: {
        type: Sequelize.STRING
      },
      skillIncrease: {
        type: Sequelize.INTEGER
      },
      playerId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'players',
          key: 'id'
        }
      },
      // skillId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'skills',
      //     key: 'id'
      //   }
      // },
      createdAt: {
        field: 'createdAt',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        field: 'updatedAt',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('workouts')
  }
}
