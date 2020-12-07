import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { FeedsParamList } from '../../types';
import FeedsScreen from '../../screens/FeedsScreen';
import { useBackButton } from '@react-navigation/native';
import { useBackHandler } from '@react-native-community/hooks';
import { Image, View } from 'react-native';

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const FeedsStack = createStackNavigator<FeedsParamList>();
export default function FeedsNavigator({ navigation }:any) {
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
            // backgroundColor: "red" // @remind remove
          },
          headerLeft: () => null,
        }}
      />
    </FeedsStack.Navigator>
  );
}