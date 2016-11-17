/**
 * Created by Julius Alvarado on 11/16/2016.
 */

///<reference path="../_all.ts"/>

module ContactManagerApp {
    export class MainCtrl {
        //this is for when I minify the code
        static $inject = ['userService'];

        constructor(private userService: IUserService) {
            var self = this;
            this.userService.loadAllUsers()
                .then((users: User[]) => {
                    self.users = users;
                    console.log(self.users);
                });
        }

        users: User[] = [];
        message: string = "Ello Good Sir.";
    }
}

//\\