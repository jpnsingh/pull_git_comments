'use strict';

module.exports = angular.module('pull-git-comments.services.authService', [])
    .service('authService', [
        '$http', 'gitConstants',
        function ($http, gitConstants) {
            return {
                authorize: function (username, password) {
                    return $http.get(gitConstants.auth_url, {
                        params: {
                            client_id: username,
                            redirect_url: '/dashboard',
                            state: Math.random()
                        }
                    }).then(function (response) {
                        return response.data;
                    }, function (response) {
                        return response.data;
                    })
                },
                getAccessToken: function (username) {
                    return $http.get(gitConstants.access_token_url, {
                        params: {
                            client_id: username,
                            client_secret: '',
                            code: '',
                            redirect_url: '/dashboard',
                            state: Math.random()
                        }
                    }).then(function (response) {
                        return response.data;
                    }, function (response) {
                        return response.data;
                    })
                }
            }
        }
    ]);
