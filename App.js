import React from "react";
import { SafeAreaView, View, Text, Button } from "react-native";

const App = () => {
  function sayHeloo() {
    console.log("merhaba");
  }

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "red" }}>
        <Text>HELLO WORD</Text>
        <Text>hello </Text>
      </View>
      <Text>hello2</Text>
      <Button
        title="press me"
        onPress={sayHeloo}
        disabled={false}
        color="darkgreen"
      />
    </SafeAreaView>
  );
};
export default App;