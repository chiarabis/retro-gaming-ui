import { useState, useEffect } from "react";

const imageLoop = [
  "/videoclip/download1.gif",
  "/videoclip/download2.gif",
  "/videoclip/download3.gif",
  "/videoclip/download4.gif",
  "/videoclip/download5.gif",
  "/videoclip/download6.gif",
  "/videoclip/download7.gif",
  "/videoclip/download8.gif",
  "/videoclip/download9.gif",
  "/videoclip/download10.gif",
];

export function ImageLoop() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageLoop.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div style={{ width: "300px", height: "200px" }}>
      <img
        src={imageLoop[currentIndex]}
        alt="loop gif"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
        
    </div>
      
    </>
  );
}