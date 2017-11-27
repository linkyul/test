import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name :"",
        age : ""
    }
  }

  componentWillMount() {
    const { navigate } = this.props.navigation;
    if(navigate.params) {
      this.setState({name : this.props.navigation.state.params.name, age : this.props.navigation.state.params.age});
      Alert.alert(this.props.navigation.state.params.name);
    }
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <Text>{'姓名:' + this.state.name + '\n年龄:' + this.state.age}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});