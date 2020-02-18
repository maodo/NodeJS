require('dotenv').config({path: require('path').resolve(__dirname, '../config/.env')})
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT


app.use(express.json())
app.use(userRouter,taskRouter)



app.listen(port, () => {
    console.log('Server is up on port '+port)
})