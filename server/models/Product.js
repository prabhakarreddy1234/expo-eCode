var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  name: {type:String},
  id: {type: Number}
});

var Product = mongoose.model('Product', productSchema);

function createDefaultProducts() {
  Product.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Product.create({name:'Small wongle',id: 1});
      Product.create({name:'Large wongle',id: 2});
      Product.create({name:'Super wongle',id: 3});
    }
  })
};

exports.createDefaultProducts = createDefaultProducts;
