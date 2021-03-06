angular.module('napoles', ['ngRoute','ngResource','ngAnimate']).config(function($routeProvider, $httpProvider){

  $httpProvider.interceptors.push('tokenInterceptor');

  $routeProvider.when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'LoginController'
  })

  .when('/pedidos', {
    templateUrl: 'partials/pedidos.html',
    controller: 'PedidosControllers'
  })

  .when('/site', {
    templateUrl: 'partials/site.html',
    controller: 'SiteController'
  })

  .when('/produtos', {
    templateUrl: 'partials/produtos.html',
    controller: 'ProdutosController'
  })

  .otherwise({redirectTo: '/pedidos'});

});
