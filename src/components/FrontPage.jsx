import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { getweatherAction } from "../redux/actions";
import CurrentWeatherResult from "./CurrentWeatherResult";
import Loading from "./SpinnerAndError/Loading";
import Error from "./SpinnerAndError/Error";

const FrontPage = () => {
  const [inputQuery, setInputQuery] = useState("");
  const isWeatherLoading = useSelector((state) => state.weather.isLoading);
  const errorInFetching = useSelector((state) => state.weather.isError);

  const weatherData = useSelector((state) => state.weather.weatherData);

  //This is used to determine if the WeatherDataObject is empty or not
  const isWeatherDataObjectEmpty = Object.keys(weatherData).length === 0;

  const dispatch = useDispatch();

  let onChangeFunction = (event) => {
    setInputQuery(event.target.value);
  };

  let onSubmitFunction = (event) => {
    event.preventDefault();
    dispatch(getweatherAction(inputQuery));
  };

  return (
    <div>
      <Form onSubmit={onSubmitFunction}>
        <Form.Group>
          {isWeatherDataObjectEmpty === true && (
            <Form.Label>Enter a city</Form.Label>
          )}
          <Form.Control
            className="mb-4"
            type="text"
            placeholder="Enter a city"
            disabled={isWeatherDataObjectEmpty !== true}
            onChange={onChangeFunction}
          />
        </Form.Group>
        {isWeatherDataObjectEmpty === true ? (
          <Button className="mb-4" variant="success" type="submit" size="lg">
            Search
          </Button>
        ) : (
          <Button variant="danger" type="submit" size="lg">
            Reset
          </Button>
        )}
      </Form>
      {isWeatherLoading ? (
        <Loading />
      ) : errorInFetching ? (
        <Error />
      ) : (
        <CurrentWeatherResult />
      )}
    </div>
  );
};

export default FrontPage;
