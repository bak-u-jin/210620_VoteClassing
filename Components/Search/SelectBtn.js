import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { connect } from "react-redux";
import axios from "axios";

const btnColor = "#77ACF1";

function SelectBtn({ store, title }) {
  const [btnSize, SetBtnSize] = useState(1);

  function LoginBtnPressIn() {
    SetBtnSize(0.98);
  }

  async function LoginBtnPressOut() {
    SetBtnSize(1);
    let voteSum;
    await axios
      .get(`http://localhost:3000/result/${title}`)
      .then((res) => {
        voteSum = res.data[`${store.chooseOption}`] + 1;
        if (!res.data[`${store.chooseOption}`]) voteSum = 1;
      })
      .catch((err) => console.log(err));

    const ballot = { [`${store.chooseOption}`]: voteSum };
    await axios
      .patch(`http://localhost:3000/result/${title}`, ballot)
      .catch((err) => console.log(err));
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={LoginBtnPressIn}
      onPressOut={LoginBtnPressOut}
    >
      <View style={[styles.loginBtn, { transform: [{ scale: btnSize }] }]}>
        <Text style={styles.loginText}>투표하기</Text>
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

export default connect(mapStateToProps, null)(SelectBtn);
