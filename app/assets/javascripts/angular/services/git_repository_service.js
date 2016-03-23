'use strict';

module.exports = angular.module('pull-git-comments.services.repositoryService', [])
    .service('repositoryService', [
      '$http', 'gitAPIConstants', 'authService',
      function ($http, gitAPIConstants, authService) {
        return {
          getOrganizations: function () {
            return $http.get(gitAPIConstants.org_url, {
              params: {
                access_token: authService.getAccessToken()
              }
            }).then(function (response) {
              return response.data;
            }, function (response) {
              return response.errors;
            });
          },
          getRepositoriesForOrg: function (org) {
            return $http.get(gitAPIConstants.repo_url.replace(':org', org.login), {
              params: {
                access_token: authService.getAccessToken()
              }
            }).then(function (response) {
              return response.data;
            }, function (response) {
              return response.errors;
            });
          }
        };
      }
    ]);
