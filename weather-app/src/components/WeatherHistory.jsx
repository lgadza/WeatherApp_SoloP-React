import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const WeatherHistory = () => {
  const cityInfo = useSelector((state) => state.cityInfo.content);

  console.log(cityInfo[cityInfo.length - 1].lat);
  const [historyTemp, setHistoryTemp] = useState([]);
  const [temp, setTemp] = useState(null);
  //   const endPoint = `api.openweathermap.org/data/2.5/forecast?lat=${
  //     cityInfo[cityInfo.length - 1].lat
  //   }&lon=${
  //     cityInfo[cityInfo.length - 1].lon
  //   }&appid=dec2de007a481ae02cb877724ec8a8ac`;
  const endPoint = `api.openweathermap.org/data/2.5/weather?q=London&appid=dec2de007a481ae02cb877724ec8a8ac`;

  const getHistoryTemp = async () => {
    try {
      const response = await fetch(endPoint);
      if (response.ok) {
        const data = await response.json();

        console.log(data);
        setHistoryTemp();
        setTemp();
      }
    } catch (error) {
      console.log("Error in fetching data");
      //   alert("Error in fetching data");
    }
  };
  useEffect(() => {
    getHistoryTemp();
  }, [cityInfo]);
  return (
    <Container>
      <Row>
        <Col>{temp && <h1>madi</h1>}</Col>
      </Row>
    </Container>
  );
};
export default WeatherHistory;
