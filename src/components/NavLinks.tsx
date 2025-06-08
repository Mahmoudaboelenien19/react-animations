import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FadeElement from "../animation/Fade";
import { FaSmile } from "react-icons/fa";

const linkVariant = {
  start: { x: 15, opacity: 0 },
  end: { x: 0, opacity: [0, 0.2, 1] },
  exit: (i: number) => ({
    x: 15,
    opacity: [1, 0],
    transition: {
      duration: 0.17,
      opacity: { delay: i * 0.1 },
    },
  }),
};

interface Props {
  visible: boolean;
  setShowAside?: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavLinks = ({ setShowAside, visible }: Props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [active, setactive] = useState("");
  const linkFn = (to: string) => {
    if (to === "/") {
    }
    if (to != "/dashboard") {
      setactive(to);
      setTimeout(() => {
        navigate(to);
      }, 150);
    } else {
      navigate("/dashboard");
    }
    if (setShowAside) {
      setShowAside(false);
    }
  };

  const isMobile = false;
  const linksArr = [
    {
      to: "test",
      link: "test0",
      Icon: <FaSmile color="white" />,
    },
    {
      to: "test 2",
      link: "test",
      Icon: <FaSmile color="white" />,
    },
    {
      to: "test",
      link: "test",
      Icon: <FaSmile color="white" />,
    },
    {
      to: "test 2",
      link: "test",
      Icon: <FaSmile color="white" />,
    },
    {
      to: "test",
      link: "test",
      Icon: <FaSmile color="white" />,
    },
    {
      to: "test 2",
      link: "test",
      Icon: <FaSmile color="white" />,
    },
    {
      to: "test",
      link: "test",
      Icon: <FaSmile color="white" />,
    },
    {
      to: "test 2",
      link: "test",
      Icon: <FaSmile color="white" />,
    },
    {
      to: "test",
      link: "test",
      Icon: <FaSmile color="white" />,
    },
    {
      to: "test 2",
      link: "test",
      Icon: <FaSmile color="white" />,
    },
    {
      to: "test 2",
      link: "test",
      Icon: <FaSmile color="white" />,
    },
    {
      to: "test",
      link: "test",
      Icon: <FaSmile color="white" />,
    },
    {
      to: "test 2",
      link: "test",
      Icon: <FaSmile color="white" />,
    },
    {
      to: "test",
      link: "test",
      Icon: <FaSmile color="white" />,
    },
    {
      to: "uu",
      link: "uu",

      Icon: <FaSmile color="white" />,
    },
  ];
  useEffect(() => {
    setactive(pathname);
  }, [pathname]);
  const initialRender = useRef(true);
  return (
    <ul className="links center">
      {linksArr.map(({ to, link, Icon }, i) => {
        return (
          <LayoutGroup key={i}>
            <motion.li
              layout
              transition={{
                duration: isMobile ? 0.1 : 0,
                delay: i * 0.05,
              }}
              custom={i}
              className="center relative link"
              variants={isMobile ? linkVariant : {}}
              key={link + "link"}
              onClick={() => linkFn(to)}
            >
              <FadeElement
                delay={visible ? 0.15 + i * 0.05 : 0}
                style={{ display: "flex", gap: 8 }}
              >
                {Icon}
                {link}
              </FadeElement>

              {active === to && !isMobile && (
                <motion.div
                  transition={{
                    duration: 0.15,
                  }}
                  initial={{ background: "rgba(0,0,0,0)" }}
                  animate={{
                    background: "rgb(255,255,255)",
                    transition: {
                      duration: initialRender.current ? 0.4 : 0,
                      ease: [0.76, 0, 0.24, 1],
                    },
                  }}
                  layoutId="active-link"
                  className="active-link"
                  onAnimationComplete={() => (initialRender.current = false)}
                />
              )}
            </motion.li>
          </LayoutGroup>
        );
      })}
    </ul>
  );
};

export default NavLinks;
