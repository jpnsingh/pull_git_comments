'use strict';

module.exports = angular.module('pull-git-comments.controllers.signInController', [])
    .controller('signInController', [
            '$scope', 'authService',
            function ($scope, authService) {
                $scope.error = null;
            }
        ]
    );