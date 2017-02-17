(function() {
  'use strict';

  angular
    .module('adminsite')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/main/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'app/main/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      })
      .state('request', {
        url: '/request',
        templateUrl: 'app/main/request/request.html',
        controller: 'RequestController',
        controllerAs: 'request'
      });
    $urlRouterProvider.otherwise('/');
  }

})();
