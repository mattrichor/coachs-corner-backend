'use strict'
const falso = require('@ngneat/falso')
const { Player } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const players = await Player.findAll({ raw: true })
    const skillsArray = []
    players.forEach((player) =>
      skillsArray.push(
        {
          skillName: 'Speed',
          skillLevel: falso.randNumber({ min: 25, max: 85 }),
          playerId: player.id
        },
        {
          skillName: 'Catching',
          skillLevel: falso.randNumber({ min: 25, max: 85 }),
          playerId: player.id
        },
        {
          skillName: 'Pitch Control',
          skillLevel: falso.randNumber({ min: 25, max: 85 }),
          playerId: player.id
        },
        {
          skillName: 'Pitch Velocity',
          skillLevel: falso.randNumber({ min: 25, max: 85 }),
          playerId: player.id
        },
        {
          skillName: 'Contact',
          skillLevel: falso.randNumber({ min: 25, max: 85 }),
          playerId: player.id
        },
        {
          skillName: 'Power',
          skillLevel: falso.randNumber({ min: 25, max: 85 }),
          playerId: player.id
        }
      )
    )
    console.log(skillsArray)
    return queryInterface.bulkInsert('skills', skillsArray)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('skills')
  }
}
