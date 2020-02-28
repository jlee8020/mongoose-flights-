var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets/new/', ticketsCtrl.new);
router.post('/tickets/:id', ticketsCtrl.createTicket);
router.delete('/flights/:flightId/tickets/:ticketId', ticketsCtrl.delete);

module.exports = router;