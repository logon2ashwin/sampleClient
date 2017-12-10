describe("SignoutCtrlSpec", function() {
    var $rootScope, $scope, $controller, httpBackend, $location, config;


    beforeEach(function () {
        window.angular.mock.module('clofus');
    });

    beforeEach(inject(function ($httpBackend, _$rootScope_,_$controller_,_$location_, _config_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $location = _$location_;
        httpBackend = $httpBackend;
        config = _config_;

        createController = function () {
            return $controller('SignoutCtrl', {
                '$rootScope': $rootScope,
                '$scope': $scope,
                '$location': $location,
                'config':config
            });
        };

    }));

    beforeEach(function () {
        httpBackend.whenGET(/\.html$/).respond('');
    });

    afterEach(function () {
       // httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('Check the path', function () {

        $location.path("/signin");
        var controller = createController();
        expect($location.path()).toBe('/signin');

    });

   it('should define sidebar_display', function () {

        var controller = createController();
        expect($rootScope.sidebar_display).toBeDefined();

    });
    it('should define wideContent', function () {

        var controller = createController();
        expect($rootScope.wideContent).toBeDefined();

    });
    it('should check go function', function () {

        var controller = createController();
        expect($scope.go).toBeDefined();

    });
    it('should check user details are defined or Not?', function () {

        var controller = createController();
        expect($scope.user).toBeDefined();
        expect($scope.user.isLogged).toBeDefined();
         expect($scope.user.username).toBeDefined();
         expect($scope.user.type).toBeDefined();
         expect($scope.user.access_token).toBeDefined();


    });


    it('should check user basic information are defined or Not?', function () {

        var controller = createController();
        expect($scope.BasicInfo).toBeDefined();
        expect($scope.BasicInfo.student_id).toBeDefined();
        expect($scope.BasicInfo.first_name).toBeDefined();
        expect($scope.BasicInfo.last_name).toBeDefined();
        expect($scope.BasicInfo.class_name).toBeDefined();
        expect($scope.BasicInfo.section_name).toBeDefined();
        expect($scope.BasicInfo.year_range).toBeDefined();


    });
    it('should check user Notifications  are defined or Not?', function () {

        var controller = createController();
        expect($scope.notification).toBeDefined();
        expect($scope.notification.first_name).toBeDefined();
        expect($scope.notification.from_usrid).toBeDefined();
        expect($scope.notification.last_name).toBeDefined();
        expect($scope.notification.message).toBeDefined();
        expect($scope.notification.modfieddate).toBeDefined();
        expect($scope.notification.nid).toBeDefined();
        expect($scope.notification.prof_img).toBeDefined();
        expect($scope.notification.readflag).toBeDefined();
        expect($scope.notification.to_usrid).toBeDefined();
        expect($scope.notification.type).toBeDefined();



    });
/*    it('should check user Detail  are defined or Not?', function () {

        var controller = createController();
        expect($rootScope.userdetail).toBeDefined();

    });*/
});
