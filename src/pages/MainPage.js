/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class MainPage extends Component {

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <Text onPress = {this._navigationTo.bind(this)}>{'姓名:' + '\n年龄:' }</Text>
      </View>
    );
  }

  _navigationTo() {
    const { navigate } = this.props.navigation;
    if(navigate)
      this.props.navigation.navigate("First");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
