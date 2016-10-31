(function() {
    'use strict';

    angular
        .module('robBrown')
        .controller('DrawingsController', DrawingsController);

    function DrawingsController($rootScope, drawings) {
        var vm = this;
        vm.drawings = drawings;

        $rootScope.$on('$stateChangeSuccess', function() {
            var $close = angular.element('a.lb-close');
            if($close.is(':visible')) {
                $close.trigger('click');
            }
        });
    }
})();
