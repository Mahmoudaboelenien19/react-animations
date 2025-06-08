import { useNavigate } from "react-router-dom";

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
      <p
        style={{
          viewTransitionName: "test-view-transition",
          position: "fixed",
          top: 500,
          right: 500,
        }}
      >
        test view transition
      </p>
      <button
        onClick={() => {
          navigate("/transition", { viewTransition: true });
        }}
      >
        go to{" "}
      </button>
    </>
  );
};

export default About;
