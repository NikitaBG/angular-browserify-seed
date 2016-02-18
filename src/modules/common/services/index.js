'use strict';

module.exports =
    angular.module('expressly.common.services', [])
        .factory('exampleService', require('./example.service'))
		.factory('albumService', require('./album.service'))
        .factory('imageService', require('./image.service'));
        