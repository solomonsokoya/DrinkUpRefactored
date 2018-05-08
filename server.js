const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');


const app = express();

const PORT = process.env.PORT || 3009;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Hey Team DrinkUp!');
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
