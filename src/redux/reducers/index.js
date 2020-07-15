import { combineReducers } from "redux";
import userdataReducer from "./userdataReducer";
import articleReducer from "./articleReducer";

export default combineReducers({
    userdata: userdataReducer,
    articles: articleReducer
});
