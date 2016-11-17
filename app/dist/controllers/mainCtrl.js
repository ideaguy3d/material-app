/**
 * Created by Julius Alvarado on 11/16/2016.
 */
///<reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainCtrl = (function () {
        function MainCtrl(userService) {
            this.userService = userService;
            this.users = [];
            this.message = "Ello Good Sir.";
            var self = this;
            this.userService.loadAllUsers()
                .then(function (users) {
                self.users = users;
                console.log(self.users);
            });
        }
        //this is for when I minify the code
        MainCtrl.$inject = ['userService'];
        return MainCtrl;
    }());
    ContactManagerApp.MainCtrl = MainCtrl;
})(ContactManagerApp || (ContactManagerApp = {}));
//\\ 
//# sourceMappingURL=mainCtrl.js.map