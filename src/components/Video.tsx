import { useState } from "react";


export default function Video() {
    const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

    return (
        <>
        {/* <video src="./retro-vibes.mp4" autoPlay={true} loop muted style={{ width: '100%', animation: 'fade 2s infinite' }}></video>
            <iframe width="1" height="1" style={{position:'absolute', left:'-9999px', top:'-9999px', border:'none'}}
                src="https://www.youtube.com/embed/5mKX21of0sM?si=SpS3G1sZc0ueGKMA&amp;controls=0&amp;clip=UgkxWTALJKyYx1fgZx_BUXf2rEVE_cIkGFIT&amp;clipt=EAAYoLIC" 
                title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe> */}
        
  

 
        {!started && (
            <div
            onClick={handleStart}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                cursor: "default",
            }}
            />
        )}

        <video src="./retro-vibes.mp4" autoPlay={true} loop muted style={{ width: '100%', animation: 'fade 2s infinite' }}></video>
        {started && (
            <iframe width="1" height="1" style={{position:'absolute', left:'-9999px', top:'-9999px', border:'none'}}
                    src="https://www.youtube.com/embed/5mKX21of0sM?autoplay=1&loop=1&playlist=5mKX21of0sM" 
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
        )}
    </>
  );
}