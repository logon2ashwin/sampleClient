describe("viewarticleCtrlSpec", function() {
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
            return $controller('viewarticlesctrl', {
                '$rootScope': $rootScope,
                '$scope': $scope,
                '$location': $location,
                'config':config
            });
        };
       httpBackend.whenGET(config.remoteurl + ':' +  config.port + '/appcontroller').respond(304,{"results":[{"userid":8,"firstname":"sabu","lastname":"R","phoneno":"","school":null,"address":null,"city":null,"postalcode":null,"country":"","emailid":null,"profilepicture":"99accdc273fe5217b58a262ab40fcf82","gender":"","date_of_birth":"0000-00-00 00:00:00","nick_name":"sabu"}]});
        httpBackend.whenGET(config.remoteurl + ':' +  config.port + '/appcontroller').respond(200,{"results":[{"pages_id":42,"creater_id":8,"topic":103,"title":"INTRO","keywords":"angular","content":"<p style=\"box-sizing: border-box; line-height: 24px; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; font-family: 'Open Sans', Arial, sans-serif; font-size: 14px; text-align: center;\" data-mce-style=\"box-sizing: border-box; line-height: 24px; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; font-family: 'Open Sans', Arial, sans-serif; font-size: 14px; text-align: center;\"><b>ANGULAR JS</b></p><p style=\"box-sizing: border-box; line-height: 24px; margin: 0em 0.2em 1em; word-wrap: break-word; padding: 0px; text-align: justify; font-family: 'Open Sans', Arial, sans-serif; font-size: 14px;\"><b style=\"box-sizing: border-box;\">AngularJS</b>&nbsp;is a very powerful JavaScript library. It is used in Single Page Application (SPA) projects. It extends HTML DOM with additional attributes and makes it more responsive to user actions. AngularJS is open source, completely free, and used by thousands of developers around the world. It is licensed under the Apache license version 2.0.</p><p><br></p>","lastmodified":"2015-08-10T13:43:40.000Z","insertdate":null,"Name":"angularjs","groupid":103,"grouppicture":"","Description":"","firstname":"sabu","lastname":"R","upcount":0,"downcount":0,"profilepicture":"99accdc273fe5217b58a262ab40fcf82"}]});
        httpBackend.whenGET(config.remoteurl + ':' +  config.port + '/appcontroller').respond(200,{"results":[{"answer_id":1,"pages_id":3,"answer":"hiaasjh asjashb hjsa sa","created_date":"2015-06-03T14:45:37.000Z","creator_id":148,"question_id":1,"creator_name":null,"creator_pic":null},{"answer_id":2,"pages_id":6,"answer":"fdsfsd","created_date":"2015-06-03T15:01:57.000Z","creator_id":148,"question_id":4,"creator_name":null,"creator_pic":null},{"answer_id":3,"pages_id":9,"answer":"think value","created_date":"2015-06-04T05:54:58.000Z","creator_id":198,"question_id":5,"creator_name":null,"creator_pic":null},{"answer_id":4,"pages_id":9,"answer":"neels value","created_date":"2015-06-04T06:43:18.000Z","creator_id":198,"question_id":6,"creator_name":null,"creator_pic":null},{"answer_id":5,"pages_id":9,"answer":"neerrr","created_date":"2015-06-04T06:44:16.000Z","creator_id":198,"question_id":7,"creator_name":null,"creator_pic":null},{"answer_id":6,"pages_id":9,"answer":"heelo","created_date":"2015-06-04T07:19:01.000Z","creator_id":198,"question_id":7,"creator_name":null,"creator_pic":null},{"answer_id":7,"pages_id":9,"answer":"check this out","created_date":"2015-06-04T07:37:10.000Z","creator_id":198,"question_id":6,"creator_name":null,"creator_pic":null},{"answer_id":8,"pages_id":9,"answer":"fg","created_date":"2015-06-04T07:41:11.000Z","creator_id":198,"question_id":5,"creator_name":null,"creator_pic":null},{"answer_id":9,"pages_id":9,"answer":"qwewe","created_date":"2015-06-04T07:46:03.000Z","creator_id":198,"question_id":5,"creator_name":null,"creator_pic":null},{"answer_id":10,"pages_id":9,"answer":"heelo","created_date":"2015-06-04T09:21:32.000Z","creator_id":198,"question_id":5,"creator_name":null,"creator_pic":null},{"answer_id":11,"pages_id":3,"answer":"neel","created_date":"2015-06-04T10:11:19.000Z","creator_id":148,"question_id":1,"creator_name":null,"creator_pic":null},{"answer_id":12,"pages_id":3,"answer":"nes","created_date":"2015-06-04T10:13:07.000Z","creator_id":148,"question_id":1,"creator_name":null,"creator_pic":null},{"answer_id":13,"pages_id":3,"answer":"hghg","created_date":"2015-06-04T10:15:45.000Z","creator_id":148,"question_id":1,"creator_name":null,"creator_pic":null},{"answer_id":14,"pages_id":3,"answer":"gfhdjh","created_date":"2015-06-04T10:16:13.000Z","creator_id":148,"question_id":14,"creator_name":null,"creator_pic":null},{"answer_id":15,"pages_id":3,"answer":"ne","created_date":"2015-06-04T10:52:07.000Z","creator_id":148,"question_id":1,"creator_name":null,"creator_pic":null},{"answer_id":16,"pages_id":3,"answer":"neels","created_date":"2015-06-04T12:52:05.000Z","creator_id":148,"question_id":2,"creator_name":null,"creator_pic":null},{"answer_id":17,"pages_id":3,"answer":"nghghd","created_date":"2015-06-04T12:52:16.000Z","creator_id":148,"question_id":15,"creator_name":null,"creator_pic":null},{"answer_id":18,"pages_id":4,"answer":"ndda","created_date":"2015-06-04T15:08:45.000Z","creator_id":148,"question_id":17,"creator_name":null,"creator_pic":null},{"answer_id":19,"pages_id":4,"answer":"uii","created_date":"2015-06-04T15:08:57.000Z","creator_id":148,"question_id":17,"creator_name":null,"creator_pic":null},{"answer_id":20,"pages_id":3,"answer":"nsrd","created_date":"2015-06-05T05:16:41.000Z","creator_id":148,"question_id":1,"creator_name":null,"creator_pic":null},{"answer_id":21,"pages_id":3,"answer":"fsdf","created_date":"2015-06-05T05:17:00.000Z","creator_id":148,"question_id":1,"creator_name":null,"creator_pic":null},{"answer_id":22,"pages_id":3,"answer":"fsdfs","created_date":"2015-06-05T05:17:44.000Z","creator_id":148,"question_id":18,"creator_name":null,"creator_pic":null},{"answer_id":23,"pages_id":11,"answer":"how  r u?","created_date":"2015-06-22T05:56:03.000Z","creator_id":148,"question_id":19,"creator_name":null,"creator_pic":null},{"answer_id":24,"pages_id":11,"answer":"good","created_date":"2015-06-22T05:56:46.000Z","creator_id":148,"question_id":20,"creator_name":null,"creator_pic":null},{"answer_id":25,"pages_id":11,"answer":"is there everything all right..........","created_date":"2015-06-22T05:57:14.000Z","creator_id":148,"question_id":20,"creator_name":null,"creator_pic":null},{"answer_id":26,"pages_id":11,"answer":"hm","created_date":"2015-06-22T05:57:27.000Z","creator_id":148,"question_id":20,"creator_name":null,"creator_pic":null},{"answer_id":27,"pages_id":11,"answer":"jhjh","created_date":"2015-06-22T05:57:33.000Z","creator_id":148,"question_id":20,"creator_name":null,"creator_pic":null},{"answer_id":28,"pages_id":11,"answer":"k","created_date":"2015-06-22T05:57:40.000Z","creator_id":148,"question_id":20,"creator_name":null,"creator_pic":null},{"answer_id":29,"pages_id":3,"answer":"d dsvd","created_date":"2015-06-22T06:05:38.000Z","creator_id":148,"question_id":18,"creator_name":null,"creator_pic":null},{"answer_id":30,"pages_id":3,"answer":"fefe","created_date":"2015-06-22T06:06:15.000Z","creator_id":148,"question_id":18,"creator_name":null,"creator_pic":null},{"answer_id":31,"pages_id":3,"answer":"dsds","created_date":"2015-06-22T06:06:30.000Z","creator_id":148,"question_id":18,"creator_name":null,"creator_pic":null},{"answer_id":32,"pages_id":3,"answer":"dsdsds","created_date":"2015-06-22T06:07:37.000Z","creator_id":148,"question_id":18,"creator_name":null,"creator_pic":null},{"answer_id":33,"pages_id":3,"answer":"dsdssds","created_date":"2015-06-22T06:08:04.000Z","creator_id":148,"question_id":18,"creator_name":null,"creator_pic":null},{"answer_id":34,"pages_id":3,"answer":"ewewew","created_date":"2015-06-22T06:08:13.000Z","creator_id":148,"question_id":18,"creator_name":null,"creator_pic":null},{"answer_id":35,"pages_id":3,"answer":"cxcxcx","created_date":"2015-06-22T06:17:46.000Z","creator_id":148,"question_id":1,"creator_name":null,"creator_pic":null},{"answer_id":36,"pages_id":3,"answer":"dsdsdsds","created_date":"2015-06-22T06:20:07.000Z","creator_id":148,"question_id":1,"creator_name":null,"creator_pic":null},{"answer_id":37,"pages_id":3,"answer":"scas","created_date":"2015-06-22T06:26:00.000Z","creator_id":148,"question_id":22,"creator_name":null,"creator_pic":null},{"answer_id":38,"pages_id":3,"answer":"dscd","created_date":"2015-06-22T06:26:08.000Z","creator_id":148,"question_id":21,"creator_name":null,"creator_pic":null},{"answer_id":39,"pages_id":3,"answer":"dscdds","created_date":"2015-06-22T06:36:30.000Z","creator_id":148,"question_id":24,"creator_name":null,"creator_pic":null},{"answer_id":40,"pages_id":3,"answer":"cddcccdddcsddcacsa","created_date":"2015-06-22T06:36:39.000Z","creator_id":148,"question_id":23,"creator_name":null,"creator_pic":null},{"answer_id":41,"pages_id":15,"answer":"hjbjbh","created_date":"2015-06-22T11:26:46.000Z","creator_id":148,"question_id":29,"creator_name":null,"creator_pic":null},{"answer_id":42,"pages_id":15,"answer":"jvhjvjv","created_date":"2015-06-22T11:26:53.000Z","creator_id":148,"question_id":29,"creator_name":null,"creator_pic":null},{"answer_id":43,"pages_id":15,"answer":"nvghvh","created_date":"2015-06-22T11:26:58.000Z","creator_id":148,"question_id":29,"creator_name":null,"creator_pic":null},{"answer_id":44,"pages_id":16,"answer":"hgggg","created_date":"2015-06-22T11:29:18.000Z","creator_id":148,"question_id":30,"creator_name":null,"creator_pic":null},{"answer_id":45,"pages_id":5,"answer":"gbgfbg","created_date":"2015-07-03T11:25:05.000Z","creator_id":148,"question_id":36,"creator_name":null,"creator_pic":null},{"answer_id":46,"pages_id":13,"answer":"swerfer","created_date":"2015-07-27T13:46:39.000Z","creator_id":148,"question_id":37,"creator_name":null,"creator_pic":null},{"answer_id":47,"pages_id":13,"answer":"ferferferdfc","created_date":"2015-07-27T13:46:50.000Z","creator_id":148,"question_id":37,"creator_name":null,"creator_pic":null},{"answer_id":48,"pages_id":13,"answer":"werfhkejr eruferkhferg\nergerg er\ng\nreg\nre\ng\nre","created_date":"2015-07-27T13:52:40.000Z","creator_id":148,"question_id":37,"creator_name":null,"creator_pic":null},{"answer_id":49,"pages_id":13,"answer":"fwrgverge","created_date":"2015-07-27T13:53:05.000Z","creator_id":148,"question_id":37,"creator_name":null,"creator_pic":null},{"answer_id":50,"pages_id":39,"answer":"apple is good for health","created_date":"2015-08-05T11:52:11.000Z","creator_id":222,"question_id":51,"creator_name":null,"creator_pic":null},{"answer_id":51,"pages_id":39,"answer":"apple keeps the doctor away","created_date":"2015-08-05T11:54:48.000Z","creator_id":222,"question_id":51,"creator_name":null,"creator_pic":null},{"answer_id":52,"pages_id":39,"answer":"like apples?","created_date":"2015-08-05T11:55:17.000Z","creator_id":222,"question_id":51,"creator_name":null,"creator_pic":null},{"answer_id":53,"pages_id":39,"answer":"hi buddy","created_date":"2015-08-06T13:39:28.000Z","creator_id":222,"question_id":52,"creator_name":null,"creator_pic":null},{"answer_id":54,"pages_id":39,"answer":"hi buddy","created_date":"2015-08-06T13:39:41.000Z","creator_id":222,"question_id":52,"creator_name":null,"creator_pic":null},{"answer_id":55,"pages_id":39,"answer":"ddfd","created_date":"2015-08-06T14:49:27.000Z","creator_id":222,"question_id":52,"creator_name":null,"creator_pic":null},{"answer_id":56,"pages_id":39,"answer":"fwefewfserge","created_date":"2015-08-06T14:50:30.000Z","creator_id":222,"question_id":51,"creator_name":null,"creator_pic":null}]});
       }));

    beforeEach(function () {
        httpBackend.whenGET(/\.html$/).respond('');
    });

    afterEach(function () {
        // httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
    it('Check the path', function () {
        $location.path("/articles/0");
        var controller = createController();
        expect($location.path()).toBe('/articles/0');
    });
 it('Check the default value is assigned or not?', function () {

 $location.path("/articles/0");
 var controller = createController();
 expect($scope.show).toBeDefined();
 expect($scope.showdown).toBeDefined();
 expect($scope.showup).toBeDefined();

 });
 it('Check the default value is false or not?', function () {

 $location.path("/articles/0");
 var controller = createController();
 expect($scope.show).toEqual(false);
 expect($scope.showdown).toEqual(false);
 expect($scope.showup).toEqual(false);
 });
 /*it('Check the find function value assigned or not?', function () {
 var controller = createController();
 expect($scope.find).toBeDefined();
 expect($scope.hideReadonlyFields).toBeDefined();
 expect($scope.form).toBeDefined();
 expect($scope.Approws).toBeUndefined();

 });
 it('Check the SendValue function value assigned or not?', function () {
 var controller = createController();
 expect($scope.sendvalue).toBeDefined();
 expect($scope.points).toBeUndefined();

 });
 it('Check the finds2 function value assigned or not?', function () {
 var controller = createController();
 expect($scope.finds2).toBeDefined();
 expect($scope.hideReadonlyFields).toBeDefined();
 expect($scope.quesans).toBeDefined();

 });
 it('Check the finds3 function value assigned or not?', function () {
 var controller = createController();
 expect($scope.finds3).toBeDefined();
 expect($scope.hideReadonlyFields).toBeDefined();
 expect($scope.quesans).toBeDefined();
 });
 it('Check the question find function value assigned or not?', function () {
 var controller = createController();
 expect($scope.questionfind).toBeDefined();
 expect($scope.hideReadonlyFields).toBeDefined();
 expect($scope.quesans).toBeDefined();
 });
 it('Check the answer find function value assigned or not?', function () {
 var controller = createController();
 expect($scope.answerfind).toBeDefined();
 expect($scope.hideReadonlyFields).toBeDefined();
 expect($scope.quesaws).toBeDefined();
 });*/
 it('Check the pos function value assigned or not?', function () {
 var controller = createController();
 expect($scope.pos).toBeDefined();
 });
 it('Check the reply function value assigned or not?', function () {
 var controller = createController();
 expect($scope.reply).toBeDefined();
 });
 it('Check the delete function value assigned or not?', function () {
 var controller = createController();
 expect($scope.delete).toBeDefined();
 });
 it('Check the update article function is working or not?', function () {
 var controller = createController();
 expect($scope.updatearticles).toBeDefined();
 });
 /*   it('Check the sendvalue  function is working or not?', function () {
        var sendvalue = "";
        var controller = createController();
        $scope.sendvalue(sendvalue);
    });*/
    it('Check the reply  function is working or not?', function () {
        var ans=[{"answer_id":1,"pages_id":3,"answer":"hiaasjh asjashb hjsa sa","created_date":"2015-06-03T14:45:37.000Z","creator_id":148,"question_id":1,"creator_name":null,"creator_pic":null}];
        var q_id=[{"question_id":1,"creator_name":null,"creator_pic":null}];
        var controller = createController();
        $scope.reply(ans, q_id);
    });
    it('Check the Delete function is working or not?', function () {
        var pageid=[{"answer_id":1,"pages_id":3,"answer":"hiaasjh asjashb hjsa sa","created_date":"2015-06-03T14:45:37.000Z","creator_id":148,"question_id":1,"creator_name":null,"creator_pic":null}];
        var controller = createController();
        $scope.delete(pageid);
        $location.path("/home");
        expect($location.path()).toBe('/home');
    });
});

