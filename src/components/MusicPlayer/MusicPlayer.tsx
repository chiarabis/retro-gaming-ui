import { useState, useRef, useEffect } from "react";


export default function MusicPlayer() {

    type AudioProps = {
        id: number;
        title: string;
        artist: string;
        url: string;
        cover?: string;
    };


    const clientId = import.meta.env.VITE_AUDIUS_CLIENT_ID;
    //const handle = import.meta.env.VITE_HANDLE;
    const userId = import.meta.env.VITE_USER_ID;


    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [tracks, setTracks] = useState<AudioProps[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const loadPlaylist = async () => {
            try {
                //ottenere playlist audius
                const playlistsRes = await fetch(
                    `https://discoveryprovider.audius.co/v1/users/${userId}/playlists`
                );
                const playlistsData = await playlistsRes.json();

                if (!playlistsData.data || playlistsData.data.length === 0) {
                    console.warn("Nessuna playlist pubblica trovata");
                    return;
                }

                const playlistId = playlistsData.data[0].id;

                // ottenere tracks della playlist (playlistId dopo aver fetchato playlist con userId)
                const tracksRes = await fetch(
                    `https://api.audius.co/v1/playlists/${playlistId}/tracks`
                );
                const tracksData = await tracksRes.json();

                if (!tracksData.data || tracksData.data.length === 0) {
                    console.warn("Playlist vuota");
                    return;
                }

                // mappare dati delle tracks
                const formatted = tracksData.data.map((track: any) => ({
                    id: track.id,
                    title: track.title,
                    artist: track.user.name,
                    url: `https://discoveryprovider.audius.co/v1/tracks/${track.id}/stream?client_id=${clientId}`,
                    cover: track.artwork?.['1000x1000'],
                }));
                setTracks(formatted);
            } catch (err) {
                console.error("Errore caricando playlist:", err);
            }};

            loadPlaylist();
    }, []);


    //toggles play/pause
    const handlePlayPause = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };


    // next / prev
    const handleNext = () => {
        if (tracks.length === 0) return;
        setCurrentIndex(
            (currentIndex + 1) % tracks.length
        );
        setIsPlaying(true);
    };

    const handlePrev = () => {
        if (tracks.length === 0) return;
        setCurrentIndex(
            (currentIndex - 1 + tracks.length) % tracks.length
        );
        setIsPlaying(true);
    };

    // replay
    const handleRedo = () => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = 0;
    };

    
    // aggiorna audio quando cambia track 
    useEffect(() => {
        if (!audioRef.current || !tracks[currentIndex]) return;

        const audio = audioRef.current;
        audio.load();

        const onLoadedMetadata = () => setDuration(audio.duration);
        const onTimeUpdate = () => setCurrentTime(audio.currentTime);

        audio.addEventListener("loadedmetadata", onLoadedMetadata);
        audio.addEventListener("timeupdate", onTimeUpdate);

        if (isPlaying) audio.play();

        return () => {
            audio.removeEventListener("loadedmetadata", onLoadedMetadata);
            audio.removeEventListener("timeupdate", onTimeUpdate);
        };
    }, [currentIndex, tracks]);


    // gestione barra di avanzamento
    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!audioRef.current) return;
        const seekTime = parseFloat(e.target.value);
        audioRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    // formatta tempo in mm:ss
    const formatTime = (sec: number) => {
        const minutes = Math.floor(sec / 60);
        const seconds = Math.floor(sec % 60)
        .toString()
        .padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    const currentTrack = tracks[currentIndex];

    // colorazione progressiva barra
    const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  const [tag, setTag] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  

    return (
        <>
            {/* <div style={{ width: '100%', margin: '0 auto' }}>
                <img
                    src="./image.jpg"
                    alt="image"
                    style={{ objectFit: 'cover', borderRadius: '10px', height: '280px', width: '100%'}}
                />            
            </div>

            <div style={{ display: 'flex', justifyContent: 'end', padding: '0.5rem 1rem', marginTop: '1rem', borderTop: '2px solid #0f172b' }}>
                <a href="https://audius.org/en/api" target="_blank" style={{ margin: 0, textDecoration: 'none', color: '#0f172b', cursor: 'pointer', }} className="card-link glitch-anim" data-text="Audius API">Audius API</a>
            </div> */}
            <div style={{ position: "relative", display: "inline-block" }}>
                <a href="https://audius.org/en/api" target="_blank">
                    <img
                        src="./image.jpg"
                        alt="image tracks"
                        style={{ borderRadius: "10px", width: '100%' }}
                        onMouseEnter={() => setTag(true)}
                        onMouseLeave={() => setTag(false)}
                        onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setPosition({
                            x: e.clientX - rect.left,
                            y: e.clientY - rect.top,
                        });
                        }}
                    />
                </a>

                {tag && (
                <p
                    style={{
                    position: "absolute",
                    top: position.y,
                    left: position.x,
                    right: 250 - position.x,
                    pointerEvents: "none",
                    transform: "translate(-50%, -120%)",
                    background: "#fff",
                    color: "#0f172b",
                    padding: "2px 4px",
                    fontSize: "0.85rem",
                    }}>Tracks from Audius API</p>
                )}
            </div>


            <div style={{ boxShadow: "-3px -3px 0 0 #e5e7eb, 2px 2px 0 1px #d1d4d8", padding: '0.5rem', marginTop: '1rem' }}>

                {/*tracce audius + loading icon caricamento*/}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '2.2rem' }}>
                    {currentTrack ? (

                        <>
                            <div className="title-track-container">
                                <h3 className="title-track">
                                    {currentTrack.title} - {currentTrack.artist} &nbsp;&nbsp;&nbsp;&nbsp;
                                    {currentTrack.title} - {currentTrack.artist} &nbsp;&nbsp;&nbsp;&nbsp;   
                                </h3>
                            </div>

                            <audio
                            ref={audioRef}
                            src={currentTrack.url}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onEnded={handleNext}/>
                        </>
                    ) : (
                        <img src="./cd.gif" style={{ width: '20px', height: '20px' }} />
                    )}
                </div>
                

                {/* barra di avanzamento */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: '0.5rem 0' }}>
                    <span>{formatTime(currentTime)}</span>
                    <input
                    type="range"
                    min={0}
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    style={{
                        flex: 1,
                        appearance: "none",
                        borderRadius: 50,
                        background: `linear-gradient(
                        to right,
                        #f059a7 0%,
                        #f059a7 ${progressPercent}%,
                        #e5e7eb ${progressPercent}%,
                        #e5e7eb 100%
                        )`,
                        cursor: "pointer"
                    }}
                    />
                    <span>{formatTime(duration)}</span>
                </div>


                {/*music player command buttons */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <button onClick={handlePrev} type="button" className="player-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 4h2v16H6zm12 0h-2v2h-2v3h-2v2h-2v2h2v3h2v2h2v2h2z"/></svg>
                        </button>
                        
                        <button onClick={handlePlayPause} type="button" className="player-btn">
                            {isPlaying ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 4H5v16h5zm9 0h-5v16h5z"/></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2z"/></svg>
                            )}
                        </button>
                        
                        <button onClick={handleNext} type="button" className="player-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 4h2v2h2v2h2v2h2v4h-2v2h-2v2H8v2H6zm12 0h-2v16h2z"/></svg>
                        </button>
                        
                        <button onClick={handleRedo} type="button" className="player-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 4h-2v2h2v2H6v2H4v8h2v2h6v-2H6v-8h10v2h-2v2h2v-2h2v-2h2V8h-2V6h-2z"/></svg>
                        </button>
                    </div>

                    <button type="button" className="player-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 4h-2v2h2v2H6v2H4v8h2v2h6v-2H6v-8h10v2h-2v2h2v-2h2v-2h2V8h-2V6h-2z"/></svg>
                    </button>
                </div>
            </div>
        </>
    )
}