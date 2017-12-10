'use strict';

angular.module('cricwormadmin')
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/plain';
    }])
    .factory("changetoautoservice", ['$resource', '$window', 'configservice', function($resource, $window, configservice) {

        return $resource(configservice.getBaseAPIUrl().value + "matchlists/change/to/auto", {}, {
            "change": {
                method: 'POST',
                isArray: false // this method issues a PUT request
            }
        });
    }]);
