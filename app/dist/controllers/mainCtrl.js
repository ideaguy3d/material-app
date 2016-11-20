/**
 * Created by Julius Alvarado on 11/16/2016.
 */
///<reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainCtrl = (function () {
        function MainCtrl(userService, $mdSidenav, $mdToast) {
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.$mdToast = $mdToast;
            this.tabIndex = 0;
            this.searchText = "";
            this.users = [];
            this.selected = null;
            this.message = "Ello Good Sir.";
            var self = this;
            this.userService.loadAllUsers()
                .then(function (users) {
                self.users = users;
                self.selected = users[0];
                console.log(self.users);
            });
        }
        MainCtrl.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainCtrl.prototype.selectUser = function (user) {
            this.selected = user;
            //'left' is the id of the ng side nav element
            var sidenav = this.$mdSidenav('left');
            if (sidenav.isOpen())
                sidenav.close();
            this.tabIndex = 0;
        };
        MainCtrl.prototype.removeNote = function (note) {
            var foundIndex = this.selected.notes.indexOf(note);
            this.selected.notes.splice(foundIndex, 1);
            this.openToast("Note now removed...");
        };
        MainCtrl.prototype.openToast = function (message) {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(message).position('top right').hideDelay(2500));
        };
        //this is for when I minify the code
        MainCtrl.$inject = ['userService', '$mdSidenav', '$mdToast'];
        return MainCtrl;
    }());
    ContactManagerApp.MainCtrl = MainCtrl;
})(ContactManagerApp || (ContactManagerApp = {}));
//\\ 
//# sourceMappingURL=mainCtrl.js.map