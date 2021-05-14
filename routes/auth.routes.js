const {Router} = require('express')
const router = Router()
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const crypto = require('crypto')
const initModels = require('../models/init-models')
const {sequelize} = require('../bd_connect')
const models = initModels(sequelize)

const Profile = models.profile
const Users = models.users


router.post('/login', [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()
],async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при входе в систему'
            })
        }

        const {email, password} = req.body

        const user = await Users.findOne({where: {email: email}})

        if (!user) {
            return res.status(400).json({message: 'Такой пользователя не существует'})
        }

        const profile = await Profile.findOne({where: {userId: user.dataValues.id}})

        const isMatch = await bcrypt.compare(password, user.dataValues.password)

        if (!isMatch){
            return res.status(400).json({message: "Неверный пароль, попробуйте снова"})
        }

        const token = jwt.sign(
            { userId: user.dataValues.id},
            config.get('jwtSecret'),
            { expiresIn: '12h' }
        )

        res.status(200).json({
            token,
            userId: user.dataValues.id,
            firstName: profile.dataValues.first_name,
            profileId: profile.dataValues.id})

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', e: e.message})
    }
})

router.post('/register', [
    check('email', 'Неверный email').isEmail(),
    check('password', 'Пароль должен быть от 4 до 8 символов').isLength({min: 4, max: 6}),
    check('firstName', 'Поле имя не должно быть пустыым').isLength({min: 1, max: 25})
], async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }

        const {email, password, firstName, lastName} = req.body

        const candidate = await Users.findOne({where: {email: email}})

        if (candidate) {
            return res.status(400).json({message: 'Такой пользователь уже существует'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const profileId = crypto.randomBytes(8).toString('hex')

        const user = await Users.create({
            email: email,
            password: hashedPassword
        })

        const profile = await Profile.create({
            id: profileId,
            first_name: firstName,
            last_name: lastName
        })

        user.setProfile(profile)

        if (user) {
            res.status(201).json({message: 'Пользователь создан'})
        }
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', e: e.message})
    }
})

module.exports = router