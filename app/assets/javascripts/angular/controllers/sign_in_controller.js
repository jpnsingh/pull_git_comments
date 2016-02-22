'use strict';

module.exports = angular.module('pull-git-comments.controllers.loginController', [])
    .controller('loginController', [
            '$scope', 'authService',
            function ($scope, authService) {
                $scope.error = null;

                $scope.login = function (username, password) {
                    $scope.authenticating = true;
                }
            }
        ]
    );