import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { connect } from "react-redux";
import { setId, setLogin, setLoginBtnSz, setLoginFail } from "../store";

const btnColor = "#77ACF1";

function LogoutBtn({ store, SetLoginBtnSz, SetLogin }) {
  function LoginBtnPressIn() {
    SetLoginBtnSz(0.98);
    SetLogin(false);
  }

  function LoginBtnPressOut() {
    SetLoginBtnSz(1);
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={LoginBtnPressIn}
      onPressOut={LoginBtnPressOut}
    >
      <View
        style={[styles.loginBtn, { transform: [{ scale: store.loginBtnSz }] }]}
      >
        <Text style={styles.loginText}>로그아웃</Text>
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

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    SetLoginBtnSz: (size) => dispatch(setLoginBtnSz(size)),
    SetLogin: (isLogin) => dispatch(setLogin(isLogin)),
    SetLoginFail: (isLoginFail) => dispatch(setLoginFail(isLoginFail)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutBtn);
