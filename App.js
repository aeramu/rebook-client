import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { client } from './src/config/graphql'
import Navigator from './src/navigation'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navigator/>
    </ApolloProvider>
  )
}
