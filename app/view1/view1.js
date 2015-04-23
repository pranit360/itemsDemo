'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'ItemCon'
        })
            .when('/allItems',{
              templateUrl: 'view1/allItems.html',
              controller: 'ItemCon'
            })
            .when('/item/:index',{

              templateUrl: 'view1/itemDet.html',
              controller: 'ItemCon'
            })
            .when('/addItem',{
              templateUrl: 'view1/addItem.html',
              controller: 'ItemCon'
            })

            .when('/addItem/:index',{
              templateUrl: 'view1/addItem.html',
              controller: 'ItemCon'
            })
            .when('/printViewBasOne',{
              templateUrl: 'view1/printViewBasketOne.html',
              controller: 'ItemCon'
            });
}])
//controller passes the methods/functions to to frontend for access via $scope
//parameters to the routes are also given functionality

.controller('ItemCon',['$scope','$routeParams','ItemFactory', function($scope, $routeParams, ItemFactory){
      var items = [
        {name: "Item1",value : 20,qty:6},
        {name: "ItemX",value: 15,qty:4},
        {name: "Item5",value : 15,qty:1}
      ];


      $scope.itemList=ItemFactory.getItems;
      $scope.delItems=ItemFactory.delItems;
      $scope.addEditItem=ItemFactory.addEditItem;
      $scope.getSerialValue=ItemFactory.getSerialValue;
      $scope.getSubTotal=ItemFactory.getSubTotal;
      $scope.getTotal=ItemFactory.getTotal;

      if(angular.isDefined($routeParams.index)){
        var id = $routeParams.index;
        var list = $scope.itemList();

        for (var i=0;i<list.length;i++)
        {
          if (id === list[i].name){
            $scope.foundItem=list[i];
            break;
          }

        }
      };

    }]);





