angular.module('napoles').controller('LoginController',['$scope','$http','$timeout', function($scope, $http, $timeout){

  $scope.mensagem = '';

  $scope.login = function(form){
    $http.post('/api/login', {
      usuario: form.usuario,
      senha: form.senha
    }).then(function(data){
      console.log(data);
    }, function(err){
      console.log(err);
    });
  };

}]);
