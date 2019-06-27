const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const app = express()
const port = 8080

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());
app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

require('./controllers/plants.js')(app);
require('./data/plant-db');

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/plants/new', (req, res) => {
  res.render('plants-new')
})

  

app.listen(port, () => console.log(`Example app listening on port ${port}!`))