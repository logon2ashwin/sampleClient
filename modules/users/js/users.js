angular.module('users', [])
    .controller('usersctrl', ['$http','$scope', '$location','$rootScope','sidebarscrollable','Notification','configservice','$routeParams', function ($http,$scope,$location,$rootScope,sidebarscrollable,Notification,configservice,$routeParams) {


        $scope.createuser = function(user){
            $http({
                method: 'post',
                url: configservice.getBaseAPIUrl().value+ 'account/createuser',
                data : user
            }).success(function(data, status, headers, config) {
                if (data.result=='success') {
                    $rootScope.go("users/list");
                    Notification.success("Account created successfully");
                }
            });
            };

        $scope.showusers = function(){
            $http({
                method: 'get',
                url: configservice.getBaseAPIUrl().value+ 'account/',
            }).success(function(data, status, headers, config) {
                $scope.userlist = data;
            });
            };
        $scope.edituser = function(id){
            $http({
                method: 'get',
                url: configservice.getBaseAPIUrl().value+ 'account/edituser/'+id,
            }).success(function(data, status, headers, config) {
                $scope.user = data[0];
            });
            };
        $scope.deleteuser = function(userid){
            $http({
                method: 'delete',
                url: configservice.getBaseAPIUrl().value+ 'account/deleteuser?id='+userid,
            }).success(function(data, status, headers, config) {
                $scope.showusers();
            });
        };
        $scope.updateuser = function(user){
            $http({
                method: 'put',
                url: configservice.getBaseAPIUrl().value+ 'account/updateuser',
                data: user
            }).success(function(data, status, headers, config) {
                $rootScope.go('users/list');
            });
        };


        $scope.initialize = function(){
            $scope.type = "";
            $scope.type = $routeParams.type;

            if ($scope.type == "list") {
                $scope.showusers();
                console.log($rootScope.UserInfo);
            }
            if ($scope.type == "edit") {
               $scope.accountid = $routeParams.id;
               console.log($scope.accountid);
               $scope.edituser($scope.accountid);
            }
            if ($scope.type == "create") {
               
            }
        }


        $scope.initialize();

    }]);