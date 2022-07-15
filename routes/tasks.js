  const express= require("express")
  const router =express.Router()
  const {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,

  } =require("../controllers/tasks")

  
  // v1 = version 1//
  router.get("/", getAllTasks)
  router.post("/", createTask)
  router.get("/:id", getSingleTask)
  router.patch("/:id", updateTask)
  router.delete("/:id", deleteTask)

  module.exports =router