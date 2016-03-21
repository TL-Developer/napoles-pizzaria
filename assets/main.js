angular.module('napoles', ['ngRoute','ngResource','ngAnimate']).config(function($routeProvider, $httpProvider){

  $httpProvider.defaults.headers.common.Authorization = 'Token eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg';

  $routeProvider.when('/site', {
    templateUrl: 'partials/site.html',
    controller: 'SiteController'
  })

  .otherwise({redirectTo: '/site'});

});
