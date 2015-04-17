'use strict';

describe('controller: Pattern...', function(){
    var scope, controller;
    beforeEach(module('robBrown'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = $controller;
    }));

    it('should define have an array of images...', function() {
        var vm = controller('PatternCity', {
            $scope: scope
        });
        expect(vm.patternImages.length > 8).toBeTruthy();
        for( var i in vm.patternImages) {
            var group = vm.patternImages[i].group;
            expect(group).toBe('pattern');
        }
    });

    it('should define have an array of images...', function() {
        var vm = controller('PatternCity', {
            $scope: scope
        });
        expect(vm.patternTwoImages.length).toBe(12);
    });
});
