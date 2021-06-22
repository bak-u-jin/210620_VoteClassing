import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { connect } from "react-redux";
import { setVoteStartTime } from "../store";
import DateTimePicker from "@react-native-community/datetimepicker";

import TimeText from "./TimeText";

const btnColor = "#77ACF1";

function TimeStartBtn({ store, SetVoteStartTime }) {
  const [btnSize, SetBtnSize] = useState(1);

  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");

  async function onChange(event, selectedDate) {
    let time = [];

    if (selectedDate === undefined) return setShow(false);

    setDate(selectedDate);

    time = [
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDay(),
      selectedDate.getHours(),
      selectedDate.getMinutes(),
    ];

    if (mode === "date") setMode("time");
    else {
      setShow(false);
      SetVoteStartTime(time);
      setMode("date");
    }
  }

  async function LoginBtnPressIn() {
    SetBtnSize(0.98);
  }

  function LoginBtnPressOut() {
    SetBtnSize(1);
    setShow(true);
  }

  return (
    <>
      <TouchableWithoutFeedback
        onPressIn={LoginBtnPressIn}
        onPressOut={LoginBtnPressOut}
      >
        <View style={[styles.loginBtn, { transform: [{ scale: btnSize }] }]}>
          <Text style={styles.loginText}>
            <TimeText startEnd={"end"} />
          </Text>
        </View>
      </TouchableWithoutFeedback>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={mode}
          is24Hour={false}
          display={"spinner"}
          onChange={onChange}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    width: 200,
    height: 40,
    padding: 20,
    marginTop: 16,
    borderRadius: 10,
    backgroundColor: btnColor,
    alignItems: "center",
    justifyContent: "center",
  },

  loginText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    SetVoteStartTime: (time) => dispatch(setVoteStartTime(time)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeStartBtn);
