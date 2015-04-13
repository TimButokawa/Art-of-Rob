(function() {
    'use strict';

    angular.module('robBrown').directive('lightboxImage', lightboxImage);

    function lightboxImage() {
        var directive = {
            restrict: 'EA',
            templateUrl: '../../components/gallery/gallery-image.html',
            scope: {
                imageGroup: '@',
                imageTitle: '@',
                imageDescription: '@',
                imageSource: '@',
            }
        };
        return directive;
    }
})();
