(function() {
    
    var BaseController = function ($scope, $log, dataFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;
        $scope.division = dataFactory.screenModel.division ;
        
        function init() {
            
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
    }};
    
    BaseController.$inject = ['$scope', '$log', 'dataFactory', 
                                   'appSettings'];

    angular.module('templateApp')
      .controller('BaseController', BaseController);
    
}());