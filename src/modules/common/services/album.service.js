'use strict';

module.exports = /*@ngInject*/
    function albumService($rootScope, $resource) {
        return {
        	getAlbums: function(){
        		return $resource("http://jsonplaceholder.typicode.com/photos").query().$promise;
        	},
        	getAlbum: function(album_id){
        		return $resource("http://jsonplaceholder.typicode.com/albums/:album_id/photos").query({album_id: album_id}).$promise;
        	}
        };
    };
