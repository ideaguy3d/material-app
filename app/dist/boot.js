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
        $mdIconProvider.icon('mene', './assets/svg/menu.svg', 24);
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    });
})(ContactManagerApp || (ContactManagerApp = {}));
//\\ 
//# sourceMappingURL=boot.js.map