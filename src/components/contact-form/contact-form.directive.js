(function() {
    'use strict';

    angular.module('robBrown').directive('contactForm', contactForm);

    function contactForm() {
        var directive = {
            restrict: 'EA',
            templateUrl: '../../components/contact-form/contact-form.html',
            controller: ContactMe,
            controllerAs: 'information'
        };
        return directive;
    }

    function ContactMe($http) {
        var vm = this;
        vm.submit = submit;
        vm.title = 'foo bar';

        function submit(info) {
            // TODO: submit php mailer
            // TODO: eventual submit service
            console.log(info);
            console.log('sending email');
            $http({
                method  : 'POST',
                url     : '../../components/contact-form/contact.php',
                data    : $.param(info),
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .success(function(data) {
                console.log(data);
            });
        }
    }
})();
