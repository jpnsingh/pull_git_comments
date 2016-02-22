'use strict';

module.exports = angular.module('pull-git-comments.constants', [])
    .constant('gitConstants', {
            auth_url: 'http://github.com/login/oauth/authorize',
            access_token_url: 'http://github.com/login/oauth/access_token',
            access_token: '****',
            repo_url: 'http://api.github.com/orgs/OnlifeHealth/repos',
            repo_pulls_url: 'http://api.github.com/repos/:repoName/pulls',
            pull_comments_url: '/pull/comments'
        }
    );
