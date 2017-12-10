/*angular.module('cricwormadmin')
    .directive('uploadfile', function($rootScope,$http) {
    	return {
    		template:'<div> <input type="file" id="attachedfile"/></div>'+
    		'<div ng-repeat="links in attachedlinks">{{links.filename}}</div>',
            template:
    		scope:{
    			afterupload:'&'
    		},
    		transclude: true,
    		link:function(scope,element,attrs){
    			var inputattachment = element.find("#attachedfile");
    			
    			console.log(inputattachment);
                			

    			scope.attachedlinks = [];

    			if(typeof scope.attachments=='undefined'){
    				scope.attachments= [];
    			}
    			inputattachment.change(function(event) {
    				console.log(scope.project_id);
    				console.log(scope.email_id);
    				console.log("fewrfer");
    				 var files = this.files;
    				 var file;
    				 if (files && files.length) {
                        file = files[0];
                     }

                     scope.afterupload(file);
    			})
    		}
    	}
    })*/

    angular.module('cricwormadmin')
    .directive('uploadfile', function ($rootScope,configservice,$http) {
        // Runs during compile
        return {
            scope: {
                profileimage: '=',
                institutelogo:'@'
            },
            restrict: 'AE',
            template: '<div>' +
            '<form name="profilepicform" id="profilepicform">' +
            '<div class="form-group">' +
            '<fieldset>' +
            '<label style="font-size:16px;text-transform: uppercase;color: #aaa;"  ng-show="cropperstatus=='+"'hide'"+'"><span ng-show="institutelogo">Institute</span> Team Flag '+
            '&nbsp<span class="text-danger" style="font-size: 10px;margin-right: 5px;padding-top:3px;cursor: pointer;height: 22px;" ng-click="setcropperstatus('+"'show'"+')"> &nbsp;<i class="fa fa-pencil"></i> Edit </span>'+
            '</label>' +
            '<label style="font-size:14px;text-transform: uppercase;color: #aaa;text-align:center" ng-show="cropperstatus=='+"'show'"+'"> Change <span ng-show="institutelogo">Institute</span> Team Flag &nbsp;'+
            '<span class="text-danger" style="font-size: 10px;margin-right: 5px;padding-top:3px;cursor: pointer;height: 22px;" ng-click="setcropperstatus('+"'hide'"+')"> &nbsp;<i class="icon icon-cross"></i> Close </span>'+
            '</label>'+
            '<div ng-show="cropperstatus=='+"'hide'"+'">'+
            '<img src="{{getteamflag(profileimage)}}" style="width:100px;height:100px;border: 1px solid #f2f2f2;" ng-class="{'+"'img-circle'"+':institutelogo=='+"'false'"+'}" alt="user profile image1" ng-show="profileimage"/>'+
            '<img class="profile-defaultbg" src="./img/placeholder.jpg" ng-show="!profileimage && !institutelogo" style="width:100px;height:100px;border-radius:50%;border: 1px solid #f2f2f2;" alt="user profile image"/>'+
            '<img class="profile-defaultbg" src="./img/placeholder.jpg" ng-show="!profileimage && institutelogo" style="width:100px;height:100px;border-radius:50%;border: 1px solid #f2f2f2;" alt="user profile image"/>'+
            '</div>'+
            '<div id="profilecropper" ng-show="cropperstatus=='+"'show'"+'" style="width:200px;margin:0 auto">' +
            '<img class="profile-img profile-defaultbg" id="profilepiccropper" style="min-width:100%;max-width:100%" src="{{getteamflag(profileimage)}}" alt="user profile image">' +
            '</div>' +
            '</fieldset>' +
            '<fieldset id="progress" ng-hide="hideprogressbar" style="width:50%;margin:0 auto;padding-top:10px">' +
            '<div class="progress" ng-show="isprogress" style="margin-bottom:0px;">' +
            '<div id="progressbar" class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 0%;background: rgb(234, 68, 68);"></div>' +
            '</div>' +
            '<div class="text-center" style="padding:10px;" ng-hide="isprogress"><label id="progressError" style="font-size:14px;" class="text-danger"></label></div>' +
            '</fieldset>' +
            '<fieldset class="text-center" ng-show="cropperstatus=='+"'show'"+'">' +
            '<br>' +
            '<input type="file" accept="image/*" id="photoinput" style="display:block;margin:0 auto;outline: 5px auto #ccc">' +
             '<label style="margin-top: 15px;background-color: #f8a5a3;color: #fff;padding: 5px 10px;font-size:14px;" role="button" ng-click="updateteamflag()"><i class="fa fa-check"></i> Click here to update team flag</label>'+
            '</fieldset>' +
            '</div>' +
            '</form>'+
            '</div>',
            transclude: true,
            link: function (scope, element, attr) {

                var profilecropper = element.find("#profilecropper");
                var progreesError = element.find("#progressError");
                var awspath = "profile";


                //Upload Progress Bar
                function uploadProgress(evt) {

                    var progressBar = element.find('#progressbar');
                    var progressNumber = element.find("#progressNumber");

                    scope.isprogress = true;
                    scope.$apply();

                    if (evt.lengthComputable) {
                        var percentComplete = Math.round(evt.loaded * 100 / evt.total);
                        if (percentComplete) {
                            progressBar.css('width', '0%');
                        }
                        progressBar.css('width', percentComplete.toString() + '%');
                        progressBar.text(percentComplete.toString() + '%');
                    } else {
                        progressBar.text("Unable to Compute");
                    }
                }

                //Upload Failed Event
                function uploadFailed(evt) {
                    var progreesError = element.find("#progressError");
                    console.log("event failed");
                    scope.isprogress = false;
                    scope.$apply();
                    progreesError.text("There was an error attempting to upload the file. Please try again later");
                }

                //Upload Cancelled Event
                function uploadCanceled(evt) {
                    console.log("event cancel");
                    scope.isprogress = false;
                    scope.$apply();
                    progreesError.text("The upload has been canceled by the user or the browser dropped the connection.");
                }

                //Upload Complete Event
                function uploadComplete(evt) {
                    /* This event is raised when the server send back a response */
                    //alert("Done - " + evt.target.responseText);
                    var x2js = new X2JS();
                    console.log("event completed");
                    var imageinfo = x2js.xml_str2json(evt.target.responseText);
                    scope.profileimage = imageinfo.PostResponse.Location;
                    scope.hideprogressbar = true;
                    scope.cropperstatus = 'hide';
                    scope.$apply();
                }

                //upload File to s3 server
                function uploadFile(fd, url) {

                    var xhr = new XMLHttpRequest();
                    xhr.upload.addEventListener("progress", uploadProgress, false);
                    xhr.addEventListener("load", uploadComplete, false);
                    xhr.addEventListener("error", uploadFailed, false);
                    xhr.addEventListener("abort", uploadCanceled, false);

                    xhr.open('POST', url, true); //MUST BE LAST LINE BEFORE YOU SEND

                    xhr.send(fd);

                    scope.hideprogressbar = false;
                    scope.$apply();

                    console.log("event uploadfile called");

                    console.log(scope.hideprogressbar)

                };


                scope.getteamflag = function(teamflag){
                    if(typeof teamflag!='undefined'){
                        if(teamflag.indexOf("http://")!=-1){
                            return teamflag;
                        }
                        else{
                         return configservice.getBaseAPIUrl().value +"file/"+teamflag;
                        }
                    }
                    else{
                        return "./img/placeholder.jpg"
                    }
                    
                }

      


                //get policy from server to upload photo to s3
                function setUploadfile(event, file) {
                    if (event)
                        file = event.target.files[0];
                    
                    var uploadUrl = configservice.getBaseAPIUrl().value +"file/upload";

                    var fd = new FormData();
                    fd.append("file", file);

                    $http.post(uploadUrl, fd, {
                       transformRequest: angular.identity,
                       headers: {'Content-Type': undefined}
                    })
                    .success(function(res){
                        if(res.status=='success'){
                            scope.profileimage = res.filename;
                            scope.hideprogressbar = true;
                            scope.cropperstatus = 'hide';
                        }
                    })
                    .error(function(err){
                        console.log(err);
                    });


                    /*$.ajax({
                        type: "GET",
                        headers: {
                            'Authorization': $rootScope.user.access_token
                        },
                        url: config.remoteurl + ':' + config.port + "/uploadS3?iduserclient=" + $rootScope.activeClient.iduserclients + "&mimeType=" + file.type + "&category=" + awspath,
                        success: function (response) {
                            var fd = new FormData();
                            var key = awspath + '/' + $rootScope.user.username + '-' + Math.round(Math.random() * 10000);
                            fd.append('key', key);
                            fd.append('acl', 'public-read');
                            fd.append('Content-Type', file.type != '' ? file.type : 'application/octet-stream');
                            fd.append('AWSAccessKeyId', response.AWSAccessKeyId);
                            fd.append('policy', response.s3Policy);
                            fd.append('signature', response.s3Signature);
                            fd.append('success_action_status', "201");

                            fd.append("file", file);
                            uploadFile(fd, response.url);
                        }
                    })*/
                }

                //Initialize profile cropper
                var initialize =function () {

                    setTimeout(function(){
                        profilecropper.show();

                        var image = element.find('#profilepiccropper');
                        var inputimage = element.find("#photoinput");

                        scope.hideprogressbar = true;
                        scope.isprogress = false;
                        //scope.showprogress = false;

                        var URL = window.URL || window.webkitURL;

                        var ratio = 1 / 1.2;

                        $(image).cropper({
                            aspectRatio: 1,
                            responsive: true,
                            modal: true,
                            minContainerWidth: 100,
                            minContainerHeight: 100,
                            minCanvasWidth: 100,
                            minCanvasHeight: 100,
                            minCropBoxWidth: 30,
                            minCropBoxHeight: 30
                        });


                        if (URL) {
                            inputimage.change(function () {
                                var files = this.files;
                                var file;

                                console.log("input called");


                                scope.hideprogressbar = true;
                                scope.$apply();
                                //scope.showprogress = false;

                                if (!$(image).data('cropper')) {
                                    return;
                                }

                                if (files && files.length) {
                                    file = files[0];

                                    if (/^image\/\w+$/.test(file.type)) {
                                        var blobURL = URL.createObjectURL(file);
                                        $(image).one('built.cropper', function () {
                                            // Revoke when load complete
                                            URL.revokeObjectURL(blobURL);
                                        }).cropper('reset')
                                            .cropper('replace', blobURL);
                                        inputimage.val('');
                                    } else {
                                        window.alert('Please choose an image file.');
                                    }
                                }
                            });
                        } else {
                            inputimage.prop('disabled', true).parent().addClass('disabled');
                        }
                    })

                };

                scope.cropperstatus ="hide";
                scope.hideprogressbar = true;
                scope.isprogress = false;

                scope.setcropperstatus = function(status){
                    console.log(status);
                    scope.cropperstatus = status;
                    console.log(scope.cropperstatus);
                    if(scope.cropperstatus=='show'){
                        initialize();
                    }
                }


               
                scope.updateteamflag = function () {
                    var targetcropper = element.find('#profilepiccropper');
                    // Upload cropped image to server
                    $(targetcropper).cropper('getCroppedCanvas').toBlob(function (blob) {
                        setUploadfile("", blob);
                    });

                    scope.hideprogressbar = true;
                }

            }

        };
    });