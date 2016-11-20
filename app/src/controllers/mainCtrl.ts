/**
 * Created by Julius Alvarado on 11/16/2016.
 */

///<reference path="../_all.ts"/>

module ContactManagerApp {
    export class MainCtrl {
        //this is for when I minify the code
        static $inject = ['userService', '$mdSidenav', '$mdToast'];

        constructor(private userService: IUserService,
                    private $mdSidenav: angular.material.ISidenavService,
                    private $mdToast: angular.material.IToastService) {
            var self = this;
            this.userService.loadAllUsers()
                .then((users: User[]) => {
                    self.users = users;
                    self.selected = users[0];
                    console.log(self.users);
                }
            );
        }

        tabIndex: number = 0;
        searchText: string = "";
        users: User[] = [];
        selected: User = null;
        message: string = "Ello Good Sir.";

        toggleSideNav(): void {
            this.$mdSidenav('left').toggle();
        }

        selectUser(user: User): void {
            this.selected = user;
            //'left' is the id of the ng side nav element
            var sidenav = this.$mdSidenav('left');
            if (sidenav.isOpen()) sidenav.close();
            this.tabIndex = 0;
        }

        removeNote(note: Note): void {
            var foundIndex = this.selected.notes.indexOf(note);
            this.selected.notes.splice(foundIndex, 1);
            this.openToast("Note now removed...");
        }

        openToast(message: string): void {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(message).position('top right').hideDelay(2500));
        }
    }
}

//\\