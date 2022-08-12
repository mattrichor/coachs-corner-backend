'use strict'
const { Workout, Skill } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const workouts = await Workout.findAll({ raw: true })
    const skills = await Skill.findAll({ raw: true })
    // console.log('hello??')
    const list = skills.map((s) => ({
      workoutId: workouts[Math.floor(Math.random() * workouts.length)].id,
      skillId: s.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('workoutSkills', list)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('workoutSkills')
  }
}
