import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { setOptions } from "../Common/store";

const btnColor = "#77ACF1";

function OptionList({ SetOptions }) {
  const [btnSize, SetBtnSize] = useState(1);

  const [optionsNum, SetoptionsNum] = useState([1, 2, 3]);
  const [optionsList, SetOptionList] = useState();

  let optionText;

  function LoginBtnPressIn() {
    SetBtnSize(0.98);
  }

  function LoginBtnPressOut() {
    SetBtnSize(1);
    SetoptionsNum([...optionsNum, optionsNum.length + 1]);
  }

  useEffect(() => {
    SetOptionList(
      optionsNum.map((index) => (
        <TextInput
          key={index}
          onChangeText={(e) => (optionText = e)}
          onEndEditing={() => {
            if (optionText) {
              SetOptions({ index: index - 1, optionText });
              optionText = undefined;
            } else {
              SetOptions({ index: index - 1, undefined });
            }
          }}
          placeholder={`투표항목 ${index}`}
        />
      ))
    );
  }, [optionsNum]);

  return (
    <>
      {optionsList}
      <TouchableWithoutFeedback
        onPressIn={LoginBtnPressIn}
        onPressOut={LoginBtnPressOut}
      >
        <View style={[styles.btnStyle, { transform: [{ scale: btnSize }] }]}>
          <Text style={styles.btnText}>항목 +</Text>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    width: 200,
    height: 40,
    padding: 20,
    marginTop: 16,
    borderRadius: 10,
    backgroundColor: btnColor,
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

function mapDispatchToProps(dispatch) {
  return {
    SetOptions: ({ index, optionText }) =>
      dispatch(setOptions({ index, optionText })),
  };
}

export default connect(null, mapDispatchToProps)(OptionList);
