import { useBackHandler } from '@react-native-community/hooks';
import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import { CommonActions } from '@react-navigation/native';
import { NavigationActions } from 'react-navigation'
import { FlatList } from 'react-native-gesture-handler';
import feeds from "./assets/feeds.json";

export default function FeedsScreen({ navigation, route }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={feeds}
        renderItem={({ item }) => {
          return (
            <View style={{ // @remind clean here
              alignItems: "center",
              margin: 10,
              borderTopWidth: 1,
              borderColor: "#e0e0e0",
              backgroundColor: "transparent", }}>
              <View style={{
                flex: 1,
                width: "100%",
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "transparent", }}>
                <Image style={{
                  width: 30,
                  height: 30,
                  margin: 10,
                  borderRadius: 60,
                  resizeMode: "contain"}} 
                  source={{uri: item.image}}/>
                <Text style={{ fontSize: 12, }}>{item.name}</Text>
              </View>
              <View style={{ 
                  flex: 1, 
                  width: "100%", 
                  backgroundColor: "transparent", }}>
                <Text style={{ 
                  marginLeft: 10, 
                  fontSize: 12,}}>
                  {item.post}
                </Text>
              </View>
              <Image 
                style={{
                  width: 280,
                  height: 280,
                  margin: 15,
                  resizeMode: "contain",
                }}
                source={{uri: item.image}}/>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#f2f2f2"
  },
});
