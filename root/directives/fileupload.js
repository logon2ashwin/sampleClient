angular.module('cricwormadmin')
    .directive('fileupload', function($rootScope,$http,configservice) {
    	return {
    		template:'<div> <input type="file" id="attachedfile"/></div>',
    		scope:{
                gifevent:"=",
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
    				 var files = this.files;
    				 var file;
    				 if (files && files.length) {
                        file = files[0];
                     }

                     var uploadUrl = configservice.getBaseAPIUrl().value + "gifs/upload";   

                     console.log(uploadUrl);

                    if (event) {
                        file = event.target.files[0];
                    }

                    var fd = new FormData();
                    fd.append("file", file);

                    $http.post(uploadUrl, fd, {
                        transformRequest: angular.identity,
                        headers: { 'Content-Type': undefined }
                    })
                    .success(function (res) {
                        if (res.status == 'success') {
                            scope.gifevent.filename = res.result.filename;    
                            scope.afterupload({
                                "result":{
                                "status":"success",
                                "gifevent":scope.gifevent
                                }
                            });

                        }
                        else{
                            scope.afterupload({
                                result:{
                                    "status":"error"
                                }
                            });    
                        }
                    })
                    .error(function (err) {
                        console.log(err);
                        scope.afterupload({
                            result:{
                                    "status":"error"
                            }
                        });
                    })

    			})
    		}
    	}
    })