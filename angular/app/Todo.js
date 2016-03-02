var app = angular.module("TodoApp", []);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
      });
  }]);

app.controller("TodoCtrl", ["$q", "$http", "$scope", function($q, $http, $scope) {
	$scope.hello = "hello";
	$scope.title = "Welcome to your task list"; //anything balancing your dom will be under scope
	$scope.macaroni = "whoa";
	$scope.searchText = "";
	$scope.todos = [
	{ name: "Mow the lawn", complete: "incomplete" },
	{ name: "Cut the grass", complete: "complete" },
	{ name: "Kill the ants", complete: "incomplete" },
	{ name: "Trim the weeds", complete: "complete" }
	];
	$scope.killTodo = function(todo) {
	console.log("todo", todo);
	  //Do you see the PFM here of full object comparison?
	  var todoIndex = $scope.todos.indexOf(todo); 

	  if (todoIndex >= 0) {
	    $scope.todos.splice(todoIndex, 1);
	  }
	};
}]);
