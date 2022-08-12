'use strict'
const falso = require('@ngneat/falso')

const coachFirstName = `${falso.randFirstName()}`
const coachLastName = `${falso.randLastName()}`

const coaches = [...Array(1)].map(() => ({
  name: `${coachFirstName} ${coachLastName}`,
  sport: 'Baseball',
  email: `${coachFirstName}.${coachLastName}@gmail.com`,
  passwordDigest: '1234',
  teamName: falso.randBaseballTeam()
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('coaches', coaches)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('coaches', null, {})
  }
}
