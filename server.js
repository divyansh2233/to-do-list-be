const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const InitializeMongoServer = require('./config/db.config');
const { getTasks, addTasks, updateTasks, deleteTask } = require('./apiFunctions/tasksFuntions');
const { port, origin } = require('./config/env.config');
InitializeMongoServer();
const app = express();

const corsOptions = {
  origin
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/tasks', getTasks);
app.post('/api/task', addTasks);
app.put('/api/tasks/:id',updateTasks);
app.delete('/api/tasks/:id',deleteTask);

const PORT = port || 3001;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}.`);
});
