EquipeController.$inject = ['$rootScope', '$location'];

function EquipeController($rootScope, $location) {
	$rootScope.activetab = $location.path();
}

module.exports = EquipeController;