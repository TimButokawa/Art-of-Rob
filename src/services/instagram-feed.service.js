(function() {
    'use strict';

    angular.module('robBrown').factory('instagramService', instagramService);

    function instagramService($http, $q) {
        var url = "https://api.instagram.com/v1/users/190052649/media/recent/?access_token=190052649.467ede5.aca4d8649cf4417d850c6452ce245e7c&callback=JSON_CALLBACK";
        var service = {
            getImages: getImages
        };
        return service;

        function getImages() {
            // TODO: return plucked images with links
            return getInstagram();
        }

        function getInstagram() {
            var deferred = $q.defer();
            $http.jsonp(url).success(function(response) {
                    deferred.resolve(response.data);
                }).error(function(data, status) {
                    console.log('error: ', status);
                    deferred.reject(status);
            });
            return deferred.promise;
        }
    }
})();
