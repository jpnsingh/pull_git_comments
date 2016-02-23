'use strict';

module.exports = angular.module('pull-git-comments.controllers.pullRequestController', [])
    .controller('pullRequestController', [
        '$scope', 'pullRequestService',
        function ($scope, pullRequestService) {
            $scope.selectedPull = pullRequestService.getSelectedPull('selectedPull');

            $scope.comments = pullRequestService.getPullComments();
        }
    ]);
