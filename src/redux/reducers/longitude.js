import { SET_LONGITUDE } from "../actions";

const initialState = {
  longitude: 0,
};

const longitudeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LONGITUDE:
      return {
        ...state,
        longitude: action.payload,
      };

    default:
      return state;
  }
};

export default longitudeReducer;
