import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: "https://datastory-cloud-v2.stellate.sh/", // Replace with your GraphQL endpoint
    cache: new InMemoryCache(),
  });

  export default client;