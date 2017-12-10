'use strict';

angular.module('cricwormadmin')
    .factory('httpInterceptor', function($q, $rootScope, $location,$timeout,$window,configservice) {
        return {
            request: function(config) {
                config.headers = config.headers || {};

                var url = config.url.split("/api/v1/");
                //console.log(configservice.getBaseAPIUrl());
                if(url[0].indexOf("http")>-1){
                    config.url = configservice.getBaseAPIUrl().value + url[1];
                }

                if($rootScope.access_token){
                    config.headers.Authorization = $rootScope.access_token;
                    return config;
                }else {
                    return $timeout(function(){
                        config.headers.Authorization = $window.localStorage.getItem("token");
                        return config;
                    });
                }
            },
            response: function(response) {

                if (response.data !== undefined) {
                    if (response.data.message) {
                        if (response.data.message == "invalid_access_token" || response.data.message == "session_invalid") {
                            $location.path('/signout');
                            return $q.reject(response);
                        } else if (response.data.message == "error") {
                            $location.path('/home');
                            return $q.reject(response);
                        } else {
                            return response || $q.when(response);
                        }
                    }
                }
                return response;
            }
        };
    })
    .config(['$routeProvider', '$httpProvider', '$locationProvider', function(routeProvider, $httpProvider, $locationProvider, $http) {

        $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/plain';
        $httpProvider.interceptors.push('httpInterceptor');


        routeProvider

            .when('', {
                redirectTo: '/signin'
            })
            .when('/dashboard', {
                templateUrl: 'modules/dashboard/index.html',
                controller: 'DashboardCtrl'
            })
            .when('/signin', {
                templateUrl: 'modules/signin/index.html',
                controller: 'SigninCtrl'
            })
            .when('/signout', {
                templateUrl: 'modules/signout/index.html',
                controller: 'SignoutCtrl'
            })
             .when('/teams/:type', {
                templateUrl: 'modules/teams/index.html',
                controller: 'teamsctrl'
            })
             .when('/teams/:type/:team_id', {
                templateUrl: 'modules/teams/index.html',
                controller: 'teamsctrl'
            })
             .when('/players/:type', {
                templateUrl: 'modules/players/index.html',
                controller: 'playersctrl'
            })
             .when('/players/:type/:team_id', {
                templateUrl: 'modules/players/index.html',
                controller: 'playersctrl'
            })
             .when('/match/:type/:id', {
                templateUrl: 'modules/match/index.html',
                controller: 'matchctrl'
            })
             .when('/match/:type', {
                templateUrl: 'modules/match/index.html',
                controller: 'matchctrl'
            })
             .when('/tournament/:type/:tourid', {
                templateUrl: 'modules/tournament/index.html',
                controller: 'tournamentctrl'
            })
             .when('/tournament/:type', {
                templateUrl: 'modules/tournament/index.html',
                controller: 'tournamentctrl'
            })
             .when('/scores/:type/:matchid', {
                templateUrl: 'modules/scores/index.html',
                controller: 'scorectrl'
            })
            .when('/scores/:type', {
                templateUrl: 'modules/scores/index.html',
                controller: 'scorectrl'
            })
            .when('/banner/:type', {
                templateUrl: 'modules/banner/index.html',
                controller: 'bannerctrl'
            })
            .when('/users/:type', {
                templateUrl: 'modules/users/index.html',
                controller: 'usersctrl'
            })
             .when('/users/:type/:id', {
                templateUrl: 'modules/users/index.html',
                controller: 'usersctrl'
            })
            .otherwise({
                redirectTo: '/signin'
            });

        $locationProvider.html5Mode(true);
    }]);
