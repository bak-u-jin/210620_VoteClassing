import React from 'react';
import { SafeAreaView,StatusBar, Text, View } from 'react-native';
import globalStyles from '../Components/globalStyles';

function Create(){
  return(
    <SafeAreaView style={globalStyles.container}>
      <View><Text>Create</Text></View>
    </SafeAreaView>
  )
}

export default Create;