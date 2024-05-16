import { combineReducers } from "redux";
import roomReducer from "./room/reducer";


let rootReducers = combineReducers({
    roomReducer,
});

export default  rootReducers;