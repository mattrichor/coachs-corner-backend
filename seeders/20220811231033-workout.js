'use strict'
const { Coach, Player, sequelize } = require('../models')
const falso = require('@ngneat/falso')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('workouts', [
      {
        title: '',
        description: '',
        completionDate: new Date().toDateString(),
        skillIncrease: parseInt(falso.randNumber({ min: 1, max: 10 })),
        playerId: parseInt(falso.randNumber({ min: 1, max: 12 }))
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('workouts', null, {})
  }
}
