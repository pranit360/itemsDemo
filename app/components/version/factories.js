/**
 * Created by Pranit Anand on 23-04-2015.
 */
'use strict';

/* Factories */

angular.module('myApp.factories', [])

    //factory is a placeholder for reusable code
    .factory('ItemFactory', function () {
        var addEditItem;

        //two baskets are hardcoded as follows
        var items = [
            {name: "Item1",value : 20,qty:6},
            {name: "ItemX",value: 15,qty:4},
            {name: "Item5",value : 15,qty:1}
        ];



        //methods are defined as follows
        var getItems = function () {return items;}

        var delItems = function (id) {
            for (var i = 0; i < items.length; i++) {
                if (getSerialValue(items[i].name) === getSerialValue(id)) {
                    items.splice(i, 1);
                    return;
                }
            }
        };



        addEditItem = function (found) {
            //edit
            if (getSerialValue(found.name) !== null) {
                items[getSerialValue(found.name)-1]=found;
            }
            //add
            else if (getSerialValue(found.name) === null) {
                items[items.length] = found;
            }
        };



        var getSubTotal=function(position){
            var subtotal=0;

            var onePrice=items[position-1].value;
            var qty=items[position-1].qty;
            subtotal+=(onePrice*qty);


            return subtotal;
        };

        var getTotal=function()
        {        var total=0;
            for(var i=1;i<items.length+1;i++)
            {

                total+=getSubTotal(i);
            }
            return total;
        };


        var getSerialValue=function(item){
            var output=null;
            for(var i=0;i<items.length;i++)
            {
                if(items[i].name===item)
                {
                    output=i+1;
                    break;
                }
            }
            return output;
        };


//hereby they are made available for common access
        return {
            getItems: getItems,
            delItems: delItems,
            addEditItem: addEditItem,
            getSubTotal:getSubTotal,
            getTotal:getTotal,
            getSerialValue:getSerialValue

        };
    })

//factory is a placeholder for reusable code
    .factory('ItemsFactory', function () {

        var addEditItem2;
        //two baskets are hardcoded as follows

        var items2 = [
            {name: "Item1",value : 20,qty:3},
            {name: "Item2",value: 5,qty:2},
            {name: "Item3",value : 10,qty:4}
        ];

        //methods are defined as follows

        var getItems2 = function () {return items2;}

        var delItems2 = function (id) {

            for (var i = 0; i < items2.length; i++) {
                if (getSerialValueA(items2[i].name) === getSerialValueA(id)) {
                    items2.splice(i, 1);
                    return;
                }
            }
        };


        addEditItem2 = function (found) {
            //edit
            if (getSerialValueA(found.name) !== null) {
                items2[getSerialValueA(found.name)-1]=found;
            }
            //add
            else if (getSerialValueA(found.name) === null) {
                items2[items2.length] = found;
            }
        };



        var getSubTotalA=function(position){
            var subtotal=0;

            var onePrice=items2[position-1].value;
            var qty=items2[position-1].qty;
            subtotal+=(onePrice*qty);


            return subtotal;
        };
        var getTotalA=function()
        {        var total=0;
            for(var i=1;i<items2.length+1;i++)
            {

                total+=getSubTotalA(i);
            }
            return total;
        };
        var getSerialValueA=function(item){
            var output=null;
            for(var i=0;i<items2.length;i++)
            {
                if(items2[i].name===item)
                {
                    output=i+1;
                    break;
                }
            }
            return output;
        };


//hereby they are made available for common access
        return {

            getItems2: getItems2,
            delItems2: delItems2,
            addEditItem2: addEditItem2,
            getSubTotalA:getSubTotalA,
            getTotalA:getTotalA,
            getSerialValueA:getSerialValueA
        };
    });
