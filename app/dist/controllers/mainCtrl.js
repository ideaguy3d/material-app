/**
 * Created by Julius Alvarado on 11/16/2016.
 */
///<reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainCtrl = (function () {
        function MainCtrl(userService, $mdSidenav) {
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.users = [];
            this.message = "Ello Good Sir.";
            var self = this;
            this.userService.loadAllUsers()
                .then(function (users) {
                self.users = users;
                console.log(self.users);
            });
        }
        MainCtrl.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        //this is for when I minify the code
        MainCtrl.$inject = ['userService', '$mdSidenav'];
        return MainCtrl;
    }());
    ContactManagerApp.MainCtrl = MainCtrl;
})(ContactManagerApp || (ContactManagerApp = {}));
//\\ 
//# sourceMappingURL=mainCtrl.js.map