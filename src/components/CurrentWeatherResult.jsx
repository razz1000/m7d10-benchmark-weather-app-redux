import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "../styles/styles.css";

let CurrentWeatherResult = () => {
  const feelsLike = useSelector(
    (state) => state.weather.weather?.main?.feels_like
  );
  const name = useSelector((state) => state.weather.weather?.name);
  const temperature = useSelector((state) => state.weather?.weather?.main.temp);
  const extraDescriptionWeather = useSelector(
    (state) => state.weather?.weather?.weather[0].description
  );
  const mainDescriptionWeather = useSelector(
    (state) => state.weather?.weather?.weather[0].main
  );
  const windSpeed = useSelector((state) => state.weather?.weather?.wind.speed);
  const windDegree = useSelector((state) => state.weather?.weather?.wind.deg);
  const time = useSelector((state) => state.weather?.weather?.wind.speed);
  const tempMin = useSelector((state) => state.weather?.weather?.main.temp_min);
  const tempMax = useSelector((state) => state.weather?.weather?.main.temp_max);
  const sunrise = useSelector((state) => state.weather?.weather?.sys.sunrise);
  const sunset = useSelector((state) => state.weather?.weather?.sys.sunset);
  const visibility =
    useSelector((state) => state.weather?.weather?.visibility) / 1000;
  const humidity = useSelector(
    (state) => state.weather?.weather?.main.humidity
  );
  const pressure = useSelector(
    (state) => state.weather?.weather?.main.pressure
  );

  const sunriseMilliseconds = sunrise * 1000;
  const sunsetMilliseconds = sunset * 1000;
  const dateObjectSunrise = new Date(sunriseMilliseconds);
  const dateObjectSunset = new Date(sunsetMilliseconds);

  const humanDateFormatSunrise = dateObjectSunrise.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const humanDateFormatSunset = dateObjectSunset.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const directions = [
    "North",
    "Northeast",
    "East",
    "Southeast",
    "South",
    "Southwest",
    "West",
    "Northwest",
  ];

  const degrees360 = (windDegree * 8) / 360;
  const degrees360Rounded = Math.round(degrees360, 0);
  const degrees360RoundedWithingEight = (degrees360Rounded + 8) % 8;
  console.log(directions[degrees360RoundedWithingEight]);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body className="cardbody">
              <div className="top-part-body">
                <p>📌 {name} </p>
                <p>Feels like: {Math.round(feelsLike)}°</p>
              </div>
              <Card.Title style={{ textAlign: "center" }}>
                <h2 style={{ fontSize: "4em" }}>{Math.round(temperature)}°</h2>
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                {mainDescriptionWeather}, {extraDescriptionWeather}
              </Card.Text>
              <div className={"sunrisesunset"}>
                <p>
                  <i class="bi bi-sunrise"></i> {humanDateFormatSunrise} AM
                </p>
                <p>
                  {" "}
                  <i class="bi bi-sunset"></i> {humanDateFormatSunset} PM
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body className="cardbody">
              <div className="top-part-body">
                <p>💨 Wind </p>
                <p>Visibility: {visibility} km </p>
              </div>
              <Card.Title style={{ textAlign: "center" }}>
                <h2 style={{ fontSize: "4em" }}>
                  {Math.round(windSpeed)} km/h
                </h2>
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Wind direction: {directions[degrees360RoundedWithingEight]}
              </Card.Text>
              <div className={"sunrisesunset"}>
                <p>Preassure: {pressure} hpa </p>
                <p>Humidity: {humidity} %rh</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeatherResult;
