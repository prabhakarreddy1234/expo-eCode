angular.module('app').controller('mainCtrl', function($scope, mvResources) {
    $scope.suppliers = mvResources.suppliers.query();
    $scope.products = mvResources.products.query();

    $scope.ChangeSupplier = function (supplierId) {
     $scope.supplierId = supplierId;
     mapResults();
    }

    $scope.ChangeProduct = function (productId) {
     $scope.productId = productId;
     mapResults();
    }

    function mapResults() {
      $scope.results = mvResources.results.query({supplierId : $scope.supplierId , productId: $scope.productId});
    }
});
