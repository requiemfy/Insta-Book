import * as React from 'react';
import { Alert, Button, Image, StyleSheet, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '../../components/Themed';
import { 
  NavigationScreenProp, 
  NavigationState, 
  NavigationInjectedProps, 
  withNavigation, 
  NavigationParams, 
} from 'react-navigation';
import { CommonActions } from '@react-navigation/native';

interface Props { navigation: NavigationScreenProp<NavigationState, NavigationParams> & typeof CommonActions; }
interface State { invalidCreds: boolean; }

class LoginScreen extends React.PureComponent<NavigationInjectedProps & Props, State> {
  email: string;
  password: string;
  emailTextInput: TextInput | any;
  passTextInput: TextInput | any;
  navigation: Props["navigation"];

  constructor(props: Props | any) {
    super(props);
    this.email = "";
    this.password = "";
    this.state = { invalidCreds: false };
    this.navigation = this.props.navigation;
    this.tryLogin = this.tryLogin.bind(this);
    this.clearCreds = this.clearCreds.bind(this);
  }

  clearCreds() {
    this.email = "",
    this.password = "",
    this.emailTextInput.clear();
    this.passTextInput.clear();
  }

  tryLogin() {
    const isValid = this.email === "jasonramirez@gmail.com" && this.password === "1234";
    if (isValid) {
      this.clearCreds();
      this.setState({ invalidCreds: false });
      this.navigation.reset({ 
        index: 0,
        routes: [{ name: 'BottomTab' }] // initial route Feeds
      });
    } 
    else this.setState({ invalidCreds: true });
  }

  signUpAlert() {
    Alert.alert(
      "Alert",
      "Sorry registration is not available at the moment.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
   );
  }

  render() {
    return(
      <View style={styles.rootContainer}>
        {
          this.state.invalidCreds && 
          <View style={styles.invalidCreds}>
            <Text style={{ color: "red" }}>Invalid Credentials</Text>
          </View>
        }
        <Image 
          source={require('./assets/instabook.png')} 
          style={{ width: "35%", resizeMode: "contain", }}/>
        <TextInput 
          ref={input => { this.emailTextInput = input }}
          onChangeText={(text => {this.email = text})}
          placeholder="Email"
          style={styles.textInput} />
        <TextInput 
          ref={input => { this.passTextInput = input }}
          onChangeText={(text => {this.password = text})}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput} /> 
        <View 
          style={[{width:"80%", marginTop: 5}]}>
          <Button
            onPress={this.tryLogin}
            title="Log In"
            color="#5294eb" />
        </View> 
        <View style={styles.signUp}>
          <Text style={{ color: "#989898" }}>Don't have an account?</Text>
          <TouchableOpacity onPress={this.signUpAlert}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rootContainer: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: "#f2f2f2",
  },
  textInput: {
    width: "80%",
    height: 40,
    margin: 5,
    paddingLeft: 20,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  signUp: { 
    width: "100%",
    height: "8%", 
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0" 
  },
  invalidCreds: { 
    width: "100%", 
    height: "5%", 
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink", 
  }
})

export default withNavigation(LoginScreen);