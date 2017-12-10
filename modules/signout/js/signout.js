angular.module('Signout', [])
    .controller('SignoutCtrl', ['$scope', '$window','$rootScope','$location',
        function ($scope, $window,$rootScope,$location) {


            $window.localStorage.removeItem("token");
            $window.localStorage.removeItem("user");

            $rootScope.token="";
            $rootScope.username="";

                $location.path('/signin');


             }
        ]);
