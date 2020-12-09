import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import AccountScreen from '../../screens/AccountScreen';
import { AccountParamList } from '../../types';

const TabTwoStack = createStackNavigator<AccountParamList>();

export default function AccountNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ 
          headerTitle: 'Tab Two Title' ,
          headerShown: false,
        }} />
    </TabTwoStack.Navigator>
  );
}
