const Task = require("../models/Task")

const getAllTasks= async (req, res) => {
    try {
    const allTask = await Task.find({})
    res.status(200).json(allTask)
    } catch (err) {
        res.status(500).json(err)
    }

}
const createTask= async (req, res) => {
    try {
    const createTask = await Task.create(req.body)
    res.status(200).json(createTask)
    } catch (err) {
        res.status(500).json(err)
    }
}

const getSingleTask= async (req, res) => {
    try {
        const getSingleTask = await Task.findOne({_id: req.params.id})
        if(!getSingleTask){
            return res.status(404).json(`_id:${req.params.id} doesn't exist`)

        }
        res.status(200).json(getSingleTask)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }

}
const updateTask=(req, res) => {
    res.send("Update the task")

}

const deleteTask=(req, res) => {
    res.send("Delete the task")

}

module.exports ={
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
}