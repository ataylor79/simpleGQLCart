import { ApolloServer } from "apollo-server-express";
import compression from "compression";
import Express from "express";
import depthLimit from "graphql-depth-limit";
import { createServer } from "http";
import storage from "node-persist";
import { BasketAPI, ProductAPI } from "./dataSource";
import schema from "./schema";

const setDefaultStore = async () => {
    await storage.init();
    await storage.setItem("products", [
        {
            name: "Sledgehammer",
            price: 125.76,
        },
        {
            name: "Axe",
            price: 190.51,
        },
        {
            name: "Bandsaw",
            price: 562.14,
        },
        {
            name: "Chisel",
            price: 13.9,
        },
        {
            name: "Hacksaw",
            price: 19.45,
        },
    ]);
    await storage.setItem("basket", []);
};

setDefaultStore();

const app = Express();
const server = new ApolloServer({
    schema,
    dataSources: () => ({
        basketAPI: new BasketAPI(),
        productAPI: new ProductAPI(),
    }),
    introspection: true,
    validationRules: [depthLimit(7)],
    playground: {
        settings: {
            "editor.theme": "dark",
        },
    },
});

app.use(compression());
server.applyMiddleware({ app });

const httpServer = createServer(app);

httpServer.listen(process.env.PORT || 3000, () => {
    // tslint:disable-next-line: no-console
    console.log("Listening in port: 3000");
});
