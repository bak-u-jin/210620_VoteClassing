import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import globalStyles from "../Components/Common/globalStyles";

import VoteBox from "../Components/Search/VoteBox";

function Search({ navigation }) {
  const [menuList, setMenuList] = useState(<></>);
  let votes;

  useEffect(() => {
    GetVote();
  }, []);

  useEffect(() => {
    navigation.addListener("tabPress", () => GetVote());
  }, [navigation]);

  async function GetVote() {
    await axios
      .get(`http://localhost:3000/vote`)
      .then((res) => {
        votes = res.data;
      })
      .catch((err) => console.log(err));
    setMenuList(
      votes.map((vote, index) => (
        <VoteBox
          key={index}
          vote={vote}
          index={index}
          GetVote={GetVote}
        ></VoteBox>
      ))
    );
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView style={styles.scrollStyle}>{menuList}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollStyle: { marginTop: 10 },
});

export default Search;
