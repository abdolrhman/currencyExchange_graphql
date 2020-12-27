import {StatusBar} from 'expo-status-bar';
import React, {Component, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {ApolloProvider, useQuery, gql} from '@apollo/client';
import {client} from './DataSource';
import ExchangeRates from './componenets/ExchangeRates';
import {Input} from "react-native-elements";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currency: 'USD'
    }
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Input
            placeholder='Value'
            keyboardType='numeric'
            leftIcon={{type: 'font-awesome', name: 'money'}}
            onChangeText={value => this.setState({onChangeText: value})}
          />
          <Picker
            selectedValue={this.state.language}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})
            }>
            <Picker.Item label="Java" value="java"/>
            <Picker.Item label="JavaScript" value="js"/>
          </Picker>
          <p>{this.state.onChangeText}</p>
          <ExchangeRates/>
          <StatusBar style='auto'/>
        </View>
      </ApolloProvider>

    );
  }
  ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d6dc',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
