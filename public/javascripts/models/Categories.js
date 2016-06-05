/**
 * Created by Aj on 16.04.2016.
 */
angular.module('macaron')
    .factory('Category', function () {
        function Category(_raw) {
            this.id = _raw._id;
            this.name = _raw.name;
            this.flavors = _raw.flavors;
            this.cakes = _raw.cakes;
        };
        return Category;
    }).service("Categories", function ($resource, Category) {
        var api = $resource('api/flavors/:id', {id: '@id'});
        this.getAll = function () {
            return api.query().$promise.then(function (data) {
                return data.map(function (raw) {
                    return new Category(raw);
                });
            });
        }
        this.getById = function (_id) {
            return api.get({id: _id}).$promise.then(function (raw) {
                return new Category(raw);
            });
        }
    });
