import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { connect } from "react-redux";
import { setLogin, setLoginFail } from "../Common/store";
import axios from "axios";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const iconColor = "#000";

function DeleteBtn({ store, index, title, madeby }) {
  const [btnSize, SetBtnSize] = useState(1);

  async function DeleteVote() {
    await axios
      .delete(`http://localhost:3000/vote/${title}`)
      .then((res) => {
        alert("투표가 삭제되었습니다.");
      })
      .catch((err) => console.log(err));
  }

  function LoginBtnPressIn() {
    SetBtnSize(0.96);
  }

  function LoginBtnPressOut() {
    SetBtnSize(1);
    DeleteVote();
  }

  return (
    <>
      {index == store.chooseVote && store.isLogin && store.id == madeby && (
        <View style={styles.deleteBox}>
          <TouchableWithoutFeedback
            onPressIn={LoginBtnPressIn}
            onPressOut={LoginBtnPressOut}
          >
            <MaterialCommunityIcons
              style={{ transform: [{ scale: btnSize }] }}
              name="close-box-outline"
              color={iconColor}
              size={24}
            />
          </TouchableWithoutFeedback>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  deleteBox: {
    width: "100%",
    alignItems: "flex-end",
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

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBtn);
