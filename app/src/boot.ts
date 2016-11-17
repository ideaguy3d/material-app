/**
 * Created by Julius Alvarado on 11/16/2016.
 */

///<reference path="_all.ts"/>

module ContactManagerApp {
    angular.module("materialApp", ['ngMaterial'])
        .service('userService', UserService)
        .controller("mainCtrl", MainCtrl);
}

//\\