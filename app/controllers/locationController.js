( function() {

    var locationcontroller = function($scope, $filter ,$modal,dataFactory,$log) {
    
    $scope.handle = '';
    $scope.myTitle = 'What Division is involved?' ;
    $scope.mySubTitle = 'Who should we contact?' ;
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    $scope.mobi = dataFactory.mobi;
    $scope.mobiView = function(bClue) {
     if (bClue) {
      $scope.mobi = false;  
      dataFactory.mobi = $scope.mobi ;
      window.location ="#/why" ;   
     } else
     {
      $scope.mobi = true;   
      dataFactory.mobi = $scope.mobi ;
      window.location ="#/call" ;  
     }
       
    } ;
    $scope.getsiteList = function() {
      dataFactory.getsiteList() ;  
    };
    $scope.searchBox = '' ;
    $scope.characters = 5;
    $scope.nodeData = dataFactory.nodeData ;
    $scope.floorList = dataFactory.locationData.floorList;
    $scope.siteList = dataFactory.locationData.siteList;
    $scope.screenModel = dataFactory.screenModel ;
    $scope.division = dataFactory.screenModel.division ;
    $scope.refdivdata = dataFactory.divisionData.divisionList ; 
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.isopen1 =  false;
    $scope.isopen2 = false;
  $scope.animationsEnabled = true;
  $scope.$watchGroup(['screenModel.division', 'screenModel.altpartner'], function(newValues, oldValues, scope) {
  // newValues array contains the current values of the watch expressions
  // with the indexes matching those of the watchExpression array
        if ($scope.screenModel.division.length > 2 && $scope.screenModel.altpartner.length > 4)
        { $scope.screenModel.adminStatus = true ;} else
        { $scope.screenModel.adminStatus = false ;};
        dataFactory.screenModel =$scope.screenModel;
     });
     $scope.$watchGroup(['screenModel.site', 'screenModel.building','screenModel.floor', 'screenModel.room'], function(newValues, oldValues, scope) {
  // newValues array contains the current values of the watch expressions
  // with the indexes matching those of the watchExpression array
        if ($scope.screenModel.site.length == 5 && $scope.screenModel.building.length > 1 && $scope.screenModel.floor.length > 0)
        { $scope.screenModel.locationStatus = true ;} else
        { $scope.screenModel.locationStatus = false ;};
         dataFactory.screenModel =$scope.screenModel;
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
 
  angular.module('templateApp').controller('LocationController',locationcontroller) ;


})();
angular.module('templateApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items, screenModel) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };
  $scope.doSearch=function(sitecode,sitename){
   dataFactory.dobuildingsearch(sitecode,sitename);   
  }
  $scope.ok = function () {
    screenModel.sitecode = $scope.selected.item.sitecode ;
    screenModel.sitename = $scope.selected.item.sitename ;  
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});