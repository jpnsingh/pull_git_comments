'use strict';

module.exports = angular.module('pull-git-comments.services.repositoryService', [])
    .service('repositoryService', [
        '$http', 'gitAPIConstants', 'authService',
        function ($http, gitAPIConstants, authService) {
            return {
                getRepositories: function () {
                    return $http.get(gitAPIConstants.repo_url, {params: {access_token: authService.getAccessToken()}})
                        .then(function (response) {
                            return response.data;
                        }, function (response) {
                            return response.errors;
                        });
                }
            };
        }
    ]);
