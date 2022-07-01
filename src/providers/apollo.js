import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import Config from "./config";

const httpLink = createHttpLink({
  uri: Config.GQL_BASE_URL,
});

const wssLink = new GraphQLWsLink(
  createClient({
    url: Config.GQL_WS_URL,
    webSocketImpl: require("websocket").w3cwebsocket,
  })
);
const cache = new InMemoryCache();

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wssLink,
  httpLink
);

const apolloClient = () => {
  return  new ApolloClient({
    link: splitLink,
    cache,
    credentials: "include",
  });
};
export default apolloClient;
