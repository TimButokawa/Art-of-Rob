(function() {
    'use strict';

    angular.module('robBrown').factory('imageGalleryService', imageGalleryService);

    function imageGalleryService($http, $q) {
        var service = {
            getPatternImages: getPatternImages,
            getDrawings: getDrawings
        };
        return service;

        function getPatternImages() {
            var deferred = $q.defer();
            $http.get('data/images/patternImages.json').success(function(data) {
                deferred.resolve(data);
            });
            return deferred.promise;
        }

        function getDrawings() {
            var deferred = $q.defer();
            $http.get('data/images/drawings.json').success(function(data) {
                deferred.resolve(data.drawings);
            });
            return deferred.promise;
        }
    }
})();
