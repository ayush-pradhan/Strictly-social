const express = require('express')
// const { FORCE } = require('sequelize/types/lib/index-hints')

const { db } = require('./db/models') 
const { usersRoute} = require('./routes/users')
const { postsRoute} = require('./routes/posts')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/',express.static(__dirname + '/public'))

db.sync()
    .then(() => {
        app.listen(8000, () => {
            console.log("Server started on http://localhost:8000")
        })
    }).catch((e) => {
        console.error(new Error("Could not start Database"))
        console.error(e)
})
