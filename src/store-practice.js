import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice-practice";
import userReducer from "./features/customers/customerSlice-practice";

const rootReducer = combineReducers({
  account: accountReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;

// store.dispatch({ type: "deposit", payload: 500 });
// store.dispatch({
//   type: "requestLoan",
//   payload: { amount: 5000, purpose: "Buy a car" },
// });
// console.log(store.getState());

// store.dispatch(deposit(500));
// store.dispatch(withdraw(200));
// store.dispatch(requestLoan(500, "buy car"));
// store.dispatch(payLoan());

// store.dispatch(createUser("Dasith", "4475111V"));
// store.dispatch(updateUser("Chalaka"));
