//'use strict';
//
//appModule.config(
//    [
//        '$routeProvider',
//        function ($routeProvider) {
//            $routeProvider
//                .when('/', {
//                    templateUrl: 'index.html',
//                    controller: 'HomeController'
//                })
//                .when('/about', {
//                    templateUrl: 'about.html'
//                })
//                .when('/repo/:owner/:repo/pull/:pullId', {
//                    templateUrl: 'pull_request_comments.html',
//                    controller: 'pullRequestController'
//                })
//                .otherwise({
//                    redirectTo: '/'
//                });
//        }
//    ]
//);