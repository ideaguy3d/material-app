var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
            _super.call(this, .25);
        }
        /*
         set Value(newNum: number) {
         this.value = newNum;
         }
         */
        Quarter.prototype.getImageUrl = function () {
            return imagePath + "Quarter.png";
        };
        return Quarter;
    }(Coin));
    Coins.Quarter = Quarter;
    var Dime = (function (_super) {
        __extends(Dime, _super);
        function Dime() {
            _super.call(this, .10);
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
            _super.call(this, .5);
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
            _super.call(this, 1);
        }
        Dollar.prototype.getImageUrl = function () {
            return imagePath + "Dollar.png";
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
        _super.apply(this, arguments);
        this.name = "Soda";
    }
    SodaCategory.prototype.getImageUrl = function () {
        return this.imgPath + "SodaCan.png";
    };
    return SodaCategory;
}(ProductCategory));
var ChipsCategory = (function (_super) {
    __extends(ChipsCategory, _super);
    function ChipsCategory() {
        _super.apply(this, arguments);
        this.name = "Chip";
    }
    ChipsCategory.prototype.getImageUrl = function () {
        return this.imgPath + "Chips.png";
    };
    return ChipsCategory;
}(ProductCategory));
var CandyCategory = (function (_super) {
    __extends(CandyCategory, _super);
    function CandyCategory() {
        _super.apply(this, arguments);
        this.name = "Candy";
    }
    CandyCategory.prototype.getImageUrl = function () {
        return this.imgPath + "Candy.png";
    };
    return CandyCategory;
}(ProductCategory));
var CandyBarCategory = (function (_super) {
    __extends(CandyBarCategory, _super);
    function CandyBarCategory() {
        _super.apply(this, arguments);
        this.name = "Candy Bar";
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
        var random = Math.floor(Math.random() * 11);
        switch (random) {
            case 0: return new CocaCola();
            case 1: return new Fanta();
            case 2: return new Sprite();
            case 3: return new Peanuts();
            case 4: return new Cashews();
            case 5: return new Plain();
            case 6: return new Cheddar();
            case 8: return new Gummies();
            case 9: return new Hersey();
            case 10: return new Milkyway();
        }
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
        this.selectedCell = ko.observable(new Cell(new Initial()));
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new Dime(), new Quarter(), new Half(), new Dollar()];
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
            var currentPaid = _this.paid();
            _this.paid(Math.round(((currentPaid - _this.selectedCell().product.price) * 100)) / 100);
            var currentStock = _this.selectedCell().stock();
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
//# sourceMappingURL=app.js.map