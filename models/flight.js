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
    origin:{
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SFO'],
      required: true,
    },

    departs: {
      type: Date, 
      default: function (){

        var d = new Date() 
        var day = d.getDate();
        var month = d.getMonth();
        var year = d.getFullYear();
        var c = new Date (month + day + (year + 1))
        return new Date();
      },
    },
    onAir: {type: Boolean, default: false},
    destinations: [destinationSchema]
  }, {
    timestamps: true
  });


//step 6
module.exports = mongoose.model('Flight', flightSchema);
