import React, { Component } from "react";
import { ApolloProvider } from '@apollo/client';

import apolloClient from "./src/providers/apollo";
import Home from "./src/screens/Home";

class App extends Component {
  state = {
    client: apolloClient(),
  };

  render() {
    return (
      <ApolloProvider client={this.state.client}>
        <Home />
      </ApolloProvider>
    );
  }
}

export default App;
