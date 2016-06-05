/**
 * Created by Aj on 16.04.2016.
 */
angular.module('macaron').service('Menu', function(){
    this.menuMap = {
        home: 'home',
        categories: 'flavor categories',
        contact: 'contact',
        cart: 'cart'
    };
});