import mongoose from 'mongoose';

const { Schema: _Schema, model } = mongoose;

const driver = new _Schema({
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String},
    password: { type: String, required: true, selected: false },
    day: [
        {
        date: { type: Date},
        km: { type: Number },
        kmPl: { type: Number},
        gasCost: { type: Number},
        uberGain: { type: Number},
        nineNineGain: { type: Number},
        inDriveGain: { type: Number},
        othersGain: { type: Number},
        feedCost: { type: Number},
        carCost: { type: Number},
        dayProfit: { type: Number}
    }
]
})

export default model( 'driver', driver);