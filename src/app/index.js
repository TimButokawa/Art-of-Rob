(function() {
    'use strict';

    angular.module('robBrown', ['ui.router', 'ui.bootstrap'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('projects', {
                    url: '/',
                    templateUrl: 'app/projects/projects.html',
                    controller: 'Projects as project'
                })
                .state('works', {
                    url: '/works',
                    templateUrl: 'app/works/works.html'
                })
                .state('lab', {
                    url: '/lab',
                    templateUrl: 'app/lab/lab.html'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'app/about/about.html'
                })
                .state('cv', {
                    url: '/cv',
                    templateUrl: 'app/cv/cv.html'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'app/contact/contact.html'
                })
                .state('links', {
                    url: '/links',
                    templateUrl: 'app/links/links.html'
                });

            $urlRouterProvider.otherwise('/');
        })
    ;
})();
