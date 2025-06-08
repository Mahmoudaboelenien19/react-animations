import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CounterProps {
  to: number;
  duration?: number;
  direction?: "up" | "down";
  format?: (value: number) => string;
}

export const CounterAnimation = ({
  to,
  duration = 400,
  direction = "up",
  format = (value) => value.toString(),
}: CounterProps) => {
  const [count, setCount] = useState(direction === "up" ? 0 : to);
  const [prevCount, setPrevCount] = useState(count);

  useEffect(() => {
    let start = direction === "up" ? 0 : to;
    const end = to;
    if (start === end) return;

    const incrementTime = Math.max(20, duration / Math.abs(end - start));
    let timer = setInterval(() => {
      setPrevCount(count);
      setCount((prev) => {
        const next = direction === "up" ? prev + 1 : prev - 1;
        if (
          (direction === "up" && next >= end) ||
          (direction === "down" && next <= end)
        ) {
          clearInterval(timer);
          return end;
        }
        return next;
      });
    }, incrementTime);

    return () => clearInterval(timer);
  }, [to, direction, duration]);

  // Determine animation direction based on count change
  const animationDirection = count > prevCount ? "up" : "down";

  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={count}
        initial={{
          y: animationDirection === "up" ? 20 : -20,
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        exit={{
          y: animationDirection === "up" ? -20 : 20,
          opacity: 0,
          scale: 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          duration: 0.2,
        }}
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
        }}
      >
        {format(count)}
      </motion.span>
    </AnimatePresence>
  );
};
