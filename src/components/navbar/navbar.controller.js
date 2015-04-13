(function() {
    'use strict';

    angular.module('robBrown').controller('MainNavBar', MainNavBar);
    // TODO: discuss mobile nav behavior
    function MainNavBar() {
        angular.element('.mobile-trigger').on('click', function() {
            angular.element('ul.main-menu li').slideToggle();
        });
    }
})();
