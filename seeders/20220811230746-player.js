'use strict'
const falso = require('@ngneat/falso')
const { Coach, sequelize } = require('../models')

// positions: pitcher, catcher, first baseman, second baseman, third baseman, shortstop, left fielder, center fielder and right fielder (9)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const players = await Promise.all(
      [...Array(12)].map(async () => {
        let coach = await Coach.findOne({
          order: sequelize.random(),
          raw: true
        })
        let firstName = `${falso.randFirstName()}`
        let lastName = `${falso.randLastName()}`

        let primaryPositionMath = falso.randNumber({ min: 0, max: 8 })
        let primaryPosition

        switch (primaryPositionMath) {
          case 0:
            primaryPosition = 'Pitcher'
            break
          case 1:
            primaryPosition = 'Catcher'
            break
          case 2:
            primaryPosition = 'First Baseman'
            break
          case 3:
            primaryPosition = 'Second Baseman'
            break
          case 4:
            primaryPosition = 'Third Baseman'
            break
          case 5:
            primaryPosition = 'Short Stop'
            break
          case 6:
            primaryPosition = 'Center Fielder'
            break
          case 7:
            primaryPosition = 'Right Fielder'
            break
          case 8:
            primaryPosition = 'Left Fielder'
        }

        let secondaryPosition

        const generateSecondaryPos = (primary) => {
          let secondaryPositionMath = falso.randNumber({ min: 1, max: 9 })

          switch (secondaryPositionMath) {
            case 0:
              secondaryPosition = 'Pitcher'
              break
            case 1:
              secondaryPosition = 'Catcher'
              break
            case 2:
              secondaryPosition = 'First Baseman'
              break
            case 3:
              secondaryPosition = 'Second Baseman'
              break
            case 4:
              secondaryPosition = 'Third Baseman'
              break
            case 5:
              secondaryPosition = 'Short Stop'
              break
            case 6:
              secondaryPosition = 'Center Fielder'
              break
            case 7:
              secondaryPosition = 'Right Fielder'
              break
            case 8:
              secondaryPosition = 'Left Fielder'
          }

          if (secondaryPosition !== primary) {
            return secondaryPosition
          } else {
            generateSecondaryPos(primaryPosition)
          }
        }

        generateSecondaryPos(primaryPosition)

        return {
          name: `${firstName} ${lastName}`,
          email: `${firstName}.${lastName}@gmail.com`,
          password: `1234`,
          proPic: `${falso.randAvatar()}`,
          primaryPosition: primaryPosition,
          secondaryPosition: `${secondaryPosition}`,
          height: falso.randNumber({ min: 60, max: 80 }),
          weight: falso.randNumber({ min: 110, max: 250 }),
          age: falso.randNumber({ min: 12, max: 16 }),
          isActive: falso.randBoolean(),
          coachId: coach.id
        }
      })
    )
    return queryInterface.bulkInsert('players', players)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('players', null, {})
  }
}
