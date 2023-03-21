import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { allUsersReducer, userDetailsReducer, userReducer } from "./reducers/userReducer";


const reducer = combineReducers({
  
  user: userReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
});


const middleWare = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;