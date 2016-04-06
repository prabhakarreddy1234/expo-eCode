var Result = require('mongoose').model('Result');

exports.getResults = function(req, res) {
  var body = req.body;
  Result.find({supplierId : body.supplierId, productId: body.productId}).exec(function(err, collection) {
    res.send(collection);
  })
};
