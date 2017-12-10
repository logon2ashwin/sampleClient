'use strict';

angular.module('cricwormadmin')

.directive('contenteditable', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            // view -> model
            elm.on('keyup', function() {
                scope.$apply(function() {
                    ctrl.$setViewValue(elm.html());
                });
            });

            // model -> view
            ctrl.$render = function() {
                elm.html(ctrl.$viewValue);
            };


            // load init value from DOM
            // ctrl.$setViewValue(elm.html());
        }
    };
});
