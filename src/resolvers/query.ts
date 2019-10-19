import { IDataSource } from "../interfaces/types";
import { addTotals } from "../utils";

const query = {
    async basket(_: void, args: void, context: { dataSources: IDataSource }) {
        const basketProducts = await context.dataSources.basketAPI.getBasket();

        // calculate totals
        return addTotals(basketProducts);
    },
    async products(_: void, args: void, context: { dataSources: IDataSource }) {
        return await context.dataSources.productAPI.getProducts();
    },
};

export default query;
