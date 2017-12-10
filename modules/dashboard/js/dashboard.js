angular.module('Dashboard', [])
    .controller('DashboardCtrl', ['$scope','dashboardService','pluginsService','applicationService',"$http","configservice", function($scope,dashboardService,pluginsService,applicationService,$http,configservice) {
        // $scope.$on('$viewContentLoaded', function () {

        //     applicationService.customScroll();
        //    //dashboardService.init();
        //   /*//  dashboardService.setHeights()
        //     if ($('.widget-weather').length) {
        //         widgetWeather();
        //     }
        //     handleTodoList();*/
        // });

       //applicationService.toggleSidebar();
        applicationService.createSubmenuHover();

        $scope.activeTab = true;

        $scope.updateapi = function(){
            $http({
                method: 'get',
                url: configservice.getBaseAPIUrl().value + 'api/',
            }).success(function (data, status, headers, config) {
                console.log(data);
            });

        }

    }])

