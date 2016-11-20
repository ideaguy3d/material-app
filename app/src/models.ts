/**
 * Created by Julius Alvarado on 11/16/2016.
 */

///<reference path="_all.ts"/>

module ContactManagerApp {

    export class User {
        constructor (
            public name: string,
            public avatar: string,
            public bio: string,
            public notes: Note[]
        ) {}
    }

    export class Note {
        constructor (
            public title: string,
            public date: Date
        ) {}
    }

}

//\\