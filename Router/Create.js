import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { setVoteId } from "../Components/Common/store";
import globalStyles from "../Components/Common/globalStyles";

import SetTimeBtn from "../Components/Create/SetTimeBtn";
import OptionList from "../Components/Create/OptionList";
import CreateVoteBtn from "../Components/Create/CreateVoteBtn";

function Create({ store, SetVoteId }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView
        style={styles.contentBox}
        contentContainerStyle={styles.scrollstyle}
      >
        <TextInput
          style={styles.titleInput}
          value={store.voteId}
          onChangeText={(e) => SetVoteId(e)}
          placeholder="투표주제를 입력해주세요"
        />
        <View style={styles.timeBox}>
          <SetTimeBtn isStart={true} />
          <SetTimeBtn isStart={false} />
        </View>
        <OptionList />
        <CreateVoteBtn />
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
    SetVoteId: (voteId) => dispatch(setVoteId(voteId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
