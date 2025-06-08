import {
  useLocation,
  useParams,
  useViewTransitionState,
} from "react-router-dom";
import { paragraph } from "../consts/pragrapg";

const Paragraph = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const isTansitioning = useViewTransitionState(pathname);
  console.log({ isTansitioning, pathname });

  return (
    <p
      style={{
        viewTransitionName: "p-" + id,
      }}
    >
      {paragraph}
    </p>
  );
};

export default Paragraph;
