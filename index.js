const express = require('express')
const http = require('http')
const app = express()

const PORT = process.env.PORT || 3000;

// Routes
const product_router = require('./api/api_products');
const category_router = require('./api/api_categories');

app.use('/api/products/', product_router);
app.use('/api/categories/', category_router);



http.createServer(app).listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});