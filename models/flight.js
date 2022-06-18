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
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
        // confirm later that max and min work - not done
    },
    departs: {
        type: Date,
        default: function() {

            let todaysDate = new Date()
            let year = todaysDate.getFullYear()
            let month = todaysDate.getMonth()
            let day = todaysDate.getDate()

            let dateOfDeparture = new Date(year + 1, month, day)

            return dateOfDeparture
        }
        /* default to one year from date created
            todays date gets a new instance of date
            getFullYear method returns the year of todays date
        */
    }

})