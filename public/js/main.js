angular.module('napoles', ['ngRoute','ngResource','ngAnimate']).config(function($routeProvider, $httpProvider){

  $httpProvider.interceptors.push('tokenInterceptor');

  // $httpProvider.defaults.headers.common.Authorization = 'Token eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg';

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
