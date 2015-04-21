(function() {
    'use strict';

    angular.module('robBrown').controller('PatternCity', PatternCity);

    function PatternCity(images) {
        var vm = this;
        // TODO: get two galleries from the service?
        vm.patternImages = _.compact(_.flatten(_.pluck(images, 'pattern-one')));
        vm.patternTwoImages = _.compact(_.flatten(_.pluck(images, 'pattern-two')));
    }
})();
