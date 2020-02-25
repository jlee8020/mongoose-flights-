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
      res.render('flights/show', { title: 'Flight Detail', flight : flight});
    });
  }


function newFlight(req,res){
  res.render('flights/new', {title: 'Add Flight'});
}

function create(req, res) {
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
  return res.redirect('flights/new', {title: 'Add Flight'});
  console.log(flight);
  res.redirect('/flights');
    });
  }

