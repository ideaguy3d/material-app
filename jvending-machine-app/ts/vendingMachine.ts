/**
 * Created by Julius Alvarado on 11/14/2016.
 */

///<reference path="coin.ts"/>
///<reference path="product.ts"/>
///<reference path="productFactory.ts"/>


enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor(
        public product: CocaCola
    ){}
    stock = ko.observable(3);
    sold = ko.observable(false);
}

//this is a controller
class VendingMachine {
    paid = ko.observable(0); //this is how ko binds
    selectedCell = ko.observable(new Cell(new CocaCola()));
    cells = ko.observableArray([]);
    acceptedCoins: Quarter[] = [new Quarter()];
    canPay = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);

    set size (givenSize: VendingMachineSize){
        this.cells([]);
        for(let index=0; index<givenSize; index++){
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
    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid();
        // this will assign a new value to our ko.js binding
        this.paid(oldTotal + coin.Value);
    };

    pay = (): void => {
        if (this.selectedCell().stock() < 1) {
            alert("Sold out !");
            return; 
        }
    };
}

//\\