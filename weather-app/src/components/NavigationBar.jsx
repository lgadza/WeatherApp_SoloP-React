import { Container, Form, Nav, Navbar, Row, Col } from "react-bootstrap/";
import { useState } from "react";
import SearchCity from "./SearchCity";

const NavigationBar = () => {
  const [query, setQuery] = useState("");
  const [lat, setLat] = useState([53.127505049999996]);
  const [lon, setLon] = useState([23.147050870161664]);
  const [cityInfo, setCityInfo] = useState([]);

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
        setLat(data[0].lat);
        setLon(data[0].lon);
        setCityInfo(data[0]);
        console.log(data[0].lat);
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
          <Nav.Link href="#action1">Today</Nav.Link>
          <Nav.Link href="#action2">3 Day</Nav.Link>
          <Nav.Link href="#action2">3 Day</Nav.Link>
          <Nav.Link href="#action2">3 Day</Nav.Link>
          <Nav.Link href="#action2">3 Day</Nav.Link>
          <Nav.Link href="#action2">3 Day</Nav.Link>
          <Nav.Link href="#action2">3 Day</Nav.Link>
          <Nav.Link href="#action2">3 Day</Nav.Link>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            {cityInfo.length !== 0 ? (
              <SearchCity Lat={lat} Lon={lon} info={cityInfo} />
            ) : (
              []
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default NavigationBar;
