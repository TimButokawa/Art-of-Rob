(function() {
    'use strict';

    angular.module('robBrown', ['ui.router', 'ui.bootstrap'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('projects', {
                    url: '/projects',
                    template: '<div class="projects"><span ui-view autoscroll></span><div>',
                    controller: 'Projects as project'
                })
                .state('projects.menu', {
                    url: '/menu',
                    templateUrl: 'app/projects/projects.html'
                })
                .state('projects.desk', {
                    url: '/desk',
                    templateUrl: 'app/projects/drawing-desk/drawing-desk.html'
                })
                .state('projects.pod', {
                    url: '/pod',
                    templateUrl: 'app/projects/pod/drawing-pod.html'
                })
                .state('projects.sound', {
                    url: '/sound',
                    templateUrl: 'app/projects/sound-system/sound-system.html',
                    controller: 'SoundSystem as system'
                })
                .state('projects.magical', {
                    url: '/magical',
                    templateUrl: 'app/projects/magical/magical-mistakes.html'
                })
                .state('projects.breath', {
                    url: '/breath',
                    templateUrl: 'app/projects/breath/breath.html',
                    controller: 'Breath as breath'
                })
                .state('projects.pattern', {
                    abstract: true,
                    template: '<span ui-view autoscroll></span>',
                    controller: 'PatternCity as pattern'
                })
                .state('projects.pattern.one', {
                    url: '/pattern-one',
                    templateUrl: 'app/projects/pattern/pattern-one.html',
                })
                .state('projects.pattern.two', {
                    url: '/pattern-two',
                    templateUrl: 'app/projects/pattern/pattern-two.html'
                })
                // TODO: add this when sketchbook is back
                // .state('projects.sketch', {
                //     url: '/sketch',
                //     templateUrl: 'app/projects/sketch/sketch.html'
                // })
                .state('projects.riso', {
                    url: '/riso',
                    templateUrl: 'app/projects/riso/riso.html'
                })
                // TODO: add this when 2d works is back
                // .state('works', {
                //     url: '/works',
                //     templateUrl: 'app/works/works.html'
                // })
                .state('lab', {
                    url: '/lab',
                    templateUrl: 'app/lab/lab.html',
                    controller: 'InTheLab as lab',
                    resolve: {
                        images: function(instagramService) {
                            return instagramService.getImages();
                        }
                    }
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
                // TODO: add when links are back
                // .state('links', {
                //     url: '/links',
                //     templateUrl: 'app/links/links.html'
                // })
                ;

            $urlRouterProvider.otherwise('/projects/menu');
        })
    ;
})();
