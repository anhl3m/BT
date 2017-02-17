(function() {
  'use strict';

  angular
    .module('adminsite')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
