'use strict';

module.exports = /*@ngInject*/
    function imageService($rootScope, $resource) {
        return {
        	getImage: function(photo_id){
        		return $resource("http://jsonplaceholder.typicode.com/photos/:photo_id").get({photo_id: photo_id, isArray: false}).$promise;
        	}
        };
    };
