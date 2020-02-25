const mongoose = require('mongoose');

//step 4
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  content: String,
  destination:{
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SFO'],
    required: true, 
  },
  arrives: {
    type: Date, 
    default: function() {
      return new Date().getFullYear();
    },
  },

}, {
  timestamps: true
});



//step 5
const flightSchema = new Schema({
    airline: {
      type: String,
      enum: ['American Airlines', 'Delta Airlines', 'Spirit Airlines', 'Southwest Airlines', 'United Airlines'],
      required: true,
    },
    flightNo:{
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departs: {
      type: Date, 
      default: function() {
        return new Date().getFullYear();
      },
    },
    onAir: {type: Boolean, default: false},
    destinations: [destinationSchema]
  }, {
    timestamps: true
  });


//step 6
module.exports = mongoose.model('Flight', flightSchema);