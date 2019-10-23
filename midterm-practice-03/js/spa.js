var app = angular.module('midtermApp',['ngRoute']);
  app.config(function($routeProvider) {
    $routeProvider.when('/',
      {
        controller:'CustomersController',
        templateUrl: 'app/views/home.html'
      })
    .when('/works',
      {
        controller: 'BookController',
        templateUrl: 'app/views/works.html'
      })
      .when('/news',
        {
          controller: 'MenuController',
          templateUrl: 'app/views/news.html'
        })
     .when('/contact',
        {
          controller: 'FlightStatusController',
          templateUrl: 'app/views/contact.html'
        })
        .when('/etfinals',
           {
             controller: 'ETFinalsController',
             templateUrl: 'app/views/etfinals.html'
           })
     .when('/story',
        {
          controller: 'StoryController',
          templateUrl: 'app/views/story.html'
        })
    .when('/adam',
       {
         controller: 'AdamController',
         templateUrl: 'app/views/adam.html'
       })
  });
  app.controller('BookController', function($scope){
    $scope.customerID = 5;
  });
  app.controller('MenuController', function($scope){
    $scope.customerID = 5;
  });
  app.controller('StoryController', function($scope){
    $scope.customerID = 5;
  });
  app.controller('FlightStatusController', function($scope){
    $scope.customerID = 5;
  });
  app.controller('ETFinalsController', function($scope){
    $scope.customerID = 5;
  });
  app.controller('AdamController', function($scope){
    $scope.customerID = 5;
  });
  app.controller('CustomersController', function($scope) {
    $scope.customers = [
        {"id": 1, "name":"Ted", "total": 5.996},
        {"id": 2, "name":"Michelle", "total": 10.994},
        {"id": 3, "name":"Zed", "total": 10.99},
        {"id": 4, "name":"Tina", "total": 15.994}
      ];
    });
