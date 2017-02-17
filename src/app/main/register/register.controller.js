(function() {
'use strict';

    angular
        .module('adminsite.register')
        .controller('RegisterController', ControllerController);

    ControllerController.inject = ['registerService'];
    function ControllerController(registerService) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();