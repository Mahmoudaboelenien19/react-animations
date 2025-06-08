import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useState } from "react";
import NavLinks from "./NavLinks";
import MenuTogglar from "./menuToggle/MenuTogglar";

export const mobileAside = {
  start: {
    width: 300,
    x: 300,
    clipPath: "ellipse(50% 50% at right)",
  },
  end: {
    x: 0,
    clipPath: "ellipse(160% 160% at right)",
    transition: {
      clipPath: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },

      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
  exit: {
    x: 300,
    clipPath: "ellipse(50% 50% at right)",

    transition: {
      clipPath: {
        delay: 0.5,
        duration: 0.7,
      },
      delay: 0.5,
      when: "afterChildren",
      ease: [0.76, 0, 0.24, 1],
      staggerChildren: 0.05,
      //   staggerDirection: -1,
      duration: 1,
    },
  },
};

const Sidebar = () => {
  const [showAside, setShowAside] = useState(false);

  return (
    <Fragment>
      <div className="nav-menu">
        <MenuTogglar
          bool={showAside}
          showMsg="show nav bar"
          hideMsg="close nav bar"
          setter={setShowAside}
        />
      </div>
      <AnimatePresence>
        {showAside && (
          <motion.aside
            key={"aside-links"}
            variants={mobileAside}
            initial="start"
            animate="end"
            exit="exit"
            className={"aside-links"}
          >
            <NavLinks setShowAside={setShowAside} visible={showAside} />
          </motion.aside>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default Sidebar;
