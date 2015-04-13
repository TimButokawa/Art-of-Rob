(function() {
    'use strict';

    angular.module('robBrown').controller('PatternCity', PatternCity);

    function PatternCity() {
        var vm = this;
        // TODO: move this to a service
        vm.patternImages = [
            {
                group: 'pattern',
                source: 'pattern-1.jpg',
                title: 'one',
                description: 'inkjet and gouache on panel / 2012 / 13" x 13"'
            },
            {
                group: 'pattern',
                source: 'pattern-2.jpg',
                title: 'two',
                description: 'inkjet and gouache on panel / 2012 / 13" x 13"'
            },
            {
                group: 'pattern',
                source: 'pattern-3.jpg',
                title: 'three',
                description: 'inkjet and gouache on panel / 2012 / 13" x 13"'
            },
            {
                group: 'pattern',
                source: 'pattern-4.jpg',
                title: 'four',
                description: 'inkjet and gouache on panel / 2012 / 13" x 13"'
            },
            {
                group: 'pattern',
                source: 'pattern-5.jpg',
                title: 'five',
                description: 'inkjet and gouache on panel / 2012 / 13" x 13"'
            },
            {
                group: 'pattern',
                source: 'pattern-6.jpg',
                title: 'six',
                description: 'inkjet and gouache on panel / 2012 / 13" x 13"'
            },
            {
                group: 'pattern',
                source: 'pattern-7.jpg',
                title: 'seven',
                description: 'inkjet and gouache on panel / 2012 / 13" x 13"'
            },
            {
                group: 'pattern',
                source: 'pattern-8.jpg',
                title: 'eight',
                description: 'inkjet and gouache on panel / 2012 / 13" x 13"'
            },
            {
                group: 'pattern',
                source: 'pattern-9.jpg',
                title: 'nine',
                description: 'inkjet and gouache on panel / 2012 / 13" x 13"'
            },
            {
                group: 'pattern',
                source: 'pattern-10.jpg',
                title: 'ten',
                description: 'inkjet and gouache on panel / 2012 / 13" x 13"'
            }
        ];
    }
})();
