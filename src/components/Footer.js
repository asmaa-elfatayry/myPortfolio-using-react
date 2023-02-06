import { Container, Row, Col } from "react-bootstrap";
import linked from "../Assets/images/linlidin.svg";
import github from "../Assets/images/github.svg";

const Footer = () => {
  return (
    <footer className="footer" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h3>
              <span>My</span>Portfolio
            </h3>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/asmaa-elfatayry/"
                target="_blank"
              >
                <img src={linked} alt="icon" />
              </a>
              <a href="https://github.com/asmaa-elfatayry" target="_blank">
                <img src={github} alt="icon" />
              </a>
            </div>
            <p>
              Connect me{" "}
              <a href="https://mail.google.com/">asmaa.elfatayry@gmail.com</a>{" "}
            </p>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
