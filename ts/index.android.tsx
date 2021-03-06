import * as React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextStyle
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  } as TextStyle,
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  } as TextStyle,
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  } as TextStyle,
});

class RuubyPA extends React.Component<{}, {}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{"\n"}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("RuubyPA", () => RuubyPA);
