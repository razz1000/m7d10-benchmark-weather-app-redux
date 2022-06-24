import { SET_LATITUDE } from "../actions";

const initialState = {
  latitude: 0,
};

const latitudeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LATITUDE:
      return {
        ...state,
        latitude: action.payload,
      };

    default:
      return state;
  }
};

export default latitudeReducer;
