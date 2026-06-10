"use client";

import { useEffect, useRef } from "react";
import { createTimeline } from "animejs";
import { useInView } from "framer-motion";

const AnimatedText = ({
  text,
  as: Tag = "span",
  className = "",
  once = true,
  delayStart = 0, // ← new prop, ms to wait before this span starts
}) => {
  const textRef = useRef(null);

  const isInView = useInView(textRef, {
    margin: "-50px",
    once,
  });

  // Split text into letters
  useEffect(() => {
    if (!textRef.current) return;
    const el = textRef.current;
    if (el.querySelector(".letter")) return;

    const words = text.split(" ");
    const wrapped = words
      .map((word) => {
        const letters = word
          .split("")
          .map((char) => `<span class="letter">${char}</span>`)
          .join("");
        return `<span class="word">${letters}</span>`;
      })
      .join(" ");

    el.innerHTML = wrapped;
  }, [text]);

  // Animation trigger
  useEffect(() => {
    if (!textRef.current) return;
    const el = textRef.current;
    const letters = el.querySelectorAll(".letter");

    if (isInView) {
      letters.forEach((l) => {
        l.style.opacity = 0;
        l.style.transform = "translateX(40px)";
      });

      const tl = createTimeline({
        defaults: { duration: 900, easing: "outExpo" },
      });

      tl.add(letters, {
        translateX: [40, 0],
        opacity: [0, 1],
        delay: (_, i) => delayStart + i * 30, // ← offset entire span
      });
    } else {
      letters.forEach((l) => {
        l.style.opacity = 0;
        l.style.transform = "translateX(40px)";
      });
    }
  }, [isInView, delayStart]);

  return (
    <Tag ref={textRef} className={`ml12 ${className}`}>
      {text}
    </Tag>
  );
};

export default AnimatedText;
