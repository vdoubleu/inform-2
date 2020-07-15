import { combineReducers } from "redux";
import userdataReducer from "./userdataReducer";

export default combineReducers({
    userdata: userdataReducer
});
