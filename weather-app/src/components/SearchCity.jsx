import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import WeatherDetails from "./WeatherDetails";

const SearchCity = ({ info, Lat, Lon }) => {
  console.log(Lat);
  return (
    <Container className="justify-content-center">
      <Row
        className="mx-0 mt-3 p-3  text-center d-flex justify-content-center "
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col md={4} className="  text-center">
          <Link to={`/${info.name}`}>
            <h2>{info.name}</h2>
          </Link>
          <h5>{info.state}</h5>
        </Col>
      </Row>
      <Row
        className="mx-0 mt-3 p-3  text-center d-flex justify-content-center "
        // style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        {/* <WeatherDetails cityInfo={info} lat={Lat} lon={Lon} /> */}
      </Row>
    </Container>
  );
};
export default SearchCity;
