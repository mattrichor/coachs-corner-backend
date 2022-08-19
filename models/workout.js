'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    static associate(models) {
      Workout.belongsTo(models.Player, {
        as: 'workoutPlayers',
        foreignKey: 'playerId'
      })
      Workout.belongsTo(models.Skill, {
        as: 'skills',
        foreignKey: 'skillId'
      })
    }
  }
  Workout.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      completionDate: DataTypes.STRING,
      skillIncrease: DataTypes.INTEGER,
      completed: { type: DataTypes.BOOLEAN, defaultValue: false },
      playerId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'players',
          key: 'id'
        }
      },
      skillId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'skills',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Workout',
      tableName: 'workouts'
    }
  )
  return Workout
}
