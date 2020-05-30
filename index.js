const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
// const logger = require('./middleware/logger');
const router = require('./routes/api/members');
const members = require('./Members');

// Init express
const app = express();

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json()); // To handle json
app.use(express.urlencoded({ extended: false })); // To handle urlencoded data

// Home Page
app.get('/', (req, res) =>
  res.render('index', { title: 'Member App', members })
);

// Set static folder
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

const PORT = process.env.PORT || 5000;

// Listen on port
app.listen(5000, () => {
  console.log(`App listening on port ${PORT}`);
});
