angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('packages',{
                url:'/packages',
                templateUrl: "../views/packages.html"
            })
            .state('locactions',{
                url:'/locactions',
                templateUrl: "../views/locactions.html"
            })
            .state('booked',{
                url:'/booked/:id',
                templateUrl: "../views/booked.html"
            })
            .state('adventurers',{
                url:'/adventurers/',
                parent: 'home',
                templateUrl: "../views/adventurers.html"
            })
            .state('contact',{
                url:'/contact',
                parent: 'home',
                templateUrl: "../views/contact.html"
            })



        $urlRouterProvider
            .otherwise('/');
    });
