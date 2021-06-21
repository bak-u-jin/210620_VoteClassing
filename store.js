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

    setLoginBtnSz: (state, action) => {
      return {
        ...state,
        loginBtnSz: action.payload,
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
  },
});

export const { setId, setPw, setLoginBtnSz, setLogin, setLoginFail } =
  store.actions;

export default configureStore({ reducer: store.reducer });
