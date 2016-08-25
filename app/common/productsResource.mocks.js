(function() {
  'use strict';


  let app = angular.module('common.mocks', ['ngMockE2E']);

  app.run(commonMocksConfig);


  function commonMocksConfig($httpBackend) {

    let products = [
      {
        productId: 0,
        name: 'House Phone',
        model: 'HP1',
        code: 'vxc10',
        releaseDate: '10/10/2015',
        price: 1500,
        imageUrl: 'images/phone.png'
      },
      {
        productId: 1,
        name: 'Computer',
        model: 'MP1',
        code: 'rc11',
        releaseDate: '10/11/2017',
        price: 1800,
        imageUrl: 'images/computer.png'
      },
      {
        productId: 2,
        name: 'Keyboard',
        model: 'HP2',
        code: 'vxc11',
        releaseDate: '10/10/2016',
        price: 30,
        imageUrl: 'images/keyboard.png'
      },
      {
        productId: 3,
        name: 'monitor',
        model: 'HP2',
        code: 'vx10',
        releaseDate: '10/10/2015',
        price: 800,
        imageUrl: 'images/monitor.png'
      },
      {
        productId: 4,
        name: 'laptop',
        model: 'lp2',
        code: 'cvc112',
        releaseDate: '11/10/2015',
        price: 450,
        imageUrl: 'images/laptop.png'
      }
    ];


    function productResponse(method, url, data) {
      let productItem = {'product': 0};
      let parameters = url.split('/');
      let length = parameters.length;
      let id = parameters[length - 1];

      return _.find(products, (product)=> {
          return product.productId == productItem.productId;
        }) || productItem;
    }

    let productUrl = '/api/products';
    let editingRegex = new RegExp(productUrl + '/[0-9][0-9]*', '');

    $httpBackend.whenGET(productUrl).respond(products);
    $httpBackend.whenGET(editingRegex).respond(productResponse);
    $httpBackend.whenGET(/app/).passThrough();
  }

})();