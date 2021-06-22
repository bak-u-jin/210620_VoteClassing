import React, { useState } from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import globalStyles from "../Components/globalStyles";
import { chooseVote } from "../store";

import OptionBox from "./OptionBox";
import SelectBtn from "./SelectBtn";

function VoteBox({ store, ChooseVote, vote, index }) {
  const [btnSize, SetBtnSize] = useState(1);
  const { id, madeby, options } = vote;

  let optionsText = options.map((option, index) => (
    <OptionBox key={index} option={option} index={index} />
  ));

  function VoteBoxPressIn() {
    SetBtnSize(0.98);
  }

  function VoteBoxPressOut() {
    SetBtnSize(1);
    if (index === store.chooseVote) ChooseVote(-1);
    else ChooseVote(index);
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={VoteBoxPressIn}
      onPressOut={VoteBoxPressOut}
    >
      <View
        style={[
          globalStyles.contentBox,
          styles.voteBox,
          { transform: [{ scale: btnSize }] },
        ]}
      >
        <Text style={styles.title}>{id}</Text>
        <View style={styles.idBox}>
          <Text style={styles.idText}>{madeby}</Text>
        </View>
        {index == store.chooseVote && (
          <>
            {optionsText}
            <SelectBtn title={title} />
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  voteBox: {
    marginBottom: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  idBox: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 6,
  },

  idText: {
    fontSize: 16,
  },

  optionBox: {
    width: "80%",
    flexDirection: "row",
    marginBottom: 16,
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
    ChooseVote: (vote) => dispatch(chooseVote(vote)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteBox);
