/**
 * Created by Aj on 16.04.2016.
 */
angular.module('macaron').controller('mainCtrl', function ($rootScope, $scope, Menu, $location) {
    console.log("MAINCTRL");
    $scope.menu = Menu.menuMap;
    $scope.categories = null;
    $scope.titles = [];
    $scope.$on('$locationChangeSuccess', function (event, newUrl, oldUrl, newState) {
        var title = $location.path().replace('/', '');
        // var title = $scope.menu[path] || path;
        $scope.titles = title.split('/');
    });
    $scope.isActive = function (item) {
        return $scope.titles[0] == item;
    };
    // debug
    window.MAINSCOPE = $scope;
});