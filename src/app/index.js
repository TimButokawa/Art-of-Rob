(function() {
    'use strict';

    angular.module('robBrown', ['ui.router', 'ui.bootstrap'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/main/main.html',
                    controller: 'Main as main'
                });

            $urlRouterProvider.otherwise('/');
        })
    ;
})();
