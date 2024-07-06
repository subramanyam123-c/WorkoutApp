require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')

// express app
const app = express()
app.use(express.json())
app.use((req,res,next) => {
console.log(req.path,req.method)
next()
})

// routes
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log('connected to db and listening on port', process.env.PORT)
        })
    })
    .catch((error) =>{
        console.log(error)
    })



