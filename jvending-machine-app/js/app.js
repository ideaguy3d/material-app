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
 * Created by julius alvarado on 11/14/2016.
 */
///<reference path="coin.ts"/>
//this is a controller
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        //class fields
        this.paid = 0;
        /*
         * so refactor to an arrow func so the 'this' keyword refers to the VendingMachine class
         */
        this.acceptCoin = function (coin) {
        };
        this.oldAcceptCoin = function (coin) {
            _this.paid = _this.paid + coin.Value;
            var element = document.getElementById("total");
            element.innerHTML = _this.paid.toString();
        };
    }
    //the 'this' keyword will refer to the obj calling this method.
    VendingMachine.prototype.acceptCoin2 = function (coin) {
        /*
         * I'm not going to actually use this function, just keep around for reference.
         */
    };
    return VendingMachine;
}());
//\\ 
/**
 * Created by julius alvarado on 11/14/2016.
 */
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
//\\ 
//# sourceMappingURL=app.js.map