'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Workout.belongsTo(models.Player, {
        as: 'workoutPlayers',
        foreignKey: 'playerId'
      })
      Workout.hasOne(models.Skill, {
        as: 'skillWorkouts',
        foreignKey: 'workoutId'
      })
    }
  }
  Workout.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      completionDate: DataTypes.INTEGER,
      skillIncrease: DataTypes.INTEGER,
      playerId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'players',
          key: 'id'
        }
      }
      // skillId: {
      //   type: DataTypes.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'skills',
      //     key: 'id'
      //   }
      // }
    },
    {
      sequelize,
      modelName: 'Workout',
      tableName: 'workouts'
    }
  )
  return Workout
}
