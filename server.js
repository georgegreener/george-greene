const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
require('./routes/html-routes')(app);

app.listen(PORT, function() {
  console.log('App listening on Port: ' + PORT);
});