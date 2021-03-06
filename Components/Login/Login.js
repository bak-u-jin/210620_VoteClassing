import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { connect } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import JoinBtn from "./JoinBtn";
import LoginBtn from "./LoginBtn";
import { setId, setPw } from "../Common/store";

function Login({ store, SetId, SetPw }) {
  return (
    <>
      <View style={styles.inputBox}>
        <View style={styles.iconBox}>
          <FontAwesome name="user-circle-o" color={"#000"} size={26} />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(e) => SetId(e)}
          placeholder="아이디를 입력해주세요"
        />
      </View>
      <View style={styles.inputBox}>
        <View style={styles.iconBox}>
          <FontAwesome name="lock" color={"#000"} size={26} />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(e) => SetPw(e)}
          placeholder="비밀번호를 입력해주세요"
          secureTextEntry={true}
        />
      </View>

      {store.isLoginFail && (
        <View style={styles.loginAlarmBox}>
          <Text style={styles.loginAlarm}>
            아이디, 비밀번호를 다시 확인해주세요
          </Text>
        </View>
      )}
      <JoinBtn />
      <LoginBtn />
    </>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    width: 240,
    height: 46,
    marginBottom: 10,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  iconBox: {
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: 200,
    height: 40,
    paddingHorizontal: 10,
  },

  loginAlarmBox: {
    width: 240,
    alignItems: "center",
  },

  loginAlarm: {
    color: "#f00",
  },
});

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    SetId: (id) => dispatch(setId(id)),
    SetPw: (pw) => dispatch(setPw(pw)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
