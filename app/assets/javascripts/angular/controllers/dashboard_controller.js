"use strict";

module.exports = angular.module('pull-git-comments.controllers.dashboardController', [])
    .controller('dashboardController',
    [
      '$scope', '$http', 'repositoryService', 'gitPullRequestService', 'authService',
      function ($scope, $http, repositoryService, gitPullRequestService, authService) {
        authService.setAccessToken($('#access_token').val());

        $scope.loadingOrgs = true;
        repositoryService.getOrganizations().then(function (orgs) {
          $scope.loadingOrgs = false;
          $scope.orgs = orgs;
        });

        $scope.$watch('selectedOrg', function (org) {
          if (org) {
            $scope.loadingRepos = true;
            repositoryService.getRepositoriesForOrg(org).then(function (repos) {
              $scope.loadingRepos = false;
              $scope.repos = repos;
            });
          }
        });

        $scope.$watch('selectedRepo', function (repo) {
          if (repo) {
            $scope.loadingPulls = true;
            gitPullRequestService.getPullsForRepo(repo).then(function (pulls) {
              $scope.loadingPulls = false;
              $scope.pulls = pulls;
            })
          }
        });

        $scope.getComments = function (repo, pullId) {
          gitPullRequestService.getCommentsForRepoPull(repo, pullId)
              .then(function (comments) {
                gitPullRequestService.setPullComments(comments);
                window.location.href = '#repo/' + repo + '/pull/' + pullId;
              }, function (response) {

              });
        };

        $scope.$watch('selectedPull', function (selectedPull) {
          if (selectedPull) {
            gitPullRequestService.setSelectedPull(selectedPull);
          }
        });
      }
    ]
);
