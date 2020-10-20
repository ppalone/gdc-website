// if not in production use dotenv
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

// Routes
const apiRoutes = require('./api/routes/api');

// PORT config
const PORT = process.env.PORT || 8000;

// Use cors
app.use(cors());

app.use('/api', apiRoutes);

// 404s
app.get('*', (req, res) => {
  res.send('Error 404: Page not found!');
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
