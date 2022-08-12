'use strict'
const falso = require('@ngneat/falso')
const { Coach, Player, sequelize } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const items = await Promise.all(
      [...Array(72)].map(async () => {
        let customer = await Customer.findOne({
          order: sequelize.random(),
          raw: true
        })
        let player = await Player.findOne({
          order: sequelize.random(),
          where: { customer_id: { [Op.not]: customer.id } },
          raw: true
        })
        return {
          size: falso.randClothingSize(),
          color: falso.randColor(),
          price: falso.randNumber(),
          qtn: falso.randNumber({ min: 1, max: 6 }),
          customer_id: customer.id,
          cart_id: cart.id
        }
      })
    )
    return queryInterface.bulkInsert('items', items)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('items')
  }
}
