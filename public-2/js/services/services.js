angular.module('napoles').factory('Pedidos', ['$resource', function($resource){

  return $resource('/api/pedidos');
}]);
