'use strict';

describe('controller: Pattern...', function(){
    var scope, controller;
    var images = [
        {
            patternOne: [
                {
                    group: 'pattern',
                    title: 'one'
                },
                {
                    group: 'pattern',
                    title: 'two'
                }
            ],
            patternTwo: [
                {
                    group: 'pattern-two',
                    title: 'one'
                },
                {
                    group: 'pattern-two',
                    title: 'two'
                },
                {
                    group: 'pattern-two',
                    title: 'three'
                }
            ]
        }
    ];

    beforeEach(function() {
        module('robBrown', function($provide) {
            $provide.value('images', images);
        });
        inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('PatternCity', {
                $scope: scope,
                patternImages: this.images,
                patternTwoImages: this.images
            });
        });
    });

    it('should get images for pattern one...', function() {
        var vm = controller;
        var numberOfPatternOneImages = vm.patternImages.length;
        expect(numberOfPatternOneImages).toBe(2);
    });

    it('should get images for pattern two...', function() {
        var vm = controller;
        var numberOfPatternTwoImages = vm.patternTwoImages.length;
        expect(numberOfPatternTwoImages).toBe(3);
    });
});
