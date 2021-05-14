const DataTypes = require("sequelize").DataTypes

const _bonuses = require("./bonuses")
const _comments = require("./comments")
const _news = require("./news")
const _profile = require("./profile")
const _project = require("./project")
const _tags = require("./tags")
const _users = require("./users")
const _profileBonus = require("./profileBonus")
const _projectTags = require("./projectTags")

function initModels(sequelize) {
    const bonuses = _bonuses(sequelize, DataTypes)
    const comments = _comments(sequelize, DataTypes)
    const news = _news(sequelize, DataTypes)
    const profile = _profile(sequelize, DataTypes)
    const project = _project(sequelize, DataTypes)
    const tags = _tags(sequelize, DataTypes)
    const users = _users(sequelize, DataTypes)
    const profileBonus = _profileBonus(sequelize, DataTypes)
    const projectTags = _projectTags(sequelize, DataTypes)

    users.hasOne(profile, {onDelete: 'cascade'})
    profile.hasMany(project, {onDelete: 'cascade'})
    project.hasMany(news, {onDelete: 'cascade'})
    project.hasMany(bonuses, {onDelete: 'cascade'})
    profile.belongsToMany(bonuses, {through: profileBonus})
    bonuses.belongsToMany(profile, {through: profileBonus})
    project.hasMany(comments, {onDelete: 'cascade'})
    profile.hasMany(comments, {onDelete: 'cascade'})
    project.belongsToMany(tags, {through: projectTags})
    tags.belongsToMany(project, {through: projectTags})

    return {
        bonuses,
        comments,
        news,
        profile,
        project,
        tags,
        users,
        profileBonus,
        projectTags
    }
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
