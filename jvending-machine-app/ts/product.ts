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