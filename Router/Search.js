import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import globalStyles from "../Components/globalStyles";

import VoteBox from "../Components/VoteBox";

function Search() {
  const [menuList, setMenuList] = useState(<></>);
  let votes;

  async function getVote() {
    await axios
      .get(`http://localhost:3000/vote`)
      .then((res) => {
        votes = res.data;
      })
      .catch((err) => console.log(err));
    setMenuList(
      votes.map((vote, index) => <VoteBox key={index} vote={vote} index={index}></VoteBox>)
    );
  }

  useEffect(() => {
    getVote();
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView style={styles.scrollStyle}>{menuList}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollStyle: { marginTop:10},
});

export default Search;
