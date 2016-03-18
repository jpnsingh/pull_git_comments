"use strict";

angular.module('pull-git-comments',
    [
        'ngRoute',
        require('./constants').name,
        require('./controllers').name,
        require('./services').name,
        require('./directives').name,
        require('./filters').name
    ]
);
