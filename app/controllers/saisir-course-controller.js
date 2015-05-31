'use strict';

/* Controllers */

var saisirCourseController = angular.module('saisirCourseController', []);

saisirCourseController.controller('SaisirCourseCtrl', ['$scope',
    function($scope) {


        $scope.products = [{name:'',category:'',quantity:0,price:0.00.toFixed(2)}];
        $scope.categories = [];

        // fonction permettant d'ajouter un nouveau produit
        $scope.addNewProduct = function(index){
            if(index == $scope.products.length - 1){
                $scope.products.push({name:'',category:'',quantity:0,price:0.00.toFixed(2)});
            }
            $scope.refreshCategories();
        };

        // fonction permettant de supprimer le produit passé en paramètre
        $scope.removeProduct = function(index){
            if(index > 0 || $scope.products.length > 1){
                $scope.products.splice(index,1);
            }
            $scope.refreshCategories();
        };

        // fonction permettant de calculer le prix total
        $scope.totalPrice = function(){
            var somme = 0.00;
            for(var compteurProduit = 0; compteurProduit < $scope.products.length; compteurProduit++){
                somme = parseFloat(somme) + (parseFloat($scope.products[compteurProduit].price)
                * parseInt($scope.products[compteurProduit].quantity));
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
                        $scope.categories[compteurCategories].quantity =
                            parseInt($scope.categories[compteurCategories].quantity)
                            + parseInt($scope.products[compteurProduit].quantity);

                        $scope.categories[compteurCategories].price =
                           (parseFloat($scope.categories[compteurCategories].price)
                           + (parseFloat($scope.products[compteurProduit].price).toFixed(2)
                           *parseInt($scope.products[compteurProduit].quantity))).toFixed(2);
                    }
                }
                if(nouvelleCategorie && $scope.products[compteurProduit].category){
                    var name = $scope.products[compteurProduit].category;
                    var quantity = parseInt($scope.products[compteurProduit].quantity);
                    var price = (parseFloat($scope.products[compteurProduit].price).toFixed(2) * quantity).toFixed(2);
                    $scope.categories.push({
                        name:name,
                        quantity:quantity,
                        price:price});
                }


            }
        };

        // fonction qui n'autorise que des valeurs numerique pour le champs quantity au moment du ng-change
        $scope.validateQuantityOnChange = function(index,quantity){
            $scope.products[index].quantity = $scope.products[index].quantity.replace(/[^\d]/,'');
        };

        // fonction valorise à 0 le champs quantity si vide et qui supprime les zero à gauche au moment du ng-blur
        $scope.validateQuantityOnBlur = function(index){
            if($scope.products[index].quantity.length == 0){
                $scope.products[index].quantity = 0;
            }
            else{
                $scope.products[index].quantity = parseInt($scope.products[index].quantity);
            }
        };

        // fonction qui n'autorise que des valeurs float avec 2 decimale pour le champs price au moment du ng-change
        $scope.validatePriceOnChange = function(index){
            if(!$scope.products[index].price.match(/^[\+\-]?[0-9]+(([\.\,][0-9]{0})|([\.\,][0-9]{1})|([\.\,][0-9]{2}))?$/)){
                $scope.products[index].price = $scope.products[index].price.substring(0,$scope.products[index].price.length - 2);
            }
        };

        // fonction transforme le prix en nombre a deux decimales au moment du ng-blur
        $scope.validatePriceOnBlur = function(index){
            if($scope.products[index].price.length == 0){
                $scope.products[index].price = $scope.products[index].price + '0.00';
            }
            else if($scope.products[index].price.indexOf('.') == -1){
                $scope.products[index].price = $scope.products[index].price + '.00';
            }
            else if($scope.products[index].price.match(/^[\+\-]?[0-9]+(([\.\,][0-9]{0}))?$/)){
                $scope.products[index].price = $scope.products[index].price + '00';
            }
            else if($scope.products[index].price.match(/^[\+\-]?[0-9]+(([\.\,][0-9]{1}))?$/)){
                $scope.products[index].price = $scope.products[index].price + '0';
            }

        };

    }]);
