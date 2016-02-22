'use strict';

module.exports = angular.module('pull-git-comments.services.pullRequestService', [])
    .service('pullRequestService', [
        '$http', 'gitConstants', 'authService',
        function ($http, gitConstants, authService) {
            return {
                getPullsForRepo: function (repo) {
                    return $http.get(gitConstants.repo_pulls_url.replace(':repoName', repo.full_name), {
                            params: {
                                access_token: authService.getAccessToken(),
                                state: 'all'
                            }
                        })
                        .then((response) => {
                            return response.data;
                        }, (response) => {
                            return response.errors;
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
