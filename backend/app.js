const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', taskRoutes);

module.exports = app;

