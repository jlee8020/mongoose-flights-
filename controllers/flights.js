const Flight = require('../models/flight')
module.exports = {
    index,
    show,
    new: newFlight,
    create
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
      // if (err) return next(err);
      res.render('flights/index', { title: 'All Flights', flights });
    });
  }

  function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      res.render('flight/show', { title: 'Flight Detail', flight });
    });
  }


function newFlight(req,res){
  var newFlight = new Flight();
  res.render('flights/new', {title: 'Add Flight'});
  //, {title: 'Add Flight'}
}

function create(req, res) {
  req.body.onAir = !!req.body.onAir;
// console.log(req.body)
const flight = new Flight(req.body);
flight.save(function(err) {
if (err)
  return res.redirect('flights/new');
  console.log(flight);
  res.redirect('/flights');
    });
  }

