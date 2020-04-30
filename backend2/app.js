const express = require('express')
const app = express()
const router = require('./router')
const cors = require('cors')
const PORT = 3000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/user', router)

app.listen(PORT, () => console.log('Listening on port', PORT))
