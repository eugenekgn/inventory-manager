(function() {
  'use strict';

  function InventoryController() {
    let vm = this;

    vm.showImage = true;
    vm.imageToggle = function() {
      vm.showImage = !vm.showImage;
    };


    // productsResource.query((data)=> {
    //   vm.product = data;
    // });

  }

  angular.module('inventory')
    .component('productsList', {
      templateUrl: 'app/product/product.html',
      controller: InventoryController,
      controllerAs: 'vm',
      bindings: {}
    });
})();