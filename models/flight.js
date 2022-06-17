const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// ------ shortcut for schema above ---------

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
        //figure out default to DEN?
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
        // confirm later that max and min work - not done
    },
    departs: {
        type: Date
        // default to one year from date created
    }

})