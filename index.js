const express = require('express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
// const db = require('./db')
// const Team = require('./team/model.js')
const teamRouter = require('./team/router')
const playerRouter = require('./player/router')
const cityRouter = require('./city/router')
const app = express()
const port = process.env.PORT || 4000

app.use(jsonParser)
app.use(teamRouter)
app.use(playerRouter)
app.use(cityRouter)

app.get('/', (req, res) => res.send('This API is working accordingly'))
app.listen(port, () => console.log(`Example App listening on port ${port}!`))