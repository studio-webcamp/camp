var macaron = angular.module('macaron', ['ngResource', 'ngRoute']);
macaron.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/home', {controller: 'homeCtrl', templateUrl: '/ng-views/main.html'})
        .when('/categories', {controller: 'CategoriesCtrl', templateUrl: '/ng-views/categories.html'})
        .when('/contact', {controller: 'homeCtrl', templateUrl: '/ng-views/main.html'})
        .when('/cart', {controller: 'homeCtrl', templateUrl: '/ng-views/main.html'})
        .otherwise('/');
});