import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { connect } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";

import TimeText from "./TimeText";
import { setVoteStartTime, setVoteEndTime } from "../Common/store";

const btnColor = "#77ACF1";

function SetTimeBtn({ isStart, SetVoteStartTime, SetVoteEndTime }) {
  const [btnSize, SetBtnSize] = useState(1);

  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [date, setDate] = useState(new Date());

  function onChange(event, selectedDate) {
    let time = [];

    if (selectedDate === undefined) return setShow(false);
    setDate(selectedDate);

    time = [
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      selectedDate.getHours(),
      selectedDate.getMinutes(),
    ];

    if (mode === "date") setMode("time");
    else {
      setShow(false);

      if (isStart) SetVoteStartTime(time);
      else SetVoteEndTime(time);

      setMode("date");
    }
  }

  function LoginBtnPressIn() {
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
            {isStart ? (
              <TimeText isStart={isStart} />
            ) : (
              <TimeText isStart={isStart} />
            )}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
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

function mapDispatchToProps(dispatch) {
  return {
    SetVoteStartTime: (time) => dispatch(setVoteStartTime(time)),
    SetVoteEndTime: (time) => dispatch(setVoteEndTime(time)),
  };
}

export default connect(null, mapDispatchToProps)(SetTimeBtn);
