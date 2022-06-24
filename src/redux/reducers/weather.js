import { GET_WEATHER, TOGGLE_ERROR, TOGGLE_SPINNER } from "../actions";

const initialState = {
  weatherData: {},
  isLoading: false,
  isError: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    case TOGGLE_SPINNER:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case TOGGLE_ERROR:
      return {
        ...state,
        isError: !state.isError,
      };
    default:
      return state;
  }
};

export default weatherReducer;
