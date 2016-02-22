'use strict';

module.exports = angular.module('pull-git-comments.controllers', [
    require('./sign_in_controller').name,
    require('./home_controller').name,
    require('./pull_request_controller').name
]);
