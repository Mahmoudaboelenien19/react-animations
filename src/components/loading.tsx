import { motion } from "framer-motion";

const dotVariants = {
  initial: { y: 0, scale: 1 },
  animate: (i: number) => ({
    y: [0, -18, 0],
    scale: [1, 1.3, 1],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 1.2,
        delay: i * 0.18,
      },
      scale: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 1.2,
        delay: i * 0.18,
      },
    },
  }),
};

const colors = ["#646cff", "#ff4757", "#ffa502"];

const Loading = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "linear-gradient(135deg, #23243a 0%, #3a2c4d 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      flexDirection: "column",
      gap: 24,
    }}
  >
    <div style={{ display: "flex", gap: 18 }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          custom={i}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: colors[i],
            boxShadow: `0 2px 12px 0 ${colors[i]}55`,
          }}
        />
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      style={{ color: "#fff", fontWeight: 600, fontSize: 22, letterSpacing: 2 }}
    >
      Loading...
    </motion.div>
  </div>
);

export default Loading;
