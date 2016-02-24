'use strict';

module.exports = angular.module('pull-git-comments.filters.timeAgo', [])
    .filter('timeAgo', [
        function (value) {
            return function (value) {
                return value + 'ago';
            }
        }
    ]);
