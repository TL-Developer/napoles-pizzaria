angular.module('napoles', ['ngRoute','ngResource','ngAnimate']).config(function($routeProvider, $httpProvider){

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};

  $routeProvider.when('/pedidos', {
    templateUrl: 'partials/pedidos.html',
    controller: 'PedidosControllers'
  })

  .when('/site', {
    templateUrl: 'partials/site.html',
    controller: 'SiteController'
  })

  .otherwise({redirectTo: '/pedidos'});

});
