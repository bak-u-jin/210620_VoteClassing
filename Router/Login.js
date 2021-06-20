import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import globalStyles from '../Components/globalStyles';
const bgColor = "#e0e0e0";
function Login(){
  return(
    <SafeAreaView style={globalStyles.container}>
      <View><Text>Login</Text></View>
    </SafeAreaView>
  )
}

export default Login;

const styles = StyleSheet.create({

})