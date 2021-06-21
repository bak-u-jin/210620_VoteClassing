import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { connect } from "react-redux";
import { setLogin, setLoginFail } from "../store";
import axios from "axios";

const btnColor = "#77ACF1";

function LoginBtn({ store, SetLogin, SetLoginFail }) {
  const [btnSize, SetBtnSize] = useState(1);
  async function LoginBtnPressIn() {
    SetBtnSize(0.98);
    await axios
      .get(`http://localhost:3000/users?id=${store.id}&pw=${store.pw}`)
      .then((res) => {
        if (res.data[0] === undefined) {
          SetLoginFail(true);
        } else {
          SetLogin(true);
        }
      })
      .catch((err) => console.log(err));
  }

  function LoginBtnPressOut() {
    SetBtnSize(1);
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={LoginBtnPressIn}
      onPressOut={LoginBtnPressOut}
    >
      <View
        style={[styles.loginBtn, { transform: [{ scale: btnSize }] }]}
      >
        <Text style={styles.loginText}>로그인</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginBtn);
