import React, {useState} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';

const btnColor = '#77ACF1';

function SelectBtn({store, title}) {
  const [btnSize, SetBtnSize] = useState(1);

  async function Vote() {
    let optionResult = [];

    await axios
      .get(`http://localhost:3000/result/${title}`)
      .then((res) => {
        const resData = res.data[`${store.chooseOption}`];
        optionResult = [...resData, store.id];
      })
      .catch((err) => console.log(err));

    const context = {[`${store.chooseOption}`]: optionResult};
    await axios
      .patch(`http://localhost:3000/result/${title}`, context)
      .catch((err) => console.log(err));
  }

  async function FindVote() {
    await axios
      .get(`http://localhost:3000/result/${title}`)
      .then((res) => {
        for (let i = 0; res.data[i]; i++) {
          let voteList = res.data[i];
          if (voteList.find((e) => e === store.id)) {
            alert('이미 하신 투표입니다');
            return 0;
          }
        }
        Vote();
      })
      .catch((err) => console.log(err));
  }

  function LoginBtnPressIn() {
    SetBtnSize(0.98);
  }

  function LoginBtnPressOut() {
    SetBtnSize(1);
    if (store.isLogin) FindVote();
    else alert('로그인을 해주세요');
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={LoginBtnPressIn}
      onPressOut={LoginBtnPressOut}>
      <View style={[styles.loginBtn, {transform: [{scale: btnSize}]}]}>
        <Text style={styles.loginText}>투표하기</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    width: 220,
    height: 40,
    padding: 20,
    marginTop: 16,
    borderRadius: 10,
    backgroundColor: btnColor,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

function mapStateToProps(state) {
  return {store: state};
}

export default connect(mapStateToProps, null)(SelectBtn);
