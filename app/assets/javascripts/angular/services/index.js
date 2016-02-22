'use strict';

module.exports = angular.module('pull-git-comments.services', [
    require('./auth_service').name,
    require('./home_service').name,
    require('./pull_request_service').name,
    require('./repository_service').name
]);
