const express = require('express');
const app = express();
const connectDB = require('./config/db');

// connect DB
connectDB();

// Get data in the request body
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/submit', require('./routes/api/submit'));
app.use('/api/feedback', require('./routes/api/feedback'));

app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
