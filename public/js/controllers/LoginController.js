angular.module('napoles').controller('LoginController',['$scope','$http','$timeout','$location', function($scope, $http, $timeout, $location){

  $scope.mensagem = '';

  $scope.login = function(form){
    $http.post('/api/autenticar', {
      login: form.usuario,
      senha: form.senha
    }).then(function(){
      Materialize.toast('Login feito com sucesso', 2000);
      $location.path('/');
    }, function(err){
      console.log(err);
      Materialize.toast('Login ou senha inválidos', 3000);
    });
  };

}]);
