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

import CreateBtn from "../Components/CreateBtn";

function Create({ store }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView
        style={styles.contentBox}
        contentContainerStyle={styles.scrollstyle}
      >
        <TextInput
          style={styles.input}
          value={store.id}
          onChangeText={(e) => SetId(e)}
          placeholder="투표주제를 입력해주세요"
        />
        <View style={styles.timeBox}>
          <TouchableWithoutFeedback>
            <View>
              <Text>시작시간</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View>
              <Text>종료시간</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <TextInput
          style={styles.input}
          value={store.id}
          onChangeText={(e) => SetId(e)}
          placeholder="투표항목1"
        />
        <TextInput
          style={styles.input}
          value={store.id}
          onChangeText={(e) => SetId(e)}
          placeholder="투표항목2"
        />
        <TextInput
          style={styles.input}
          value={store.id}
          onChangeText={(e) => SetId(e)}
          placeholder="투표항목3"
        />
        <TouchableWithoutFeedback>
          <View>
            <Text>투표항목+</Text>
          </View>
        </TouchableWithoutFeedback>
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

  timeBox: {
    flexDirection: "row",
    justifyContent:"space-around",
    width: "80%",
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
