const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    createFlight
};
//
function show(req, res) {
  Flight.findById(req.params.id, function(err, flights) {
    Ticket.find({flight: flights._id}, function(err, tickets) {
      res.render('flights/show', { title: 'Flight Detail', flights, tickets });
    })
  })
}
//
function index(req, res) {
    Flight.find({}, function(err, flights) {
      // if (err) return next(err);
      res.render('flights/index', { title: 'All Flights', flights });
    });
  }



//
function newFlight(req,res){
  res.render('flights/new', {title: 'Add Flight'});
}

function createFlight(req, res) {
  req.body.onAir = !!req.body.onAir;
// console.log(req.body)

if(!req.body.departs){
  var redate = new Date();
  redate.setFullYear(redate.getFullYear()+1);
  req.body.departs = redate
}

const flight = new Flight(req.body);
flight.save(function(err) {
if (err)
  return res.redirect('flights/new', {title: 'Add Flight'})
  res.redirect('/flights');
    });
}

