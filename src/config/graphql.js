import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://rebook-server.herokuapp.com/graphql',
  cache: new InMemoryCache()
})