const express = require('express');
const app = express();

const indexRoute = require('./routes/index');

app.use('/instagram/', indexRoute);
app.listen(3000);

module.exports = app;
