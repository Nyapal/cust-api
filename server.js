const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 8080

// app.engine('handlebars', exphbs())
app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home')
})
// app.get('/', (req, res) {
//   res.render('home')
// })
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`))