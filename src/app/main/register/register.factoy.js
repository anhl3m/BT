(function() {
'use strict';

    angular
        .module('adminsite.register')
        .factory('registerService', Service);

    function Service() {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function exposedFn() { }
    }
})();