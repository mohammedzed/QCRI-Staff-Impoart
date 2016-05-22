var app = angular.module('myApp', ['ngRoute']);

	app.config(function($routeProvider){
		//set up routes
		$routeProvider
		.when('/', {
			templateUrl: 'html/main.html',
			controller: 'maincontroller'
		})
		.when('/CRUD', {
			templateUrl: 'html/CRUD.html',
			controller: 'crudcontroller'
		})
		.when('/StaffDisp',{
			templateUrl: 'html/StaffDisp.html',
			controller: 'staffcontroller'
		})
		.otherwise({
			redirectTo: '/'
		});
	});
