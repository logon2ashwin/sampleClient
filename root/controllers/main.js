'use strict';

angular.module('cricwormadmin')
    .controller('MainCtrl', ['$scope', function(scope) {
        scope.title = 'Cricworm';
    }])

.controller('MediaController', function($scope, $modalInstance, items, awspath, featuredimagetoset, $http, $rootScope, Notification, configservice, $timeout) {

    var fd;
    $scope.disableupload = true;
    $scope.hideprogressbar = true;

    $scope.profileimage = featuredimagetoset.path;
        console.log(featuredimagetoset.path)
    function uploadProgress(evt) {
        if (evt.lengthComputable) {
            $scope.hideprogressbar = false;
            var percentComplete = Math.round(evt.loaded * 100 / evt.total);
            document.getElementById('progressbar').style.width = percentComplete.toString() + '% ';
            //document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '% ';

        } else {
            document.getElementById('progressNumber').innerHTML = 'unable to compute';
        }
    }

    function uploadComplete(evt) {
        /* This event is raised when the server send back a response */
        //alert("Done - " + evt.target.responseText);
        var x2js = new X2JS();
        $scope.uploadinfo = x2js.xml_str2json(evt.target.responseText);

        $scope.uploadinfo.mediatype = $scope.getmediatype;
        $scope.disableupload = false;

        $timeout(function() {
            document.getElementById('progressbar').style.width = '0%';
            $scope.hideprogressbar = true;
            $scope.$apply();
        }, 1000);
    }

    function uploadFailed(evt) {
        alert("There was an error attempting to upload the file." + evt);
    }

    function uploadCanceled(evt) {
        alert("The upload has been canceled by the user or the browser dropped the connection.");
    }

    $scope.uploadFile = function(url) {

        var xhr = new XMLHttpRequest();
        $scope.hideprogressbar = false;

        xhr.upload.addEventListener("progress", uploadProgress, false);
        xhr.addEventListener("load", uploadComplete, false);
        xhr.addEventListener("error", uploadFailed, false);
        xhr.addEventListener("abort", uploadCanceled, false);

        xhr.open('POST', url, true); //MUST BE LAST LINE BEFORE YOU SEND

        xhr.send(fd);
    };



    $scope.setUploadFile = function(event, file) {
        $scope.disableupload = false;
        if (event)
            file = event.target.files[0];

        /*$scope.files = event.files;
        var file = $scope.files[0];*/

        $scope.getmediatype = file.type;
        $http.get(configservice.getBaseAPIUrl().value + "uploadS3?mimeType=" + file.type + "&category=" + awspath).success(function(response) {
            fd = new FormData();

            var key = awspath + "/" + $scope.description + '-' + Math.round(Math.random() * 10000) +'-' + Math.floor(Date.now() / 1000);
            fd.append('key', awspath + "/" + $scope.description + '-' + Math.round(Math.random() * 10000) +'-' + Math.floor(Date.now() / 1000));
            fd.append('acl', 'public-read');
            fd.append('Content-Type', file.type != '' ? file.type : 'application/octet-stream');
            fd.append('AWSAccessKeyId', response.AWSAccessKeyId);
            fd.append('policy', response.s3Policy);
            fd.append('signature', response.s3Signature);
            fd.append('success_action_status', "201");

            fd.append("file", file);
            $scope.uploadFile(response.url);
        });

    };

    $scope.modalclose = function() {
        $modalInstance.dismiss('cancel');
    }

    $scope.insertimage = function() {
        if ($scope.description) {
            $http.post(configservice.getBaseAPIUrl().value + "media", {
                uploadinfo: $scope.uploadinfo,
                description: $scope.description,
                mediatype: $scope.uploadinfo.mediatype
            }).success(function(response) {
                var imagedetails = {
                    imageid: response.mediaid,
                    description: $scope.description,
                    imagepath: $scope.uploadinfo.PostResponse.Location
                }
                $modalInstance.close(imagedetails);
            });
        } else {
            Notification.error('<i class="fa fa-close"></i> Please Enter the Description');
        }
    }

    $(document).ready(function() {
        $timeout(function() {
            $("#profilecropper").show();

            //var image = $('#profilepiccropper');
            //var inputimage = $("#photoinput");


            //$scope.hideprogressbar = true;

            var URL = window.URL || window.webkitURL;

            var ratio = NaN;

            $('#profilepiccropper').cropper({
                aspectRatio: ratio,
                responsive: true,
                modal: true,
                //checkCrossOrigin: false,
                minContainerWidth: 300,
                minContainerHeight: 300,
                minCanvasWidth: 300,
                minCanvasHeight: 300,
                minCropBoxWidth: 50,
                minCropBoxHeight: 50
            });


            if (URL) {
                
                $("#photoinput").change(function() {
                    var files = this.files;
                    var file;

                    console.log(files[0]);

                    if (!$('#profilepiccropper').data('cropper')) {
                        return;
                    }

                    if (files && files.length) {

                        console.log("files called");

                        file = files[0];

                        if (/^image\/\w+$/.test(file.type)) {
                           var blobURL = URL.createObjectURL(file);
                            $('#profilepiccropper').one('built.cropper', function() {
                                    console.log("builder invoked");
                                    // Revoke when load complete
                                    URL.revokeObjectURL(blobURL);
                                }).cropper('reset')
                                .cropper('replace', blobURL);
                            //$("#photoinput").val('');    Commented this to display pic choosen
                        } else {
                            window.alert('Please choose an image file.');
                        }
                    }
                });
            } else {
                $("#photoinput").prop('disabled', true).parent().addClass('disabled');
            }
        },1000);
    });


    $scope.updateprofilepicture = function() {
        // Upload cropped image to server
        $('#profilepiccropper').cropper('getCroppedCanvas').toBlob(function(blob) {
            $scope.setUploadFile("", blob);
        });
    }


});