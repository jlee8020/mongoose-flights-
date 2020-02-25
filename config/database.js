const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

//step 3
const db = mongoose.connection;

db.on('connected', function(){
  console.log(`connected to ${db.name} at ${db.host}:${db.port}`)
}
);