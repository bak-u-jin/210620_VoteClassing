import React, { useState } from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import globalStyles from "../Components/globalStyles";
import OptionBox from "./OptionBox";
import { chooseVote } from "../store";

function VoteBox({ store, ChooseVote, vote, index }) {
  const [toggleBox, SetToggleBox] = useState(false);
  const [btnSize, SetBtnSize] = useState(1);
  const { id, title, options } = vote;

  let optionsText = options.map((option, index) => (
    <OptionBox option={option}  index={index} />
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
        <Text style={styles.title}>{title}</Text>
        {index == store.chooseVote && optionsText}
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
    marginBottom: 20,
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
