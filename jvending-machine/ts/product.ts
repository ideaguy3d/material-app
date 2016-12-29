/**
 * Created by Julius Alvarado on 11/27/2016.
 */

///<reference path="productCategory.ts"/>

interface Product {
    name: string;
    price: number;
    category?: ProductCategory;
}

class Initial implements Product {
    name = "Please select a product";
    price = 0;
}

//this is pretty much just a model
class CocaCola implements Product {
    name = "Coca-Cola";
    price = 2.30;
    category = new SodaCategory();
}

class Fanta implements  Product {
    name: string = "Fanta";
    price: number = 1.90;
    category = new SodaCategory();
}

class Sprite implements Product {
    name: string = "Sprite";
    price: number = 1.5;
    category = new SodaCategory();
}

class Peanuts implements Product {
    name: string = "Peanuts";
    price: number = 1.10;
    category = new ChipsCategory();
}

class Cashews implements Product {
    name: string = "Cashews";
    price: number = 1.40;
    category = new ChipsCategory();
}

class Plain implements Product {
    name: string = "Plain";
    price: number = 2.20;
    category = new CandyBarCategory();
}

class Cheddar implements Product {
    name: string = "Cheddar";
    price: number = 2.9;
    category = new ChipsCategory();
}


class Gummies implements Product {
    name: string = "Gummies";
    price: number = 1.75;
    category = new CandyCategory();
}

class Hersey implements Product {
    name: string = "Hersey";
    price: number = 1.40;
    category = new CandyBarCategory();
}

class Milkyway implements Product {
    name: string = "Milkyway";
    price: number = .99;
    category = new CandyBarCategory();
}


//\\