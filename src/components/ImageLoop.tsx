import { useState, useEffect } from "react";

const imageLoop = [
  "/download1.gif",
  "/download2.gif",
  "/download3.gif",
  "/download4.gif",
  "/download5.gif",
  "/download6.gif",
  "/download7.gif",
  "/download8.gif",
  "/download9.gif",
  "/download10.gif",
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
    <div style={{ width: "300px", height: "200px" }}>
      <img
        src={imageLoop[currentIndex]}
        alt="loop gif"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}