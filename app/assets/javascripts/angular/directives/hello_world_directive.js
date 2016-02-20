'use strict';

module.exports = angular.module('pull-git-comments.directives.helloWorld', [])
    .directive('helloWorld', [
        function () {
            return {
                restrict: 'AE',
                link: function ($scope, element, attrs, ctrl) {
                    element.text('Hello World From Angular Directive');
                }
            };
        }
    ]);
