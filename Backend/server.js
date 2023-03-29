const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const exampleRoute = require('./routes/exampleRoute');
const authRoutes = require('./routes/authRoutes'); 
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/example', exampleRoute);
app.use('/api/auth', authRoutes);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
