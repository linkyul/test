/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';  
import LoginPage from '../pages/LoginPage';  
import MainPage from '../pages/MainPage'; 
import TabBarItem from '../pages/TabBarItem';
import First from "../pages/First";
import Second from "../pages/Second";

const Tab = TabNavigator({  
    Login:{  
      screen:LoginPage,  
      navigationOptions:({navigation}) => ({  
        tabBarLabel:'登陆',
        tabBarIcon:({focused,tintColor}) => (  
          <TabBarItem  
            tintColor={tintColor}  
            focused={focused}  
            normalImage={require('../imgs/e.png')}  
            selectedImage={require('../imgs/q.png')}  
          />  
        ),
      }), 
    },  
  
    Main:{  
          screen:MainPage,  
          navigationOptions:({navigation}) => ({  
          tabBarLabel:'主页',  
          tabBarIcon:({focused,tintColor}) => (  
            <TabBarItem  
             tintColor={tintColor}  
              focused={focused}  
              normalImage={require('../imgs/w.png')}  
              selectedImage={require('../imgs/r.png')}  
            />  
          )  
        }), 
      },  
    },  
  
    {  
      tabBarComponent:TabBarBottom,  
      tabBarPosition:'bottom',  
      swipeEnabled:false,  
      animationEnabled:false,  
      lazy:true,  
      tabBarOptions:{  
        activeTintColor:'#06c1ae',  
        inactiveTintColor:'#979797',  
        style:{backgroundColor:'#ffffff',},  
        labelStyle: {  
              fontSize: 15, // 文字大小  
          },  
      }  
        
    }  
  
  );  

  const Navigator = StackNavigator(  
    
  {  
    Tab:{screen:Tab},
    Login:{screen: LoginPage},
    Main:{screen: MainPage},
    First:{screen: First},
    Second:{screen: Second}
  },  
  
  {  
    navigationOptions:{ 
      header: null,
      headerBackTitle:"返回",  
      headerTintColor:'#333333',  
      showIcon:true,  
     swipeEnabled:false,  
     animationEnabled:false,  
    },  
  
    mode:'card',  
  });  

export default class App extends Component {
  render() {
    return (
        <Navigator></Navigator>
    );
  }

}
