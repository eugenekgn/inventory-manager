(function () {
  'use strict';

  //https://docs.angularjs.org/api/ngMockE2E/service/$httpBackend
  angular.module('common.mocks', ['ngMockE2E'])
    .run(($httpBackend) => {
      $httpBackend.whenGET(/app/).passThrough();
    })

})();