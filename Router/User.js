import React from "react";
import { View, StyleSheet, SafeAreaView, Text, TextInput } from "react-native";
import { connect } from "react-redux";
import globalStyles from "../Components/globalStyles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Login from "../Components/Login";
import UserInfo from "../Components/UserInfo";

function User({ store }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.loginBox}>
        {store.isLogin ? (<UserInfo/>) : (<Login/>)}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginBox: {
    width: 380,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
  },

  inputBox: {
    width: 240,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  input: {
    width: 200,
    paddingHorizontal: 10,
  },
});

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
