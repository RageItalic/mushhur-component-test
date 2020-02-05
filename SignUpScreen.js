import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: "35", fontWeight: "1000" }}>Welcome Back</Text>
      </View>
      <View>
        <TextInput
          style={{
            top: 240,
            height: 50,
            width: 300,
            borderColor: "gray",
            borderBottomWidth: 1,
            left: 30
          }}
          placeholder="Email"
          // onChangeText={text => onChangeText(text)}
          // value={value}
        />
        <TextInput
          style={{
            top: 240,
            height: 50,
            width: 300,
            borderColor: "gray",
            borderBottomWidth: 1,
            left: 30,
            marginTop: 20
          }}
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
          // onChangeText={text => onChangeText(text)}
          // value={value}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <TouchableOpacity>
            <Text>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View style={{ right: 60 }}>
          <TouchableOpacity>
            <Text>Thumb Button</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  },
  textContainer: {
    top: 150,
    left: 30,
    width: 150
  },
  bottomContainer: {
    flexDirection: "row",
    bottom: -520,
    justifyContent: "space-between",
    left: 30,
    alignItems: "center"
  }
});
