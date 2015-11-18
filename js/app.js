var app = angular.module('routeApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		})
		.when('/dogs', {
      templateUrl: 'partials/dogs.html',
      controller: 'DogsController'
    })
    .when('/dogs/new', {
    	templateUrl: 'partials/new.html',
    	controller: 'NewController'
    })
    .when('/dogs/:name', {
    	templateUrl: 'partials/dog.html',
    	controller: 'DogController'
    })
    .when('/movies/:id', {
    	templateUrl: 'partials/movie.html',
    	controller: 'MovieController'
    })
    .otherwise({
    	redirectTo: '/'
    })

  $locationProvider.html5Mode(true);
}]);