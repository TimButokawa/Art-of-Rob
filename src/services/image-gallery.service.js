(function() {
    'use strict';

    angular.module('robBrown').factory('imageGalleryService', imageGalleryService);

    function imageGalleryService($http, $q) {
        var service = {
            getPatternImages: getPatternImages
        };
        return service;

        function getPatternImages() {
            var deferred = $q.defer();
            $http.get('services/PatternImages/Get').success(function(data) {
                deferred.resolve(data);
            });
            return deferred.promise;
        }
    }
})();
