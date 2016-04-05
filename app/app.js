var mainApp = angular.module('mainApp', ['ngRoute', 'ngSanitize']);

mainApp.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 'app/pages/home.html',
		controller : 'meniController'
	})

	.when('/projects', {
		templateUrl : 'app/pages/projects.html',
		controller : 'projectController'
	})

	.when('/projects/:id', {
		templateUrl : 'app/pages/projects-year.html',
		controller : 'projectYear'
	})

	.when('/projectsb/:id', {
		templateUrl : 'app/pages/projectsb.html',
		controller : 'projectB'
	})

	.when('/studio', {
		templateUrl : 'app/pages/studio.html'
	})

	.when('/news', {
		templateUrl : 'app/pages/news.html',
		controller : 'newsController'
	})

	.when('/news/:id', {
		templateUrl : 'app/pages/news-big.html',
		controller : 'bigNews'
	})

	.when('/contact', {
		templateUrl : 'app/pages/contact.html'
	})

	.otherwise({redirectTo: '/'});
})

mainApp.controller('meniController', function($scope) {
	$scope.message = 'Hello from home controller';
});

mainApp.controller('projectController', function($scope, $http) {
	$http.get('app/project.json').success(function(data) {
		$scope.data = data;
	})
});

mainApp.controller('newsController', function($scope, $http) {
	$http.get('app/news.json').success(function(data) { 
		$scope.data = data;
	})
});

mainApp.controller('bigNews', function($scope, $http, $routeParams) {
	$http.get('app/news.json').success(function(data) {
		for(var i = 0; i<data.news.length; i++) {
			if (data.news[i].id === parseInt($routeParams.id)) {
				return $scope.data = data.news[i];			
			}
		}
	})
});

mainApp.controller('projectYear', function($scope, $http, $routeParams, $location) {
	$http.get('app/project.json').success(function(data) {
		$scope.data = data;
	})
	$scope.getClass = function (path) {
		console.log(path);
  		return ($location.path().substr(0, path.length) === path) ? 'markY' : '';
	}
	$scope.year = $routeParams.id;
});

mainApp.controller('projectB', function($scope, $http, $routeParams) {
	$http.get('app/project.json').success(function(data) {
		for(var i = 0; i<data.length; i++) {
			if (data[i].id === parseInt($routeParams.id)) {
				return $scope.item = data[i];			
			}
		}
	})
})