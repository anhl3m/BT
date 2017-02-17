(function() {
    'use strict';

    angular
        .module('adminsite')
        .directive('msNavi', Directive);

    function Directive() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: ControllerController,
            controllerAs: 'vm',
            templateUrl: 'app/components/navigation/navigation.html',
            restrict: 'E',
            scope: {
            }
        };
        return directive;
    }
    /* @ngInject */
    function ControllerController () {
        var vm = this;

        vm.menu = [{
            'name': 'Yêu cầu khách hàng',
            'state': 'requests'
        }, {
            'name': 'Quản lý nhân viên',
            'state': 'employees',
            'iterm': [{

            }]
        }, {
            'name': 'Quản lý dịch vụ',
            'state': 'services'
        }, {
            'name': 'Quản lý khách hàng',
            'state': 'customers'
        }, {
            'name': 'Thống kê',
            'state': 'reports'
        }
        ];
    }
})();