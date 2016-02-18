'use strict';

appModule.controller('pullRequestController', [
    '$scope', '$cookies', 'pullRequestService',
    function ($scope, $cookies, pullRequestService) {
        //$scope.selectedPull = $cookies.get('selectedPull');

        $scope.selectedPull = pullRequestService.getSelectedPull('selectedPull');

        $scope.comments = pullRequestService.getPullComments();
    }
]);
