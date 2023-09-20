import React, { useEffect, useRef, useState } from "react";
import "./AnimatedText.css";

const AnimatedText = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(textRef.current);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust this threshold as needed
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={textRef}
      className={`animated-text ${isVisible ? "visible" : ""}`}
    >
      <h5 className='text-start p-5' >{text}</h5>
    </div>
  );
};

export default AnimatedText;
