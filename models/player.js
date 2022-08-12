'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Player.belongsTo(models.Coach, {
        as: 'coached',
        foreignKey: 'coachId'
      })

      Player.hasMany(models.Workout, {
        as: 'playerWorkouts',
        foreignKey: 'playerId'
      })

      Player.hasMany(models.Skill, {
        as: 'playerSkills',
        foreignKey: 'playerId'
      })
    }
  }
  Player.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      proPic: DataTypes.STRING,
      primaryPosition: DataTypes.STRING,
      secondaryPosition: DataTypes.STRING,
      height: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      age: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
      coachId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'coaches',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Player',
      tableName: 'players'
    }
  )
  return Player
}
