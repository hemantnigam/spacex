import {
  SET_YEAR,
  SET_SUCCESSFUL_LAUNCH,
  SET_SUCCESSFUL_LANDING,
} from "../Constant/constant";

const initialState = {
  year: "",
  launch: "",
  land: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_YEAR:
      return {
        ...state,
        year: action.payload,
      };
    case SET_SUCCESSFUL_LAUNCH:
      return {
        ...state,
        launch: action.payload,
      };
    case SET_SUCCESSFUL_LANDING:
      return {
        ...state,
        land: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
