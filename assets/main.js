angular.module('napoles', ['ngRoute','ngResource','ngAnimate']).config(function($routeProvider){

  $routeProvider.when('/site', {
    templateUrl: 'partials/site.html',
    controller: 'SiteController'
  })

  .otherwise({redirectTo: '/site'});

});
