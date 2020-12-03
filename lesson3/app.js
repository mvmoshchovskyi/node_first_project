const express = require('express');

const app = express();

const { userRouter, productRouter } = require('./routes');

app.use('/users', userRouter);
app.use('/products', productRouter);

app.listen(5000, () => {
    console.log('App listen 5000');
});
