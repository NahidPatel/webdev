/**
 * Created by muaazsalagar on 2/20/16.
 */

(function () {
    angular
        .module("BanquetApp")
        .controller("MainController",MainController);

    function MainController($location){

        var vm=this;
        function init()
        {

        }
        init();
        vm.$location=$location;

    }
}) ();
