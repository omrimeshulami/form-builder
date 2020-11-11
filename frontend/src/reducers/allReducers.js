import listReducer from "./listReducer";
import newFormReducer from "./newFormReducer";
import submitFormReducer from "./submitFormReducer";

import { combineReducers } from "redux";
const allReducers = combineReducers({
  formList: listReducer,
  newForm: newFormReducer,
  submitFormInfo: submitFormReducer,
});
export default allReducers;
