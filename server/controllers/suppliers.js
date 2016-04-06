var Supplier = require('mongoose').model('Supplier');

exports.getSuppliers = function(req, res) {
  Supplier.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};
