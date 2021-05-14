const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('comments', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        content: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        like: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        dislike: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    });
};
