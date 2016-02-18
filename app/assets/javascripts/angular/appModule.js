"use strict";

let appModule = angular.module('pull-git-comments', ['ngCookies', 'ngRoute'])
    .constant('gitConstants', {
        repo_url: 'http://api.github.com/orgs/OnlifeHealth/repos',
        repo_pulls_url: 'http://api.github.com/repos/:repoName/pulls',
        pull_comments_url: '/pull/comments',
        access_token: '****'
    })
    .config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'index.html',
                    controller: 'HomeController'
                })
                .when('/about', {
                    templateUrl: 'about.html'
                })
                .when('/repo/:owner/:repo/pull/:pullId', {
                    templateUrl: 'pull_request_comments.html',
                    controller: 'pullRequestController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);
