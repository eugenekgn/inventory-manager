(function() {
  'use strict';


  angular.module('common.services')
    .factory('productsResource', productsResource);

  productsResource.$inject = [];

  function productsResource($resource) {
    console.log('call');
    return $resource('/api/products/:productId');
  }
})();