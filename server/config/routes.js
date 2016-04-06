var suppliers = require('../controllers/suppliers'),
    products = require('../controllers/products'),
    results = require('../controllers/results'),
    mongoose = require('mongoose');

module.exports = function(app) {

  app.get('/api/suppliers', suppliers.getSuppliers);

  app.get('/api/products', products.getProducts);
  app.post('/api/results', results.getResults);
  app.all('/api/*', function(req, res) {
    res.send(404);
  });

}
