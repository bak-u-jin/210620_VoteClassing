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
  },
});

export const {
  setId,
  setPw,
  setLogin,
  setLoginFail,
  chooseVote,
  chooseOption,
} = store.actions;

export default configureStore({ reducer: store.reducer });
