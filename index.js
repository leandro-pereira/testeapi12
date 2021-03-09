const express = require('express');
const app = express();

const indexRoute = require('./routes/app');

app.use('/instagram/', indexRoute);
app.listen(process.env.PORT || 3000);

module.exports = app;
