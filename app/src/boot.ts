/**
 * Created by Julius Alvarado on 11/16/2016.
 */

///<reference path="_all.ts"/>

module ContactManagerApp {
    angular.module("materialApp", ['ngMaterial',
        'ngMdIcons', 'ngMessages'])
        .service('userService', UserService)
        .controller("mainCtrl", MainCtrl)
        .config(($mdIconProvider: angular.material.IIconProvider,
                 $mdThemingProvider: angular.material.IThemingProvider) => {
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
}


//\\