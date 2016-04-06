var mongoose = require('mongoose');

var supplierSchema = mongoose.Schema({
  name: {type:String },
  id: {type: Number }
});

var Supplier = mongoose.model('Supplier', supplierSchema);

function createDefaultSuppliers() {
  Supplier.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Supplier.create({name:'New Co Ltd',id: 1});
      Supplier.create({name:'Old Co Ltd',id: 2});
    }
  })
};

exports.createDefaultSuppliers = createDefaultSuppliers;
