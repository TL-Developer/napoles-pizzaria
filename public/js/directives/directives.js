angular.module('napoles').directive('modalTrigger', function() {

    return {
        restrict: 'C',
        link: function ( $scope, $element ) {

          $($element).leanModal();

        }
    };
});
