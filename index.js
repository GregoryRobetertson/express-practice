'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(cors());
app.use(morgan());

app.get('/', (req, res, next) => {
    res.render('mySite', {title: 'Express Server', message: 'Welcome to my express server!'})
})

app.listen(PORT, () => {
    console.log('Listens on port' + PORT);
});