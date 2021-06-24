import React from "react";
import { View, Text, StyleSheet } from "react-native";

function OptionResult({ res, name }) {
  return (
    <View style={styles.resultBox}>
      <Text
        style={[styles.text, styles.name]}
        ellipsizeMode="tail"
        numberOfLines={1}
      >
        {name}
      </Text>
      <Text style={[styles.text, styles.res]}>{res}표</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultBox: {
    flexDirection: "row",
    marginTop: 6,
  },

  text: {
    fontSize: 20,
    borderRadius: 5,
    padding: 5,
  },

  name: {
    width: 60,
    marginRight: 5,
    overflow: "hidden",
  },
});

export default OptionResult;