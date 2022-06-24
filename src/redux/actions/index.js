export const GET_WEATHER = "GET_WEATHER";
export const TOGGLE_SPINNER = "TOGGLE_SPINNER";
export const TOGGLE_ERROR = "TOGGLE_ERROR";
export const SET_LATITUDE = "SET_LATITUDE";
export const SET_LONGITUDE = "SET_LONGITUDE";

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
        /*         latitude = await data[0].lat;
        longitude = await data[0].lon; */
        console.log("Latitude:", data[0].lat);
        console.log("Longitude:", data[0].lon);

        dispatch(
          {
            type: SET_LONGITUDE,
            payload: data[0].lon,
          },
          { type: SET_LATITUDE, payload: data[0].lat }
        );

        let response2 = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?lat=" +
            data[0].lat +
            "&lon=" +
            data[0].lon +
            "&appid=" +
            process.env.REACT_APP_WEATHER_APP_KEY +
            "&units=metric"
        );

        if (response2) {
          let data2 = await response2.json();
          console.log("DATA2:", data2);
          let weather = data2;
          dispatch({
            type: GET_WEATHER,
            payload: weather,
          });
        }

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
