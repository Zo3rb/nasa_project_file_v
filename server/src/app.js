const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'build')));

app.use('/planets', require('./routes/planets/planets.router'));
app.use('/launches', require('./routes/launches/launches.router'));

app.get('/*', async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'build', 'index.html'));
});


module.exports = app;
