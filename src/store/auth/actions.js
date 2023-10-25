import { _setCurrentAccount } from "~/store/auth/index";
import store from "~/store";

console.log(store, "store");

export const setCurrentAccount = (data) =>
  store.dispatch(_setCurrentAccount(data));
