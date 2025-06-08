import { Link, useNavigate } from "react-router-dom";
import Paragraph from "../../components/Paragraph";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/transition/1" viewTransition>
        go to{" "}
      </Link>
      <Paragraph />
    </>
  );
};

export default About;
