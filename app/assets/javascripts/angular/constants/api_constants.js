'use strict';

module.exports = angular.module('pull-git-comments.constants', [])
    .constant('gitConstants', {
            auth_url: 'https://github.com/login/oauth/authorize',
            access_token_url: 'https://github.com/login/oauth/access_token',
            repo_url: 'https://api.github.com/orgs/OnlifeHealth/repos',
            repo_pulls_url: 'https://api.github.com/repos/:repoName/pulls',
            pull_comments_url: '/pull/comments'
        }
    );
