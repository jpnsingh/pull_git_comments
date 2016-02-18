'use strict';

appModule.service('repositoryService', [
    '$http', 'gitConstants',
    function ($http, gitConstants) {
        let getRepositories = function () {
            return $http.get(gitConstants.repo_url, {params: {access_token: gitConstants.access_token}})
                .then((response) => {
                    return response.data;
                }, (response) => {
                    return response.errors;
                });
        };

        return {
            getRepositories: getRepositories
        };
    }
]);
