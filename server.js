require('dotenv').config()
let express = require("express")
let app = express()
let routeApi = require("./routes/api")
let bodyParser = require("body-parser")

const port = process.env.PORT || process.env.APP_PORT || 1337

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api", routeApi)

app.listen(port, () => console.log(`Backend started on port ${port}`))

module.exports = app