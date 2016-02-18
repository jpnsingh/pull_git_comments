'use strict';

appModule.directive('helloWorld', [
    function () {
        return {
            restrict: 'AE',
            link: function ($scope, element, attrs, ctrl) {
                element.text('Hello World From Angular Directive');
            }
        };
    }
]);
