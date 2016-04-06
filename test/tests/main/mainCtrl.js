

describe('main', function () {

  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('main controller', function () {
		it('initialized main controller', function () {
			var $scope = {};
			var controller = $controller('mainCtrl', { $scope: $scope  });
			expect($scope.products).to.be.not.null;
		});
	});
});
