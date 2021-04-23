import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyparser from 'body-parser';

import driverRoutes from './route/drive_routes.js';
import daysReportsRouts from './route/days_reports_routes.js';

const { json, urlencoded } = express;
const { urlencoded: _urlencoded, json: _json } = bodyparser;
const {connect} = mongoose;

const app = new express();

connect( process.env.MONGO_CONNECTION, {useNewUrlParser:true, useUnifiedTopology:true,useFindAndModify:false});

app.use(cors('*'));
app.use(json());
app.use(urlencoded({ extended:false }));

app.use(_urlencoded({ extended:false }));
app.use(_json());

app.use('/driver_acount', driverRoutes);
app.use( '/reports_management', daysReportsRouts);

app.use('/', (req, res, next) => {
    res.status(200).send({ index: 'Server Started'})
});

app.listen(process.env.PORT || 3000, function(){
    console.log( 'Expres listing on port %d in mode %s', this.address().port, app.settings.env);
});