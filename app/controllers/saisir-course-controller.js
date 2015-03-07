'use strict';

/* Controllers */

var saisirCourseController = angular.module('saisirCourseController', []);

saisirCourseController.controller('SaisirCourseCtrl', ['$scope',
    function($scope) {


        $scope.products = [{name:'',category:'',quantity:"",price:0.00.toFixed(2)}];
        $scope.categories = [];

        // fonction permettant d'ajouter un nouveau produit
        $scope.addNewProduct = function(index){
            if(index == $scope.products.length - 1){
                $scope.products.push({name:'',category:'',quantity:'',price:0.00.toFixed(2)});
            }
            $scope.refreshCategories();
        };

        // fonction permettant de supprimer le produit passé en paramètre
        $scope.removeProduct = function(index){
            if(index > 0){
                $scope.products.splice(index,1);
            }
            $scope.refreshCategories();
        };

        // fonction permettant de calculer le prix total
        $scope.totalPrice = function(){
            var somme = 0.00;
            for(var compteurProduit = 0; compteurProduit < $scope.products.length; compteurProduit++){
                somme = parseFloat(somme) + parseFloat($scope.products[compteurProduit].price);
            }
            return somme.toFixed(2);
        };

        // fonction permettant de faire un refresh des catégories
        $scope.refreshCategories = function(){
            $scope.categories = [];

            for(var compteurProduit = 0; compteurProduit < $scope.products.length; compteurProduit++){
                var nouvelleCategorie = true;
                for(var compteurCategories = 0; compteurCategories < $scope.categories.length; compteurCategories++){
                    if($scope.categories[compteurCategories].name == $scope.products[compteurProduit].category ){
                        nouvelleCategorie = false;
                        $scope.categories[compteurCategories].quantity = parseInt($scope.categories[compteurCategories].quantity) + parseInt($scope.products[compteurProduit].quantity);
                        $scope.categories[compteurCategories].price = (parseFloat($scope.categories[compteurCategories].price) + parseFloat($scope.products[compteurProduit].price)).toFixed(2);
                    }
                }
                if(nouvelleCategorie && $scope.products[compteurProduit].category){
                    $scope.categories.push({
                        name:$scope.products[compteurProduit].category,
                        quantity:$scope.products[compteurProduit].quantity,
                        price:$scope.products[compteurProduit].price});
                }


            }
        };

    }]);
