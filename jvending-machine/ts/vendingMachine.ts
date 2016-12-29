/**
 * Created by Julius Alvarado on 11/14/2016.
 */

///<reference path="./coin.ts"/>
///<reference path="./product.ts"/>
///<reference path="./productFactory.ts"/>


import Quarter = Coins.Quarter;
enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    // 1 parameter constructor
    constructor(public product: Product) {}

    stock = ko.observable(3);
    sold = ko.observable(false);
}

// this is like a controller
class VendingMachine {
    paid = ko.observable(0); //this is how ko binds, then sets an initial value of 0.
    selectedCell = ko.observable(new Cell(new Initial()));
    cells = ko.observableArray([]);
    acceptedCoins: Array<Coins.Coin> = [new Coins.Dime(), new Coins.Quarter(), new Coins.Half(), new Coins.Dollar()];
    canPay = ko.pureComputed(() =>
        this.paid() - this.selectedCell().product.price >= 0);

    set size(givenSize: VendingMachineSize) {
        this.cells([]);
        for (let index = 0; index < givenSize; index++) {
            let product = productFactory.GetProduct();
            this.cells.push(new Cell(product));
        }
    }

    select = (cell: Cell): void => {
        //ko observable
        cell.sold(false);
        this.selectedCell(cell);
    };


    /*
     * so refactor to an arrow func so the 'this' keyword refers to the VendingMachine class
     */
    acceptCoin = (coin: Coins.Quarter): void => {
        let oldTotal = this.paid();
        // this will assign a new value to our ko.js binding
        this.paid(oldTotal + coin.value);
    };

    pay = (): void => {
        if (this.selectedCell().stock() < 1) {
            alert("Sold out !");
            return;
        }
        let currentPaid = this.paid();
        this.paid(Math.round(
                    ( (currentPaid - this.selectedCell().product.price) * 100) ) / 100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock-1);
        this.selectedCell().sold(true); // I think this is what invokes the anim
    };

    //------------- pure practice -------------\\
    public jcoin = new Quarter();

    coolRegularMethod(message: string): void {

    }

    private localVal: number;
    coolArrowMethod = (price: number): string => {
        this.localVal = price * .0825;
        return "price added";
    };

    arrow2 = (price: number): void => console.log("arrow2 = (): void => {log message} + "+price);

}

(function(){
    "use strict";
    let vendingMachineCoin = new VendingMachine();
    let coinMessage = vendingMachineCoin.jcoin.Logos;
    vendingMachineCoin.arrow2(4.99);
    vendingMachineCoin.jcoin.OtherLogos = "Glorius Maximus";
    //console.log("ja - coinMessage = "+coinMessage);
    let coinMessage2 = vendingMachineCoin.jcoin.OtherLogos; // won't work
    //console.log("other logo = "+coinMessage2);
}());




//\\