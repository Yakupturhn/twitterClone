import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "yakupturhn21",
    fullname: "Yakup Turhan",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocJw7byEZhYOqb9j_uoUp3QNLPibBVNw0TeBwNpzPAu_=s192-c-br100-rg-mo",
  },

  accounts: [
    {
      id: 1,
      username: "yakupturhn21",
      fullname: "Yakup Turhan",
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocJw7byEZhYOqb9j_uoUp3QNLPibBVNw0TeBwNpzPAu_=s192-c-br100-rg-mo",
    },
    {
      id: 2,
      username: "ihsankck11",
      fullname: "İhsan Küccük",
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocJw7byEZhYOqb9j_uoUp3QNLPibBVNw0TeBwNpzPAu_=s192-c-br100-rg-mo",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccounts: (state, action) => {
      state.accounts = [...state.accounts, action.payload];
    },
    _removeAccounts: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAcount && action.payload === state.currentAcount.id) {
        //
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccounts, _removeAccounts, _setCurrentAccount } =
  auth.actions;
export default auth.reducer;
