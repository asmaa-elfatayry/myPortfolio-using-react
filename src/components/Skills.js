import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from "react-bootstrap";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>

              <div className="skill-box">
                <div className="name"> HTML</div>
                <div className="progress">
                  <span style={{ width: "96%" }}></span>
                </div>
              </div>

              <div className="skill-box">
                <div className="name">CSS</div>
                <div className="progress">
                  <span style={{ width: "88%" }}></span>
                </div>
              </div>

              <div className="skill-box">
                <div className="name">JavaScript</div>
                <div className="progress">
                  <span style={{ width: "60%" }}></span>
                </div>
              </div>

              <div className="skill-box">
                <div className="name">SASS</div>
                <div className="progress">
                  <span style={{ width: "68%" }}></span>
                </div>
              </div>

              <div className="skill-box">
                <div className="name">Bootstrab</div>
                <div className="progress">
                  <span style={{ width: "75%" }}></span>
                </div>
              </div>

              <div className="skill-box">
                <div className="name">Jquery</div>
                <div className="progress">
                  <span style={{ width: "55%" }}></span>
                </div>
              </div>

              <div className="skill-box">
                <div className="name"> Tailwind</div>
                <div className="progress">
                  <span style={{ width: "58%" }}></span>
                </div>
              </div>

              <div className="skill-box">
                <div className="name"> React</div>
                <div className="progress">
                  <span style={{ width: "55%" }}></span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
