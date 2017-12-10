'use strict';

angular.module('cricwormadmin')
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/plain';
    }])
    .service("configservice", function($window){

        this.baseAPIUrl = {
            "name": "dummy",
            "value": "http://dummy:8000/api/v1/"
        };

        this.setBaseAPIUrl = function(server){
            this.baseAPIUrl = server;
            $window.localStorage.setItem('baseapiurl',JSON.stringify(this.baseAPIUrl));
        };

        this.refreshBaseAPIUrl = function(){
            var storedbaseapiurl = JSON.parse($window.localStorage.getItem("baseapiurl"));
            this.baseAPIUrl = storedbaseapiurl;
        };

        this.getBaseAPIUrl = function(){
            return this.baseAPIUrl;
        };

    });