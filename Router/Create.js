import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { connect } from "react-redux";
import globalStyles from "../Components/globalStyles";

import SetTimeBtn from "../Components/SetTimeBtn";
import OptionList from "../Components/OptionList";
import CreateBtn from "../Components/CreateBtn";

function Create({ store }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView
        style={styles.contentBox}
        contentContainerStyle={styles.scrollstyle}
      >
        <TextInput
          style={styles.titleInput}
          value={store.id}
          onChangeText={(e) => SetId(e)}
          placeholder="투표주제를 입력해주세요"
        />
        <View style={styles.timeBox}>
          <SetTimeBtn isStart={true} />
          <SetTimeBtn isStart={false} />
        </View>
        <OptionList />
        <CreateBtn />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentBox: {
    width: 380,
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  scrollstyle: {
    alignItems: "center",
  },

  titleInput: {
    fontSize: 24,
  },
});

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    SetPw: (pw) => dispatch(setPw(pw)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
