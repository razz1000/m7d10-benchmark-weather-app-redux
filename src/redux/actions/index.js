export const GET_WEATHER = "GET_WEATHER";
export const TOGGLE_SPINNER = "TOGGLE_SPINNER";
export const TOGGLE_ERROR = "TOGGLE_ERROR";

export const getweatherAction = (props) => {
  return async (dispatch, getState) => {
    try {
      if (!getState().weather.isLoading) {
        dispatch({
          type: TOGGLE_SPINNER,
        });
      }

      console.log("PROPS:", props);
      let response = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=" +
          props +
          "&limit=5&appid=" +
          process.env.REACT_APP_WEATHER_APP_KEY
      );

      if (response.ok) {
        let data = await response.json();
        console.log("DATA:", data);
        let weather = data;

        dispatch({
          type: GET_WEATHER,
          payload: weather,
        });

        // let's toggle the spinner off!
        dispatch({
          type: TOGGLE_SPINNER,
        });
      } else {
        // let's toggle the spinner off!
        dispatch({
          type: TOGGLE_SPINNER,
        });
        dispatch({
          type: TOGGLE_ERROR,
        });
      }
    } catch (error) {
      // let's toggle the spinner off!
      dispatch({
        type: TOGGLE_SPINNER,
      });
      dispatch({
        type: TOGGLE_ERROR,
      });
    }
  };
};
