import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./components/FrontPage";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col sm={12}>
            <Link to="/">
              <h1>The ultimate weather app</h1>
            </Link>
          </Col>
          {/*       <FavoriteIndicator />
           */}{" "}
        </Row>

        <Routes>
          <Route path="/" element={<FrontPage />} />
          {/*           <Route path="/:company" element={<JobDetailsPage />} />
          <Route path="/favorites" element={<Favorites />} /> */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
