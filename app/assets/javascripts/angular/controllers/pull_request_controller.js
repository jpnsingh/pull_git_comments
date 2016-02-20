'use strict';

module.exports = angular.module('pull-git-comments.controllers.pullRequestController', [])
    .controller('pullRequestController', [
        '$scope', '$cookies', 'pullRequestService',
        function ($scope, $cookies, pullRequestService) {
            //$scope.selectedPull = $cookies.get('selectedPull');

            $scope.selectedPull = pullRequestService.getSelectedPull('selectedPull');

            $scope.comments = pullRequestService.getPullComments();
        }
    ]);
