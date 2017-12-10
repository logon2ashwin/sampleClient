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
            return $controller('signuppage2Ctrl', {
                '$rootScope': $rootScope,
                '$scope': $scope,
                '$location': $location,
                'config':config
            });
        };
        httpBackend.whenGET(config.remoteurl + ':' +  config.port + '/searchgroup').respond(304,[{"groupid":0,"userid":0,"Name":"clofus","Description":"learning management","grouptype":0,"grouppicture":null},{"groupid":102,"userid":148,"Name":"common","Description":"","grouptype":0,"grouppicture":""},{"groupid":103,"userid":227,"Name":"angularjs","Description":"","grouptype":0,"grouppicture":""},{"groupid":104,"userid":148,"Name":"nodejs","Description":"","grouptype":0,"grouppicture":""},{"groupid":105,"userid":1,"Name":"test","Description":"","grouptype":0,"grouppicture":""},{"groupid":106,"userid":3,"Name":"cricket","Description":"","grouptype":0,"grouppicture":""},{"groupid":107,"userid":5,"Name":"newton","Description":"","grouptype":0,"grouppicture":""},{"groupid":108,"userid":6,"Name":"maths","Description":"","grouptype":0,"grouppicture":""}]);
       httpBackend.whenGET(config.remoteurl + ':' +  config.port + '/group').respond(200,{"status": "success", "result": "8" });

    }));

    beforeEach(function () {
        httpBackend.whenGET(/\.html$/).respond('');
    });

    afterEach(function () {
        // httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });


    it('Check the path', function () {
        $location.path("/page2");
        var controller = createController();
        expect($location.path()).toBe('/page2');

    });
    it('Check the values are assigned or not?', function () {

        var controller = createController();
        expect($scope.interestsearchbox).toBeDefined();

    });
    it('Check getmyGroupList is working or not?', function () {
        var controller = createController();
        expect($scope.getmyGroupList).toBeDefined();
    });

    it('Check searchInterest value assigned or not?', function () {
        var searchkey =[{"groupid":104,"userid":148,"Name":"nodejs","Description":"","grouptype":0,"grouppicture":""}];
        var controller = createController();
        expect($scope.searchInterest).toBeDefined();
    });

/*    it('Check searchInterest function is working or not?', function () {
        var searchkey =[{"groupid":104,"userid":148,"Name":"nodejs","Description":"","grouptype":0,"grouppicture":""}];
        var controller = createController();
        $scope.searchInterest(searchkey);
        expect($scope.searchInterest).toBeDefined();
        expect($scope.msgtxt).toBeDefined();
    });*/
    /*it('Check searchInterest function is working or not?', function () {
        var member =[{"groupid":104,"userid":148,"Name":"nodejs","Description":"","grouptype":0,"grouppicture":""}];
        var controller = createController();
        $scope.joinInterest(member);
        expect($scope.joinInterest).toBeDefined();
    });*/
    it('Check searchInterest function is working or not?', function () {
        var groupname =[{"groupid":104,"userid":148,"Name":"nodejs","Description":"","grouptype":0,"grouppicture":""}];
        var controller = createController();
        $scope.createInterest(groupname);
    });

});
