var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by julius alvarado on 11/14/2016.
 */
var Coins;
(function (Coins) {
    //this will only be available in the Coins namespace.
    var imagePath = "img/";
    var Coin = (function () {
        function Coin(value) {
            this.value = value;
        }
        return Coin;
    }());
    Coins.Coin = Coin;
    var Quarter = (function (_super) {
        __extends(Quarter, _super);
        function Quarter() {
            var _this = _super.call(this, .25) || this;
            _this.logos = "US Quarter";
            _this.otherLogos = "other logo";
            return _this;
        }
        Object.defineProperty(Quarter.prototype, "Value", {
            /* */
            set: function (newNum) {
                // do some validation and fire events
                this.value = newNum;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Quarter.prototype, "Logos", {
            get: function () {
                return this.logos;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Quarter.prototype, "OtherLogos", {
            get: function () {
                return this.otherLogos;
            },
            set: function (logo) {
                // do some validation & fire events
                this.otherLogos = logo;
            },
            enumerable: true,
            configurable: true
        });
        Quarter.prototype.getImageUrl = function () {
            return imagePath + "Quarter.png";
        };
        return Quarter;
    }(Coin));
    Coins.Quarter = Quarter;
    var Dime = (function (_super) {
        __extends(Dime, _super);
        function Dime() {
            return _super.call(this, .10) || this;
        }
        Dime.prototype.getImageUrl = function () {
            return imagePath + "Dime.png";
        };
        return Dime;
    }(Coin));
    Coins.Dime = Dime;
    var Half = (function (_super) {
        __extends(Half, _super);
        function Half() {
            return _super.call(this, .5) || this;
        }
        Half.prototype.getImageUrl = function () {
            return imagePath + "Half.png";
        };
        return Half;
    }(Coin));
    Coins.Half = Half;
    var Dollar = (function (_super) {
        __extends(Dollar, _super);
        function Dollar() {
            return _super.call(this, 1) || this;
        }
        Dollar.prototype.getImageUrl = function () {
            return imagePath + "Dollar.jpg";
        };
        return Dollar;
    }(Coin));
    Coins.Dollar = Dollar;
})(Coins || (Coins = {}));
//\\ 
/**
 * Created by Julius Alvarado on 11/27/2016.
 */
var ProductCategory = (function () {
    function ProductCategory() {
        this.imgPath = "img/";
    }
    return ProductCategory;
}());
var SodaCategory = (function (_super) {
    __extends(SodaCategory, _super);
    function SodaCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Soda";
        return _this;
    }
    SodaCategory.prototype.getImageUrl = function () {
        return this.imgPath + "SodaCan.png";
    };
    return SodaCategory;
}(ProductCategory));
var ChipsCategory = (function (_super) {
    __extends(ChipsCategory, _super);
    function ChipsCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Chip";
        return _this;
    }
    ChipsCategory.prototype.getImageUrl = function () {
        return this.imgPath + "Chips.png";
    };
    return ChipsCategory;
}(ProductCategory));
var CandyCategory = (function (_super) {
    __extends(CandyCategory, _super);
    function CandyCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Candy";
        return _this;
    }
    CandyCategory.prototype.getImageUrl = function () {
        return this.imgPath + "Candy.png";
    };
    return CandyCategory;
}(ProductCategory));
var CandyBarCategory = (function (_super) {
    __extends(CandyBarCategory, _super);
    function CandyBarCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Candy Bar";
        return _this;
    }
    CandyBarCategory.prototype.getImageUrl = function () {
        return this.imgPath + "CandyBar.png";
    };
    return CandyBarCategory;
}(ProductCategory));
//\\ 
/**
 * Created by Julius Alvarado on 11/27/2016.
 */
///<reference path="productCategory.ts"/>
var Initial = (function () {
    function Initial() {
        this.name = "Please select a product";
        this.price = 0;
    }
    return Initial;
}());
//this is pretty much just a model
var CocaCola = (function () {
    function CocaCola() {
        this.name = "Coca-Cola";
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
var Fanta = (function () {
    function Fanta() {
        this.name = "Fanta";
        this.price = 1.90;
        this.category = new SodaCategory();
    }
    return Fanta;
}());
var Sprite = (function () {
    function Sprite() {
        this.name = "Sprite";
        this.price = 1.5;
        this.category = new SodaCategory();
    }
    return Sprite;
}());
var Peanuts = (function () {
    function Peanuts() {
        this.name = "Peanuts";
        this.price = 1.10;
        this.category = new ChipsCategory();
    }
    return Peanuts;
}());
var Cashews = (function () {
    function Cashews() {
        this.name = "Cashews";
        this.price = 1.40;
        this.category = new ChipsCategory();
    }
    return Cashews;
}());
var Plain = (function () {
    function Plain() {
        this.name = "Plain";
        this.price = 2.20;
        this.category = new CandyBarCategory();
    }
    return Plain;
}());
var Cheddar = (function () {
    function Cheddar() {
        this.name = "Cheddar";
        this.price = 2.9;
        this.category = new ChipsCategory();
    }
    return Cheddar;
}());
var Gummies = (function () {
    function Gummies() {
        this.name = "Gummies";
        this.price = 1.75;
        this.category = new CandyCategory();
    }
    return Gummies;
}());
var Hersey = (function () {
    function Hersey() {
        this.name = "Hersey";
        this.price = 1.40;
        this.category = new CandyBarCategory();
    }
    return Hersey;
}());
var Milkyway = (function () {
    function Milkyway() {
        this.name = "Milkyway";
        this.price = .99;
        this.category = new CandyBarCategory();
    }
    return Milkyway;
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
        var random = Math.floor(Math.random() * 10);
        switch (random) {
            case 0: return new CocaCola();
            case 1: return new Fanta();
            case 2: return new Sprite();
            case 3: return new Peanuts();
            case 4: return new Cashews();
            case 5: return new Plain();
            case 6: return new Cheddar();
            case 7: return new Gummies();
            case 8: return new Hersey();
            case 9: return new Milkyway();
        }
    };
    return productFactory;
}());
//\\ 
/**
 * Created by Julius Alvarado on 11/14/2016.
 */
///<reference path="./coin.ts"/>
///<reference path="./product.ts"/>
///<reference path="./productFactory.ts"/>
var Quarter = Coins.Quarter;
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = (function () {
    // 1 parameter constructor
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
// this is like a controller
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0); //this is how ko binds, then sets an initial value of 0.
        this.selectedCell = ko.observable(new Cell(new Initial()));
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new Coins.Dime(), new Coins.Quarter(), new Coins.Half(), new Coins.Dollar()];
        this.canPay = ko.pureComputed(function () {
            return _this.paid() - _this.selectedCell().product.price >= 0;
        });
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
            _this.paid(oldTotal + coin.value);
        };
        this.pay = function () {
            if (_this.selectedCell().stock() < 1) {
                alert("Sold out !");
                return;
            }
            var currentPaid = _this.paid();
            _this.paid(Math.round(((currentPaid - _this.selectedCell().product.price) * 100)) / 100);
            var currentStock = _this.selectedCell().stock();
            _this.selectedCell().stock(currentStock - 1);
            _this.selectedCell().sold(true); // I think this is what invokes the anim
        };
        //------------- pure practice -------------\\
        this.jcoin = new Quarter();
        this.coolArrowMethod = function (price) {
            _this.localVal = price * .0825;
            return "price added";
        };
        this.arrow2 = function (price) { return console.log("arrow2 = (): void => {log message} + " + price); };
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
    VendingMachine.prototype.coolRegularMethod = function (message) {
    };
    return VendingMachine;
}());
(function () {
    "use strict";
    var vendingMachineCoin = new VendingMachine();
    var coinMessage = vendingMachineCoin.jcoin.Logos;
    vendingMachineCoin.arrow2(4.99);
    vendingMachineCoin.jcoin.OtherLogos = "Glorius Maximus";
    //console.log("ja - coinMessage = "+coinMessage);
    var coinMessage2 = vendingMachineCoin.jcoin.OtherLogos; // won't work
    //console.log("other logo = "+coinMessage2);
}());
//\\ 
/**
 * Created by julius alvarado on 11/14/2016.
 */
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
machine.size = VendingMachineSize.large;
ko.applyBindings(machine);
//\\ 
//# sourceMappingURL=app.js.map