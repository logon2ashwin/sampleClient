angular.module('Signin', [])
    .controller('SigninCtrl', ['$scope', 'dashboardService', 'pluginsService', '$http', 'icheckboxservice', 'sidebarscrollable', '$routeParams', '$location', '$window','$timeout','sidebarhide','applicationService','$rootScope','Notification','configservice',
        function ($scope, dashboardService, pluginsService, $http,  icheckboxservice, sidebarscrollable, $routeParams, $location, $window,$timeout,sidebarhide,applicationService,$rootScope,Notification,configservice) {

            applicationService.toggleSidebarHover();
            //$scope.baseapiurl = configservice.getBaseAPIUrl();

            $scope.loginuser = function(user) {

                //configservice.setBaseAPIUrl($scope.baseapiurl);
                user.adminconsole="true";
                $http({
                    method: 'POST',
                    url: configservice.getBaseAPIUrl().value+ 'account/login',
                    data:user
                }).success(function(data, status, headers, config) {
                    if(data.message=="User not found") {
                        Notification.error('<i class="fa fa-close"></i> Invalid username or password');
                    }
                    if(data.message=="Invalid admin") {
                        Notification.error('<i class="fa fa-close"></i> Invalid admin user');
                    }
                    $http.defaults.headers.common.Authorization = data.token;

                    $window.localStorage.setItem('token',data.token);
                    $window.localStorage.setItem('user',JSON.stringify(data));
                    $rootScope.UserInfo = data;
                    $rootScope.username=data.username;
                    if(data.token) {
                        $rootScope.access_token=data.token;
                        $location.path('/dashboard');

                    }
                });

            };


        }]);
