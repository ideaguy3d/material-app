/**
 * Created by Julius Alvarado on 11/16/2016.
 */
///<reference path="_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    angular.module("materialApp", ['ngMaterial'])
        .service('userService', ContactManagerApp.UserService)
        .controller("mainCtrl", ContactManagerApp.MainCtrl);
})(ContactManagerApp || (ContactManagerApp = {}));
//\\ 
//# sourceMappingURL=boot.js.map