/**
 * Created by lenka on 6/5/16.
 */
angular.module('macaron').controller('CategoriesCtrl', function ($scope, Categories) {
    var colorClassNames = ["pink", "green", "yellow", "brown", "yellow_green"];
    var categoriesImgs = ["lette-macarons.png", "Lette-Macaron-2.png", "Lette-Macarons-01.png", "lemon.png", "lette_macarons_400.png"];
    var _query = Categories.getAll();
    _query.then(function (categories) {
        $scope.categories = categories.map(function (category, index) {
            var colorName = index % colorClassNames.length;
            category.className = colorClassNames[colorName];
            category.image = categoriesImgs[index % categoriesImgs.length];
            return category;
        });
    });
    $scope.showCategory = function ($event, _cat) {
        $event.preventDefault();
        Categories.getById(_cat.id).then(function (category) {
            $scope.selectedCategory = category;
        });
        console.log(_cat);
        //  $scope.selectedCategory = category;
    }
});