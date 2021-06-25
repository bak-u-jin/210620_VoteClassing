import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { connect } from "react-redux";
import axios from "axios";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { setLogin } from "../Common/store";

function JoinBtn({ store, SetLogin }) {
  const [btnSize, SetBtnSize] = useState(1);

  async function JoinUser() {
    await axios
      .post(`http://localhost:3000/users/`, {
        id: `${store.id}`,
        pw: `${store.pw}`,
      })
      .then((res) => {
        alert("회원가입이 완료되었습니다");
        SetLogin(true);
      })
      .catch((err) => console.log(err));
  }

  async function GetUser() {
    await axios
      .get(`http://localhost:3000/users/?id=${store.id}`, {})
      .then((res) => {
        console.log(res.data);
        if (res.data[0]) alert("이미 존재하는 아이디입니다");
        else JoinUser();
      })
      .catch((err) => console.log(err));
  }

  async function CheckInfo() {
    if (store.id && store.pw) {
      GetUser();
    } else if (!store.id) alert("가입할 아이디를 입력해주세요");
    else alert("가입할 비밀번호를 입력해주세요");
  }

  function JoinBtnPressIn() {
    SetBtnSize(0.94);
  }

  function JoinBtnPressOut() {
    SetBtnSize(1);
    CheckInfo();
  }

  return (
    <View style={styles.joinBtnBox}>
      <TouchableWithoutFeedback
        onPressIn={JoinBtnPressIn}
        onPressOut={JoinBtnPressOut}
      >
        <View style={[styles.joinBtn, { transform: [{ scale: btnSize }] }]}>
          <FontAwesome
            name="user"
            style={styles.joinIcon}
            color={"#000"}
            size={16}
          />
          <Text>회원가입</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  joinBtnBox: {
    width: 240,
    alignItems: "flex-end",
    marginBottom: 6,
  },

  joinBtn: {
    flexDirection: "row",
    alignItems: "center",
  },

  joinIcon: { marginRight: 4 },
});

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    SetLogin: (isLogin) => dispatch(setLogin(isLogin)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinBtn);
