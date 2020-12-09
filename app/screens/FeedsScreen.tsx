import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { FlatList } from 'react-native-gesture-handler';
import feeds from "./assets/feeds.json";

export default function FeedsScreen() {
  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={feeds}
        renderItem={({ item }) => {
          return (
            <View style={styles.feedsContainer}>

              <View style={styles.profileContainer}>
                <Image style={styles.profilePicture}
                  source={{ uri: item.profile }}/>
                <Text style={{ fontSize: 12, }}>{item.name}</Text>
              </View>

              <View style={{ flex: 1, width: "100%", backgroundColor: "transparent", }}>
                <Text style={{ marginLeft: 10, fontSize: 12,}}>
                  {item.post}
                </Text>
              </View>

              <Image 
                style={styles.postPicture}
                source={{uri: item.image}}/>

            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#f2f2f2"
  },
  feedsContainer: {
    alignItems: "center",
    margin: 10,
    borderTopWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "transparent", 
  },
  profileContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent", 
  },
  profilePicture: {
    width: 30,
    height: 30,
    margin: 10,
    borderRadius: 60,
    resizeMode: "contain",
  },
  postPicture: {
    width: 280,
    height: 280,
    margin: 15,
    resizeMode: "contain",
  },
});
