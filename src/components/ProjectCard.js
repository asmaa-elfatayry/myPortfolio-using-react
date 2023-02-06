import { Col, Nav } from "react-bootstrap";
import { Link, Router } from "react-router-dom";
import { ExternalLink } from "react-external-link";
const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <ExternalLink href={url}>See the porject</ExternalLink>
        </div>
      </div>
    </Col>
  );
};
export default ProjectCard;
