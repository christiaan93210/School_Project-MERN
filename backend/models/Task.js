const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({

    imgurl: {
        type: Array
    },

    client: {
        type: String,
    },

    tasktitle: {
        type: String,
        required: true
    },

    country: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }, 
    budget: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    payment: {
        type: String,
        required: true
    },
    progress: {
        type: Number
    },
    date: {
        type: String,
        //default: Date.now
    }
});

module.exports = Task = mongoose.model("tasks", TaskSchema);