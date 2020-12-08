import * as React from 'react';
import { Button, Image, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Text, View } from '../../components/Themed';

export default function AccountScreen({ navigation, route }: any) {
  return (
    <View style={styles.rootContainer}>
      <Image 
        source={require('./assets/profile.jpg')} 
        style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={{ flex: 0.5, backgroundColor: "transparent" }}>
          <FlatList
            data={[
              {key: 'Name'},
              {key: 'Username'},
              {key: 'Website'},
              {key: 'Bio'}, ]}
            renderItem={({item}) => 
              <Text style={styles.data}>
                {item.key}
              </Text> } />
        </View>
        <View style={{ flex: 1, backgroundColor: "transparent" }}>
          <FlatList
            data={[
              {key: 'Jason Ramirez'},
              {key: 'jason.ramirez'},
              {key: 'https://jasonramirez.io'},
              {key: 'Loading...'}, ]}
            renderItem={({item}) => 
              <Text style={styles.data}>
                {item.key}
              </Text> } />
        </View>
      </View>
      <View 
        style={[{ width: 120, height: 40, marginTop: "15%" }]}>
        <Button
          onPress={() => navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }] })}
          title="Log Out"
          color="#ca444a" />
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    paddingTop: getStatusBarHeight() + 20,
    alignItems: 'center',
    backgroundColor: "#f2f2f2",
  },
  image: { 
    width: 100, 
    height: 100, 
    borderRadius: 100, 
    marginBottom: 10,
    resizeMode: "contain", 
  },
  infoContainer: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e0e0e0", 
    backgroundColor: "#f2f2f2",
  },
  data: { 
    paddingTop: 10, 
    paddingBottom: 10, 
  },
})