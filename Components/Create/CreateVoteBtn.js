import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { connect } from "react-redux";

import PostVote from "./PostVote";

const btnColor = "#77ACF1";

function CreateVoteBtn({ store }) {
  const [btnSize, SetBtnSize] = useState(1);

  function LoginBtnPressIn() {
    SetBtnSize(0.98);
  }

  function LoginBtnPressOut() {
    SetBtnSize(1);
    PostVote(store);
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={LoginBtnPressIn}
      onPressOut={LoginBtnPressOut}
    >
      <View style={[styles.loginBtn, { transform: [{ scale: btnSize }] }]}>
        <Text style={styles.loginText}>투표작성</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    width: 220,
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

export default connect(mapStateToProps, null)(CreateVoteBtn);
