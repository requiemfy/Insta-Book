import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator/index';
import LoginScreen from "../screens/LoginScreen";
import { LoginParamList } from '../types';

const LoginStack = createStackNavigator<LoginParamList>();

export default function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen 
        name="LoginScreen" 
        component={LoginScreen}
        options={{
          headerShown: false,
        }}/>
      <LoginStack.Screen 
        name="BottomTab" // feeds initial route
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}/>
    </LoginStack.Navigator>
  );
}