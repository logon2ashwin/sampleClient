describe('Controller: Homepagectrl', function () {

    var $rootScope, $scope, $controller, httpBackend, $location, config;

    beforeEach(function () {
        window.angular.mock.module('clofus');
    });


    // Initialize the controller and a mock scope
    beforeEach(inject(function ($httpBackend, _$rootScope_,_$timeout_, _$controller_, _$location_, _config_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $location = _$location_;
        $timeout=_$timeout_;
        httpBackend = $httpBackend;
        config = _config_;

        createController = function () {
            return $controller('Homepagectrl', {
                '$rootScope': $rootScope,
                '$scope': $scope,
                '$location': $location,
                'config':config
            });
        };

    }));

/*
    it('check Init chat', function() {
        var groupdata = [{"groupid":5,"grouppicture":"","usrid":6,"Name":"science","Description":"","grouptype":0}];
        var controller = createController();
        $scope.initChat(groupdata);

    });
*/
    it('check values are assigned or not?', function() {
        var controller = createController();
        expect($scope.chlist).toBeDefined();
        expect($scope.showinfo).toBeDefined();
        expect($scope.showjoinbox).toBeDefined();
    });
/*
    it('check active channel working  or not?', function() {
        var controller = createController();
        expect($scope.activeChannel).toBeDefined();
        expect($scope.activeChannel.nickname).toBeDefined();
        expect($scope.activeChannel.channel).toBeDefined();
    });
*/
    it('check values are assigned or not?', function() {
        var controller = createController();
        expect($rootScope.chatbox).toBeDefined();
        expect($rootScope.peoplebox).toBeDefined();
        expect($rootScope.pagebox).toBeDefined();
        expect($rootScope.tutorialbox).toBeDefined();
        expect($rootScope.videosbox).toBeDefined();
        expect($scope.showpostbox).toBeDefined();
        expect($scope.showpostvideos).toBeDefined();
        expect($scope.interestsearchbox).toBeDefined();
        expect($scope.searchcentersidebar).toBeDefined();
        expect($scope.searchtopsidebar).toBeDefined();
        expect($scope.interestSearchResult).toBeDefined();

    });
    it('check getPreviewUrl working  or not?', function() {
        var url="https://www.youtube.com/user/angularjs";
        var controller = createController();
        $scope.getPreviewUrl(url);
        expect($scope.getPreviewUrl).toBeDefined();
    });
    it('check getUrl function is  working  or not?', function() {
        var str="https://www.youtube.com/user/angularjs";
        var controller = createController();
        $scope.getUrl(str);
        expect($scope.getUrl).toBeDefined();
    });
    it('check Reputation function is  working  or not?', function() {
       // var str="https://www.youtube.com/user/angularjs";
        var controller = createController();
       // $scope.getUrl(str);
        expect($scope.getmyGroupList).toBeDefined();
    });

    it('check getpage function is  working  or not?', function() {
        var currentgroup = [{"groupid":5,"grouppicture":"","usrid":6,"Name":"science","Description":"","grouptype":0}];
        var controller = createController();
        $scope.getPages(currentgroup);
        expect($rootScope.chatbox).toBeDefined();
        expect($rootScope.peoplebox).toBeDefined();
        expect($rootScope.pagebox).toBeDefined();
        expect($rootScope.tutorialbox).toBeDefined();
        expect($rootScope.videosbox).toBeDefined();
    });

    it('check getpeople function is  working  or not?', function() {
        var currentgroup = [{"firstname":"Karthik","lastname":"Balu","groupid":102,"profilepicture":"4e4f39bab85fd0276c35558d27aed4dd"},{"firstname":"neels","lastname":"sleen","groupid":102,"profilepicture":"ff0f8d4989d2eacfa38f9ebd421beaa3"},{"firstname":"sabari","lastname":"clofus","groupid":102,"profilepicture":"4c41e64915567cedc4ed025900b5624b"},{"firstname":"sabu","lastname":"R","groupid":102,"profilepicture":"99accdc273fe5217b58a262ab40fcf82"}];
        var controller = createController();
        $scope.getPeople(currentgroup);
        expect($rootScope.chatbox).toBeDefined();
        expect($rootScope.peoplebox).toBeDefined();
        expect($rootScope.pagebox).toBeDefined();
        expect($rootScope.tutorialbox).toBeDefined();
        expect($rootScope.videosbox).toBeDefined();
    });
    it('check chatbox function is  working  or not?', function() {
     var currentgroup = [{"firstname":"Karthik","lastname":"Balu","groupid":102,"profilepicture":"4e4f39bab85fd0276c35558d27aed4dd"},{"firstname":"neels","lastname":"sleen","groupid":102,"profilepicture":"ff0f8d4989d2eacfa38f9ebd421beaa3"},{"firstname":"sabari","lastname":"clofus","groupid":102,"profilepicture":"4c41e64915567cedc4ed025900b5624b"},{"firstname":"sabu","lastname":"R","groupid":102,"profilepicture":"99accdc273fe5217b58a262ab40fcf82"}];
     var controller = createController();
     $scope.getPeople(currentgroup);
     expect($rootScope.chatbox).toBeDefined();
     expect($rootScope.peoplebox).toBeDefined();
     expect($rootScope.pagebox).toBeDefined();
     expect($rootScope.tutorialbox).toBeDefined();
     expect($rootScope.videosbox).toBeDefined();
     });
    it('check tutorial function is  working  or not?', function() {
        var currentgroup = [{"postid":390,"groupid":102,"userid":8,"status":"","firstname":"sabu","lastname":"R","profilepicture":"99accdc273fe5217b58a262ab40fcf82","scrapeimgurl":"","scrapetext":"","url":"https://www.youtube.com/user/angularjs","category":0}];
        var controller = createController();
        expect($rootScope.chatbox).toBeDefined();
        expect($scope.gettutorialcontent).toBeDefined();
        expect($rootScope.peoplebox).toBeDefined();
        expect($rootScope.pagebox).toBeDefined();
        expect($rootScope.tutorialbox).toBeDefined();
        expect($rootScope.videosbox).toBeDefined();
    });
    it('check tutorial function is  working  or not?', function() {
     var currentgroup = [{"postid":390,"groupid":102,"userid":8,"status":"","firstname":"sabu","lastname":"R","profilepicture":"99accdc273fe5217b58a262ab40fcf82","scrapeimgurl":"","scrapetext":"","url":"https://www.youtube.com/user/angularjs","category":0}];
     var controller = createController();
     expect($scope.getvideoscontent).toBeDefined();
     expect($rootScope.chatbox).toBeDefined();
     expect($rootScope.peoplebox).toBeDefined();
     expect($rootScope.pagebox).toBeDefined();
     expect($rootScope.tutorialbox).toBeDefined();
     expect($rootScope.videosbox).toBeDefined();
     });
    /*it('check My page list function is  working  or not?', function() {
         var controller = createController();
         expect($scope.myPagesList).toBeDefined();
       expect($scope.hideReadonlyFields).toBeDefined();

    });*/
    it('check Search All function is  working  or not?', function() {
        var searchkey=[{"firstname":"sabu","lastname":"R","profilepicture":"99accdc273fe5217b58a262ab40fcf82","pages_id":43,"creater_id":8,"topic":103,"title":"tutorial","category":"-1","Name":"angularjs","Description":""}];
        var controller = createController();
        $scope.searchAll(searchkey);
        expect($scope.showresultbox).toBeDefined();
         expect($scope.searchcentersidebar).toBeDefined();
         expect($scope.searchtopsidebar).toBeDefined();
    });
    it('check saveTutorialUrl  function is  working  or not?', function() {
        var contenturl ="https://www.youtube.com/user/angularjs";
        var currentgroup=[{"postid":390,"groupid":102,"userid":8,"status":"","firstname":"sabu","lastname":"R","profilepicture":"99accdc273fe5217b58a262ab40fcf82","scrapeimgurl":"","scrapetext":"","url":"https://www.youtube.com/user/angularjs","category":0}];
        var controller = createController();
        expect($scope.saveTutorialUrl).toBeDefined();
    });
   it('check saveTutorialUrl  function is  working  or not?', function() {
    var contenturl ="https://www.youtube.com/user/angularjs";
    var currentgroup=[{"postid":390,"groupid":102,"userid":8,"status":"","firstname":"sabu","lastname":"R","profilepicture":"99accdc273fe5217b58a262ab40fcf82","scrapeimgurl":"","scrapetext":"","url":"https://www.youtube.com/user/angularjs","category":0}];
    var controller = createController();
     expect($scope.savevideosUrl).toBeDefined();
    });

    it('check SearchInterest  function is  working  or not?', function() {
        var searchkey =[{"groupid":102,"userid":148,"Name":"common","Description":"","grouptype":0,"grouppicture":"","groupMemberid":215}];
        var controller = createController();
        expect($scope.searchInterest).toBeDefined();
    });
    it('check SearchInterest  function  having different value', function() {
        var searchkey = [{"groupid":0,"userid":0,"Name":"clofus","Description":"learning management","grouptype":0,"grouppicture":null,"groupMemberid":null}];
        var controller = createController();
        expect($scope.searchInterest).toBeDefined();
    });
/*
    it('check joinInterest  function is  working  or not?', function() {
         var member = [{"groupid":0,"userid":0,"Name":"clofus","Description":"learning management","grouptype":0,"grouppicture":null,"groupMemberid":null}];
        var controller = createController();
        expect($scope.joinInterest).toBeDefined();
        $scope.joinInterest(member);

    });*/
    it('check Create Interest  function is  working  or not?', function() {
        var groupname = [{"groupid":0,"userid":0,"Name":"clofus","Description":"learning management","grouptype":0,"grouppicture":null,"groupMemberid":null}];
        var controller = createController();
        expect($scope.joinInterest).toBeDefined();
        $scope.createInterest(groupname);

    });
    it('check chat  function is  working  or not?', function() {
        $scope.userdata={
            channel:"common",
            nickname:"sabu"
        };
        var controller = createController();
        expect($scope.joinInterest).toBeDefined();
        expect($scope.goconnect).toBeDefined();
    });


/*    it('check Message sending function is  working  or not?', function() {
        var msg=[{sendername: "sabu8", sendmsg: "hi", senderchannel: "common"}];
        var controller = createController();
        expect($scope.sendMsg).toBeDefined();
        $scope.sendMsg(msg);

    });*/
/*
    it('check Message sending function is  working  or not?', function() {
        var controller = createController();
        expect($scope.changechannel).toBeDefined();
       });
*/

});