(function() {
  'use strict';


  angular.module('common.services')
    .factory('productsResource', productsResource);

  productsResource.$inject = [];

  function productsResource($resource) {
    return $resource('/api/products/:productId');
  }
})();