const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const config = require('./config/config');
const fileRoutes = require('./routes/fileRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', studentRoutes);
app.use('/api', fileRoutes);
app.use('/api',teacherRoutes);

const PORT = config.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
