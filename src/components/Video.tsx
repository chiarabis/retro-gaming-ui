import { useState, useEffect, useRef } from "react";



export default function Video() {
    const [started, setStarted] = useState(false);
    const [iframe, setIframe] = useState(false);
    

const videoRef = useRef<HTMLVideoElement>(null);
    

    
    const handleStart = () => {
        setStarted(true);
        setIframe(true);
        const playBtn = document.getElementById('play-button');
        if (playBtn) {
            playBtn.style.display = 'none';
        }
        return
    };

    // timer per rimuovere l'iframe dopo 40 secondi
    useEffect(() => {
        if (iframe) {
            const timer = setTimeout(() => {
                setIframe(false);
            }, 40000);
            return () => clearTimeout(timer);
        }

    }, [iframe]);

    const handleRestart = () => {
    if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
    }
    setIframe(true);
};


    return (
        <>
            <button onClick={handleStart} style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 0,
            fontFamily: 'VT323', fontSize: '1.5rem', height: '150px' }} id="play-button">Click here
            </button>
            

            {started && (
            <>
                
                <div style={{ position: 'relative' }}>
                    <video src="./retro-vibes.mp4" autoPlay={true} muted style={{ width: '100%', animation: 'fade 2s infinite' }} ref={videoRef}></video>
                    {started && !iframe && <div style={{ position: 'absolute', top: '0', left: '0', background: '#0f172b9c', width: '100%', height: '100%' }}/>}
                </div>
                
                {iframe && 
                    <iframe width="1" height="1" style={{position:'absolute', left:'-9999px', top:'-9999px', border:'none'}}
                    src="https://www.youtube.com/embed/5mKX21of0sM?autoplay=1&loop=1&playlist=5mKX21of0sM" 
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin">
                </iframe>}
            </>
            )}

            {started && !iframe && 
            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 0,
            fontFamily: 'VT323', fontSize: '1.5rem', height: '150px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} 
            onClick={handleRestart}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill="#fff"><path d="M20 8H6v2h14zM4 10h2v8H4zm2 8h6v2H6z"/><path d="M18 6h-2v6h2zm-2-2h-2v8h2zm0 8h-2v2h2z"/></g>
                </svg>
            </button>
            }
        </>
    );
}