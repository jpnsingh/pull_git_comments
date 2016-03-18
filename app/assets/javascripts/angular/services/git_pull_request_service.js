'use strict';

module.exports = angular.module('pull-git-comments.services.gitPullRequestService', [])
    .service('gitPullRequestService', [
      '$http', 'gitAPIConstants', 'authService',
      function ($http, gitAPIConstants, authService) {
        return {
          getPullsForRepo: function (repo) {
            return $http.get(gitAPIConstants.repo_pulls_url.replace(':repoName', repo.full_name), {
              params: {
                access_token: authService.getAccessToken(),
                state: 'all'
              }
            }).then(function (response) {
              return response.data;
            }, function (response) {
              return response.errors;
            });
          },
          getPullForRepoById: function (org, repo, number) {
            return $http.get(gitAPIConstants.repo_pull_url
                .replace(':org', org)
                .replace(':repo', repo)
                .replace(':number', number), {
              params: {
                access_token: authService.getAccessToken()
              }
            }).then(function (response) {
              return response.data;
            }, function (response) {

            });
          },
          setSelectedPull: function (pull) {
            this.selectedPull = pull;
          },
          getSelectedPull: function () {
            return this.selectedPull
          },
          setPullComments: function (pullComments) {
            this.pullComments = pullComments
          },
          getPullComments: function () {
            return this.pullComments;
          },
          getCommentsForRepoPull: function (repo, pullId) {
            return $http.get('/pull/comments', {params: {repo: repo, id: pullId}})
                .then(function (response) {
                  return response.data;
                }, function (response) {

                });
          }
        };
      }
    ]);
