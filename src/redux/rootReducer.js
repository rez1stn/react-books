import { combineReducers } from "redux";
import { fetchReducer} from "./reducers";


export const rootReducer = combineReducers({
 
 fetchedBooks:fetchReducer,

  
})