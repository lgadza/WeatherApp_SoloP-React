import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import WeatherMaps from "./WeatherMaps";
import { WiDayCloudyHigh } from "react-icons/wi";
import WeatherHistory from "./WeatherHistory";

const WeatherDetails = () => {
  const cityInfo = useSelector((state) => state.cityInfo.content);
  console.log(cityInfo[0].lat);
  const [info, setInfo] = useState([]);
  // const [tempInfo, setTempInfo] = useState([]);
  const [infoo, setInfoo] = useState(null);
  console.log(info);

  // const baseEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${
  //   cityInfo[cityInfo.length - 1].lat
  // }&lon=${
  //   cityInfo[cityInfo.length - 1].lon
  // }&appid=dec2de007a481ae02cb877724ec8a8ac`;
  const baseEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${
    cityInfo[cityInfo.length - 1].lat
  }&lon=${
    cityInfo[cityInfo.length - 1].lon
  }&appid=dec2de007a481ae02cb877724ec8a8ac&units=metric`;

  useEffect(() => {
    getCity();
  }, [cityInfo]);

  const getCity = async () => {
    try {
      const response = await fetch(baseEndpoint);
      if (response.ok) {
        const data = await response.json();
        setInfo(data);
        setInfoo(data);
        console.log(info.weather);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Card className="bg-dark text-white align-items-center">
            <div className="image">
              <div className="cardimage"></div>
              <Card.Img
                src="https://th.bing.com/th/id/R.069cf185a7daba4caceb8e10e84da46b?rik=H6UDZfO%2b56isFg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fDownload-Free-Weather-Background.jpg&ehk=JNt8y9ofXKAnT7OCpITBYQSnexCUjI9Hmcb24SZmQrs%3d&risl=&pid=ImgRaw&r=0"
                alt="Card image"
              />
            </div>
            <Card.ImgOverlay>
              <Card.Title>
                {cityInfo[cityInfo.length - 1].name},{"  "}{" "}
                {cityInfo[cityInfo.length - 1].country},{"  "}
                {cityInfo[cityInfo.length - 1].state}
              </Card.Title>
              {infoo && (
                <>
                  <Card.Text className="mb-5">{info.weather[0].main}</Card.Text>
                  <Card.Text className="mb-5">
                    <div>
                      {new Date().getFullYear() +
                        "-" +
                        (new Date().getMonth() + 1) +
                        "-" +
                        new Date().getDate()}
                    </div>
                  </Card.Text>
                  <div className="d-flex mt-5 align-items-center">
                    <Col>
                      <div className="d-flex">
                        <div>
                          <WiDayCloudyHigh size={80} />
                        </div>
                        <div className="mx-4">
                          Temp: {"  "}
                          {info.main.temp} &deg;C
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        {" "}
                        Wind: {"  "}
                        {info.wind.speed} {"  "}KMPH
                      </div>
                      <div>
                        Visibility:{"  "} {info.visibility}
                      </div>
                      <div>
                        Humidity:{"  "} {info.main.humidity}%
                      </div>
                    </Col>
                  </div>
                  <div className="mt-5">{info.weather[0].description}</div>
                </>
              )}
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={4}>
          <WeatherMaps />
          {infoo && <WeatherHistory />}
        </Col>
      </Row>
    </Container>
  );
};
export default WeatherDetails;
