/**
 * Created by Julius Alvarado on 11/16/2016.
 */

///<reference path="_all.ts"/>

module ContactManagerApp {
    angular.module("materialApp", ['ngMaterial',
        'ngMdIcons'])
        .service('userService', UserService)
        .controller("mainCtrl", MainCtrl)
        .config(($mdIconProvider: angular.material.IIconProvider,
        $mdThemingProvider: angular.material.IThemingProvider) =>
        {
            $mdIconProvider
                .defaultIconSet('./assets/svg/avatars.svg', 256)
                .icon('menu', './assets/svg/menu.svg', 24);
            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('red');
        });
}


//\\