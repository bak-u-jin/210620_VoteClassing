import React, { useState } from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import globalStyles from "../Components/globalStyles";
import Fontisto from "react-native-vector-icons/Fontisto";
import { chooseOption } from "../store";

function OptionBox({ store, option, index, ChooseOption }) {
  function OptionpressOut() {
    if (index === store.chooseOption) {
      ChooseOption(-1);
    } else {
      ChooseOption(index);
    }
  }

  return (
    <TouchableWithoutFeedback onPressOut={OptionpressOut}>
      <View
        style={[
          styles.optionBox,
          index == store.chooseOption ? styles.chooseBox : styles.unChooseBox,
        ]}
      >
        {index === store.chooseOption ? (
          <Fontisto name="checkbox-active" color={"#f00"} size={26} />
        ) : (
          <Fontisto name="checkbox-passive" color={"#000"} size={26} />
        )}
        <Text style={styles.optionText}>{option}</Text>
      </View>
      
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  optionBox: {
    width: "80%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },

  chooseBox: {
    backgroundColor: "#eee",
  },

  unChooseBox: {
    backgroundColor: "#fff",
  },

  optionText: {
    paddingHorizontal: 10,
    fontSize: 18,
  },
});

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    ChooseOption: (option) => dispatch(chooseOption(option)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionBox);
