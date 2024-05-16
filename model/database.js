const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('process_management', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: { max: 5, min: 0, idle: 10000 }
})


sequelize.authenticate()
    .then(() => {
        console.log('databse connect success')
    })
    .catch(error => {
        console.log('error ' + error)
    })

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('sync databse')
    })
    .catch(e => {
        console.log(e)
    })



db.process=require('./process')(sequelize,DataTypes)
db.log=require('./processLog')(sequelize,DataTypes)


module.exports = db