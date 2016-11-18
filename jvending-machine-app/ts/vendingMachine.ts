/**
 * Created by julius alvarado on 11/14/2016.
 */


///<reference path="coin.ts"/>

//this is a controller
class VendingMachine {
    //class fields
    private paid = 0;

    //the 'this' keyword will refer to the obj calling this method.
    public acceptCoin2(coin: Quarter): void {
        /*
         * I'm not going to actually use this function, just keep around for reference.
         */
    }

    /*
     * so refactor to an arrow func so the 'this' keyword refers to the VendingMachine class
     */
    acceptCoin = (coin: Quarter): void => {

    };

    oldAcceptCoin = (coin: Quarter): void => {
        this.paid = this.paid + coin.Value;
        var element = document.getElementById("total");
        element.innerHTML = this.paid.toString();
    }
}

//\\