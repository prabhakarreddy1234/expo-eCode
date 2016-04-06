angular.module('app').factory('mvResources', function($resource) {
  return  {
      suppliers : $resource('/api/suppliers/'),
      products  : $resource('/api/products/'),
      results   : $resource('/api/results/', {}, {query: {method: 'POST', isArray:true}})
  };
});
