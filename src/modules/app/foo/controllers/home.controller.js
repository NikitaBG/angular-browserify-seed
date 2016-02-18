'use strict';

module.exports = /*@ngInject*/
    function homeController($scope, albumService) {
        var self = this;

        (function() {
			albumService.getAlbums().then(function(response){
	    		$scope.images = response;
	    		self.onDemand = true;

		    	self.dataset = {
		            _items: [],
		            _refresh: function(data) {
		              this._items = data.filter(function(el) {
		                return !angular.isDefined(el._excluded) || el._excluded === false;
		              });
		            },
		            getItemAtIndex: function(index) {
		              return this._items[index];
		            }, //getItemAtIndex
		            getLength: function() {
		              return this._items.length;
		            } //getLenth
		     	}; //dataset

		      	self.dataset._refresh($scope.images);

				self._toggle = 1;
				self.toggle = function() {

					if (!self._toggle) {
					  self._toggle = 2;
					} else if (self._toggle < 8) {
					  self._toggle += 1;
					} else {
					  self._toggle = 1;
					}
					for (var i = 0; i < self.items.length; i++) {
					  self.items[i]._excluded = (self.items[i].value % self._toggle !== 0);
					}

					self.dataset._refresh($scope.images);
				};
		        }, function(err, status){
		        	console.log(err);
		        });
		})();
    };