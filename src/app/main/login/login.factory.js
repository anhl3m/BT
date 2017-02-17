(function() {
'use strict';

    angular
        .module('adminsite.login')
        .factory('loginService', Service);

    function Service() {
        var service = {
            checkLogin: checkLogin
        };
        
        return service;

        ////////////////
        function checkLogin(email, password) { 
            if (email === 'a@gmail.com' && password === '123') {
                return true;
            } else {
                return false;
            }
        }
    }
})();