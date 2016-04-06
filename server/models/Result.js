var mongoose = require('mongoose');

var resultSchema = mongoose.Schema({
  id: {type: Number},
  supplierId: {type:Number},
  productId: {type: Number},
  supplierName: {type:String},
  productName: {type: String},
  price:{type: Number }
});

var Result = mongoose.model('Result', resultSchema);

function createDefaultResults() {
  Result.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
    Result.create({id:1, supplierId:1, supplierName: 'New Co Ltd', productName: 'Small wongle', productId: 1, price: 5});
    Result.create({id:2, supplierId:1, supplierName: 'New Co Ltd', productName: 'Large wongle', productId: 2, price: 8});
    Result.create({id:3, supplierId:1, supplierName: 'New Co Ltd', productName: 'Super wongle', productId: 3, price: 12});
    Result.create({id:4, supplierId:2, supplierName: 'Old Co Ltd', productName: 'Small wongle', productId: 1, price: 6});
    Result.create({id:5, supplierId:2, supplierName: 'Old Co Ltd', productName: 'Large wongle', productId: 2, price: 9});
    Result.create({id:6, supplierId:2, supplierName: 'Old Co Ltd', productName: 'Super wongle', productId: 3, price: 4});
    }
  })
};

exports.createDefaultResults = createDefaultResults;
