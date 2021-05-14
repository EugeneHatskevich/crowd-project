const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('project', {
        id: {
            type: DataTypes.STRING(255),
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        total_cash: {
            type: DataTypes.DECIMAL(65, 2),
            allowNull: false,
        },
        current_cash: {
            type: DataTypes.DECIMAL(65, 2),
            allowNull: true,
            defaultValue: 0.00
        },
        total_voice: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        voice_count: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        endDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    })
}
