require('dotenv').config()
module.exports = {
  development: {
    database: 'coachs_corner_dev',
    dialect: 'postgres'
  },
  test: {
    database: '<coachs_corner_test>',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
