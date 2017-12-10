'use strict';

// angular.module('cricwormadmin')

// .directive('ngEnter', function() {
//     return function(scope, element, attrs) {
//         element.bind("keydown keypress", function(event) {
//             if (event.which === 13) {
//                 scope.$apply(function() {
//                     scope.$eval(attrs.ngEnter);
//                 });

//                 event.preventDefault();
//             }
//         });
//     };
// });


angular.module('cricwormadmin')
.directive('ngEnter', function() {
  return function(scope,element,attrs){
      element.bind("keydown keypress",function(event){
        console.log("ngEnter");
        if(event.which===13){
            console.log("ngEnter");
          event.preventDefault();
          var fields=$(this).parents('form:eq(0),body').find('input, textarea, select');
          var index=fields.index(this);
          if(index> -1&&(index+1)<fields.length)
            fields.eq(index+1).focus();
        }
      });
    };
});
