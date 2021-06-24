import React, { useState } from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { chooseVote } from "../Common/store";

import OptionBox from "./OptionBox";
import SelectBtn from "./SelectBtn";
import DeleteBtn from "./DeleteBtn";
import VoteTime from "./VoteTime";
import TimeCompare from "./TimeCompare";
import VoteResult from "./VoteResult";

function VoteBox({ store, vote, index, ChooseVote, GetVote }) {
  const [btnSize, SetBtnSize] = useState(1);
  const { id, madeby, options, startTime, endTime } = vote;

  function VoteBoxPressIn() {
    SetBtnSize(0.98);
  }

  function VoteBoxPressOut() {
    SetBtnSize(1);
    if (index === store.chooseVote) ChooseVote(-1);
    else ChooseVote(index);
  }

  const canTime = TimeCompare(startTime, endTime);

  let optionsText = options.map((option, index) => (
    <OptionBox key={index} option={option} index={index} can={canTime} />
  ));

  return (
    <TouchableWithoutFeedback
      onPressIn={VoteBoxPressIn}
      onPressOut={VoteBoxPressOut}
    >
      <View
        style={[
          styles.voteBox,
          canTime !== "ok" && styles.cantTime,
          { transform: [{ scale: btnSize }] },
        ]}
      >
        <DeleteBtn index={index} title={id} madeby={madeby} GetVote={GetVote} />
        <Text style={styles.title}>{id}</Text>
        <VoteTime
          madeby={madeby}
          startTime={startTime}
          endTime={endTime}
          canTime={canTime}
        />
        {index == store.chooseVote &&
          (canTime == "late" ? (
            <VoteResult title={id} />
          ) : (
            <>
              {optionsText}
              {canTime == "ok" && <SelectBtn title={id} />}
            </>
          ))}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  voteBox: {
    marginBottom: 10,
    width: 380,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
  },

  cantTime: {
    backgroundColor: "#e4e4e4",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    ChooseVote: (vote) => dispatch(chooseVote(vote)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteBox);
