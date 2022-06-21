const Flight = require('../models/flight')

module.exports = {
    index,
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {title: 'All FLIGHTS', flights})
        console.log(flights, 'these are flights')
    })
}