'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Coach extends Model {
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
      passwordDigest: DataTypes.STRING,
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
