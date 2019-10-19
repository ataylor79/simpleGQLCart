import { GraphQLSchema } from "graphql";
import "graphql-import-node";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolverMap";
import typeDefs from "./schema/schema.graphql";

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default schema;
