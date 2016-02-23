'use strict';

module.exports = angular.module('pull-git-comments.controllers.gitPullRequestController', [])
    .controller('gitPullRequestController', [
        '$scope', 'gitPullRequestService',
        function ($scope, gitPullRequestService) {
            $scope.selectedPull = gitPullRequestService.getSelectedPull('selectedPull');

            $scope.comments = gitPullRequestService.getPullComments();
        }
    ]);
