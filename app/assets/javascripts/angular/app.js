"use strict";

let appModule = angular.module('pull-git-comments',
    [
        'ngCookies',
        'ngRoute',
        'ui.router',
        require('./controllers').name,
        require('./services').name,
        require('./directives').name,
        'pull-git-comments.constants'
    ]
).config(['$controllerProvider', function ($controllerProvider) {
    $controllerProvider.allowGlobals();
}]);
