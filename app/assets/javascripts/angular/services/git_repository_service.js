'use strict';

module.exports = angular.module('pull-git-comments.services.repositoryService', [])
    .service('repositoryService', [
        '$http', 'gitConstants', 'authService',
        function ($http, gitConstants, authService) {
            return {
                getRepositories: function () {
                    return $http.get(gitConstants.repo_url, {params: {access_token: authService.getAccessToken()}})
                        .then(function (response) {
                            return response.data;
                        }, function (response) {
                            return response.errors;
                        });
                }
            };
        }
    ]);
