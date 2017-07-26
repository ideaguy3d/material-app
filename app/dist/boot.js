/**
 * Created by Julius Alvarado on 11/16/2016.
 */
///<reference path="_all.ts"/>
// materialApp is created here
var ContactManagerApp;
(function (ContactManagerApp) {
    // import JuliusSkillsCtrl = JuliusSkillsApp.JuliusSkillsCtrl;
    angular.module("materialApp", ['ngMaterial', 'ngMdIcons', 'ngMessages', 'ui.router'])
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
        // to have a dark theme.
        //$mdThemingProvider.theme("default").dark();
        // $mdThemingProvider.theme('default')
        //     .primaryPalette('pink', {
        //         'default': '400',
        //         'hue-1': '100',
        //         'hue-2': '600',
        //         'hue-3': 'A100'
        //     })
        //     .accentPalette('purple', {
        //         'default': '200'
        //     });
        //
        //use ".definePalette({});" for complete customization
    })
        .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
            url: '/home',
            templateUrl: '../material.html'
        })
            .state('skills', {
            url: '/skills',
            templateUrl: '../skills.html'
        })
            .state('css3d', {
            url: '/css3d',
            templateUrl: './src/css3d/prac1.html'
        });
        $urlRouterProvider.otherwise('home');
    });
})(ContactManagerApp || (ContactManagerApp = {})); // END OF: module ContactManagerApp {}
var JuliusSkillsApp;
(function (JuliusSkillsApp) {
    angular.module('materialApp')
        .controller('juliusSkillsCtrl', JuliusSkillsApp.JuliusSkillsCtrl);
})(JuliusSkillsApp || (JuliusSkillsApp = {}));
//\\ 
//# sourceMappingURL=boot.js.map