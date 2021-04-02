import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://rebook-gateway.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  defaultOptions:{
    mutate:{
        errorPolicy:"all"
    },
    query:{
        errorPolicy:"all"
    }
}
})