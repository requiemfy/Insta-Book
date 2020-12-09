import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { FeedsParamList } from '../../types';
import FeedsScreen from '../../screens/FeedsScreen';
import { Image } from 'react-native';

// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const FeedsStack = createStackNavigator<FeedsParamList>();

export default function FeedsNavigator() {
  return (
    <FeedsStack.Navigator>
      <FeedsStack.Screen
        name="FeedsScreen"
        component={FeedsScreen}
        options={{ 
          headerTitle: () => <Image
            style={{ flex: 1, height: 35, resizeMode: "contain", }}
            source={require('../../screens/assets/instabook.png')} />,
          headerTitleContainerStyle: {
            flex: 1, 
            alignItems: "center", 
            justifyContent: "center", 
            backgroundColor: "#ffffff" 
          },
          headerLeft: () => null,
        }}
      />
    </FeedsStack.Navigator>
  );
}