/**
 * Created by lenka on 6/12/16.
 */
macaron.controller('CategoryCtrl', function ($rootScope, $scope, $routeParams, Category, Categories) {

    /**
     * onCategory - callback for Categories.getById
     * @param category{Category}
     */
    function onCategory(category) {
        $scope.selectedCategory = category;
        window.CATEGORY = $scope.selectedCategory;
    }
    window.CATEGORYCTRL =$scope;


    Categories.getById($routeParams.id).then(onCategory);

});