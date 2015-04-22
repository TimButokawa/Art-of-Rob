(function() {
    'use strict';

    angular.module('robBrown').controller('PatternCity', PatternCity);

    function PatternCity($rootScope, images) {
        var vm = this;
        // TODO: get two galleries from the service?
        vm.patternImages = _.compact(_.flatten(_.pluck(images, 'patternOne')));
        vm.patternTwoImages = _.compact(_.flatten(_.pluck(images, 'patternTwo')));

        // close lightbox if browser back or forward button is used
        // TODO: should this be in routes?
        $rootScope.$on('$stateChangeSuccess', function() {
            var $close = angular.element('a.lb-close');
            if($close.is(':visible')) {
                $close.trigger('click');
            }
        });
    }
})();
