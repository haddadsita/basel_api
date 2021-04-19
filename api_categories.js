const router = require('express').Router();
const connection = require('./data/config');

router.get('/', (request, response) => {
  connection.query('SELECT * FROM category ORDER BY name ASC', (error, result) => {
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
