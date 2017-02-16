DesenvolvimentoController.$inject = ['$rootScope', '$location'];

function DesenvolvimentoController($rootScope, $location) {
	$rootScope.activetab = $location.path();
}

module.exports = DesenvolvimentoController;