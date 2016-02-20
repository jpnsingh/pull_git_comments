'use strict';

angular.module(
    'pull-git-comments.constants', []
).constant('gitConstants', {
        repo_url: 'http://api.github.com/orgs/OnlifeHealth/repos',
        repo_pulls_url: 'http://api.github.com/repos/:repoName/pulls',
        pull_comments_url: '/pull/comments',
        access_token: '****'
    }
);
