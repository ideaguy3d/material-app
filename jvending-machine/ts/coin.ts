/**
 * Created by julius alvarado on 11/14/2016.
 */

namespace Coins {

    //this will only be available in the Coins namespace.
    let imagePath = "img/";

    export abstract class Coin {
        value: number;

        constructor(value: number) {
            this.value = value;
        }

        abstract getImageUrl(): string;
    }

    export class Quarter extends Coin {
        constructor() {
            super(.25);
        }

        private logos: string = "US Quarter";
        private otherLogos: string = "other logo";
        /* */
        set Value(newNum: number) {
            // do some validation and fire events
            this.value = newNum;
        }

        get Logos() {
            return this.logos;
        }

        set OtherLogos(logo: string) {
            // do some validation & fire events
            this.otherLogos = logo;
        }

        get OtherLogos() {
            return this.otherLogos;
        }


        getImageUrl(): string {
            return imagePath + "Quarter.png";
        }
    }

    export class Dime extends Coin {
        constructor() {
            super(.10);
        }

        getImageUrl() {
            return imagePath + "Dime.png";
        }
    }

    export class Half extends Coin {
        constructor() {
            super(.5);
        }

        getImageUrl() {
            return imagePath + "Half.png";
        }
    }

    export class Dollar extends Coin {
        constructor() {
            super(1);
        }

        getImageUrl() {
            return imagePath + "Dollar.jpg";
        }
    }
}


//\\