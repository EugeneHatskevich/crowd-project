const { Sequelize } = require('sequelize')
const config = require('config')

const sequelize = new Sequelize(config.get("DB"), config.get("userDB"), config.get("passwordDB"), {
    dialect: 'mysql',
    host: config.get("hostDB")}
)

module.exports = {
    sequelize
}