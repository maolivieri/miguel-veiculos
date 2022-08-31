import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl70xpn2s1v3z01uh9hgw5alg/master",
  cache: new InMemoryCache(),
});
