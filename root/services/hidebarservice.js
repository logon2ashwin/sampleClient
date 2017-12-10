angular.module('cricwormadmin')
    .factory('sidebarhide',function(){
        return {
            hide: function () {/* Hide User & Search Sidebar */

                hiddenElements = $(':hidden');
                visibleElements = $(':visible');
                //$('.menu-settings').on('click', '#hide-top-sidebar', function (e) {
                //    e.preventDefault();
                //    var this_text = $(this).text();
                //    $('.sidebar .sidebar-top').slideToggle(300);
                //    if (this_text == 'Hide user & search') {
                //        $(this).text('Show user & search');
                //    }
                //});
                //$('.topbar').on('click', '.toggle-sidebar-top', function (e) {
                //    e.preventDefault();
                    $('.sidebar .sidebar-top').slideToggle(300);
                    if ($('.toggle-sidebar-top span').hasClass('icon-user-following')) {
                        $('.toggle-sidebar-top span').removeClass('icon-user-following').addClass('icon-user-unfollow');
                    } else {
                        $('.toggle-sidebar-top span').removeClass('icon-user-unfollow').addClass('icon-user-following');
                    }
                //});
            }
        }

    })