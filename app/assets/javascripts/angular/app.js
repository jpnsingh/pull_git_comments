"use strict";

angular.module('pull-git-comments',
    [
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
