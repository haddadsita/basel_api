var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user: 'bsale_test',
  password: 'bsale_test',
  database: 'bsale_test',
});

connection.connect(error => {
  let message = !error ? 'connected!' : 'connection failed';
})

module.exports = connection;
