import { useParams, useViewTransitionState } from "react-router-dom";
import Paragraph from "../../components/Paragraph";

const ViewTransition = () => {
  const { id } = useParams();
  const href = `/transition/` + id;
  const isTransitioning = useViewTransitionState(href);
  console.log({ isTransitioning });

  return <Paragraph />;
};

export default ViewTransition;
