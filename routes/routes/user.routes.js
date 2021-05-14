const {Router} = require('express')
const router = Router()
const User = require('../models/User')

router.get('/', async (req, res) => {
    try {
        const users = await User.find({ })
        res.json(users)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})
router.delete('/delete', async (req, res) => {
    try {
        const data = req.body
        if (Object.keys(data).length >= 1){
            for(key in data){
                await User.deleteOne({_id:key})
            }
            res.status(200).json({message:'Update success'})
        }
        else{
            res.status(200).json({message:'Not check'})
        }
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})
router.put('/lock', async (req, res) => {
    try {
        const data = req.body
        if (Object.keys(data).length >= 1){
            for(key in data){
                await User.updateOne({_id:key}, {status: "Blocked"})
            }

            res.status(200).json({message:'Update success'})
        }
        else{
            res.status(200).json({message:'Not check'})
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})
router.put('/unlock', async (req, res) => {
    try {
        const data = req.body
        if (Object.keys(data).length >= 1){
            for(key in data){
                await User.updateOne({_id:key}, {status: "Active"})
            }
            res.status(200).json({message:'Update success'})
        }
        else{
            res.status(200).json({message:'Not check'})
        }
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})



module.exports = router
