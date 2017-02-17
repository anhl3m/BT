(function() {
'use strict';

    angular
        .module('adminsite')
        .controller('IndexController', ControllerController);

    function ControllerController() {
        var vm = this;


      vm.isHide = true;
      vm.menu = [{
          'name': 'Yêu cầu khách hàng',
          'state': 'requests'
      }, {
          'name': 'Quản lý nhân viên',
          'state': 'employees',
          'item': [{
              'name': 'Danh sách nhân viên',
              'state': 'listEmployee'
          }, {
              'name': 'Lương nhân viên',
              'state': 'salaryEmployee'
          }, {
              'name': 'Tài khoản nhân viên',
              'state': 'accountEmployee'
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
      }];

        activate();

        ////////////////

        function activate() { }
    }
})();