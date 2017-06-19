AplicativoController.$inject = ['$rootScope', '$location'];

function AplicativoController($rootScope, $location) {
	$rootScope.activetab = $location.path();
}

module.exports = AplicativoController;