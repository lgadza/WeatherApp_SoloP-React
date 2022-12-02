import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import WeatherDetails from "./WeatherDetails";
import { useSelector, useDispatch } from "react-redux";

const SearchCity = () => {
  const cityInfo = useSelector((state) => state.cityInfo.content);
  console.log(cityInfo);
  const dispatch = useDispatch();
  return (
    <Container className="justify-content-center">
      <Row
        className="mx-0 mt-3 p-3  text-center d-flex justify-content-center "
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col md={4} className="  text-center">
          <Link to={`/${cityInfo[cityInfo.length - 1].name}`}>
            <h2>{cityInfo[cityInfo.length - 1].name}</h2>
          </Link>
          <h5>{cityInfo[cityInfo.length - 1].state}</h5>
        </Col>
      </Row>
      <Row className="mx-0 mt-3 p-3  text-center d-flex justify-content-center ">
        <WeatherDetails />
      </Row>
    </Container>
  );
};
export default SearchCity;
