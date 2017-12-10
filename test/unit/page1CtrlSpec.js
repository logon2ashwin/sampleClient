describe("signuppage1CtrlSpec", function() {
    var $rootScope, $scope, $controller, httpBackend, $location, config;


    beforeEach(function () {
        window.angular.mock.module('clofus');
    });

    beforeEach(inject(function ($httpBackend, _$rootScope_,_$timeout_,_$controller_, _$location_, _config_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $location = _$location_;
        $timeout=_$timeout_;
        httpBackend = $httpBackend;
        config = _config_;

        createController = function () {
            return $controller('signuppage1Ctrl', {
                '$rootScope': $rootScope,
                '$scope': $scope,
                '$location': $location,
                'config':config
            });
        };
        httpBackend.whenGET(config.remoteurl + ':' +  config.port + '/appcontroller').respond(200,[{"status":"OPTIONS"}]);
        httpBackend.whenGET(config.remoteurl + ':' +  config.port + 'userinfo').respond(200,  [{"userid":8,"firstname":"sabu","lastname":"R","phoneno":"","school":null,"address":null,"city":null,"postalcode":null,"country":"","emailid":null,"profilepicture":null,"gender":"","date_of_birth":"0000-00-00 00:00:00","nick_name":"sabu"}]);
        httpBackend.whenPOST(config.remoteurl + ':' +  config.port + '/appcontroller').respond(200,{"status": "success", "result": "8" })
    }));

    beforeEach(function () {
        httpBackend.whenGET(/\.html$/).respond('');
    });

    afterEach(function () {
        // httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });


    it('Check the path', function () {
        $location.path("/page1");
        var controller = createController();
        expect($location.path()).toBe('/page1');

    });


    it('Check the save function is working or not?', function () {
        var user=[{"userid":8,"firstname":"sabu","lastname":"R","phoneno":"","school":null,"address":null,"city":null,"postalcode":null,"country":"","emailid":null,"profilepicture":null,"gender":"","date_of_birth":"0000-00-00 00:00:00","nick_name":"sabu"}];
        var imgid='35ee034b-e5ee-9dd0-77a2-9fa1594d35b3'
        var controller = createController();
        $scope.savenewprofile(user,imgid);
        expect($scope.savenewprofile).toBeDefined();

    });
});