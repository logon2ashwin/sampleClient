angular.module('cricwormadmin')
    .factory('inputtagsservice',function(){
        /* Destroy sidebar custom scroll */
        function destroySideScroll() {
            $('.sidebar-inner').mCustomScrollbar("destroy");
        }

        return{
            init:function(){
                $('.select-tags').tagsinput('items')
            }
        }
    })