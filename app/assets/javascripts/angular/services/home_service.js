'use strict';

appModule.service('HomeService', [
    function () {
        var getWelcomeMessage = function () {
            return 'Hello World From Angular Service';
        };

        return {
            getWelcomeMessage: getWelcomeMessage
        };
    }
]);
