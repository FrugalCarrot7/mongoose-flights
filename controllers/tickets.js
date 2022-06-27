const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create,

}

function newTicket(req, res) {
    console.log(req, '--- this is req---')
    res.render('tickets/new', {flightId: req.params.id})
}

function create(req, res) {
    const flightId = req.params.id
    req.body.flight = flightId
    Ticket.create(req.body, function(err, ticket) {
      res.redirect(`/flights/${flightId}`)
    })
}

//I dont think anything is hitting the create controller yet