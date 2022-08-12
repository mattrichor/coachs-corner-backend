'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Skill.belongsTo(models.Player, {
        as: 'skills',
        foreignKey: 'playerId'
      })
      Skill.belongsToMany(models.Workout, {
        as: 'workoutSkills',
        through: models.WorkoutSkill,
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
      // workoutId: {
      //   type: DataTypes.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'workouts',
      //     key: 'id'
      //   }
      // },
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
