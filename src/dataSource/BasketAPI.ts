import { RESTDataSource } from "apollo-datasource-rest";
import storage from "node-persist";
import { IProduct } from "../interfaces/types";
import { IBasketProduct } from "./../interfaces/types";

/*
    Using 'store' module to mock requests to outside API calls
    All methods within this class would be replaced by either API or DB requests.
    Any filter by product name would be replaced by a product id
*/
export default class BasketAPI extends RESTDataSource {
    private key: string = "basket";

    public getBasket = async () => await storage.getItem(this.key);

    public addProduct = async (product: IProduct) => {
        let updatedBasket: any = [];
        const basket = await storage.getItem(this.key);
        const existingItem = this.findExistingProduct(basket, product.name);

        if (existingItem) {
            updatedBasket = this.updateExistingBasketItem(basket, product.name);
        } else {
            // add basket item
            updatedBasket = [
                ...basket,
                {
                    ...product,
                    quantity: 1,
                },
            ];
        }

        await storage.setItem(this.key, updatedBasket);

        return updatedBasket;
    }

    public removeProduct = async (productName: string) => {
        const basket = await storage.getItem(this.key);
        let updatedBasket: any = basket;
        const existingItem = this.findExistingProduct(basket, productName);

        if (existingItem && existingItem.quantity > 1) {
            updatedBasket = this.updateExistingBasketItem(
                basket,
                productName,
                false
            );
        } else if (existingItem && existingItem.quantity === 1) {
            updatedBasket = basket.filter(
                (item: any) => item.name !== productName
            );
        }

        await storage.setItem(this.key, updatedBasket);

        return updatedBasket;
    }

    public clear = async () => {
        const emptyBasket: IBasketProduct[] = [];

        await storage.setItem(this.key, emptyBasket);

        return emptyBasket;
    }

    private findExistingProduct = (basket: any, productName: string) =>
        basket.find((item: any) => item.name === productName)

    private updateExistingBasketItem = (
        basket: any,
        productName: string,
        increment: boolean = true
    ) =>
        basket.map((item: any) => {
            if (item.name === productName) {
                item.quantity = increment
                    ? item.quantity + 1
                    : item.quantity - 1;
            }

            return item;
        })
}
