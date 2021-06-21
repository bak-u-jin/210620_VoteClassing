import axios from "axios";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import globalStyles from "../Components/globalStyles";

import VoteBox from "../Components/VoteBox";

function Search() {
  let votes;
  const [menuList, setMenuList] = useState(<></>);

  async function getVote() {
    await axios
      .get(`http://localhost:3000/vote`)
      .then((res) => {
        votes = res.data;
      })
      .catch((err) => console.log(err));
    setMenuList(votes.map((vote, index) => <VoteBox vote={vote} index={index}></VoteBox>));
  }

  useEffect(() => {
    getVote();
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      <View>{menuList}</View>
    </SafeAreaView>
  );
}

export default Search;
