import BasketAPI from "../dataSource/BasketAPI";
import ProductAPI from "../dataSource/ProductAPI";

export interface IProduct {
    name: string;
    price: number;
}

export interface IDataSource {
    basketAPI: BasketAPI;
    productAPI: ProductAPI;
}

export interface IBasketProduct {
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export interface IBasket {
    products: IBasketProduct[];
    total: number;
}
