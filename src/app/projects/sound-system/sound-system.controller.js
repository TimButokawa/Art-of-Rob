(function() {
    'use strict';

    angular.module('robBrown').controller('SoundSystem', SoundSystem);

    function SoundSystem() {
        angular.element('.sound-system-video').fitVids();
    }
})();
