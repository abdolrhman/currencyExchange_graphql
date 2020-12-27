import {StatusBar} from 'expo-status-bar';
import React, {Component, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {ApolloProvider, useQuery, gql} from '@apollo/client';
import {client} from './DataSource';
import {ExchangeRates} from './componenets/ExchangeRates';
import {Input} from "react-native-elements";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
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
            textAlign={'center'}
            style={{alignSelf: 'center'}}
            onChangeText={value => this.setState({value})}
          />
          <Picker
            selectedValue={this.state.currency}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({currency: itemValue})
            }>
            <Picker.Item label="USD" value="USD"/>
            <Picker.Item label="EUR" value="EUR"/>
            <Picker.Item label="PHP" value="PHP"/>
            <Picker.Item label="HRK" value="HRK"/>
            <Picker.Item label="BGN" value="BGN"/>
          </Picker>
          <p>{this.state.onChangeText}</p>
          <ExchangeRates currency={this.state.currency} value={this.state.value}/>
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
