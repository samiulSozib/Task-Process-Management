require('dotenv').config()

const express = require('express')
const cors=require('cors')
const scheduleLogs = require('./util/scheduler');
const schedule = require('node-schedule');





const setMiddlewares = require('./middleware/middleware')
const setRoutes = require('./route/route')



const app = express()
app.use(cors());


require('./model/database')



setMiddlewares(app)
setRoutes(app)

//scheduleLogs()
schedule.scheduleJob('* * * * * *', scheduleLogs);



app.listen(1000, () => {
    console.log('server create success on port')
})