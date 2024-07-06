const Workout = require('../models/workoutmodel')
const mongoose = require('mongoose')
//get all 
const getWorkouts = async (req,res) => {
    const workouts = await Workout.find({}).sort({createdAt : -1})
    res.status(200).json(workouts)
}

//get single
const getWorkout = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Workout'})
    }
    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error: 'No Such Workout'})
    }
    res.status(200).json(workout)
}

//to creae a new
const createWorkout = async (req,res) => {
    const {title,load,reps} = req.body
    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error:error.messsage})
    }
    res.json({mssg:'post a new workout'})
}


//delete a workout
const deleteworkout = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Workout'})
    }
    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout){
        return res.status(404).json({error: 'No Such Workout'})
    }
    res.status(200).json(workout)
}


//update a workout
const updateworkout = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Workout'})
    }
    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error: 'No Such Workout'})
    }
    res.status(200).json(workout)
}


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteworkout,
    updateworkout
}
