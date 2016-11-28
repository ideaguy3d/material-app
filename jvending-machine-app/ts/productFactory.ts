/**
 * Created by Julius Alvarado on 11/27/2016.
 */

///<reference path="product.ts"/>


class productFactory {
    static GetProduct(): CocaCola {
        return new CocaCola(); 
    }
}

//\\