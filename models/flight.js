const mongoose = require('mongoose');

//step 4
const Schema = mongoose.Schema;

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
  }, {
    timestamps: true
  });

//step 6
module.exports = mongoose.model('Flight', flightSchema);