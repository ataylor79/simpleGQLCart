import { IBasket, IBasketProduct } from "../interfaces/types";

export const roundToTwo = (num: number) =>
    Number(new Intl.NumberFormat("en-NZ").format(num));

export const addTotals = (basketProducts: any) =>
    basketProducts.reduce(
        (acc: IBasket, curr: IBasketProduct) => {
            const { products, total } = acc;
            const productTotal = curr.price * curr.quantity;
            curr.total = roundToTwo(productTotal);
            products.push(curr);
            return {
                products,
                total: roundToTwo(total + productTotal),
            };
        },
        { products: [], total: 0 } as IBasket
    );
