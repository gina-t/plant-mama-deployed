import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;

// import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// // Create an authentication link
// const authLink = setContext((_, { headers }) => {
//   // Get the authentication token from local storage if it exists
//   const token = localStorage.getItem("token");
//   // Return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// // Create an HTTP link
// const httpLink = new HttpLink({
//   uri: "http://localhost:3001/graphql",
// });

// // Concatenate the authentication link with the HTTP link
// const link = ApolloLink.from([authLink, httpLink]);

// // Create the Apollo Client
// const client = new ApolloClient({
//   link,
//   cache: new InMemoryCache(),
//   connectToDevTools: true,
// });

// export default client;