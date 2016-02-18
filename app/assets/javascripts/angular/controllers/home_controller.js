"use strict";

appModule.controller('HomeController', [
    '$scope', '$http', '$cookies', 'repositoryService', 'pullRequestService',
    function ($scope, $http, $cookies, repositoryService, pullRequestService) {
        $scope.loadingRepos = true;
        repositoryService.getRepositories()
            .then(function (repos) {
                $scope.loadingRepos = false;
                $scope.repos = repos;
            });

        $scope.$watch('selectedRepo', function (repo) {
            if (repo) {
                $scope.loadingPulls = true;
                pullRequestService.getPullsForRepo(repo).then(function (pulls) {
                    $scope.loadingPulls = false;
                    $scope.pulls = pulls;
                })

            }
        });

        $scope.getComments = function (repo, pullId) {
            pullRequestService.getCommentsForRepoPull(repo, pullId)
                .then(function (comments) {
                    pullRequestService.setPullComments(comments);
                    window.location.href = '#repo/' + repo + '/pull/' + pullId;
                }, function (response) {

                });
        };

        $scope.$watch('selectedPull', function (selectedPull) {
            if (selectedPull) {
                //$cookies.put('selectedPull', selectedPull);
                pullRequestService.setSelectedPull(selectedPull);
            }
        });
    }
]);
