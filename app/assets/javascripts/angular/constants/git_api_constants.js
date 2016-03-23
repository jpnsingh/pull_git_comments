'use strict';

module.exports = angular.module('pull-git-comments.constants.gitAPIConstants', [])
    .constant('gitAPIConstants', {
            auth_url: 'https://github.com/login/oauth/authorize',
            access_token_url: 'https://github.com/login/oauth/access_token',
            org_url: 'https://api.github.com/user/orgs',
            repo_url: 'https://api.github.com/orgs/:org/repos',
            repo_pulls_url: 'https://api.github.com/repos/:repoName/pulls',
            repo_pull_url: 'https://api.github.com/repos/:org/:repo/pulls/:number'
        }
    );
