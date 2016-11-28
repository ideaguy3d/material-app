/**
 * Created by julius alvarado on 11/14/2016.
 */
var Quarter = (function () {
    function Quarter() {
        this.value = .25;
        this.valGetTrack = 0;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            this.valGetTrack++;
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    /*
     set Value(newNum: number) {
        this.value = newNum;
     }
     */
    Quarter.getImageUrl = function () {
        return "img/Quarter.png";
    };
    return Quarter;
}());
var coin = new Quarter();
var zamount = coin.Value;
//\\ 
/**
 * Created by Julius Alvarado on 11/27/2016.
 */
///<reference path="./coin.ts"/>
//this is pretty much just a model
var CocaCola = (function () {
    function CocaCola() {
        this.name = "Coca-Cola";
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
//\\ 
/**
 * Created by Julius Alvarado on 11/27/2016.
 */
///<reference path="product.ts"/>
var productFactory = (function () {
    function productFactory() {
    }
    productFactory.GetProduct = function () {
        return new CocaCola();
    };
    return productFactory;
}());
//\\ 
/**
 * Created by Julius Alvarado on 11/14/2016.
 */
///<reference path="coin.ts"/>
///<reference path="product.ts"/>
///<reference path="productFactory.ts"/>
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
//this is a controller
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0); //this is how ko binds
        this.selectedCell = ko.observable(new Cell(new CocaCola()));
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new Quarter()];
        this.canPay = ko.pureComputed(function () { return _this.paid() - _this.selectedCell().product.price >= 0; });
        this.select = function (cell) {
            //ko observable
            cell.sold(false);
            _this.selectedCell(cell);
        };
        /*
         * so refactor to an arrow func so the 'this' keyword refers to the VendingMachine class
         */
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            // this will assign a new value to our ko.js binding
            _this.paid(oldTotal + coin.Value);
        };
        this.pay = function () {
            if (_this.selectedCell().stock() < 1) {
                alert("Sold out !");
                return;
            }
        };
    }
    Object.defineProperty(VendingMachine.prototype, "size", {
        set: function (givenSize) {
            this.cells([]);
            for (var index = 0; index < givenSize; index++) {
                var product = productFactory.GetProduct();
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
}());
//\\ 
/**
 * Created by julius alvarado on 11/14/2016.
 */
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
//\\ 
/**
 * Created by Julius Alvarado on 11/27/2016.
 */
var SodaCategory = (function () {
    function SodaCategory() {
        this.name = "Soda";
    }
    SodaCategory.prototype.getImageUrl = function () {
        return "img/SodaCan.png";
    };
    return SodaCategory;
}());
//\\ 
//# sourceMappingURL=app.js.map