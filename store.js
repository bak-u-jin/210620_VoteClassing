import { configureStore, createSlice } from "@reduxjs/toolkit";

const store = createSlice({
  name: "storeReducer",
  initialState: {
    isLogin: false,
    loginBtnSz: 1,
  },
  reducers: {

  }
})

export const {} = store.actions;

export default configureStore({ reducer: store.reducer});