const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

//GET /flights
router.get('/', flightsCtrl.index);
//GET /flights/new
router.get('/new', flightsCtrl.new);

router.get('/:id', flightsCtrl.show);
// POST /flights
router.post('/', flightsCtrl.create);





/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
