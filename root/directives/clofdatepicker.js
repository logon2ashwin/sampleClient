'use strict';

angular
    .module('cricwormadmin')
    .provider('datetimepicker', function() {
        var default_options = {};

        this.setOptions = function(options) {
            default_options = options;
        };

        this.$get = function() {
            return {
                getOptions: function() {
                    return default_options;
                }
            };
        };
    })

.directive('clofdatetimepicker', [
    '$timeout',
    'datetimepicker', '$document',
    function($timeout, datetimepicker, $document) {

        var default_options = datetimepicker.getOptions();

        var tpl = '<div style="display:inline-flex;">' +
            '<span class="line-textbox-addon-right" id="d_btn">' +
            '<i class="fa fa-calendar fa-2x"></i>' +
            '</span>' +
            '<div class="form-control">{{date}}</div>' +
            '<input format-date-time ng-model="datemodel" type="text" class="form-control" style="visibility: hidden;margin-top: -34px;" />' +
            '</div>';


        return {
            require: '?ngModel',
            restrict: 'AE',
            scope: {
                datetimepickerOptions: '@'
            },
            template: tpl,
            link: function($scope, $element, $attrs, ngModelCtrl) {

                var passed_in_options = $scope.$eval($attrs.datetimepickerOptions);
                var options = jQuery.extend({}, default_options, passed_in_options);
                //console.log(options)

                var d_input = $element.find("input");
                console.log(d_input)
                var d_btn = $element.find("#d_btn");

                $document.on('click', function(e) {
                    if (d_input !== e.target && !d_input[0].contains(e.target)) {
                        $timeout(function() {
                            if (typeof d_input.data('DateTimePicker') != 'undefined') {
                                d_input.data('DateTimePicker')
                                    .hide();
                            }
                        });
                    }
                });
                var ddate1, ddate2;

                // Here we read the input box value, set it to the ng-modal. initialize datecontrol
                d_input
                    .on('dp.change', function(e) {
                        if (ngModelCtrl) {
                            $timeout(function() {
                                $scope.date = e.target.value;
                                ngModelCtrl.$setViewValue(e.target.value);

                                //when date changed auto hide block begin
                                if (e.oldDate != null) {
                                    ddate1 = new Date(e.date._d);
                                    ddate2 = new Date(e.oldDate._d);
                                    if (ddate1.getDate() != ddate2.getDate()) {
                                        d_input.data('DateTimePicker').hide();
                                    }
                                }
                                //when date changed auto hide block ends

                            });
                        }
                    })
                    .datetimepicker(options);

                d_input
                    .on('dp.show', function(e) {
                        if (window.cordova) {
                             if (!$('select').hasClass('disableselect')) {
                                $('select').addClass('disableselect');
                             }
                        }

                    })

                d_input
                    .on('dp.hide', function(e) {
                        if (window.cordova) {
                            if ($('select').hasClass('disableselect')) {
                                $timeout(function(){
                                    $('select').removeClass('disableselect');
                                })
                            }
                        }

                    })


                d_btn.on('click', function(e) {
                    d_input.data('DateTimePicker').toggle();
                    e.stopPropagation();
                });

                // Here we set the value to the view input box and intialize datecontrol
                function setPickerValue() {
                    $scope.date = null;

                    if (ngModelCtrl && ngModelCtrl.$viewValue) {
                        $scope.date = ngModelCtrl.$viewValue;
                        console.log($scope.date);
                    }

                    //console.log(d_input.data('DateTimePicker'));
                    if (d_input.data('DateTimePicker')) {
                        d_input
                            .data('DateTimePicker')
                            .date($scope.date);
                    }


                    //console.log($scope.date);
                }

                if (ngModelCtrl) {
                    ngModelCtrl.$render = function() {
                        console.log("dfddcd");
                        setPickerValue();
                    };
                }

                setPickerValue();
            }
        };
    }
]);
