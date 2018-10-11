const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const CONFIG = require('./config');

const app = express();
//<--- DATABASE codePointAt--------->

mongoose.connect(CONFIG.DATABASE , (err) => {
    if(err) {
        console.log('can\'t connect to the database');
        return console.log(err);
    }

    console.log('connected to the database');
});

//<--end--->

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(morgan('dev'));
app.use(cors());


const userRoutes = require('./routes/account');



app.use('/api/accounts', userRoutes);

app.listen(CONFIG.PORT, err => {
    console.log('server running on port '+ CONFIG.PORT);
});