import React from "react";
import axios from "axios";
import { connect } from "react-redux";

function VoteApi({ store, title }) {
  async function Vote() {
    let optionResult = [];
    await axios
      .get(`http://localhost:3000/result/${title}`)
      .then((res) => {
        for (let i = 0; res.data[i]; i++) {
          let voteList = res.data[i];
          if (voteList.find((e) => e === store.id)) {
            alert("이미 하신 투표입니다");
            return 0;
          }
        }
      })
      .catch((err) => console.log(err));

    await axios
      .get(`http://localhost:3000/result/${title}`)
      .then((res) => {
        const resData = res.data[`${store.chooseOption}`];
        optionResult = [...resData, store.id];
      })
      .catch((err) => console.log(err));

    const context = { [`${store.chooseOption}`]: optionResult };
    await axios
      .patch(`http://localhost:3000/result/${title}`, context)
      .catch((err) => console.log(err));
  }

  Vote();
}

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, null)(VoteApi);
