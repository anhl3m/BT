(function() {
'use strict';

    angular
        .module('adminsite.login')
        .controller('LoginController', ControllerController);

    ControllerController.inject = ['loginService', '$state'];
    function ControllerController(loginService, $state) {
        var vm = this;
        
        vm.login = login;

        function login() {
            vm.checkLogin = loginService.checkLogin(vm.email, vm.password);
            if (vm.checkLogin) {
                $state.go('home');
            } else {
                alert('Vui lòng kiểm tra lại email hoặc password!!!');
            }
        }

        activate();

        ////////////////

        function activate() { }
    }
})();