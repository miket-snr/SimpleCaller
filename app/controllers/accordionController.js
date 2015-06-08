( function() {

    var accordioncontroller = function($scope, $filter ,$modal,dataFactory,$log,appSettings) {
    
    $scope.handle = '';
    $scope.myTitle = 'What Division is involved?' ;
    $scope.mySubTitle = 'Who should we contact?' ;
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    $scope.searchBox = '' ;
    $scope.characters = 5;
    $scope.floorList = dataFactory.locationData.floorList;
    $scope.siteList = dataFactory.locationData.siteList;
    $scope.screenModel = dataFactory.screenModel ;
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.isopen1 =  false;
    $scope.isopen2 = false;
   $scope.nodeData = dataFactory.getNodeData() ;
  $scope.division = dataFactory.screenModel.division ;
  $scope.animationsEnabled = true;
  $scope.$watch("isopen1", function(isOpen){
      $scope.screenModel.adminStatus = isOpen ;
  });
      $scope.$watch("isopen2", function(isOpen){
     $scope.screenModel.locationStatus = isOpen ;
  });
  $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.siteList;
        },
        screenModel:function () {
          return $scope.screenModel;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };



     } ;
    
    
  //autocontroller.$inject('$scope', '$filter');
 
  angular.module('templateApp').controller('AccordionController',accordioncontroller) ;


})();
