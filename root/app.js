'use strict';
angular.module('cricwormadmin', ['ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui-notification',
    'ngTagsInput',
    'angular-input-stars',
    'Dashboard',
    'angularXml2json',
    'ui.tinymce',
    'Signin',
    'Signout',
    'teams',
    'players',
    'match',
    'tournament',
    'score',
    'users',
    'banner'
])
   /*.config(['datetimepickerProvider',function(datetimepickerProvider) {
            
            datetimepickerProvider.setOptions({
                locale: 'en'
            });
            
        }])
            */
    .run(function ($rootScope,$http, $location, $window, applicationService, pluginsService, icheckboxservice, $timeout, configservice) {

        
    
        // Add class everytime a mouse pointer hover over it
                var hoverTimeout;
            /*    $('.nav-sidebar > li').hover(function() {
                    alert()
                    clearTimeout(hoverTimeout);
                    $(this).siblings().removeClass('nav-hover');
                    $(this).addClass('nav-hover');
                }, function() {
                    var $self = $(this);
                    hoverTimeout = setTimeout(function() {
                        $self.removeClass('nav-hover');
                    }, 200);
                });*/
                
                   $(document).on("mouseenter", '.nav-sidebar > li', function() {
                    clearTimeout(hoverTimeout);
                    $(this).siblings().removeClass('nav-hover');
                    $(this).addClass('nav-hover');
                }).on('mouseleave','.nav-sidebar > li', function() {
                    var $self = $(this);
                    hoverTimeout = setTimeout(function() {
                        $self.removeClass('nav-hover');
                    }, 200);
                });
                
                
                
                $('.nav-sidebar > li .children').hover(function() {
                    clearTimeout(hoverTimeout);
                    $(this).closest('.nav-parent').siblings().removeClass('nav-hover');
                    $(this).closest('.nav-parent').addClass('nav-hover');
                }, function() {
                    var $self = $(this);
                    hoverTimeout = setTimeout(function() {
                        $(this).closest('.nav-parent').removeClass('nav-hover');
                    }, 200);
                });
        /* END SIDEBAR                                               */

  
   /*     $http.get('config.json').success(function(data) {
            $rootScope.basiApiUrls = data.servers;

            if(!configservice.getBaseAPIUrl()){
                configservice.setBaseAPIUrl(data.servers[0]);
            }else{
                console.log("Already set: ", configservice.getBaseAPIUrl())
            }
        }); */
        
        $http.get('config.json').success(function(data) {
            //$rootScope.basiApiUrls = data.dev;
            console.log(data)
            var absoluteUrl = $location.absUrl();
            var actualdomainname = absoluteUrl.split('/')[2];
          
            for(var i=0; i<data.servers.length; i++){
                  var currentdomain = data.servers[i].domain;
                   if(actualdomainname == currentdomain){
                        configservice.setBaseAPIUrl(data.servers[i]);    
                        break;
                    }
            }
        });
        
        
        applicationService.createSubmenuHover();
     
   
        String.prototype.toSentenceCase = function () {
            return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        };

        $rootScope.go = function (path) {
            $location.path(path);
        };

        $rootScope.goparams= function(path,value){
            if(path){
                path = path + "/"+value;
                $location.path(path);
            }
            
        };
        
        $rootScope.isAvailable = function (text, alttext) {

            if (typeof text != 'undefined') {
                if (text != 'NULL' && text && text != null && text != 'null') {
                    return text;
                } else {
                    return alttext;
                }
            } else {
                return alttext;
            }

        }
            
        $rootScope.changetype = function(text) {
            if (text=="advice") {
                return 'answer';
            } else if(text=='question'){
                return 'question'
            }else {
                return 'comment';
            }
        }


        $rootScope.toURL=function(text){
            return text.split(' ').join('-').toLowerCase();
        }

        $rootScope.fromURL=function(text){
            if(typeof text!='undefined' && text){
                    return text.split('-').join(' ');
                    //return text.split('-').join(' ').toSentenceCase();
                }
    
        }
        

        $rootScope.tolowercase=function(text){
             return text.toLowerCase();
        }

        $rootScope.isemptyObj = function(dataObj){
            if($rootScope.isAvailable(dataObj,'none')!='none'){
               var objectLength =  Object.keys(dataObj);
               if(objectLength.length>0){
                return false;
               }
               else{
                   return true;
               }
            }
            else{
                return true;
            }
        }

        $rootScope.togglesidebar = function(){
            applicationService.toggleSidebarHover()
        }


        $timeout(function () {
            $rootScope.UserInfo = JSON.parse($window.localStorage.getItem('user'));
            configservice.refreshBaseAPIUrl();
            console.log(configservice.getBaseAPIUrl());

            if ($rootScope.UserInfo && typeof $rootScope.UserInfo != 'undefined') {
                $rootScope.username = $rootScope.UserInfo.username;
            } else {
                $location.path("/");
            }
        });

    })
    .directive('ngSpinnerLoader', ['$rootScope',
        function ($rootScope) {
            return {
                link: function (scope, element, attrs) {
                    // by defult hide the spinner bar
                    element.addClass('hide'); // hide spinner bar by default
                    // display the spinner bar whenever the route changes(the content part started loading)
                    $rootScope.$on('$routeChangeStart', function () {
                        element.removeClass('hide'); // show spinner bar
                    });
                    // hide the spinner bar on rounte change success(after the content loaded)
                    $rootScope.$on('$routeChangeSuccess', function () {
                        setTimeout(function () {
                            element.addClass('hide'); // hide spinner bar
                        }, 500);
                        $("html, body").animate({
                            scrollTop: 0
                        }, 500);
                    });
                }
            };
        }
    ])
    .filter('unsafe', function ($sce) {
        return $sce.trustAsHtml;
    });
