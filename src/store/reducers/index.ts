// default import to combine all separate reducers
import { combineReducers } from "redux";

// import custom reducers
import auth from "./auth";

// combining all reducers together
const reducer = combineReducers({
  auth
});

export default reducer;
