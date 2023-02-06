import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../Assets/images/dacaffe.png";
import projImg2 from "../Assets/images/Craft.png";
import projImg3 from "../Assets/images/Healthtoo.png";
import projImg4 from "../Assets/images/Travel Agency.png";
import projImg5 from "../Assets/images/Meubles  furniture.png";
import projImg6 from "../Assets/images/Priceline.png";
import projImg7 from "../Assets/images/Watches.png";
import projImg8 from "../Assets/images/todo.jpeg";
import projImg9 from "../Assets/images/WhatsApp.png";

const Projects = () => {
  const projects = [
    {
      title: "Simple-DaCoffee",
      description: "A simple website using HTML & CSS",
      imgUrl: projImg1,
      url: "https://asmaa-elfatayry.github.io/Simple-DaCoffee/port.html",
    },
    {
      title: "Craft",
      description:
        "This project went through three stages, making the wireframe, then converting it to Psd file, then programming it",
      imgUrl: projImg2,
      url: "https://asmaa-elfatayry.github.io/wireframe/index.html",
    },
    {
      title: "Healthtoo-Project",
      description: "A Simple Health food site using Bootstrap",
      imgUrl: projImg3,
      url: "https://asmaa-elfatayry.github.io/Healthtoo-Project/index.html",
    },
    {
      title: "Travel-Agency",
      description: "Travel-Agency Website using HTML & CSS & Javascript",
      imgUrl: projImg4,
      url: "https://asmaa-elfatayry.github.io/Travel-Agency/index.html",
    },
    {
      title: "furniture-site",
      description:
        "furniture-site Website using HTML & CSS & Javascript & bootstrap",
      imgUrl: projImg5,
      url: "https://asmaa-elfatayry.github.io/furniture-site/index.html",
    },
    {
      title: "Priceline-Project",
      description:
        "Priceline A site consisting of more than one page that responds to all screens",
      imgUrl: projImg6,
      url: "https://asmaa-elfatayry.github.io/Clint-projrct-Priceline/index.html",
    },
    {
      title: "Watches",
      description: "Commercial website for watches using Bootstrap",
      imgUrl: projImg7,
      url: "https://asmaa-elfatayry.github.io/Watches-Bootstrap/index.html",
    },

    {
      title: "todo-app",
      description: "This is a challenge from frontend mentor website",
      imgUrl: projImg8,
      url: "https://asmaa-elfatayry.github.io/Frontend-Mentor-Challenges/intermediate/todo-app-main/",
    },
    {
      title: "Simulated-WhatsApp",
      description:
        "I have tried to do a simulation of some of the pages of the WhatsApp website using React.js",
      imgUrl: projImg9,
      url: "https://github.com/asmaa-elfatayry/Simulated-WhatsApp",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2 className="mb-5">Projcts</h2>

            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
          <Col xs={12}>
            <a
              className="frontend-mentor"
              href="https://www.frontendmentor.io/profile/asmaa-elfatayry"
              target={"_blank"}
            >
              See my Challenge on Frontend Mentor
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Projects;
