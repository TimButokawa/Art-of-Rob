(function() {
    'use strict';

    angular.module('robBrown').directive('mainMenu', mainMenu);

    function mainMenu() {
        var directive = {
            restrict: 'EA',
            templateUrl: '../../components/menu/main-menu.html',
            scope: {
                image: '@',
                title: '@'
            }
        };
        return directive;
    }
})();
