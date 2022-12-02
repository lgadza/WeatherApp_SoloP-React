import { Container, Form, Navbar, Row, Col } from "react-bootstrap/";
import { useState } from "react";
import { useDispatch } from "react-redux";
import SearchCity from "./SearchCity";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [query, setQuery] = useState("");

  const [cityInfo, setCityInfo] = useState(null);
  const dispatch = useDispatch();

  const baseEndpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=dec2de007a481ae02cb877724ec8a8ac`;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint);
      if (response.ok) {
        const data = await response.json();

        setCityInfo(data[0]);
        console.log(data[0].lat);

        dispatch({
          type: "GET-CITY-INFO",
          payload: data[0],
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">WeatherFocast</Navbar.Brand>

          <Form className="d-flex justify-content-end" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              onChange={handleChange}
              placeholder="Search City Name"
              className="me-2 searchWeather ml-5  "
              aria-label="Search"
            />
          </Form>
        </Container>
      </Navbar>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link to={"/weather-maps"}>Weather Maps</Link>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>{cityInfo && <SearchCity />}</Col>
        </Row>
      </Container>
    </>
  );
};
export default NavigationBar;
