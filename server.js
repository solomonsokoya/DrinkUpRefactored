const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const authController = require('./controllers/authControllers')

const usersRouter = require('./router/userRouter')
const drinksRouter = require('./router/drinkRouter')
const authRouter = require('./router/authRouter')


const app = express();

const PORT = process.env.PORT || 3009;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(authController.receiveToken);

app.get('/', (req, res) => {
  res.send('Hey Team DrinkUp!');
})

app.use('/users', usersRouter);
app.use('/drinks', drinksRouter);
app.use('/auth', authRouter)


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
