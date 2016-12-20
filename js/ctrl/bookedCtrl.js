angular.module('devmtnTravel')
  .controller('bookedCtrl', function ($scope, mainSrv, $stateParams) {

    $scope.data = mainSrv.travelInfo;
    // var id = $stateParams.id;

    $scope.findPackage = function(id) {
      for (var i = 0; i < $scope.data.length; i++) {
        if ($scope.data[i].id === Number(id)) { //stateParams return a string id so we need to convert it to number
          return $scope.data[i];
        }
      }

    }
    $scope.booked = $scope.findPackage($stateParams.id);


  })
