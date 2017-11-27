import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';

import {connect} from 'react-redux';
import {doLogin} from '../actions/FirstAction'

class First extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // 登录完成，且成功登录
    if (nextProps.status === 'done' && nextProps.isSuccess) {
        const { navigate } = this.props.navigation;
        if(navigate)
            this.props.navigation.navigate("Second");
        return false;
    }
    return true;
  }

  render() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.login} onPress = {this._toSecondPage.bind(this)}>登陆</Text>
        </View>
    );
  }

  _toSecondPage() {
      /** 
    const { navigate } = this.props.navigation;
    if(navigate)
      this.props.navigation.navigate("Second");
      */
      this.props.dispatch(doLogin());
  }

}

function select(store){
    return {
        status: store.loginIn.status,
        isSuccess: store.loginIn.isSuccess,
        user: store.loginIn.user
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent : "center",
  },
  login: {
    fontSize: 15,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#cccccc",
    color : "#000000",
    padding: "10",
  },
});

export default connect(select)(First);