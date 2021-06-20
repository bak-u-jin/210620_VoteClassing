import React from 'react';
import { SafeAreaView,StatusBar, Text, View } from 'react-native';
import globalStyles from '../Components/globalStyles';

function Search(){
  return(
    <SafeAreaView style={globalStyles.container}>
      <View><Text>Search</Text></View>
    </SafeAreaView>
  )
}

export default Search;