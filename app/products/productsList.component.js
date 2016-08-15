(function () {
    'use strict';

    function ProductsListController() {
        let vm = this;
        vm.products = [{
            
        }];
    }

    angular.module('products')
        .component('productsList', {
            templateUrl: './productsList.html',
            controller: './productsList.controller.js',
            controllerAs: 'vm',
            bindings: {

            }
        });
})();