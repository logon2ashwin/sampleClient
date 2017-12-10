angular.module('cricwormadmin')
.factory('icheckboxservice',function(){
        // Handles custom checkboxes & radios using jQuery iCheck plugin
        return{
           init:function(){
               if (!$().iCheck) return;
               $(':checkbox:not(.js-switch, .switch-input, .switch-iphone, .onoffswitch-checkbox, .ios-checkbox), :radio').each(function () {

                   var checkboxClass = $(this).attr('data-checkbox') ? $(this).attr('data-checkbox') : 'icheckbox_minimal-grey';
                   var radioClass = $(this).attr('data-radio') ? $(this).attr('data-radio') : 'iradio_minimal-grey';

                   if (checkboxClass.indexOf('_line') > -1 || radioClass.indexOf('_line') > -1) {
                       $(this).iCheck({
                           checkboxClass: checkboxClass,
                           radioClass: radioClass,
                           insert: '<div class="icheck_line-icon"></div>' + $(this).attr("data-label")
                       });
                   } else {
                       $(this).iCheck({
                           checkboxClass: checkboxClass,
                           radioClass: radioClass
                       });
                   }
               });
           }
        }
    })