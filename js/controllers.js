app.controller("HomeController", function($scope, $location, $http) {
	$scope.search = {};
	$scope.message = "Home";
	$scope.movieSearch = function(title) {
		$http.get('http://www.omdbapi.com/?s='+title)
			.then(function(res){
				$scope.movies = res.data.Search;
			})
		$location.url('/?title='+title);
	}

	var search_params = $location.search();
	if (search_params.title) {
		$scope.search.title = search_params.title;
		$scope.movieSearch(search_params.title);
	}
});

app.controller("MovieController", function($scope, $http, $routeParams) {
	 if($routeParams.id) {
		 $http.get('http://www.omdbapi.com/?i='+$routeParams.id)
		 	.then(function(res){
		 		$scope.movie = res.data;
		 	})
	 	
	 }
});

app.controller("DogsController", function($scope) {
	$scope.dogs = ["baxter", "nikki", "elly", "susan", "sutro"];
});

app.controller("DogController", function($scope, $routeParams) {
	if ($routeParams.name) {
		$scope.dog = $routeParams;
	}
});

app.controller("NewController", function($scope) {
});
