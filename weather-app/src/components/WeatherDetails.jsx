import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const WeatherDetails = ({ lat, lon }) => {
  const [info, setInfo] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();
  const cityInfo = useSelector((state) => state.cityInfo.content);

  const baseEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dec2de007a481ae02cb877724ec8a8ac`;

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint);
      if (response.ok) {
        const data = await response.json();
        console.log(data.main.temp);
        setInfo(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //   const temp = ((info.main.temp - 32) * 5) / 9;
  return (
    <Container>
      <Row>
        <Col md={9}>
          <Card className="bg-dark text-white align-items-center">
            <Card.Img
              src="https://th.bing.com/th/id/R.069cf185a7daba4caceb8e10e84da46b?rik=H6UDZfO%2b56isFg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fDownload-Free-Weather-Background.jpg&ehk=JNt8y9ofXKAnT7OCpITBYQSnexCUjI9Hmcb24SZmQrs%3d&risl=&pid=ImgRaw&r=0"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>
                {cityInfo.name},{"  "} {cityInfo.country},{"  "}
                {cityInfo.state}
              </Card.Title>
              <Card.Text className="mb-5">{info.weather[0].main}</Card.Text>
              <div className="d-flex mt-5 align-items-center">
                <Col>
                  <div className="d-flex">
                    <div>{info.weather[0].icon}</div>
                    <div className="mx-4">
                      Temperature: {"  "}
                      {info.main.temp}
                    </div>
                    <div>{info.weather[0].description}</div>
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
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default WeatherDetails;
