const Flight = require('../models/flight')

module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        // We can push subdocs into mongoose arrays
        flight.destinations.push(req.body)
        console.log(flight)
            // save any changes to the parent doc
        flight.save(function(err) {
            console.log(flight,'this is flidsds------------')
            // Respond to the request in this case, we'll redirect
            res.redirect(`/flights/${flight._id}`)
        })
    })
}