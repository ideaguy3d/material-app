/**
 * Created by Julius Alvarado on 11/20/2016.
 */
///<reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var AddUserDialogCtrl = (function () {
        function AddUserDialogCtrl($mdDialog) {
            this.$mdDialog = $mdDialog;
        }
        AddUserDialogCtrl.prototype.cancel = function () {
            this.$mdDialog.cancel();
        };
        AddUserDialogCtrl.prototype.save = function () {
            this.$mdDialog.hide(new ContactManagerApp.User("placeholder", "", "", []));
        };
        AddUserDialogCtrl.$inject = ['$mdDialog'];
        return AddUserDialogCtrl;
    }());
    ContactManagerApp.AddUserDialogCtrl = AddUserDialogCtrl;
})(ContactManagerApp || (ContactManagerApp = {}));
//\\ 
//# sourceMappingURL=addUserDialogCtrl.js.map