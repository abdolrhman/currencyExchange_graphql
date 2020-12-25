import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { client } from './DataSource';
import { ExchangeRates } from './componenets/ExchangeRates';
import { Input } from 'react-native-elements';

export default class App extends Component {
  setState(state, callback) {
    super.setState(state, callback);
    this.state = { data: '' }
  }


  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Input
            placeholder='Comment'
            leftIcon={{ type: 'font-awesome', name: 'comment' }}
            style={styles}
            onChangeText={value => this.setState({ comment: value })}
          />
          <ExchangeRates />
          <StatusBar style='auto' />
        </View>
      </ApolloProvider>

    );
  }
  ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#414450',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
