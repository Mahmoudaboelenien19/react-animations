import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inputVariants = {
  focus: {
    scale: 1.08,
    boxShadow: "0 0 0 4px #646cff88",
    background: "#23243a",
  },
  rest: { scale: 1, boxShadow: "0 0 0 0px #646cff00", background: "#2e2f4a" },
};

const buttonVariants = {
  hover: {
    scale: 1.08,
    backgroundColor: "#646cff",
    color: "#fff",
    boxShadow: "0 2px 16px #646cff55",
  },
  tap: { scale: 0.95 },
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 10 },
  },
};

const formVariants = {
  initial: { opacity: 0, y: 80, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 12 },
  },
};

const labelVariants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } },
};

const Login = () => {
  const [focus, setFocus] = useState({ user: false, pass: false });
  const [form, setForm] = useState({ user: "", pass: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at 60% 40%, #646cff33 0%, #23243a 100%)",
        overflow: "hidden",
      }}
    >
      {/* Animated background shape */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.12, rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #646cff 0%, #ff4757 100%)",
          top: "10%",
          left: "10%",
          zIndex: 0,
        }}
      />
      <motion.form
        variants={formVariants}
        initial="initial"
        animate="animate"
        style={{
          background: "#23243a",
          padding: "2.5rem 2rem",
          borderRadius: 24,
          boxShadow: "0 8px 48px #23243a88",
          minWidth: 340,
          display: "flex",
          flexDirection: "column",
          gap: 28,
          zIndex: 1,
          position: "relative",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 1800);
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, type: "spring" }}
          style={{
            color: "#646cff",
            textAlign: "center",
            marginBottom: 8,
            letterSpacing: 2,
          }}
        >
          Welcome Back
        </motion.h2>
        <motion.label
          htmlFor="user"
          variants={labelVariants}
          initial="initial"
          animate="animate"
          style={{ color: "#fff", fontWeight: 500, marginBottom: 2 }}
        >
          Username
        </motion.label>
        <motion.input
          id="user"
          type="text"
          placeholder="Username"
          value={form.user}
          onFocus={() => setFocus((f) => ({ ...f, user: true }))}
          onBlur={() => setFocus((f) => ({ ...f, user: false }))}
          onChange={(e) => setForm((f) => ({ ...f, user: e.target.value }))}
          variants={inputVariants}
          animate={focus.user ? "focus" : "rest"}
          style={{
            padding: "1.1rem 1rem",
            borderRadius: 10,
            border: "none",
            outline: "none",
            fontSize: 20,
            background: "#2e2f4a",
            color: "#fff",
            marginBottom: 8,
            transition: "background 0.2s",
          }}
        />
        <motion.label
          htmlFor="pass"
          variants={labelVariants}
          initial="initial"
          animate="animate"
          style={{ color: "#fff", fontWeight: 500, marginBottom: 2 }}
        >
          Password
        </motion.label>
        <motion.input
          id="pass"
          type="password"
          placeholder="Password"
          value={form.pass}
          onFocus={() => setFocus((f) => ({ ...f, pass: true }))}
          onBlur={() => setFocus((f) => ({ ...f, pass: false }))}
          onChange={(e) => setForm((f) => ({ ...f, pass: e.target.value }))}
          variants={inputVariants}
          animate={focus.pass ? "focus" : "rest"}
          style={{
            padding: "1.1rem 1rem",
            borderRadius: 10,
            border: "none",
            outline: "none",
            fontSize: 20,
            background: "#2e2f4a",
            color: "#fff",
            marginBottom: 8,
            transition: "background 0.2s",
          }}
        />
        <motion.button
          type="submit"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          style={{
            padding: "1.1rem 1rem",
            borderRadius: 10,
            border: "none",
            fontSize: 20,
            fontWeight: 700,
            background: "#646cff",
            color: "#fff",
            cursor: "pointer",
            marginTop: 8,
            transition: "background 0.2s",
            boxShadow: "0 2px 16px #646cff22",
          }}
        >
          Login
        </motion.button>
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.5, type: "spring" }}
              style={{
                color: "#fff",
                background: "#646cff",
                borderRadius: 8,
                padding: "0.7rem 1.2rem",
                textAlign: "center",
                marginTop: 12,
                fontWeight: 600,
                fontSize: 18,
                letterSpacing: 1,
                boxShadow: "0 2px 12px #646cff55",
              }}
            >
              Login submitted!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </div>
  );
};

export default Login;
