describe("SigninCtrlSpec", function() {
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
            return $controller('SigninCtrl', {
                '$rootScope': $rootScope,
                '$scope': $scope,
                '$location': $location,
                'config':config
            });
        };
        httpBackend.whenGET(config.remoteurl + ':' +  config.port + '/appcontroller').respond(200,{"success": true});

        httpBackend.whenGET(config.remoteurl + ':' +  config.port + '/searchgroup').respond(200,[{"groupid":0,"userid":0,"Name":"clofus","Description":"learning management","grouptype":0,"grouppicture":null},{"groupid":102,"userid":148,"Name":"common","Description":"","grouptype":0,"grouppicture":""},{"groupid":103,"userid":227,"Name":"angularjs","Description":"","grouptype":0,"grouppicture":""},{"groupid":104,"userid":148,"Name":"nodejs","Description":"","grouptype":0,"grouppicture":""},{"groupid":105,"userid":1,"Name":"test","Description":"","grouptype":0,"grouppicture":""},{"groupid":106,"userid":3,"Name":"cricket","Description":"","grouptype":0,"grouppicture":""},{"groupid":107,"userid":5,"Name":"newton","Description":"","grouptype":0,"grouppicture":""},{"groupid":108,"userid":6,"Name":"maths","Description":"","grouptype":0,"grouppicture":""}]);
    }));

  beforeEach(function () {
        httpBackend.whenGET(/\.html$/).respond('');
    });

    afterEach(function () {
       //httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });


    it('Check the path', function () {
        $location.path("/signin");
        var controller = createController();
        expect($location.path()).toBe('/signin');

    });

    it('check default sidebar is false or not?', function () {

        var controller = createController();
        expect($rootScope.sidebar_display).toEqual('false');
        expect($rootScope.sidebar_display).toBeDefined();

    });
    it('check widecontent value is set or not?', function () {

        var controller = createController();
        expect($rootScope.wideContent).toBeDefined();

    });
   it('check the signing error is false or not?', function () {

        var controller = createController();
        expect($scope.signerrors).toEqual(false);
        expect($scope.signerrors).toBeDefined();
    });
    it('check the sign in function working or not?', function () {
        var controller = createController();
        expect($scope.user).toBeDefined();
        expect($scope.user.username).toBeDefined();
        expect($scope.user.password).toBeDefined();

    });
    it('check signin function is Defined or not?', function () {
        var controller = createController();
        expect($scope.enableSignin).toBeDefined();
    });

    it('check go function is Defined or not?', function () {
        var controller = createController();
        expect($scope.go).toBeDefined();

    });

    it('check verify token is set or not?', function () {
        var controller = createController();
        expect($scope.verifytoken).toBeUndefined();

    });

    it('check signin function is working or not?', function () {

        var controller = createController();
        expect($scope.signIn).toBeDefined();

    });

});