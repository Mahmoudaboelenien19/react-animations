import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "../sidebar";

const navLinks = [
  // { to: "/", label: "Home", icon: <FaSmile /> },
  // { to: "/tabs", label: "Tabs" },
  // { to: "/loading", label: "loading" },
  // { to: "/login", label: "Login" },
  { to: "/about", label: "about" },
  { to: "/transition", label: "view transition" },
];

const Nav = () => {
  return (
    <nav
      style={{
        display: "flex",

        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        left: 0,
        height: 40,
        width: "100%",
        marginBottom: 16,
        background: "#222",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {navLinks.map((link, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.15, color: "#535bf2" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <NavLink
              to={link.to}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#646cff" : "white",
                fontWeight: isActive ? 700 : 500,
                fontSize: "1.2rem",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                background: isActive ? "rgba(100,108,255,0.1)" : "none",
                transition: "all 0.2s",
              })}
            >
              {link.label}
            </NavLink>
          </motion.div>
        ))}
      </div>

      <Sidebar />
    </nav>
  );
};

export default Nav;
