import { configureStore, createSlice } from "@reduxjs/toolkit";

const store = createSlice({
  name: "storeReducer",
  initialState: {
    isLogin: false,
    isLoginFail: false,
    loginBtnSz: 1,
  },
  reducers: {
    setId: (state, action) => {
      return {
        ...state,
        id: action.payload,
      };
    },

    setPw: (state, action) => {
      return {
        ...state,
        pw: action.payload,
      };
    },

    setLogin: (state, action) => {
      if (action.payload) {
        return {
          ...state,
          isLogin: action.payload,
        };
      } else {
        return {
          ...state,
          isLogin: action.payload,
          id: null,
          pw: null,
        };
      }
    },
    setLoginFail: (state, action) => {
      return {
        ...state,
        isLoginFail: action.payload,
      };
    },
    chooseVote: (state, action) => {
      return {
        ...state,
        chooseVote: action.payload,
        chooseOption: -1,
      };
    },
    chooseOption: (state, action) => {
      return {
        ...state,
        chooseOption: action.payload,
      };
    },
    setVoteStartTime: (state, action) => {
      return {
        ...state,
        voteStartTime: action.payload,
      };
    },
    setVoteEndTime: (state, action) => {
      return {
        ...state,
        voteEndTime: action.payload,
      };
    },
    setOptions: (state, action) => {
      console.log("action",action.payload);
      let options = action.payload.index;
      return {
        ...state,
        [`${action.payload.index}`]: action.payload.optionText,
      };
    },
  },
});

export const {
  setId,
  setPw,
  setLogin,
  setLoginFail,
  chooseVote,
  chooseOption,
  setVoteStartTime,
  setVoteEndTime,
  setOptions,
} = store.actions;

export default configureStore({ reducer: store.reducer });
