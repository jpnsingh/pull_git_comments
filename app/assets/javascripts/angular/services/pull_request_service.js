'use strict';

module.exports = angular.module('pull-git-comments.services.pullRequestService', [])
    .service('pullRequestService', [
        '$http', 'gitConstants',
        function ($http, gitConstants) {

            let self = this;

            return {
                getPullsForRepo: function (repo) {
                    return $http.get(gitConstants.repo_pulls_url.replace(':repoName', repo.full_name), {
                            params: {
                                access_token: gitConstants.access_token,
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
                    self.pullComments = pullComments
                },
                getPullComments: function () {
                    return self.pullComments;
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

