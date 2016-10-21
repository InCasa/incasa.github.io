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
	 
		//rota sobre
	   .state('sobre', {
		  url:'/sobre',
		  templateUrl : 'app/views/sobre.html',
		  controller  : require('./controllers/SobreCtrl'),
	   })	 	   
	 
	}
	module.exports = RouteConfig;