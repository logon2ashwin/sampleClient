describe("CreateatricleCtrlSpec", function() {
    var $rootScope, $scope, $controller, httpBackend, $location, config;

    beforeEach(function () {
        window.angular.mock.module('clofus');
    });

    beforeEach(inject(function ($httpBackend, _$rootScope_,_$controller_, _$location_, _config_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $location = _$location_;
        httpBackend = $httpBackend;
        config = _config_;

        createController = function () {
            return $controller('articlesctrls', {
                '$rootScope': $rootScope,
                '$scope': $scope,
                '$location': $location,
                'config':config
            });
        };

        httpBackend.whenGET(config.remoteurl + ':' +  config.port + '/userinfo').respond(304,[{"userid":8,"firstname":"sabu","lastname":"R","phoneno":"","school":null,"address":null,"city":null,"postalcode":null,"country":"","emailid":null,"profilepicture":"99accdc273fe5217b58a262ab40fcf82","gender":"","date_of_birth":"0000-00-00 00:00:00","nick_name":"sabu"}]);
        httpBackend.whenGET(config.remoteurl + ':' +  config.port + '/appcontroller').respond(200,{"results":[{"pages_id":43,"creater_id":8,"topic":103,"title":"tutorial","keywords":"intro","content":"<p style=\"box-sizing: border-box; line-height: 24px; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify; font-family: 'Open Sans', Arial, sans-serif; font-size: 14px;\"><b style=\"box-sizing: border-box;\">AngularJS</b>&nbsp;is a very powerful JavaScript library. It is used in Single Page Application (SPA) projects. It extends HTML DOM with additional attributes and makes it more responsive to user actions. AngularJS is open source, completely free, and used by thousands of developers around the world. It is licensed under the Apache license version 2.0.</p><p><br></p>","lastmodified":"2015-08-10T15:20:23.000Z","insertdate":null,"Name":"angularjs","groupid":103,"grouppicture":"","Description":"","firstname":"sabu","lastname":"R","upcount":0,"downcount":0,"profilepicture":"99accdc273fe5217b58a262ab40fcf82"}]});
    }));

    it('Check the path', function () {
        $location.path("/articles/0");
        var controller = createController();
        expect($location.path()).toBe('/articles/0');
    });
    it('Check the tinymc option function', function () {
        var controller = createController();
        expect($scope.tinymceOptions).toBeDefined();
        expect($scope.tinymceOptions.resize).toBeDefined();
        expect($scope.tinymceOptions.statusbar).toBeDefined();
        expect($scope.tinymceOptions.save_enablewhendirty).toBeDefined();
    });
    it('Check the tinymc option function toolbar value', function () {
        var controller = createController();
        expect($scope.tinymceOptions.toolbar).toBeDefined();
        expect($scope.tinymceOptions.toolbar).toEqual( [
            "fullscreen | undo redo | styleselect | bold italic | link image | alignleft | aligncenter | alignright |spellchecker"
        ]);

    });
    it('Check the tinymc option  skin color ', function () {
        var controller = createController();
        expect($scope.tinymceOptions.skin).toBeDefined();
        expect($scope.tinymceOptions.skin).toEqual('lightgray');

    });
    it('Check the find function ', function () {
        var controller = createController();
        expect($scope.hideReadonlyFields).toBeDefined();
        expect($scope.hideReadonlyFields).toEqual(true);
    });
    it('Check the call search group function is working or not? ', function () {
        var controller = createController();
        expect($scope.searchgrp).toBeDefined();
    });
    it('Check the addinlist function is working or not? ', function () {
        var controller = createController();
        expect($scope.addinlist).toBeDefined();
    });
    it('Check the ClearPageTopics function is working or not? ', function () {
        var controller = createController();
        expect($scope.clearpagetopics).toBeDefined();
    });
});