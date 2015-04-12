(function() {
    'use strict';

    angular.module('robBrown').controller('Breath', Breath);

    function Breath() {
        angular.element('.breath-video').fitVids();
    }
})();
