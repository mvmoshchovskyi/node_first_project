const express = require('express');
const db = require('./database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.getInstance().setModels();

const { userRouter, carRouter } = require('./router');
const isPassOk = require('./middleware/auth/check-password-hash-middleware');

app.post('/auth', isPassOk, (req, res) => {
    res.json(req.user);
});

app.use('/users', userRouter);
app.use('/cars', carRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    res
        .status(err.code)
        .json({
            message: err.message,
            ok: false
        });
});

app.listen(5000, () => {
    console.log('App listen 5000');
});
