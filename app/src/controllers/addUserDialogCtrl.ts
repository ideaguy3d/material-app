/**
 * Created by Julius Alvarado on 11/20/2016.
 */

///<reference path="../_all.ts"/>

module ContactManagerApp {
    export class  AddUserDialogCtrl {
        static $inject = ['$mdDialog'];

        constructor(private $mdDialog){}

        cancel(): void {
            this.$mdDialog.cancel();
        }
        save(): void {
            this.$mdDialog.hide(new User("placeholder","","",[]));
        }
    }
}

//\\