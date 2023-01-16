import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {NavigationContainer}from "@react-navigation/native"
import {createStackNavigator}from "@react-navigation/stack"
import Home from "./screen/Home";
import AddItem from "./screen/AddItem";
import List from "./screen/List"
import Login from './screen/Login';
import MobileLogin from './screen/MobileLogin';


const Stack = createStackNavigator();


function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='MobileLogin'
        component={MobileLogin}/>
        {/* <Stack.Screen
        name='Login'
        component={Login}/> */}
        <Stack.Screen
        name='Home'
        component={Home}/>
        <Stack.Screen
        name='AddItem'
        component={AddItem}/>
        <Stack.Screen
        name='List'
        component={List}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
});

export default App;
