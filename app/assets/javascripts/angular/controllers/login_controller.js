'use strict';

module.exports = angular.module('pull-git-comments.controllers.loginController', [])
    .controller('loginController', [
            '$scope', 'authService',
            function ($scope, authService) {
                $scope.error = '';

                $scope.login = function (username, password) {
                    $scope.authenticating = true;

                    authService.authorize(username, password)
                        .then(function (response) {
                            $scope.authenticating = false;

                            authService.getAccessToken(username)
                                .then(function (response) {
                                    location.href = '/dashboard';
                                    $scope.accessToken = response.access_token;
                                }, function (response) {

                                });

                        }, function (result) {
                            $scope.authenticating = false;

                        })
                }
            }
        ]
    );