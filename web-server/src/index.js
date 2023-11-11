const express = require('express')
const authRouter = require('./routes/auth')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRouter)

const port = process.env.PORT || 5000

app.listen(port, () => {console.log('Server has been started')})