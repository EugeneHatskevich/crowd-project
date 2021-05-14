const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')
const {sequelize} = require('./bd_connect')
const path = require('path')

const toggle = false

const app = express()

app.use(bodyParser.json());
app.use(express.json({extended: true}))

app.use('/api/project', require('./routes/project.routes'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/profile', require('./routes/profile.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = config.get("PORT") || 5000

async function start() {
    try {
        await sequelize.sync({force: toggle}).then(response => {
            app.listen(PORT, () => {
                console.log(`App has been started on port ${PORT}`)
            })
        })
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()


