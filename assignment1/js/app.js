(function(){
  var myApp = angular.module('myapp', []);

  var LunchCheckController = function($scope) {
    $scope.lunchMenu = '';
    $scope.message = '';

    var isListTooMuch = function(listString) {
      var list = listString.split(',');
      return list.length > 3;
    };

    $scope.checkIfTooMuchListener = function() {
      if ($scope.lunchMenu === '') {
        $scope.message = 'Please enter data first';
      } else if (isListTooMuch($scope.lunchMenu)) {
        $scope.message = 'Too much!';
      } else {
        $scope.message = 'Enjoy!';
      }
    };
  };

  myApp.controller("LunchCheckController", LunchCheckController);
})();
