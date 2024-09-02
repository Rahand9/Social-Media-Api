require('dotenv').config();

const express = require('express'); // this imports express library 
const app =express(); // this is why is so we can say app.post() and things like that
const db = require('./dbConfig'); //this is how we connect to the database

app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const PORT = process.env.PORT || 5500; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 





