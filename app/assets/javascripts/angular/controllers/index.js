'use strict';

module.exports = angular.module('pull-git-comments.controllers', [
    require('./sign_in_controller').name,
    require('./dashboard_controller').name,
    require('./git_pull_request_controller').name
]);
