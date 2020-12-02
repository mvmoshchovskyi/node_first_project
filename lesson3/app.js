const express = require('express');
const exprsHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'views')));

app.set('view engine', '.hbs');
app.engine('.hbs', exprsHbs({defaultLayout: false}));
app.set('views', path.join(process.cwd(), 'views'));

const {userRouter, productRouter, authRouter} = require('./routes');

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/auth', authRouter)


app.listen(5000, () => {
    console.log('App listen 5000');
});