const mongoose =require("mongoose")


const TaskSchema = new mongoose.Schema({
      name: {
           type: String,
           required: [true, "input name of task"],
           trim: true,
           maxlength: [20, " You can write up to 20 characters"]
      },
      completed:{
          type: Boolean,
          default: false,
      },

})


module.exports =mongoose.model("Task", TaskSchema)