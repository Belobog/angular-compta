'use strict';

/* Controllers */

var saisirCourseController = angular.module('saisirCourseController', []);

saisirCourseController.controller('SaisirCourseCtrl', ['$scope',
    function($scope) {


        $scope.products = [{name:'',category:'',quantity:"",price:0.00.toFixed(2)}];

        // fonction permettant d'ajouter un nouveau produit
        $scope.addNewProduct = function(index){
            if(index == $scope.products.length - 1){
                $scope.products.push({name:'',category:'',quantity:'',price:0.00.toFixed(2)});
            }
        };

        // fonction permettant de supprimer le produit passé en paramètre
        $scope.removeProduct = function(index){
            if(index > 0){
                $scope.products.splice(index,1);
            }
        };

        // fonction permettant de calculer le prix total
        $scope.totalPrice = function(){
            var somme = 0.00;
            for(var compteurProduit = 0; compteurProduit < $scope.products.length; compteurProduit++){
                somme = parseFloat(somme) + parseFloat($scope.products[compteurProduit].price);
            }
            return somme.toFixed(2);
        };

        // fonction permettant de calculer les prix par catégorie
        $scope.categoryPrices = function(){
            var prices = {};
            var somme = 0.00;
            for(var compteurProduit = 0; compteurProduit < $scope.products.length; compteurProduit++){

                if(prices[$scope.products[compteurProduit].category]){
                    prices[$scope.products[compteurProduit].category] = parseFloat(prices[$scope.products[compteurProduit].category])  + parseFloat($scope.products[compteurProduit].price);
                }
                else if($scope.products[compteurProduit].category){
                    prices[$scope.products[compteurProduit].category] =  parseFloat($scope.products[compteurProduit].price);
                }
            }
            return prices;
        }

    }]);
