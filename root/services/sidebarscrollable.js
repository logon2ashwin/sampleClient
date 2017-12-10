angular.module('cricwormadmin')
    .factory('sidebarscrollable',function(){
        /* Destroy sidebar custom scroll */
        function destroySideScroll() {
            $('.sidebar-inner').mCustomScrollbar("destroy");
        }

        return{
            init:function(){
                if ($.fn.mCustomScrollbar) {
                    destroySideScroll();
                    if (!$('body').hasClass('sidebar-collapsed') && !$('body').hasClass('sidebar-collapsed') && !$('body').hasClass('submenu-hover') && $('body').hasClass('fixed-sidebar')) {
                        $('.sidebar-inner').mCustomScrollbar({
                            scrollButtons: {
                                enable: false
                            },
                            autoHideScrollbar: true,
                            scrollInertia: 150,
                            theme: "light-thin",
                            advanced: {
                                updateOnContentResize: true
                            }
                        });
                    }
                    if ($('body').hasClass('sidebar-top')) {
                        destroySideScroll();
                    }
                }
            }
        }
    })