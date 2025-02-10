import React from "react";
import Appbar from "./Appbar";
// import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
// import ione from "../assets/ione.jpg";
// import itwo from "../assets/itwo.jpg";
// import ithree from "../assets/ithree.jpg";
import inventory from "../assets/inventory.jpg";

function LP(){

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/UserDashboard")
  }
    return (
      <>
        <Appbar />
        <Container>
          {/* <Row className="justify-content-center my-5">
            <Col md={10}>
              <Carousel>
                <Carousel.Item>
                  <Image src={ione} fluid></Image>
                  <Carousel.Caption>
                    <h3>Efficient Inventory Control</h3>
                    <p>
                      Streamline your stock management process with our
                      intuitive app, ensuring optimal inventory levels at all
                      times.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={itwo} fluid></Image>
                  <Carousel.Caption>
                    <h3>Real-Time Stock Tracking</h3>
                    <p>
                      Gain complete visibility into your inventory with our
                      advanced tracking features, providing accurate stock
                      information whenever you need it.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={ithree} fluid></Image>
                  <Carousel.Caption>
                    <h3>Automated Replenishment Solutions</h3>
                    <p>
                      Simplify stock replenishment tasks with our automated
                      solutions, minimizing stockouts and maximizing efficiency
                      in your supply chain.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row> */}
          <Row className="d-flex align-items-center">
            <Col md={6}>
              <div className="my-5 display-1 fw-bold">Stock Management</div>
              <div className="h4 lead mb-5">
                Our stock management website offers intuitive dashboard,
                inventory tracking, order and vendor management, inventory
                optimization, reporting, scalability, and seamless integration
                for streamlined operations.
              </div>
              <Button variant="primary" className="p-2 fw-bold" onClick={handleNavigate}>Get Started</Button>
            </Col>
            <Col md={6}>
              <Image src={inventory} fluid className="my-5"></Image>
            </Col>
          </Row>
        </Container>
      </>
    );
}
export default LP;