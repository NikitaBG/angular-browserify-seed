'use strict';

module.exports = /*@ngInject*/
    function imageController($scope, imageService, $route) {

        (function() {
			imageService.getImage($route.current.pathParams.id).then(function(response){
	    		$scope.image = response;
	        }, function(err, status){
	        	console.log(err);
	        });
		})();
    };