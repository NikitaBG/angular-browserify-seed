'use strict';

module.exports =
    angular.module('expressly.foo', [])
        .config(require('./routes.js'))
        .config(require('./i18n/en.js'))
        .controller('homeController', require('./controllers/home.controller'))
        .controller('albumController', require('./controllers/album.controller'));
