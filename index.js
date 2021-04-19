const express = require('express')
const http = require('http')
const app = express()

const product_router = require('./api_products');

app.use('/api/products/', product_router);

const category_router = require('./api_categories');

app.use('/api/categories/', category_router);

http.createServer(app).listen(8001, () => {
  console.log('Server started at http://localhost:8001');
});