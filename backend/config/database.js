const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose.connect('mongodb://localhost:27017/2waywright', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(conn => {
    console.log(`Server connected with the HOST : ${conn.connection.host}`);
  }).catch(error => {
    console.log(`Exception on server connection : ${error}`)
  })
}

module.exports = connectDatabase;