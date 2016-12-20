angular.module('devmtnTravel')
  .controller('packagesCtrl', function ($scope) {

    $scope.travelInfo = mainSrv.travelInfo;
  })
