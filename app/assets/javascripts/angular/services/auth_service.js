'use strict';

module.exports = angular.module('pull-git-comments.services.authService', [])
    .service('authService', [
        function () {
            return {
                getAccessToken: function () {
                    return this.accessToken;
                },
                setAccessToken: function (token) {
                    this.accessToken = token;
                }
            }
        }
    ]);
