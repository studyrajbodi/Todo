const express = require('express');
require('dotenv').config();
const routes = require('./routes/api');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const app = express();

const port = process.env.PORT || 5000;

mongoose.connect(process.env.DBCONN, { useNewUrlParser: true })
    .then(() => console.log(`Database connected successfully`))
    .catch(err => console.log(err));

mongoose.Promise = global.Promise;



app.use(bodyParser.json());
app.use('/', routes);

app.use((err, req, res, next) => {
    console.log(err);
    next();
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});