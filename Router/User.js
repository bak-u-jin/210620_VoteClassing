import React from "react";
import { View, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import globalStyles from "../Components/Common/globalStyles";

import Login from "../Components/Login/Login";
import UserInfo from "../Components/Login/UserInfo";

function User({ store }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.contentBox}>
        {store.isLogin ? <UserInfo /> : <Login />}
      </View>
    </SafeAreaView>
  );
}

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, null)(User);
