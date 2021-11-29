import { GraphQLClient } from "graphql-request"

const clientDb = new GraphQLClient("http://localhost:4000", { headers: {} });

export default clientDb;