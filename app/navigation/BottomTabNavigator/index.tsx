import { Ionicons } from '@expo/vector-icons';
import { useBackHandler } from '@react-native-community/hooks';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import { BottomTabParamList, FeedsParamList, AccountParamList } from '../../types';

import AccountNavigator from './AccountNavigator';
import FeedsNavigator from './FeedsNavigator';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator({ navigation }: any) {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Feeds"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Feeds"
        component={FeedsNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
        
      />
      <BottomTab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
// const FeedsStack = createStackNavigator<FeedsParamList>();
// function FeedsNavigator() {
//   return (
//     <FeedsStack.Navigator>
//       <FeedsStack.Screen
//         name="FeedsScreen"
//         component={FeedsScreen}
//         options={{ 
//           headerTitle: 'Tab One Title',
//           headerShown: false,
//         }}
//       />
//     </FeedsStack.Navigator>
//   );
// }

// const TabTwoStack = createStackNavigator<TabTwoParamList>();
// function TabTwoNavigator() {
//   return (
//     <TabTwoStack.Navigator>
//       <TabTwoStack.Screen
//         name="TabTwoScreen"
//         component={TabTwoScreen}
//         options={{ 
//           headerTitle: 'Tab Two Title' ,
//           headerShown: false,
//         }}
//       />
//     </TabTwoStack.Navigator>
//   );
// }
