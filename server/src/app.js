let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')

const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

require('./routes')(app)

app.get('/status', function (req, res ){
    res.send('Hello nodejs server')
})
app.get('/hello/:person', function (req,res) {
    console.log('hello - ' + req.params.person)
    res.send('sey hello with ' + req.params.person)
})
app.post('/hello', function (req, res) {
    res.send('OK you post - ' + req.body.name)
})

let port = process.env.PORT || config.port

sequelize.sync({force: false}).then(() => {
    app.listen(port, function () {
    console.log('Server running on ' + port)
 })
})