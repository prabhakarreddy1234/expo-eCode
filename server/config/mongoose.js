var mongoose = require('mongoose'),
    resultModel = require('../models/Result'),
    supplierModel = require('../models/Supplier'),
    productModel = require('../models/Product');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('expo-e db opened');
  });

  supplierModel.createDefaultSuppliers();
  productModel.createDefaultProducts();
  resultModel.createDefaultResults();
};
