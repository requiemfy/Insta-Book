import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator/index';
import LoginScreen from "../screens/LoginScreen";
import { useBackHandler } from '@react-native-community/hooks';
import { useRoute } from '@react-navigation/native';

const LoginStack = createStackNavigator();
export default function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{
          headerShown: false,
        }}/>
      <LoginStack.Screen 
        name="Feeds" 
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}/>
    </LoginStack.Navigator>
  );
}