'use strict';

module.exports = /*ngInject*/
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/foo/templates/main.html',
                controller: 'homeController',
                controllerAs: 'home'
            })
            .when('/album/:id', {
                templateUrl: 'app/foo/templates/album.html',
                controller: 'albumController',
                controllerAs: 'album'
            })
            .otherwise({
                redirectTo: '/'
            });
    };