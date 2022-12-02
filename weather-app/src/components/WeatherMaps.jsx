import { Container, Form, Nav, Navbar, Row, Col } from "react-bootstrap/";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
const WeatherMaps = () => {
  const cityInfo = useSelector((state) => state.cityInfo.content);
  const [query, setQuery] = useState("");

  const [info, setInfo] = useState([]);

  console.log(info);

  const baseEndpoint = `https://tile.openweathermap.org/map/precipitation_new/1/1/1.png?appid=dec2de007a481ae02cb877724ec8a8ac`;
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint);
      if (response.ok) {
        const data = await response.json();

        console.log(data);
        setInfo(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getCity();
  // }, [cityInfo]);

  return (
    <Col>
      <h1>Weather maps</h1>
      <Form className="d-flex justify-content-end" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          onChange={handleChange}
          placeholder="Seach Map You Want To See 
          "
          className="me-2 searchWeather ml-5  "
          aria-label="Search"
        />
      </Form>
      <div>{info}</div>
    </Col>
  );
};
export default WeatherMaps;
