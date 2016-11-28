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
        constructor(){
            super(.25);
        }

        /*
         set Value(newNum: number) {
         this.value = newNum;
         }
         */

        getImageUrl(): string {
            return imagePath + "Quarter.png";
        }
    }

    export class Dime extends Coin  {
        constructor(){
            super(.10);
        }

        getImageUrl () {
            return imagePath + "Dime.png";
        }
    }

    export class Half extends Coin {
        constructor(){
            super(.5);
        }

        getImageUrl(){
            return imagePath + "Half.png";
        }
    }

    export class Dollar extends Coin {
        constructor(){
            super(1);
        }

        getImageUrl() {
            return imagePath + "Dollar.png";
        }
    }
}



//\\