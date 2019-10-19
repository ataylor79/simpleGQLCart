import { IDataSource, IProduct } from "../interfaces/types";
import { addTotals } from "./../utils/index";

const mutation = {
    async addProduct(
        _: void,
        args: { product: IProduct },
        context: { dataSources: IDataSource }
    ) {
        const basket = await context.dataSources.basketAPI.addProduct(
            args.product
        );

        return addTotals(basket);
    },
    async removeProduct(
        _: void,
        args: { name: string },
        context: { dataSources: IDataSource }
    ) {
        const basket = await context.dataSources.basketAPI.removeProduct(
            args.name
        );

        return addTotals(basket);
    },

    async clearBasket(
        _: void,
        args: void,
        context: { dataSources: IDataSource }
    ) {
        return await context.dataSources.basketAPI.clear();
    },
};

export default mutation;
