import { combineReducers } from "redux";
import Reducer from './Reducer';


const reducers = combineReducers({
    officeToken:Reducer,
    
});

export default reducers;