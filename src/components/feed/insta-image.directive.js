(function() {
    'use strict';

    angular.module('robBrown').directive('instaRad', instaRad);

    function instaRad() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'components/feed/insta-image.html',
            scope: {
                image: '@',
                source:'@'
            }
        };
        return directive;
    }
})();
