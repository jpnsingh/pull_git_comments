'use strict';

module.exports = angular.module('pull-git-comments.services', [
    require('./auth_service').name,
    require('./git_pull_request_service').name,
    require('./git_repository_service').name
]);
