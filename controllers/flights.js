const Flight = require('../models/flight')

const Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlight,
    create,
    show,

}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {title: "works", flights})
        // is this the issue?  how to make it an array?   
    })
}

// renders new flight page then creates new flight
function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    console.log(req.body)
    const flight = new Flight(req.body)
    flight.save(err => {
        if(err) {
            return res.redirect('/flights/new')
        }
        res.redirect('/flights')
    }) 
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {flight, tickets})
        })
    })
}
    