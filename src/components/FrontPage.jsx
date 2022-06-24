import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { getweatherAction } from "../redux/actions";

const FrontPage = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [inputQuery, setInputQuery] = useState("");
  const dispatch = useDispatch();

  let onChangeFunction = (event) => {
    setInputQuery(event.target.value);
  };

  let onSubmitFunction = (event) => {
    event.preventDefault();
    dispatch(getweatherAction(inputQuery));
  };

  return (
    <Form onSubmit={onSubmitFunction}>
      <Form.Group>
        <Form.Label>Enter a city</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a city"
          onChange={onChangeFunction}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FrontPage;
