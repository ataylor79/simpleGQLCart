import { IResolvers } from "graphql-tools";
import { Mutation, Query } from "./resolvers";

const resolverMap: IResolvers = {
    Query,
    Mutation,
};

export default resolverMap;
