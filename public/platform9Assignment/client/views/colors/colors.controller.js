/**
 * Created by muaazsalagar on 2/03/16.
 */

"use strict";

(function() {
    angular
        .module("ColorApp")
        .controller("ColorsController", ColorsController);

    function ColorsController($rootScope, ColorService, $location, $scope) {

        var vm = this;
        $scope.color_list = ["Red", "Blue", "Green"];

        function init() {



            ColorService.findAllcolors().then(function(response) {
                vm.colors = response;


            });
            ColorService.findColorsByColor("blue").then(function(response) {

                vm.blue_colors = response;


            });
            ColorService.findColorsByColor("green").then(function(response) {

                vm.green_colors = response;

            });



        }
        init();

        var toBeUpdatedIndex = -1;

        //Event handler declarations
        vm.addColor = addColor;
        vm.updateColor = updateColor;
        vm.deleteColor = deleteColor;
        vm.selectColor = selectColor;

        //Event handler implementations
        function addColor(color) {

            ColorService.createColor(color).then(function(response) {

                vm.colors = response;

            });
            vm.color = {};

        }

        function updateColor(color) {
            ColorService.updateColorById(color._id, color).then(function (response) {
                console.log(color);

                if (response === "OK") {

                    ColorService.findColorById(color._id).then(function(updatedColor) {

                        vm.colors[toBeUpdatedIndex] = updatedColor;
                    });
                }
            });

            vm.color={};
            init();
        }

        function deleteColor($index) {

            var colorID = vm.colors[$index]._id;

            ColorService.deleteColorById(colorID).then(function(response) {

                if(response === "OK") {
                    init();
                }
            });
        }

        function selectColor($index) {

            vm.color={};

            var selectedColor = vm.colors[$index];
            console.log(selectedColor);

            vm.color =selectedColor;

            toBeUpdatedIndex = $index;
            init();
        }
    }
})();
