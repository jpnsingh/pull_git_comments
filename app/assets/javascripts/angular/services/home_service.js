'use strict';

module.exports = angular.module('pull-git-comments.services.HomeService', [])
    .service('HomeService', [
        function () {
            var getWelcomeMessage = function () {
                return 'Hello World From Angular Service';
            };

            return {
                getWelcomeMessage: getWelcomeMessage
            };
        }
    ]);
