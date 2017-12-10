describe("appCtrlSpec", function() {
    var $rootScope, $scope, $controller, httpBackend, $location, config;


    beforeEach(function()
    {
        window.angular.mock.module('clofus');
    });

    beforeEach(inject(function ($httpBackend, _$rootScope_, _$controller_, _$location_, _config_,_$routeParams_) {
        $routeParams=_$routeParams_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $location = _$location_;
        httpBackend = $httpBackend;
        config = _config_;

    }));
    it('check the routeID and Path', function() {
        $location.path("/signin");
        expect($location.path()).toEqual('/signin');

    });
    it('check the unprotected path', function() {
        var unprotectedPaths = ['/signup', '/forgotpwd', '/institute', '/about', '/career', '/institutesignin', '/verifyEmail'];
        expect(unprotectedPaths).toEqual(['/signup', '/forgotpwd', '/institute', '/about', '/career', '/institutesignin', '/verifyEmail']);

    });
    it('check the goto apps function is working or not?', function() {
        expect($rootScope.gotoApps).toBeDefined();
    });
    it('check the goto home function is working or not?', function() {
        expect($rootScope.gotoHome).toBeDefined();
    });
    it('check the apps function is assigned or not?', function() {
        expect($rootScope.apps).toBeDefined();
    });
    it('check the display sidebar function is assigned or not?', function() {
        expect($rootScope.displaySidebar).toBeDefined();
    });
    it('check the toolbar function is working or not?', function() {
        expect($rootScope.showtoolbar).toBeDefined();
    });
    it('check the Image retrive function is working or not?', function() {
        expect($rootScope.retrieveImage).toBeDefined();
    });
    it('check the Image getprofile status assigned is working or not?', function() {
        expect($rootScope.getProfiledetails).toBeDefined();
    });
    it('check the handle file function is assigned or not?', function() {
        expect($rootScope.handleFileSelect).toBeDefined();
    });
    it('check the  update file function is assigned or not?', function() {
        expect($rootScope.uploadFile).toBeDefined();
    });

    it('check the  sidebar display function is assigned or not?', function() {
        expect($rootScope.sidebar_display).toBeDefined();
    });
    it('check the  widecontent function is assigned or not?', function() {
        expect($rootScope.wideContent).toBeDefined();
    });
    it('check the  thumbStyle function is assigned or not?', function() {
        expect($rootScope.getThumbStyle).toBeDefined();
    });

    it('check joinchannel function is  working  or not?', function() {
        expect($rootScope.joinchannel).toBeDefined();

    });

    it('check searchchannel function is  working  or not?', function() {
        expect($rootScope.searchchannel).toBeDefined();

    });
});

