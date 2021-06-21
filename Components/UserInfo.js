import React from "react";
import { StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

import LogoutBtn from "./LogoutBtn";

function UseInfo({ store, }) {
  return (
    <>
      <Text>환영합니다</Text>
      <Text style={styles.userInfo}>{store.id}</Text>
      <LogoutBtn />
    </>
  );
}

const styles = StyleSheet.create({
  userInfo: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, null)(UseInfo);
