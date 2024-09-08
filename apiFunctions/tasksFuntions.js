const Tasks = require('../model/Tasks');

const getTasks = async (req, res) => {
    try {
        console.log('enter');
        const tasksArray = await Tasks.find();

        if (tasksArray.length === 0) {
            return res.status(400).json({ success: false, message: 'No tasks found' });
        }
        console.log(tasksArray);
        res.status(200).json({ success: true, tasks: tasksArray });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Error getting tasks' });
    }
};

const addTasks = async (req,res) =>{
    try{
        const {assignedTo, status, priority, dueDate, description} = req.body;
        console.log(assignedTo);
        const task = new Tasks({ user: assignedTo, status, priority, dueDate, description });
        await task.save();
        res.status(200).json({ success: true});

    }catch(error){
        console.log(error);
        res.status(400).json({ message: 'Error creating task', error });
    }
}

const updateTasks = async (req,res) =>{
    try {
        const { id } = req.params;
        const {assignedTo, status, priority, dueDate, description} = req.body;

        const updatedTask = await Tasks.findByIdAndUpdate(id, { user: assignedTo, status, priority, dueDate, description }, {
            new: true,
            runValidators: true
        });

        if (!updatedTask) {
            return res.status(404).json({ success: false, message: 'Task not found' });
        }

        res.status(200).json({ success: true, task: updatedTask });
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ success: false, message: 'Error updating task' });
    }
}

const deleteTask = async(req,res) =>{
    try {
        const {id} = req.params;
        const task = await Tasks.findByIdAndDelete(id);
        if (!task) {
          return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
}

module.exports = {
    getTasks,
    addTasks,
    updateTasks,
    deleteTask
};