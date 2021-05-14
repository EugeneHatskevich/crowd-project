const {Router} = require('express')
const router = Router()
const crypto = require('crypto')
const initModels = require('../models/init-models')
const {Sequelize} = require("sequelize");
const {sequelize} = require('../bd_connect')
const models = initModels(sequelize)

const Project = models.project
const News = models.news
const Bonus = models.bonuses
const Comments = models.comments
const Profile = models.profile
const Operators = Sequelize.Op
const Tags = models.tags


router.get('/sort', async (req, res) => {
        let limit = Number(req.query.limit)
        if (req.query.order_by === 'rating') {
            const results = await Project.findAll({
                raw: true,
                order: sequelize.literal('total_voice / voice_count DESC'),
                limit: limit
            })
            res.status(200).json({results})
        } else if (req.query.order_by === 'date_update') {
            const results = await Project.findAll({raw: true, order: [['updatedAt', 'DESC']], limit: limit})
            res.status(200).json({results})
        }
    }
)
router.get('/view/:projectId', async (req, res) => {
        const project = await Project.findOne({where: {id: req.params.projectId}})
        res.status(200).json({results: project})
    }
)

router.get('/:projectId/data', async (req, res) => {
        if (req.query.options === 'bonuses') {
            const results = await Bonus.findAll({where: {projectId: req.params.projectId}})
            res.status(200).json({results})
        }
        else if (req.query.options === 'news') {
            const results = await News.findAll({where: {projectId: req.params.projectId}})
            res.status(200).json({results})
        } else if (req.query.options === 'comments') {
            Comments.findAll({where: {projectId: req.params.projectId}}).then(comments => {
                const profiles = comments.map(comment => {
                    return comment.profileId
                })
                Profile.findAll({where: {id: {[Operators.in]: profiles}}}).then(results => {
                    res.status(200).json({comments})
                })
            })
        }
    }
)

router.put('/voice', async (req, res) => {
        Project.findOne({where: {id: req.query.id}}).then(project => {
            project.increment({'voice_count': 1, 'total_voice': req.query.voice}).then(project => {
                Project.findOne({where: {id: req.query.id}}).then(results => {
                    res.status(201).json({results})
                })
            })
        })
    }
)

router.post('/create', async (req, res) => {

    const projectId = crypto.randomBytes(4).toString('hex')

    const totalCash = Number(req.body.endPointValue).toFixed(2)

    const project = await Project.create({
        id: projectId,
        name: req.body.name,
        description: req.body.description,
        total_cash: totalCash,
        profileId: req.body.profileId,
        endDate: req.body.endDate
    })

    if (req.body.bonuses) {

        for (const bonus of req.body.bonuses) {
            const bonusValue = Number(bonus.value)
            await Bonus.create({
                name: bonus.name,
                description: bonus.description,
                value: bonusValue,
                projectId: projectId
            })
        }
    }

    if (req.body.news) {

        for (const elem of req.body.news) {
            await News.create({
                name: elem.name,
                description: elem.description,
                news_date: elem.date,
                projectId: projectId
            })
        }
    }

    if(req.body.tags) {
        const tags = req.body.tags.split('#').slice(1)

        for (tag of tags){
            Tags.create({name: tag}).then(results => {
                Tags.findOne({where:{name: tag}}).then(newTag => {
                    project.addTags(newTag).then(results => {
                        console.log(results)
                    })
                })
            })
        }

    }
    res.status(201).json({message: 'Проект создан'})

})

router.post('/addComment', async (req, res) => {

    const comment = await Comments.create({
        content: req.body.textNewComments,
        projectId: req.body.projectId,
        profileId: req.body.authorId
    })

    res.status(201).json({message: 'Комментарий создан'})
})

module.exports = router