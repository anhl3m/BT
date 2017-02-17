(function() {
'use strict';

    angular
        .module('adminsite.request')
        .factory('requestService', Service);

    function Service() {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function exposedFn() { }
    }
})();