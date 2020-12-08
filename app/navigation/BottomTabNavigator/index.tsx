import * as React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import { BottomTabParamList } from '../../types';
import AccountNavigator from './AccountNavigator';
import FeedsNavigator from './FeedsNavigator';

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
          tabBarIcon: ({ color }) => <Ionicons name="ios-home" size={24} color={color} />,
        }} />
      <BottomTab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={24} color={color} />,
        }} />
    </BottomTab.Navigator>
  );
}