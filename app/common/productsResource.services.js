(function() {
  'use strict';


  angular.module('common.services')
    .factory('productsResource', productsResource);


  productsResource.$inject = ['$resource'];

    function productsResource($resource) {
      return $resource('/api/products/:productId');
    }
})();