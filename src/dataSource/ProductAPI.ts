import { RESTDataSource } from "apollo-datasource-rest";
import storage from "node-persist";

export default class ProductAPI extends RESTDataSource {
    public getProducts = async () => {
        return await storage.getItem("products");
    }
}
