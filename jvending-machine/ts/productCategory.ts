/**
 * Created by Julius Alvarado on 11/27/2016.
 */

abstract class ProductCategory {
    protected imgPath = "img/";
    name: string;
    abstract getImageUrl(): string;
}

class SodaCategory extends ProductCategory {
    name = "Soda";
    getImageUrl() {
        return this.imgPath + "SodaCan.png";
    }
}

class ChipsCategory extends ProductCategory {
    name = "Chip";
    getImageUrl() {
        return this.imgPath + "Chips.png";
    }
}

class CandyCategory extends ProductCategory {
    name = "Candy";
    getImageUrl(){
        return this.imgPath + "Candy.png";
    }
}

class CandyBarCategory extends ProductCategory {
    name = "Candy Bar";
    getImageUrl() {
        return this.imgPath + "CandyBar.png";
    }
}

//\\