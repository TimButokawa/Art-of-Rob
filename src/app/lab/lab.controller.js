(function() {
    'use strict';

    angular.module('robBrown').controller('InTheLab', InTheLab);

    InTheLab.$inject = ['images'];

    function InTheLab(images) {
        var vm = this;
        vm.images = _.pluck(images, 'images');
        // TODO: pluck images and links in the service
    }
})();
