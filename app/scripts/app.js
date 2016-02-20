'use strict';

/**
 * @ngdoc overview
 * @name oliwebappApp
 * @description
 * # oliwebappApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
		'ngAnimate',		
    'todoList',
		'main',
		'mymodal',
		'animations',
		'ngStorage',
		'about',
		'register',
		'login',
		'AuthServices',
		'AuthAppServices',
		'contact',
    'carousel'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/javascript', {
        templateUrl: 'views/javascript.html',
        controller: 'JavascriptCtrl',
        controllerAs: 'javascript'
      })
      .when('/nodejs', {
        templateUrl: 'views/nodejs.html',
        controller: 'NodejsCtrl',
        controllerAs: 'nodejs'
      })
      .when('/angularjs', {
        templateUrl: 'views/angularjs.html',
        controller: 'AngularjsCtrl',
        controllerAs: 'angularjs'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/developpementweb', {
        templateUrl: 'views/developpementweb.html',
        controller: 'DeveloppementwebCtrl',
        controllerAs: 'developpementweb'
      })
      .when('/java', {
        templateUrl: 'views/java.html',
        controller: 'JavaCtrl',
        controllerAs: 'java'
      })
      .when('/html', {
        templateUrl: 'views/html.html',
        controller: 'HtmlCtrl',
        controllerAs: 'html'
      })
      .when('/css', {
        templateUrl: 'views/css.html',
        controller: 'CssCtrl',
        controllerAs: 'css'
      })
      .when('/jquery', {
        templateUrl: 'views/jquery.html',
        controller: 'JqueryCtrl',
        controllerAs: 'jquery'
      })
      .when('/bootstrap', {
        templateUrl: 'views/bootstrap.html',
        controller: 'BootstrapCtrl',
        controllerAs: 'bootstrap'
      })
      .when('/bootstrapexemple', {
        templateUrl: 'views/bootstrapexemple.html',
        controller: 'BootstrapexempleCtrl',
        controllerAs: 'bootstrapexemple'
      })
      .when('/todolist', {
        templateUrl: 'views/todolist.html',
        controller: 'TodoCtrl',
        controllerAs: 'todolist'
      })
      .when('/carousel', {
        templateUrl: 'views/carousel.html',
        controller: 'CarouselCtrl',
        controllerAs: 'carousel'
      })
      .when('/animations', {
        templateUrl: 'views/animations.html',
        controller: 'AnimationsCtrl',
        controllerAs: 'animations'
      })
      .when('/fileroute', {
        templateUrl: 'views/fileroute.html',
        controller: 'FilerouteCtrl',
        controllerAs: 'fileroute'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
	;
