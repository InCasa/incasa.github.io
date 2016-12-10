RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RouteConfig($stateProvider, $urlRouterProvider)
	{ 	 
		//Rota padrão
       $urlRouterProvider.otherwise("/home");
	   
	   $stateProvider
		
		//rota home
	   .state('home', {
		  url:'/home',
		  templateUrl : 'app/views/home.html',
		  controller  : require('./controllers/HomeCtrl'),
	   })
	 
		//rota equipe
	   .state('equipe', {
		  url:'/equipe',
		  templateUrl : 'app/views/equipe.html',
		  controller  : require('./controllers/EquipeCtrl'),
	   })

	   //rota projeto
	   .state('projeto', {
		  url:'/projeto',
		  templateUrl : 'app/views/projeto.html',
		  controller  : require('./controllers/ProjetoCtrl'),
	   })	 	   
	 
	}
	module.exports = RouteConfig;