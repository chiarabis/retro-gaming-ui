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
    
    <iframe width="1" height="1" style={{position:'absolute', left:'-9999px', top:'-9999px', border:'none'}}
    src="https://www.youtube.com/embed/5mKX21of0sM?si=SpS3G1sZc0ueGKMA&amp;controls=0&amp;clip=UgkxWTALJKyYx1fgZx_BUXf2rEVE_cIkGFIT&amp;clipt=EAAYoLIC" 
    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
    </iframe>
      
    </>
  );
}