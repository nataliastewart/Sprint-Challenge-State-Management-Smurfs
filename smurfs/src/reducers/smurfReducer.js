import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
} from "../actions";
import { SUBMITTED_FORM } from "../actions/smurfActions";

//setup my empty reducer and initial state

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  error: "",
};

//write logic for actions

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: "",
      };
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      };
    case SUBMITTED_FORM:
      return {
        ...state,
        smurfs: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
