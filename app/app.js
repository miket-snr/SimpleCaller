(function() {
    
    var app = angular.module('templateApp', ['ngRoute','ui.bootstrap']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'BaseController',
                templateUrl: 'app/views/homepage.html'
            })
            .when('/call', {
                controller: 'LocationController',
                templateUrl: 'app/views/base.html'
            })
            .when('/what', {
                controller: 'LocationController',
                templateUrl: 'app/views/autocomplete.html'
            })
                .when('/who', {
                controller: 'LocationController',
                templateUrl: 'app/views/adminView.html'
            })
                 .when('/where', {
                controller: 'LocationController',
                templateUrl: 'app/views/locationView.html'
            })
                .when('/why', {
                controller: 'LocationController',
                templateUrl: 'app/views/accordionView.html'
            })
         .when('/orders', {
                controller: 'LocationController',
                templateUrl: 'app/views/orders.html'
            })
                 .when('/logacall', {
                controller: 'LocationController',
                templateUrl: 'app/views/allinoneView.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());