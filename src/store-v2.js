import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// Before install redux devtools
// const store = createStore(rootReducer, applyMiddleware(thunk));

// After install redux devtools
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
 