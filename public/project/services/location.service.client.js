/**
 * Created by muaazsalagar on 3/3/16.
 */

(function () {

    angular
        .module("FormBuilderApp")
        .factory("LocationService", LocationService);


    function LocationService(http,$rootScope){

        var forms=[];

        property=[
            {"longitude": "42.340075", "lattitude": "-71.0895367"},
            {"longitude": "43", "lattitude": "-72"},
            {"longitude": "44", "lattitude": "-73"}
        ];


        var api = {
            // declaration of methods by following standards of john papas

            getLongLatFromAddres:getLongLatFromAddres

        };

        return api;

        function getLongLatFromAddress(address){




        }


    }
})();