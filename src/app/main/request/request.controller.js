(function() {
'use strict';

    angular
        .module('adminsite.request')
        .controller('RequestController', ControllerController);

    ControllerController.inject = ['requestService'];
    function ControllerController(requestService) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();