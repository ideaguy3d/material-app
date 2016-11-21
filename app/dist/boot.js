/**
 * Created by Julius Alvarado on 11/16/2016.
 */
///<reference path="_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    angular.module("materialApp", ['ngMaterial',
        'ngMdIcons'])
        .service('userService', ContactManagerApp.UserService)
        .controller("mainCtrl", ContactManagerApp.MainCtrl)
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider
            .defaultIconSet('./assets/svg/avatars.svg', 128)
            .icon("google_plus", "./assets/svg/google_plus.svg")
            .icon("hangouts", "./assets/svg/hangouts.svg")
            .icon("twitter", "./assets/svg/twitter.svg")
            .icon("phone", "./assets/svg/phone.svg")
            .icon("menu", './assets/svg/menu.svg', 24);
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    });
})(ContactManagerApp || (ContactManagerApp = {}));
//\\ 
//# sourceMappingURL=boot.js.map