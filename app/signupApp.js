angular.module("myApp",[])
	.directive('optIn', function(){
		return {
			templateUrl:'sign-up.html',
			transclude: true,
			restrict: 'E',
			replace: true
		}
	})