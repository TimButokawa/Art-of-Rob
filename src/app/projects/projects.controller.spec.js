'use strict';

describe('controller: Projects...', function(){
    var scope, controller;
    beforeEach(module('robBrown'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = $controller;
    }));

    it('should define a title...', function() {
        var vm = controller('Projects', {
            $scope: scope
        });
        expect(vm.title).toBe('rob brown');
    });
});
