'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'ItemCont'
  })
      .when('/allItems2',{
        templateUrl: 'view2/allItems2.html',
        controller: 'ItemCont'
      })
      .when('/item2/:number',{
        templateUrl: 'view2/itemDet2.html',
        controller: 'ItemCont'
      })
      .when('/addItem2',{
        templateUrl: 'view2/addItem2.html',
        controller: 'ItemCont'
      })
      .when('/addItem2/:number',{
        templateUrl: 'view2/addItem2.html',
        controller: 'ItemCont'
      })
      .when('/printViewBasTwo',{
        templateUrl: 'view2/printViewBasketTwo.html',
        controller: 'ItemCont'
      });
    }])




//controller passes the methods/functions to to frontend for access via $scope
//parameters to the routes are also given functionality

.controller('ItemCont',['$scope','$routeParams',"ItemsFactory", function($scope, $routeParams, ItemsFactory){

      //two baskets are hardcoded as follows

      var items2 = [
        {name: "Item1",value : 20,qty:3},
        {name: "Item2",value: 5,qty:2},
        {name: "Item3",value : 10,qty:4}
      ];


  $scope.itemList2=ItemsFactory.getItems2;
  $scope.delItems2=ItemsFactory.delItems2;
  $scope.addEditItem2=ItemsFactory.addEditItem2;
  $scope.getSerialValueA=ItemsFactory.getSerialValueA;
  $scope.getSubTotalA=ItemsFactory.getSubTotalA;
  $scope.getTotalA=ItemsFactory.getTotalA;

  if(angular.isDefined($routeParams.number)){


    var ida = $routeParams.number;

    var list1=$scope.itemList2();
    for (var j=0;j<list1.length;j++)
    {

      if(ida === list1[j].name){
        $scope.foundItem2=list1[j];
        break;}

    }
  }


}]);





