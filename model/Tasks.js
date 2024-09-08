const mongoose = require('mongoose');

// Define the User Schema
const taskSchema = new mongoose.Schema({
  user: {
    type: String,
    enum: ['User 1', 'User 2', 'User 3', 'User 4'],
    required: true
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'], 
    default: 'Not Started',
    required: true
  },
  priority: {
    type: String,
    enum: ['Low', 'Normal', 'High'],
    default: 'Normal',
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  description: {
    type: String,
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
