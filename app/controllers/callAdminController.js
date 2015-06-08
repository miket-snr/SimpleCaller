(function() {
    
    var CallAdminController = function ($scope, $log, dataFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.division = dataFactory.screenModel.division ;
        $scope.customers = [];
        $scope.appSettings = appSettings;
        $scope.$watch('division', function(newValue, oldValue) {
            dataFactory.screenModel.division = newValue;
        });
  //      function init() {
            $scope.refdata = dataFactory.divisionData.divisionList ; 
            //Synch call for offline testing
  //              .success(function(customers) {
  //                  $scope.customers = customers;
 //               })
 //               .error(function(data, status, headers, config) {
 //                   $log.log(data.error + ' ' + status);
 //               });
 //       }
        
  //      init();
        
//        $scope.doSort = function(propName) {
//           $scope.sortBy = propName;
//           $scope.reverse = !$scope.reverse;
//        };
    };
    
    CallAdminController.$inject = ['$scope', '$log', 'dataFactory', 
                                   'appSettings'];

    angular.module('templateApp')
      .controller('CallAdminController', CallAdminController);
    
}());