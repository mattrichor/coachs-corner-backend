'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Coach extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Coach.hasMany(models.Player, {
        as: 'coach',
        foreignKey: 'coachId'
      })
    }
  }
  Coach.init(
    {
      name: DataTypes.STRING,
      sport: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      teamName: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Coach',
      tableName: 'coaches'
    }
  )
  return Coach
}
