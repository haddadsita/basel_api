const router = require('express').Router();
const connection = require('./data/config');

router.get('/', (request, response) => {
  connection.query('SELECT * FROM product', (error, result) => {
    if (!error) {
      response.status(200).json({
        'data': result,
        'status_code': 200,
      });
    } else {
      response.status(500).json({
        'data': 'Internal Server Error',
        'status_code': 500,
      });
    }
  });
});

router.get('/category/:id', (request, response) => {
  connection.query(`SELECT * FROM product WHERE category = ${request.params.id}`, (error, result) => {
    if (!error) {
      response.status(200).json({
        'data': result,
        'status_code': 200,
      });
    } else {
      response.status(500).json({
        'data': 'Internal Server Error',
        'status_code': 500,
      });
    }
  });
});

router.get('/search/', (request, response) => {
  connection.query(`SELECT * FROM product WHERE name LIKE '%${request.params.name}%'`, (error, result) => {
    if (!error) {
      response.status(200).json({
        'data': result,
        'status_code': 200,
      });
    } else {
      response.status(500).json({
        'data': 'Internal Server Error',
        'status_code': 500,
      });
    }
  });
});


module.exports = router;
