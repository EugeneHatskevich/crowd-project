const {Router} = require('express')
const router = Router()
const initModels = require('../models/init-models')
const {sequelize} = require('../bd_connect')
const models = initModels(sequelize)

const Profile = models.profile
const Bonuses = models.bonuses
const Projects = models.project


router.get('/view/:profileId', async (req, res) => {

        Projects.findAll({where: {profileId: req.params.profileId}}).then(projects => {
            Profile.findOne({where: {id: req.params.profileId}}).then(profile => {
                profile.getBonuses().then(bonuses => {
                    res.status(200).json({projects, bonuses})
                })
            })
        })
    }
)

router.post('/updateName', async (req, res) => {

        Profile.update({first_name: req.body.name},{where: {id: req.body.profileId}}).then(response => {
            res.status(201).json({message: 'Имя изменено'})
        })

    }
)


module.exports = router