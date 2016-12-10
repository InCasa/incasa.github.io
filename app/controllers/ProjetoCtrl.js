ProjetoController.$inject = ['$rootScope', '$location'];

function ProjetoController($rootScope, $location) {
	$rootScope.activetab = $location.path();
}

module.exports = ProjetoController;