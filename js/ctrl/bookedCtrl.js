angular.module('devmtnTravel')
  .controller('bookedCtrl', function ($scope, mainSrv, $stateParams) {

    var data = mainSrv.travelInfo;
    var id = $stateParams.id;

    function findPackage() {
      for (var i = 0; i < data.length; i++) {
        if (data[i][id] === id) {
          console.log(data[i]);
            return data[i];
        }
      }

    }
    $scope.package = findPackage();

  })
