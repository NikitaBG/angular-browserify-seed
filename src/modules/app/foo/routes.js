'use strict';

module.exports = /*ngInject*/
    function ($routeProvider,$locationProvider) {
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
            .when('/image/:id', {
                templateUrl: 'app/foo/templates/image.html',
                controller: 'imageController',
                controllerAs: 'image'
            })
            .otherwise({
                redirectTo: '/'
            });
            $locationProvider.html5Mode({enabled: true, requireBase: false});
    };