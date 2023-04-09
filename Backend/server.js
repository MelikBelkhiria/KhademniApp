const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session'); // Add this line

const exampleRoute = require('./routes/exampleRoute');
const authRoutes = require('./routes/authRoutes'); 
const login = require('./routes/login');
const SearchTasks = require('./routes/SearchTasks');
const ApplyForTask = require('./routes/ApplyForTask');



const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(
  session({
    secret: 'your-secret-key', // Replace with a strong secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 3600000 }, // Configure the cookie settings
  })
);
// Routes
app.use('/example', exampleRoute);
app.use('/api/auth', authRoutes);
app.use('/api/auth', login);
app.use(SearchTasks);
app.use(ApplyForTask);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
