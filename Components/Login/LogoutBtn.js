import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { connect } from "react-redux";

import { setLogin, setLoginFail } from "../Common/store";

const btnColor = "#77ACF1";

function LogoutBtn({ SetLogin }) {
  const [btnSize, SetBtnSize] = useState(1);

  function LoginBtnPressIn() {
    SetBtnSize(0.98);
  }

  function LoginBtnPressOut() {
    SetBtnSize(1);
    SetLogin(false);
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={LoginBtnPressIn}
      onPressOut={LoginBtnPressOut}
    >
      <View style={[styles.loginBtn, { transform: [{ scale: btnSize }] }]}>
        <Text style={styles.loginText}>๋ก๊ทธ์์</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    width: 160,
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
    SetLogin: (isLogin) => dispatch(setLogin(isLogin)),
    SetLoginFail: (isLoginFail) => dispatch(setLoginFail(isLoginFail)),
  };
}

export default connect(null, mapDispatchToProps)(LogoutBtn);
