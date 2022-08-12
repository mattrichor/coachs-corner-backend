'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class WorkoutSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkoutSkill.init(
    {
      skillId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'skills',
          key: 'id'
        }
      },
      workoutId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'workouts',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'WorkoutSkill',
      tableName: 'workoutSkills'
    }
  )
  return WorkoutSkill
}
