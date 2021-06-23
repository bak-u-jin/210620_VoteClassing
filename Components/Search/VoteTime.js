import React from "react";
import { StyleSheet, View, Text } from "react-native";

const mainColor = "#77ACF1";

function VoteTime({ madeby, startTime, endTime, canTime }) {
  function TimeText(Time) {
    const today = new Date();

    if (
      today.getFullYear() === Time[0] &&
      today.getMonth() === Time[1] &&
      today.getDate() - 1 === Time[2]
    )
      return "어제";
    else if (
      today.getFullYear() === Time[0] &&
      today.getMonth() === Time[1] &&
      today.getDate() === Time[2]
    )
      return "오늘";
    else if (
      today.getFullYear() === Time[0] &&
      today.getMonth() === Time[1] &&
      today.getDate() + 1 === Time[2]
    )
      return "내일";
    else return `${Time[0]}.${Time[1] + 1}.${Time[2]}.`;
  }

  return (
    <View style={styles.idBox}>
      <View style={styles.timeBox}>
        <View
          style={[
            styles.timeTextBox,
            canTime == "yet" && styles.redBox,
            canTime == "late" && styles.grayBox,
          ]}
        >
          <Text style={styles.timeText}>시작시간</Text>
          <Text style={styles.timeText}>
            {TimeText(startTime)} {startTime[3]}:{startTime[4]}
          </Text>
        </View>
        <View style={[styles.timeTextBox, canTime == "late" && styles.grayBox]}>
          <Text style={styles.timeText}>종료시간</Text>
          <Text style={styles.timeText}>
            {TimeText(endTime)} {endTime[3]}:{endTime[4]}
          </Text>
        </View>
      </View>
      <Text style={styles.idText}>{madeby}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  idBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginVertical: 6,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  timeBox: {
    height: 50,
    justifyContent: "space-between",
  },

  timeTextBox: {
    width: 160,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: mainColor,
    padding: 2,
    borderRadius: 5,
  },

  redBox: {
    backgroundColor: "#FF616D",
  },

  grayBox: {
    backgroundColor: "#666",
  },

  timeText: {
    color: "#fff",
  },
});

export default VoteTime;
