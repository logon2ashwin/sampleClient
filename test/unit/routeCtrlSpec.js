describe("routeCtrlSpec", function() {
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
    it('check the routes', function() {
        $location.path("/home");
        var templateUrl="modules/home/index.html";
        var controller="Homepagectrl";
        expect(templateUrl).toEqual('modules/home/index.html');
        expect($location.path()).toEqual('/home');
       expect(controller).toEqual('Homepagectrl');
    });

    it('check the routes', function() {
        $location.path("/signin");
        var templateUrl="modules/signin/index.html";
        var controller="SigninCtrl";
        expect(templateUrl).toEqual('modules/signin/index.html');
        expect($location.path()).toEqual('/signin');
        expect(controller).toEqual('SigninCtrl');
    });
    it('check the routes', function() {
        $location.path("/signout");
        var templateUrl="modules/signout/index.html";
        var controller="SignoutCtrl";
        expect(templateUrl).toEqual('modules/signout/index.html');
        expect($location.path()).toEqual('/signout');
        expect(controller).toEqual('SignoutCtrl');
    });
    it('check the routes', function() {
        $location.path("/signup");
        var templateUrl="modules/signup/index.html";
        var controller="SignupCtrl";
        expect(templateUrl).toEqual('modules/signup/index.html');
        expect($location.path()).toEqual('/signup');
        expect(controller).toEqual('SignupCtrl');
    });
    it('check the routes', function() {
        $location.path("/dashboard");
        var templateUrl="modules/dashboard/index.html";
        var controller="DashboardCtrl";
        expect(templateUrl).toEqual('modules/dashboard/index.html');
        expect($location.path()).toEqual('/dashboard');
        expect(controller).toEqual('DashboardCtrl');
    });
    it('check the routes', function() {
        $location.path("/appcrud/:app_id");
        var templateUrl="modules/appcrud/index.html";
        var controller="appcrudCtrl";
        expect(templateUrl).toEqual('modules/appcrud/index.html');
        expect($location.path()).toEqual('/appcrud/:app_id');
        expect(controller).toEqual('appcrudCtrl');
    });
    it('check the routes', function() {
        $location.path("/profile/:usrid");
        var templateUrl="modules/profile/index.html";
        var controller="profileCtrl";
        expect(templateUrl).toEqual('modules/profile/index.html');
        expect($location.path()).toEqual('/profile/:usrid');
        expect(controller).toEqual('profileCtrl');
    });
    it('check the routes', function() {
        $location.path("/attendance");
        var templateUrl="modules/attendance/index.html";
        var controller="AttendanceCtrl";
        expect(templateUrl).toEqual('modules/attendance/index.html');
        expect($location.path()).toEqual('/attendance');
        expect(controller).toEqual('AttendanceCtrl');
    });
    it('check the routes', function() {
        $location.path("/taskboard");
        var templateUrl="modules/taskboard/index.html";
        var controller="TaskBoardCtrl";
        expect(templateUrl).toEqual('modules/taskboard/index.html');
        expect($location.path()).toEqual('/taskboard');
        expect(controller).toEqual('TaskBoardCtrl');
    });
    it('check the routes', function() {
        $location.path("/useradmin");
        var templateUrl="modules/useradmin/index.html";
        var controller="UserAdminCtrl";
        expect(templateUrl).toEqual('modules/useradmin/index.html');
        expect($location.path()).toEqual('/useradmin');
        expect(controller).toEqual('UserAdminCtrl');
    });
    it('check the routes', function() {
        $location.path("/JoinInstitute");
        var templateUrl="modules/joinInstitute/index.html";
        var controller="JoinInstituteCtrl";
        expect(templateUrl).toEqual('modules/joinInstitute/index.html');
        expect($location.path()).toEqual('/JoinInstitute');
        expect(controller).toEqual('JoinInstituteCtrl');
    });
    it('check the routes', function() {
        $location.path("/analytics");
        var templateUrl="modules/analytics/index.html";
        var controller="analyticsCtrl";
        expect(templateUrl).toEqual('modules/analytics/index.html');
        expect($location.path()).toEqual('/analytics');
        expect(controller).toEqual('analyticsCtrl');
    });
    it('check the routes', function() {
        $location.path("/books");
        var templateUrl="modules/books/index.html";
        var controller="BooksCtrl";
        expect(templateUrl).toEqual('modules/books/index.html');
        expect($location.path()).toEqual('/books');
        expect(controller).toEqual('BooksCtrl');
    });
    it('check the routes', function() {
        $location.path("/tasks");
        var templateUrl="modules/tasks/index.html";
        var controller="TasksCtrl";
        expect(templateUrl).toEqual('modules/tasks/index.html');
        expect($location.path()).toEqual('/tasks');
        expect(controller).toEqual('TasksCtrl');
    });
    it('check the routes', function() {
        $location.path("/content");
        var templateUrl="modules/content/index.html";
        var controller="ContentCtrl";
        expect(templateUrl).toEqual('modules/content/index.html');
        expect($location.path()).toEqual('/content');
        expect(controller).toEqual('ContentCtrl');
    });
    it('check the routes', function() {
        $location.path("/wall");
        var templateUrl="modules/wall/index.html";
        var controller="WallCtrl";
        expect(templateUrl).toEqual('modules/wall/index.html');
        expect($location.path()).toEqual('/wall');
        expect(controller).toEqual('WallCtrl');
    });
    it('check the routes', function() {
        $location.path("/groupwall/:g_id");
        var templateUrl="modules/group/index.html";
        var controller="GroupCtrl";
        expect(templateUrl).toEqual('modules/group/index.html');
        expect($location.path()).toEqual('/groupwall/:g_id');
        expect(controller).toEqual('GroupCtrl');
    });
    it('check the routes', function() {
        $location.path("/creategroup/:g_id");
        var templateUrl="modules/creategroup/index.html";
        var controller="createGroupCtrl";
        expect(templateUrl).toEqual('modules/creategroup/index.html');
        expect($location.path()).toEqual('/creategroup/:g_id');
        expect(controller).toEqual('createGroupCtrl');
    });
    it('check the routes', function() {
        $location.path("/joingroup");
        var templateUrl="modules/joingroup/index.html";
        var controller="JoinGroupCtrl";
        expect(templateUrl).toEqual('modules/joingroup/index.html');
        expect($location.path()).toEqual('/joingroup');
        expect(controller).toEqual('JoinGroupCtrl');
    });
    it('check the routes', function() {
        $location.path("/forgotpwd");
        var templateUrl="modules/forgotpwd/index.html";
        var controller="forgotpwdCtrl";
        expect(templateUrl).toEqual('modules/forgotpwd/index.html');
        expect($location.path()).toEqual('/forgotpwd');
        expect(controller).toEqual('forgotpwdCtrl');
    });
    it('check the routes', function() {
        $location.path("/resetpwd/:resettoken");
        var templateUrl="modules/resetpwd/index.html";
        var controller="resetpwdCtrl";
        expect(templateUrl).toEqual('modules/resetpwd/index.html');
        expect($location.path()).toEqual('/resetpwd/:resettoken');
        expect(controller).toEqual('resetpwdCtrl');
    });
    it('check the routes', function() {
        $location.path("/institute/:institute_id");
        var templateUrl="modules/institutehome/index.html";
        var controller="instituteHomeCtrl";
        expect(templateUrl).toEqual('modules/institutehome/index.html');
        expect($location.path()).toEqual('/institute/:institute_id');
        expect(controller).toEqual('instituteHomeCtrl');
    });
    it('check the routes', function() {
        $location.path("/createinstitute");
        var templateUrl="modules/createInstitute/index.html";
        var controller="createInstituteCtrl";
        expect(templateUrl).toEqual('modules/createInstitute/index.html');
        expect($location.path()).toEqual('/createinstitute');
        expect(controller).toEqual('createInstituteCtrl');
    });
    it('check the routes', function() {
        $location.path("/configureinstitute");
        var templateUrl="modules/configureInstitute/index.html";
        var controller="configureInstituteCtrl";
        expect(templateUrl).toEqual('modules/configureInstitute/index.html');
        expect($location.path()).toEqual('/configureinstitute');
        expect(controller).toEqual('configureInstituteCtrl');
    });
    it('check the routes', function() {
        $location.path("/mymark");
        var templateUrl="modules/mymarks/index.html";
        var controller="MymarkCtrl";
        expect(templateUrl).toEqual('modules/mymarks/index.html');
        expect($location.path()).toEqual('/mymark');
        expect(controller).toEqual('MymarkCtrl');
    });
    it('check the routes', function() {
        $location.path("/processrequest");
        var templateUrl="modules/processRequest/index.html";
        var controller="processRequestCtrl";
        expect(templateUrl).toEqual('modules/processRequest/index.html');
        expect($location.path()).toEqual('/processrequest');
        expect(controller).toEqual('processRequestCtrl');
    });
    it('check the routes', function() {
        $location.path("/eagleview");
        var templateUrl="modules/eagleview/index.html";
        var controller="EagleviewCtrl";
        expect(templateUrl).toEqual('modules/eagleview/index.html');
        expect($location.path()).toEqual('/eagleview');
        expect(controller).toEqual('EagleviewCtrl');
    });
    it('check the routes', function() {
        $location.path("/calender");
        var templateUrl="modules/events/index.html";
        var controller="EventsCtrl";
        expect(templateUrl).toEqual('modules/events/index.html');
        expect($location.path()).toEqual('/calender');
        expect(controller).toEqual('EventsCtrl');
    });
    it('check the routes', function() {
        $location.path("/createapp");
        var templateUrl="modules/createapp/index.html";
        var controller="CreateAppCtrl";
        expect(templateUrl).toEqual('modules/createapp/index.html');
        expect($location.path()).toEqual('/createapp');
        expect(controller).toEqual('CreateAppCtrl');
    });
    it('check the routes', function() {
        $location.path("/institutesignin/:institute_id");
        var templateUrl="modules/institutesignin/index.html";
        var controller="instituteSigninCtrl";
        expect(templateUrl).toEqual('modules/institutesignin/index.html');
        expect($location.path()).toEqual('/institutesignin/:institute_id');
        expect(controller).toEqual('instituteSigninCtrl');
    });
    it('check the routes', function() {
        $location.path("/userdetail");
        var templateUrl="modules/userdetail/index.html";
        var controller="UserDetailCtrl";
        expect(templateUrl).toEqual('modules/userdetail/index.html');
        expect($location.path()).toEqual('/userdetail');
        expect(controller).toEqual('UserDetailCtrl');
    });
    it('check the routes', function() {
        $location.path("/timetable");
        var templateUrl="modules/timetable/index.html";
        var controller="TimetableCtrl";
        expect(templateUrl).toEqual('modules/timetable/index.html');
        expect($location.path()).toEqual('/timetable');
        expect(controller).toEqual('TimetableCtrl');
    });
    it('check the routes', function() {
        $location.path("/marks");
        var templateUrl="modules/marks/index.html";
        var controller="MarksCtrl";
        expect(templateUrl).toEqual('modules/marks/index.html');
        expect($location.path()).toEqual('/marks');
        expect(controller).toEqual('MarksCtrl');
    });
    it('check the routes', function() {
        $location.path("/myattendance");
        var templateUrl="modules/myattendance/index.html";
        var controller="MyAttendanceCtrl";
        expect(templateUrl).toEqual('modules/myattendance/index.html');
        expect($location.path()).toEqual('/myattendance');
        expect(controller).toEqual('MyAttendanceCtrl');
    });
    it('check the routes', function() {
        $location.path("/about");
        var templateUrl="modules/aboutus/index.html";
         expect(templateUrl).toEqual('modules/aboutus/index.html');
        expect($location.path()).toEqual('/about');
    });
    it('check the routes', function() {
        $location.path("/feature");
        var templateUrl="modules/clofusfeature/index.html";
        expect(templateUrl).toEqual('modules/clofusfeature/index.html');
        expect($location.path()).toEqual('/feature');
    });
    it('check the routes', function() {
        $location.path("/career");
        var templateUrl="modules/career/index.htm";
        expect(templateUrl).toEqual('modules/career/index.htm');
        expect($location.path()).toEqual('/career');
    });
    it('check the routes', function() {
        $location.path("/premium");
        var templateUrl="modules/career/index.htm";
        expect($location.path()).toEqual('/premium');
    });
    it('check the routes', function() {
        $location.path("/articles/:page_id");
        var templateUrl="modules/articles/index.html";
        var controller="articlesctrls";
        expect(templateUrl).toEqual('modules/articles/index.html');
        expect($location.path()).toEqual('/articles/:page_id');
        expect(controller).toEqual('articlesctrls');
    });
    it('check the routes', function() {
        $location.path("/viewarticles/:page_id");
        var templateUrl="modules/viewarticles/index.html";
        var controller="viewarticlesctrl";
        expect(templateUrl).toEqual('modules/viewarticles/index.html');
        expect($location.path()).toEqual('/viewarticles/:page_id');
        expect(controller).toEqual('viewarticlesctrl');
    });
    it('check the routes', function() {
        $location.path("/setupProfile");
        var templateUrl="modules/setupProfile/index.html";
        var controller="SetupProfileCtrl";
        expect(templateUrl).toEqual('modules/setupProfile/index.html');
        expect($location.path()).toEqual('/setupProfile');
        expect(controller).toEqual('SetupProfileCtrl');
    });
    it('check the routes', function() {
        $location.path("/page1");
        var templateUrl="modules/frontsignup/page1/index.html";
        var controller="signuppage1Ctrl";
        expect(templateUrl).toEqual('modules/frontsignup/page1/index.html');
        expect($location.path()).toEqual('/page1');
        expect(controller).toEqual('signuppage1Ctrl');
    });
    it('check the routes', function() {
        $location.path("/page2");
        var templateUrl="modules/frontsignup/page2/index.html";
        var controller="signuppage2Ctrl";
        expect(templateUrl).toEqual('modules/frontsignup/page2/index.html');
        expect($location.path()).toEqual('/page2');
        expect(controller).toEqual('signuppage2Ctrl');
    });
    it('check the routes', function() {
        $location.path("/page3");
        var templateUrl="modules/frontsignup/page3/index.html";
        var controller="signuppage3Ctrl";
        expect(templateUrl).toEqual('modules/frontsignup/page3/index.html');
        expect($location.path()).toEqual('/page3');
        expect(controller).toEqual('signuppage3Ctrl');
    });
    it('check the routes', function() {
        $location.path("/page4");
        var templateUrl="modules/frontsignup/page4/index.html";
        var controller="signuppage4Ctrl";
        expect(templateUrl).toEqual('modules/frontsignup/page4/index.html');
        expect($location.path()).toEqual('/page4');
        expect(controller).toEqual('signuppage4Ctrl');
    });
    it('check the routes', function() {
        $location.path("/page5");
        var templateUrl="modules/frontsignup/page5/index.html";
        var controller="signuppage5Ctrl";
        expect(templateUrl).toEqual('modules/frontsignup/page5/index.html');
        expect($location.path()).toEqual('/page5');
        expect(controller).toEqual('signuppage5Ctrl');
    });
    it('check the routes', function() {
        $location.path("/verifyEmail/:verifytoken");
        var templateUrl="modules/verifyEmail/index.html";
        var controller="verifyEmailCtrl";
        expect(templateUrl).toEqual('modules/verifyEmail/index.html');
        expect($location.path()).toEqual('/verifyEmail/:verifytoken');
        expect(controller).toEqual('verifyEmailCtrl');
    });
});

