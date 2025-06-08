import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaRegListAlt, FaSmile } from "react-icons/fa";
import { CounterAnimation } from "../../animation/counter-up";

const tabs = [
  { label: "Home", icon: <FaHome />, content: "This is the content of Home." },
  {
    label: "List",
    icon: <FaRegListAlt />,
    content: "Here is the List tab's content.",
  },
  { label: "Smile", icon: <FaSmile />, content: "Smile tab says hello!" },
];

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ width: 400, margin: "2rem auto" }}>
      <div
        style={{
          display: "flex",
          position: "relative",
          borderBottom: "2px solid #eee",
        }}
      >
        {tabs.map((tab, idx) => (
          <motion.button
            initial={{ width: 60 }}
            animate={{ width: "auto" }}
            key={tab.label}
            onClick={() => setActiveTab(idx)}
            style={{
              // padding: "1rem 1.5rem",
              flex: 1,
              padding: "1rem 0 ",
              background: "none",
              border: "none",
              fontWeight: activeTab === idx ? 700 : 500,
              color: activeTab === idx ? "#646cff" : "#888",
              cursor: "pointer",
              position: "relative",
              outline: "none",
              fontSize: "1.1rem",
              display: "flex",
              flexDirection: "row", // <-- row for icon and text side by side
              alignItems: "center",
              justifyContent: "center",
              minHeight: 56,
              gap: 8, // <-- space between icon and text
            }}
          >
            <motion.span
              key={`badge-${idx}`}
              initial={{ scale: 0, opacity: 0, y: -10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              style={{
                background: "#ff4757",
                color: "#fff",
                borderRadius: "50%",
                fontSize: 12,
                minWidth: 18,
                height: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 5px",
                fontWeight: 700,
                boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
                position: "absolute",
                right: 0,
                top: 0,
                pointerEvents: "auto",
              }}
            >
              <CounterAnimation to={idx + 2} />
            </motion.span>

            <span style={{ fontSize: 22 }}>{tab.icon}</span>
            <AnimatePresence initial={false}>
              {activeTab === idx && (
                <motion.span
                  key="text"
                  initial={{ opacity: 0, x: 10, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: "auto" }}
                  exit={{ opacity: 0, x: -10, width: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "block",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {tab.label}
                </motion.span>
              )}
            </AnimatePresence>
            {activeTab === idx && (
              <motion.div
                layoutId="tab-indicator"
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: -2,
                  height: 3,
                  background: "#646cff",
                  borderRadius: 2,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
      <div style={{ minHeight: 80, padding: "2rem 1rem" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {tabs[activeTab].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabsComponent;
