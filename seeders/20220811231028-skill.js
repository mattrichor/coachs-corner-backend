'use strict'
const falso = require('@ngneat/falso')
const { Player } = require('../models')

const skills = [
  {
    playerId: parseInt(1),
    skillLevel: 90,
    skillName: 'Hitting'
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('skills', skills)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('skills')
  }
}
