angular.module('napoles',['ngRoute','ngResource']).config(function($routeProvider){

  $routeProvider.when('/pedidos', {
    templateUrl: 'partials/pedidos.html',
    controller: 'PedidosControllers'
  })

  .otherwise({redirectTo: '/pedidos'});

});
