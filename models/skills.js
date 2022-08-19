'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    static associate(models) {
      Skill.belongsTo(models.Player, {
        as: 'skills',
        foreignKey: 'playerId'
      })
      Skill.hasOne(models.Workout, {
        as: 'workoutSkills',
        foreignKey: 'skillId'
      })
    }
  }
  Skill.init(
    {
      playerId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'players',
          key: 'id'
        }
      },

      skillLevel: DataTypes.INTEGER,
      skillName: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Skill',
      tableName: 'skills'
    }
  )
  return Skill
}
