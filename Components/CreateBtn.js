import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { connect } from "react-redux";
import { setLogin, setLoginFail } from "../store";

import axios from "axios";

const btnColor = "#77ACF1";

function CreateBtn({ store, SetLogin, SetLoginFail }) {
  const [btnSize, SetBtnSize] = useState(1);

  // const birthday = new Date("March 13, 08 04:20");
  // console.log(birthday.getTime());
  // let a = selectedDate.getTime();
  // console.log(selectedDate.getMinutes());
  // await axios
  //   .post(`http://localhost:3000/vote`, {
  //     id:"time",
  //     time: [selectedDate.getMinutes(),selectedDate.getHours()],
  //   })
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((err) => console.log(err));
  // await axios
  //   .get(`http://localhost:3000/vote/time`)
  //   .then((res) => {
  //     console.log(res.data.time[1])
  //   })
  //   .catch((err) => console.log(err));

  // let b = new Date().getMinutes;
  // console.log(a.getMinutes,b)
  // alert("Yeah" + a + "D" + b);

  async function LoginBtnPressIn() {
    SetBtnSize(0.98);
  }

  function LoginBtnPressOut() {
    SetBtnSize(1);
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

function mapDispatchToProps(dispatch) {
  return {
    SetLogin: (isLogin) => dispatch(setLogin(isLogin)),
    SetLoginFail: (isLoginFail) => dispatch(setLoginFail(isLoginFail)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBtn);
