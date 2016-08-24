(function() {
  'use strict';


  angular.module('common.mocks')
    .factory('productsResourceMock', productsResourceMock);

  productsResourceMock.$inject = [];

  function productsResourceMock($httpBackend) {
    let products = [
      {
        name: 'House Phone',
        model: 'HP1',
        code: 'vxc10',
        releaseDate: '10/10/2015',
        price: 1500,
        imageUrl: 'images/phone.png'
      },
      {
        name: 'Computer',
        model: 'MP1',
        code: 'rc11',
        releaseDate: '10/11/2017',
        price: 1800,
        imageUrl: 'images/computer.png'
      },
      {
        name: 'Keyboard',
        model: 'HP2',
        code: 'vxc11',
        releaseDate: '10/10/2016',
        price: 30,
        imageUrl: 'images/keyboard.png'
      },
      {
        name: 'monitor',
        model: 'HP2',
        code: 'vx10',
        releaseDate: '10/10/2015',
        price: 800,
        imageUrl: 'images/monitor.png'
      },
      {
        name: 'laptop',
        model: 'lp2',
        code: 'cvc112',
        releaseDate: '11/10/2015',
        price: 450,
        imageUrl: 'images/laptop.png'
      }
    ];

    let productUrl = '/api/products';

    $httpBackend.whenGet(productUrl).respond(inventory);
    $httpBackend.whenGET(/^\/product\//).passThrough();
  }
})();