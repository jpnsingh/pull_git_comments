'use strict';

module.exports = angular.module('pull-git-comments.filters', [
        require('./time_ago_filter').name
    ]
);