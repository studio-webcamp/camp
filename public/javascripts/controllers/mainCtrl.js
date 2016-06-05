/**
 * Created by Aj on 16.04.2016.
 */
angular.module('macaron').controller('mainCtrl', function ($scope, Menu, $location) {
    $scope.menu = Menu.menuMap;
    $scope.categories = null;
    $scope.title = "";
    $scope.$on('$locationChangeSuccess', function (newstate) {
        var title = $location.path().replace('/', '');
        $scope.title = $scope.menu[title];
    });
    $scope.isActive = function (item) {
        return $scope.title == item;
    };
    
    // debug
    window.MAINSCOPE = $scope;
});