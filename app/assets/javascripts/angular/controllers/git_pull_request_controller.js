'use strict';

module.exports = angular.module('pull-git-comments.controllers.gitPullRequestController', [])
    .controller('gitPullRequestController', [
      '$scope', 'authService', 'gitPullRequestService',
      function ($scope, authService, gitPullRequestService) {
        authService.setAccessToken($('#access_token').val());

        var org = $('#org').val(),
            repo = $('#repo').val(),
            number = $('#number').val();

        gitPullRequestService.getPullForRepoById(org, repo, number)
            .then(function (data) {
              $scope.selectedPull = data;
            }, function () {

            })
      }
    ]);
