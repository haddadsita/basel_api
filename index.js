const express = require('express')
const http = require('http')
const app = express()

// Routes
const product_router = require('./api/api_products');
const category_router = require('./api/api_categories');

app.use('/api/products/', product_router);
app.use('/api/categories/', category_router);



http.createServer(app).listen(8001, () => {
  console.log('Server started at http://localhost:8001');
});